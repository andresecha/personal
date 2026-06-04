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
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(dataDir, 'publications.json'),
        JSON.stringify(docs, null, 2)
      );

      console.log(`✅ Successfully fetched and saved ${docs.length} publications.`);
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
