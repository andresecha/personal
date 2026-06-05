import React, { useState, useEffect } from 'react';
import publicationsData from './data/publications.json';
import { translations } from './locales/index';
import { 
  User, 
  FileText, 
  Palette, 
  Code, 
  Mail, 
  ExternalLink, 
  Calendar, 
  Award, 
  BookOpen, 
  Download, 
  Sun, 
  Moon, 
  X,
  GraduationCap
} from 'lucide-react';

// Custom image logos for academic profiles & tech collaborations (stored locally)
const ThesesLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/theses-logo.svg" 
    width={size} 
    height={size} 
    alt="theses.fr" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const HalLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/hal-logo.svg" 
    width={size} 
    height={size} 
    alt="HAL" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const AmisLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/amis-logo.svg" 
    width={size} 
    height={size} 
    alt="AMIS" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const ArianeLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/ariane-logo.png" 
    width={size} 
    height={size} 
    alt="ARIANE" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const PythonLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/python-logo.svg" 
    width={size} 
    height={size} 
    alt="Python" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const OpenthesoLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/opentheso-logo.png" 
    width={size} 
    height={size} 
    alt="Opentheso" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const PypiLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/pypi-logo.svg" 
    width={size} 
    height={size} 
    alt="PyPI" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const ZenodoLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/zenodo-logo.svg" 
    width={size} 
    height={size} 
    alt="Zenodo" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const GitlabLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/gitlab-logo.svg" 
    width={size} 
    height={size} 
    alt="GitLab" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const NakalaLogo = ({ size = 18, className = "" }) => (
  <img 
    src="/logos/nakala-logo.png" 
    width={size} 
    height={size} 
    alt="Nakala" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} 
  />
);

const renderToolIcon = (tool) => {
  const link = tool.link.toLowerCase();
  const tags = tool.tags.map(t => t.toLowerCase());
  if (link.includes('pypi.org')) {
    return <PypiLogo size={24} />;
  } else if (link.includes('zenodo.org')) {
    return <ZenodoLogo size={24} />;
  } else if (link.includes('gitlab')) {
    return <GitlabLogo size={24} />;
  } else if (link.includes('nakala.fr')) {
    return <NakalaLogo size={24} />;
  } else if (link.includes('opentheso') || tags.includes('opentheso')) {
    return <OpenthesoLogo size={24} />;
  }
  return <Code size={20} />;
};

const renderCardLogo = (logoType) => {
  switch (logoType) {
    case 'theses':
      return <ThesesLogo size={18} />;
    case 'hal':
      return <HalLogo size={18} />;
    case 'ariane':
      return <ArianeLogo size={18} />;
    case 'python':
      return <PythonLogo size={18} />;
    case 'opentheso':
      return <OpenthesoLogo size={18} />;
    default:
      return <Code size={18} />;
  }
};

// Helper functions for direct publication downloads
const getDownloadUrl = (url) => {
  if (!url) return '';
  if (url.includes('hal.science')) {
    if (url.endsWith('/document')) return url;
    return `${url}/document`;
  }
  return url;
};

const formatCitation = (citation) => {
  if (!citation) return '';
  return citation.replace(/href="https:\/\/([^"]+?\.hal\.science\/[^"]+?)"/g, 'href="https://$1/document"');
};

