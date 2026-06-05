import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const idHal = 'andres-echavarria';
const idRef = '291243665';
const query = `authIdHal_s:${idHal} OR authIdRef_s:${idRef}`;
const halUrl = `https://api.archives-ouvertes.fr/search/?q=${encodeURIComponent(query)}&wt=json&fl=title_s,producedDateY_i,docType_s,uri_s,citationFull_s,journalTitle_s,doi_Id_s&sort=producedDateY_i desc&rows=100`;

async function fetchPublications() {
  console.log('🔄 Fetching publications from HAL...');
  try {
    const response = await fetch(halUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.response && data.response.docs) {
      const docs = data.response.docs.map(doc => ({
        title: doc.title_s ? doc.title_s[0] : 'Sin título',
        year: doc.producedDateY_i || 'N/A',
        type: doc.docType_s || 'UNKNOWN',
        url: doc.uri_s || '#',
        citation: doc.citationFull_s || '',
        journal: doc.journalTitle_s || '',
        doi: doc.doi_Id_s ? doc.doi_Id_s[0] : null
      }));

      const dataDir = path.join(__dirname, '../src/data');
      const filePath = path.join(dataDir, 'publications.json');
      
      // Load existing local publications if they exist to merge metadata
      let localPubs = [];
      if (fs.existsSync(filePath)) {
        try {
          localPubs = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
          console.error('⚠️ Error reading local publications.json:', e);
        }
      }

      // Track which local publications have been merged
      const matchedLocalUrls = new Set();
      const matchedLocalTitles = new Set();

      const mergedDocs = docs.map(fetchedDoc => {
        // Find match by URL
        let match = localPubs.find(p => p.url && fetchedDoc.url && p.url.trim().toLowerCase() === fetchedDoc.url.trim().toLowerCase());
        
        // Find match by title if URL did not match
        if (!match) {
          match = localPubs.find(p => p.title && fetchedDoc.title && p.title.trim().toLowerCase() === fetchedDoc.title.trim().toLowerCase());
        }

        if (match) {
          if (match.url) matchedLocalUrls.add(match.url.trim().toLowerCase());
          if (match.title) matchedLocalTitles.add(match.title.trim().toLowerCase());

          const merged = { ...fetchedDoc };
          // Merge custom/manually-added properties
          if (match.downloadUrl) merged.downloadUrl = match.downloadUrl;
          if (match.publisherUrl) merged.publisherUrl = match.publisherUrl;
          
          // Preserve custom modifications to title, citation or year if they were changed locally
          if (match.citation) merged.citation = match.citation;
          if (match.title) merged.title = match.title;
          
          return merged;
        }

        return fetchedDoc;
      });

      // Filter local publications that were NOT in the fetched HAL list (e.g., manual entries like Vervuert book chapter)
      const manualDocs = localPubs.filter(p => {
        const urlKey = p.url ? p.url.trim().toLowerCase() : '';
        const titleKey = p.title ? p.title.trim().toLowerCase() : '';
        return !matchedLocalUrls.has(urlKey) && !matchedLocalTitles.has(titleKey);
      });

      const finalDocs = [...mergedDocs, ...manualDocs];

      // Sort by year descending (newest first)
      finalDocs.sort((a, b) => {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearB - yearA;
      });

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(
        filePath,
        JSON.stringify(finalDocs, null, 2)
      );

      console.log(`✅ Successfully merged and saved. Total: ${finalDocs.length} publications (HAL: ${docs.length}, Manual: ${manualDocs.length}).`);
    } else {
      console.warn('⚠️ No publications found in HAL response format.');
    }
  } catch (error) {
    console.error('❌ Error fetching from HAL:', error);
    
    // Create an empty fallback file if it doesn't exist so the build won't fail
    const dataDir = path.join(__dirname, '../src/data');
    const filePath = path.join(dataDir, 'publications.json');
    if (!fs.existsSync(filePath)) {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
      console.log('ℹ️ Created fallback empty publications file.');
    }
  }
}

fetchPublications();