// Helper to label publication types
const getFriendlyDocType = (type, lang) => {
  const types = {
    es: {
      'COMM': 'Comunicación en Congreso',
      'THESE': 'Tesis Doctoral',
      'REPORT': 'Informe Técnico',
      'PROCEEDINGS': 'Actas de Congreso',
      'OUV': 'Libro',
      'COUV': 'Capítulo de Libro',
      'ART': 'Artículo en Revista',
      'THES': 'Tesauro Documental'
    },
    fr: {
      'COMM': 'Communication en Congrès',
      'THESE': 'Thèse de Doctorat',
      'REPORT': 'Rapport Technique',
      'PROCEEDINGS': 'Actes de Congrès',
      'OUV': 'Livre',
      'COUV': 'Chapitre de Livre',
      'ART': 'Article de Revue',
      'THES': 'Thésaurus Documentaire'
    }
  };
  return types[lang]?.[type] || (lang === 'fr' ? 'Publication' : 'Publicación');
};

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  const [activeTab, setActiveTab] = useState('sobre-mi');
  const [theme, setTheme] = useState('light');
  const [lightboxArt, setLightboxArt] = useState(null);
  
  const handleCardClick = (url, e) => {
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a') || e.target.classList.contains('tool-tag')) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const user = "andres-felipe.echavarria-pelaez";
    const domain = "sorbonne-nouvelle.fr";
    window.location.href = `mailto:${user}@${domain}`;
  };
  
  // Publication states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [avatarError, setAvatarError] = useState(false);
  const [expandedPubs, setExpandedPubs] = useState({});

  const togglePub = (idx) => {
    setExpandedPubs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Load and apply light/dark theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  // Filter publications
  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pub.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.year.toString().includes(searchQuery);
    const matchesType = typeFilter === 'ALL' || pub.type === typeFilter;
    return matchesSearch && matchesType;
  });

  // Extract unique types of publications
  const availableTypes = ['ALL', ...new Set(publicationsData.map(pub => pub.type))];

  return (
    <>
      {/* Header */}
      <header className="header" id="navbar">
        <div className="container nav-container">
          <a href="#" className="logo-text" id="logo-nav" onClick={() => setActiveTab('sobre-mi')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logos/zorro.svg" alt={t.ui.logoFoxAlt} className="logo-fox" />
            <span>{t.ui.shortName}</span>
          </a>
          
          <nav>
            <ul className="nav-links">
              <li>
                <button 
                  id="tab-btn-about"
                  className={`nav-btn ${activeTab === 'sobre-mi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sobre-mi')}
                >
                  {t.ui.navAbout}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-portfolio"
                  className={`nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
                  onClick={() => setActiveTab('portafolio')}
                >
                  {t.ui.navPortfolio}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-pubs"
                  className={`nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
                  onClick={() => setActiveTab('publicaciones')}
                >
                  {t.ui.navPublications}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-tools"
                  className={`nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
                  onClick={() => setActiveTab('herramientas')}
                >
                  {t.ui.navTools}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-formacion"
                  className={`nav-btn ${activeTab === 'formacion' ? 'active' : ''}`}
                  onClick={() => setActiveTab('formacion')}
                >
                  {t.ui.navFormacion}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-cv"
                  className={`nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cv')}
                >
                  {t.ui.navCv}
                </button>
              </li>
            </ul>
          </nav>

          <div className="controls-container">
            <button 
              id="lang-toggle-btn"
              className="icon-btn lang-btn" 
              onClick={() => setLang(prev => prev === 'es' ? 'fr' : 'es')} 
              aria-label={t.ui.langToggleAriaLabel}
              style={{ fontWeight: 600, fontSize: '0.8rem', paddingLeft: '0.65rem', paddingRight: '0.65rem' }}
            >
              {lang === 'es' ? 'FR' : 'ES'}
            </button>
            <button 
              id="theme-toggle-btn"
              className="icon-btn" 
              onClick={toggleTheme} 
              aria-label={t.ui.themeToggleAriaLabel}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation bar */}
      <nav className="mobile-nav" id="mobile-navbar">
        <div className="mobile-nav-container">
          <button 
            id="m-tab-btn-about"
            className={`mobile-nav-btn ${activeTab === 'sobre-mi' ? 'active' : ''}`}
            onClick={() => setActiveTab('sobre-mi')}
          >
            <User size={18} />
            <span>{t.ui.navAbout}</span>
          </button>
          <button 
            id="m-tab-btn-portfolio"
            className={`mobile-nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
            onClick={() => setActiveTab('portafolio')}
          >
            <Palette size={18} />
            <span>{t.ui.navPortfolioShort}</span>
          </button>
          <button 
            id="m-tab-btn-pubs"
            className={`mobile-nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('publicaciones')}
          >
            <FileText size={18} />
            <span>{t.ui.navPublications}</span>
          </button>
          <button 
            id="m-tab-btn-tools"
            className={`mobile-nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
            onClick={() => setActiveTab('herramientas')}
          >
            <Code size={18} />
            <span>{t.ui.navToolsShort}</span>
          </button>
          <button 
            id="m-tab-btn-formacion"
            className={`mobile-nav-btn ${activeTab === 'formacion' ? 'active' : ''}`}
            onClick={() => setActiveTab('formacion')}
          >
            <GraduationCap size={18} />
            <span>{t.ui.navFormacionShort}</span>
          </button>
          <button 
            id="m-tab-btn-cv"
            className={`mobile-nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveTab('cv')}
          >
            <Award size={18} />
            <span>{t.ui.navCv}</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content container animate-fade-in">
        
        {/* TAB: SOBRE MÍ */}
        {activeTab === 'sobre-mi' && (
          <section className="animate-slide-up" id="sec-about">
            <div className="profile-grid">
              <div className="profile-avatar-container">
                <div className="profile-avatar-glow">
                  {!avatarError ? (
                    <img 
                      src="/images/profile.jpg" 
                      alt="Andrés Echavarría" 
                      className="profile-avatar"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="avatar-placeholder">AE</div>
                  )}
                </div>
              </div>
              <div>
                <p className="profile-title">{t.ui.roleText}</p>
                <h1>{t.profile.name}</h1>
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: t.profile.bioParagraph1 }} />
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2.5rem' }} dangerouslySetInnerHTML={{ __html: t.profile.bioParagraph2 }} />
                
                <div className="profile-socials">
                  <a href="#contacto" onClick={handleEmailClick} className="social-link email" title={t.ui.emailTooltip} id="link-email"></a>
                  <a href="https://gitlab.huma-num.fr/aechavarria" target="_blank" rel="noopener noreferrer" className="social-link gitlab" title={t.ui.gitlabTooltip} id="link-gitlab"></a>
                  <a href="https://github.com/andresecha" target="_blank" rel="noopener noreferrer" className="social-link github" title={t.ui.githubTooltip} id="link-github"></a>
                  <a href="https://cv.hal.science/andres-echavarria" target="_blank" rel="noopener noreferrer" className="social-link hal" title={t.ui.halTooltip} id="link-hal"></a>
                  <a href="https://orcid.org/0000-0002-0332-8808" target="_blank" rel="noopener noreferrer" className="social-link orcid" title={t.ui.orcidTooltip} id="link-orcid"></a>
                  <a href="https://www.idref.fr/291243665" target="_blank" rel="noopener noreferrer" className="social-link idref" title={t.ui.idrefTooltip} id="link-idref"></a>
                  <a href="https://theses.fr/2025UMPV0021" target="_blank" rel="noopener noreferrer" className="social-link theses" title={t.ui.thesesTooltip} id="link-theses"></a>
                </div>
              </div>
            </div>

            {/* Featured Research Cards Grid */}
            <div className="animate-slide-up" style={{ marginTop: '2.5rem', textAlign: 'left' }} id="research-tech-section">
              <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>{t.ui.researchSectionTitle}</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {t.researchCards.map((card) => (
                  <div 
                    key={card.id} 
                    className="card" 
                    style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                    onClick={(e) => handleCardClick(card.link, e)}
                  >
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      {renderCardLogo(card.logoType)} {card.title}
                    </h3>
                    <p 
                      style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}
                      dangerouslySetInnerHTML={{ __html: card.desc }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                      {card.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="tool-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB: PORTAFOLIO (ARTE Y DISEÑO) */}
        {activeTab === 'portafolio' && (
          <section className="animate-slide-up" id="sec-portfolio">
            <div className="section-intro">
              <p className="profile-title">{t.ui.navPortfolio}</p>
              <h1>{t.ui.portfolioSectionTitle}</h1>
              <p>{t.ui.portfolioSectionIntro}</p>
            </div>

            <div className="portfolio-grid">
              {t.artworks.map((art) => (
                <div 
                  key={art.id} 
                  className="card portfolio-card" 
                  id={`art-card-${art.id}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLightboxArt(art)}
                >
                  <div className="portfolio-img-container">
                    <img src={art.img} alt={art.title} className="portfolio-img" loading="lazy" />
                    <span className="portfolio-badge">{art.tag}</span>
                  </div>
                  <div className="portfolio-info">
                    <h3>{art.title}</h3>
                    <p>{art.desc}</p>
                    <button 
                      id={`open-lightbox-${art.id}`}
                      className="portfolio-action" 
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxArt(art);
                      }}
                    >
                      {t.ui.viewVisualIdentity}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB: PUBLICACIONES (AUTOMATIZADAS) */}
        {activeTab === 'publicaciones' && (
          <section className="animate-slide-up" id="sec-publications">
            <div className="section-intro">
              <p className="profile-title">{t.ui.navPublications}</p>
              <h1>{t.ui.publicationsSectionTitle}</h1>
              <p>{t.ui.publicationsSectionIntro}</p>
            </div>

            {/* Search and Filters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input 
                id="pub-search-bar"
                type="text" 
                placeholder={t.ui.searchPlaceholder}
                className="pub-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <div className="pub-filters">
                {availableTypes.map((type) => (
                  <button
                    id={`pub-filter-btn-${type}`}
                    key={type}
                    className={`filter-btn ${typeFilter === type ? 'active' : ''}`}
                    onClick={() => setTypeFilter(type)}
                  >
                    {type === 'ALL' ? t.ui.filterAll : getFriendlyDocType(type, lang)}
                  </button>
                ))}
              </div>
            </div>

            {/* List of publications */}
            <div className="pub-list" id="pub-items-list">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, idx) => (
                  <div 
                    key={idx} 
                    className={`card pub-item ${expandedPubs[idx] ? 'expanded' : ''}`} 
                    id={`pub-item-${idx}`}
                    onClick={() => togglePub(idx)}
                  >
                    <span className="pub-type-badge">{getFriendlyDocType(pub.type, lang)}</span>
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pub-title-link" 
                      id={`pub-link-${idx}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3>{pub.title}</h3>
                    </a>
                    <div className="pub-expandable-details">
                      <div 
                        className="pub-citation"
                        dangerouslySetInnerHTML={{ __html: pub.citation }} 
                      />
                      <div className="pub-meta">
                        <Calendar size={14} />
                        <span>{t.ui.pubYear}: {pub.year}</span>
                        {pub.journal && (
                          <>
                            <span>•</span>
                            <span>{t.ui.pubJournal}: {pub.journal}</span>
                          </>
                        )}
                        {pub.downloadUrl && (
                          <>
                            <span>•</span>
                            <a 
                              href={pub.downloadUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="pub-download-link"
                              onClick={(e) => e.stopPropagation()}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}
                            >
                              <Download size={14} />
                              <span>{t.ui.pubDownload}</span>
                            </a>
                          </>
                        )}
                        {pub.publisherUrl && (
                          <>
                            <span>•</span>
                            <a 
                              href={pub.publisherUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="pub-publisher-link"
                              onClick={(e) => e.stopPropagation()}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}
                            >
                              <ExternalLink size={14} />
                              <span>{t.ui.pubPublisher}</span>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card" style={{ textAlign: 'center', padding: '3rem' }} id="no-pubs-fallback">
                  <p>{t.ui.noPubsFound}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB: HERRAMIENTAS */}
        {activeTab === 'herramientas' && (
          <section className="animate-slide-up" id="sec-tools">
            <div className="section-intro">
              <p className="profile-title">{t.ui.toolsSectionSubtitle}</p>
              <h1>{t.ui.toolsSectionTitle}</h1>
              <p>{t.ui.toolsSectionIntro}</p>
            </div>

            <div className="tools-grid">
              {t.tools.map((tool, idx) => (
                <div key={idx} className="card tool-card" id={`tool-card-${idx}`}>
                  <div className="tool-icon-wrapper">
                    {renderToolIcon(tool)}
                  </div>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                  <div className="tool-tags">
                    {tool.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tool-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: 'auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }} id={`tool-link-${idx}`}>
                    <span>{tool.buttonText || t.ui.viewResource}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB: FORMACIÓN & TALLERES */}
        {activeTab === 'formacion' && (
          <section className="animate-slide-up" id="sec-formacion">
            <div className="section-intro">
              <p className="profile-title">{t.ui.formacionSectionSubtitle}</p>
              <h1>{t.ui.formacionSectionTitle}</h1>
              <p>{t.ui.formacionSectionIntro}</p>
            </div>

            <div className="formacion-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              
              {/* Column 1: Talleres y Docencia */}
              <div className="card" style={{ padding: '2rem' }}>
                <h2 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Code size={20} /> {t.ui.teachingHeader}
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {t.teaching.map((item, idx) => (
                    <div key={idx}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.institution}</h3>
                      {item.date && (
                        <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>{item.date}</span>
                      )}
                      <p 
                        style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Formación Académica */}
              <div className="card" style={{ padding: '2rem' }}>
                <h2 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} /> {t.ui.educationHeader}
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {t.education.map((item, idx) => (
                    <div key={idx}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.title}</h3>
                      <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>{item.date}</span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{item.institution}</p>
                      <p 
                        style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB: CV */}
        {activeTab === 'cv' && (
          <section className="animate-slide-up" id="sec-cv">
            <div className="section-intro" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <p className="profile-title">{t.ui.cvSectionSubtitle}</p>
                <h1>{t.ui.navCv}</h1>
                <p>{t.ui.cvSectionIntro}</p>
              </div>
              <a href="https://cv.hal.science/andres-echavarria" target="_blank" rel="noopener noreferrer" className="btn-primary" id="download-cv-btn">
                <Download size={16} />
                <span>{t.ui.downloadCv}</span>
              </a>
            </div>

            <div className="cv-timeline" id="cv-timeline-container">
              {t.cvItems.map((item, idx) => (
                <div key={idx} className="cv-item" id={`cv-item-${idx}`}>
                  <div className="cv-header">
                    <h3>{item.role}</h3>
                    <span className="cv-date">{item.date}</span>
                  </div>
                  <p className="cv-institution">{item.institution}</p>
                  <p 
                    className="cv-desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Lightbox / Art Mini Expo Overlay */}
      {lightboxArt && (
        <div className="lightbox-overlay" onClick={() => setLightboxArt(null)} id="lightbox-modal">
          <div className="lightbox-content animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button 
              id="close-lightbox-btn"
              className="lightbox-close" 
              onClick={() => setLightboxArt(null)}
              aria-label={t.ui.closeModal}
            >
              <X size={20} />
            </button>
            <div className="lightbox-img-pane">
              <img src={lightboxArt.img} alt={lightboxArt.title} className="lightbox-img" />
            </div>
            <div className="lightbox-info-pane">
              <span className="lightbox-tag">{lightboxArt.tag}</span>
              <h2 className="lightbox-title">{lightboxArt.title}</h2>
              <p className="lightbox-desc">{lightboxArt.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {t.ui.copyright}</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            {t.ui.footerSustainability}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
