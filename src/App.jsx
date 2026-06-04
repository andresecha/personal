import React, { useState, useEffect } from 'react';
import publicationsData from './data/publications.json';
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
  X
} from 'lucide-react';

// Artworks / illustrations for the artistic portfolio (Mini Expo)
const artworks = [
  {
    id: 'art-1',
    title: 'Humanidades Digitales: Códice y Red',
    tag: 'Ilustración Digital',
    desc: 'Una exploración visual del choque y la convergencia entre manuscritos medievales y las redes neuronales artificiales. Creado como metáfora de los procesos de reconocimiento automático de texto (HTR).',
    img: '/portfolio/digital_humanities.png'
  },
  {
    id: 'art-2',
    title: 'Visualización Semántica de la Inquisición',
    tag: 'Diseño Gráfico',
    desc: 'Representación abstracta de la modelización XML-TEI y los grafos semánticos de relaciones y personas extraídas de los procesos de fe de la Inquisición española del siglo XVI.',
    img: '/portfolio/historical_texts.png'
  },
  {
    id: 'art-3',
    title: 'Mapas Cognitivos y NLP',
    tag: 'Ilustración Digital',
    desc: 'Infografía conceptual que representa la estructura interna de los Modelos de Lenguaje (LLMs) y su relación directa con la dialectología y la lingüística computacional.',
    img: '/portfolio/semantic_networks.png'
  }
];

// Software tools list
const tools = [
  {
    title: 'Calculadora de Métricas CER y WER',
    desc: 'Herramienta en Python para evaluar el rendimiento de modelos de Reconocimiento Automático de Textos (HTR/OCR) en manuscritos antiguos, calculando tasas de error de caracteres (CER) y palabras (WER).',
    tags: ['Python', 'HTR', 'Evaluación'],
    link: 'https://gitlab.huma-num.fr/aechavarria/cer-wer'
  },
  {
    title: 'Script Ariane de FAIRización de Datos',
    desc: 'Repositorio de scripts y guías desarrollados en el marco del consorcio CAHIER de Huma-Num para limpiar, estructurar y publicar metadatos científicos bajo principios FAIR.',
    tags: ['Shell', 'Python', 'FAIR'],
    link: 'https://gitlab.huma-num.fr/aechavarria/ariane'
  },
  {
    title: 'Validador y Parser XML-TEI',
    desc: 'Un validador personalizado basado en esquemas XML Schema y RelaxNG adaptado a las transcripciones paleográficas de juicios de fe e inquisitoriales.',
    tags: ['XML', 'TEI', 'RelaxNG'],
    link: 'https://gitlab.huma-num.fr/aechavarria/tei-validator'
  }
];

// Experience timeline
const cvItems = [
  {
    role: 'Ingeniero de Investigación en Humanidades Digitales y Ciencias de la Computación',
    institution: 'CNRS / Huma-Num - París, Francia',
    date: '2025 - Presente',
    desc: 'Desarrollo de herramientas informáticas para las ciencias humanas y sociales. Apoyo técnico a los consorcios de Huma-Num (CAHIER, etc.) en la FAIRización de bases de datos de investigación y despliegue de soluciones metodológicas (Heurist, HTR, XML-TEI).'
  },
  {
    role: 'Doctor en Ciencias de la Información y de la Comunicación',
    institution: 'Université de Montpellier Paul-Valéry - Montpellier, Francia',
    date: '2021 - 2025',
    desc: 'Defensa de tesis doctoral titulada "Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire". Investigación centrada en el modelado TEI de documentos antiguos y la creación de ontologías semánticas.'
  },
  {
    role: 'Miembro del Equipo de Investigación - Proyecto ANR-D4R',
    institution: 'IRIEC - Université Paul-Valéry Montpellier 3 / Universitat de Barcelona',
    date: '2021 - 2025',
    desc: 'Investigación en la exploración interactiva y visual de un corpus sobre la inquisición española del siglo XVI. Aplicación de tecnologías HTR (Handwritten Text Recognition) y modelado de grafos de red.'
  },
  {
    role: 'Máster en Tecnologías Digitales Aplicadas a la Historia y Filología',
    institution: 'París, Francia',
    date: '2019 - 2021',
    desc: 'Especialización en lenguajes de marcado XML/TEI, procesamiento de lenguajes naturales, desarrollo web y bases de datos estructuradas.'
  }
];

// Helper to label publication types
const getFriendlyDocType = (type) => {
  const types = {
    'COMM': 'Comunicación en Congreso',
    'THESE': 'Tesis Doctoral',
    'REPORT': 'Informe Técnico',
    'PROCEEDINGS': 'Actas de Congreso',
    'OUV': 'Libro',
    'COUV': 'Capítulo de Libro',
    'ART': 'Artículo en Revista'
  };
  return types[type] || 'Publicación';
};

function App() {
  const [activeTab, setActiveTab] = useState('sobre-mi');
  const [theme, setTheme] = useState('dark');
  const [lightboxArt, setLightboxArt] = useState(null);
  
  // Publication states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');

  // Load and apply light/dark theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
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
          <a href="#" className="logo-text" id="logo-nav" onClick={() => setActiveTab('sobre-mi')}>
            Andrés Felipe Echavarría Peláez
          </a>
          
          <nav>
            <ul className="nav-links">
              <li>
                <button 
                  id="tab-btn-about"
                  className={`nav-btn ${activeTab === 'sobre-mi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sobre-mi')}
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-portfolio"
                  className={`nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
                  onClick={() => setActiveTab('portafolio')}
                >
                  Diseño & Arte
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-pubs"
                  className={`nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
                  onClick={() => setActiveTab('publicaciones')}
                >
                  Publicaciones
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-tools"
                  className={`nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
                  onClick={() => setActiveTab('herramientas')}
                >
                  Herramientas
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-cv"
                  className={`nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cv')}
                >
                  CV
                </button>
              </li>
            </ul>
          </nav>

          <div className="controls-container">
            <button 
              id="theme-toggle-btn"
              className="icon-btn" 
              onClick={toggleTheme} 
              aria-label="Alternar modo claro y oscuro"
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
            <span>Sobre Mí</span>
          </button>
          <button 
            id="m-tab-btn-portfolio"
            className={`mobile-nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
            onClick={() => setActiveTab('portafolio')}
          >
            <Palette size={18} />
            <span>Arte</span>
          </button>
          <button 
            id="m-tab-btn-pubs"
            className={`mobile-nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('publicaciones')}
          >
            <FileText size={18} />
            <span>Publicaciones</span>
          </button>
          <button 
            id="m-tab-btn-tools"
            className={`mobile-nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
            onClick={() => setActiveTab('herramientas')}
          >
            <Code size={18} />
            <span>Herramientas</span>
          </button>
          <button 
            id="m-tab-btn-cv"
            className={`mobile-nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveTab('cv')}
          >
            <Award size={18} />
            <span>CV</span>
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
                  <div className="avatar-placeholder">AE</div>
                </div>
              </div>
              <div>
                <p className="profile-title">Digital Humanities & Computer Science</p>
                <h1>Andrés Felipe Echavarría Peláez</h1>
                <p className="profile-bio">
                  Doctor en Humanidades Digitales y miembro del equipo técnico del **CNRS / Huma-Num**. 
                  Trabajo en la confluencia de la filología y la informática, especializándome en el modelado 
                  de textos (XML-TEI), tecnologías de reconocimiento de texto manuscrito antiguo (HTR), y la 
                  creación de ontologías semánticas estructuradas bajo principios FAIR.
                </p>
                
                <div className="profile-socials">
                  <a href="mailto:andres.echavarria@huma-num.fr" className="btn-primary" id="link-email">
                    <Mail size={16} />
                    <span>Contacto</span>
                  </a>
                  <a href="https://gitlab.huma-num.fr/aechavarria" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-gitlab">
                    <Code size={16} />
                    <span>GitLab Huma-Num</span>
                  </a>
                  <a href="https://hal.science/cv/andres-echavarria" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-hal">
                    <BookOpen size={16} />
                    <span>HAL Open Science</span>
                  </a>
                  <a href="https://orcid.org/0000-0002-0332-8808" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-orcid">
                    <ExternalLink size={16} />
                    <span>ORCID</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Research Card */}
            <div className="card animate-slide-up" style={{ marginTop: '2rem' }} id="featured-project-card">
              <h2 className="text-gradient">Investigación Destacada: Proyecto ANR-D4R</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                He participado activamente en el proyecto **ANR D4R** (Dissidences Religieuses et Réception de la Réforme en Espagne au XVIe siècle), 
                diseñando e implementando la infraestructura metodológica para la transcripción HTR de miles de páginas de 
                procesos de fe inquisitoriales y su posterior marcado semántico mediante grafos de red.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="tool-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>HTR (Transkribus)</span>
                <span className="tool-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>XML-TEI</span>
                <span className="tool-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Grafos de Redes</span>
                <span className="tool-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Bases de datos Heurist</span>
              </div>
            </div>
          </section>
        )}

        {/* TAB: PORTAFOLIO (ARTE Y DISEÑO) */}
        {activeTab === 'portafolio' && (
          <section className="animate-slide-up" id="sec-portfolio">
            <div className="section-intro">
              <p className="profile-title">Mini Exposición Artística</p>
              <h1>Arte, Ilustración & Visualización</h1>
              <p>
                Una galería visual dedicada a mis proyectos de diseño e ilustración digital, cruzando
                metáforas visuales de computación y humanidades. Almacenado de forma eficiente para garantizar escalabilidad.
              </p>
            </div>

            <div className="portfolio-grid">
              {artworks.map((art) => (
                <div key={art.id} className="card portfolio-card" id={`art-card-${art.id}`}>
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
                      onClick={() => setLightboxArt(art)}
                    >
                      Ampliar Ilustración →
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
              <p className="profile-title">Sincronización en tiempo real desde HAL Open Science</p>
              <h1>Producción Científica</h1>
              <p>
                Lista completa de artículos, actas de congresos, tesis doctorales e informes técnicos. 
                Se actualizan automáticamente mediante GitLab CI en cada compilación del sitio.
              </p>
            </div>

            {/* Search and Filters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input 
                id="pub-search-bar"
                type="text" 
                placeholder="🔍 Buscar por título, año, autores..."
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
                    {type === 'ALL' ? 'Todos' : getFriendlyDocType(type)}
                  </button>
                ))}
              </div>
            </div>

            {/* List of publications */}
            <div className="pub-list" id="pub-items-list">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, idx) => (
                  <div key={idx} className="card pub-item" id={`pub-item-${idx}`}>
                    <span className="pub-type-badge">{getFriendlyDocType(pub.type)}</span>
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-title-link" id={`pub-link-${idx}`}>
                      <h3>{pub.title}</h3>
                    </a>
                    <div 
                      className="pub-citation"
                      dangerouslySetInnerHTML={{ __html: pub.citation }} 
                    />
                    <div className="pub-meta">
                      <Calendar size={14} />
                      <span>Año: {pub.year}</span>
                      {pub.journal && (
                        <>
                          <span>•</span>
                          <span>Revista: {pub.journal}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="card" style={{ textAlign: 'center', padding: '3rem' }} id="no-pubs-fallback">
                  <p>No se encontraron publicaciones que coincidan con la búsqueda o filtro.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB: HERRAMIENTAS */}
        {activeTab === 'herramientas' && (
          <section className="animate-slide-up" id="sec-tools">
            <div className="section-intro">
              <p className="profile-title">Código Abierto y Recursos</p>
              <h1>Herramientas Tecnológicas</h1>
              <p>
                Desarrollo scripts, módulos y validadores para facilitar la aplicación de tecnologías
                en investigaciones de historia y lingüística.
              </p>
            </div>

            <div className="tools-grid">
              {tools.map((tool, idx) => (
                <div key={idx} className="card tool-card" id={`tool-card-${idx}`}>
                  <div className="tool-icon-wrapper">
                    <Code size={20} />
                  </div>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                  <div className="tool-tags">
                    {tool.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tool-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: 'auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }} id={`tool-link-${idx}`}>
                    <span>Ver código en GitLab</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB: CV */}
        {activeTab === 'cv' && (
          <section className="animate-slide-up" id="sec-cv">
            <div className="section-intro" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <p className="profile-title">Trayectoria Profesional</p>
                <h1>Currículum Vitae</h1>
                <p>Resumen estructurado de mi formación y experiencia laboral en el ecosistema digital francés.</p>
              </div>
              <a href="https://hal.science/cv/andres-echavarria" target="_blank" rel="noopener noreferrer" className="btn-primary" id="download-cv-btn">
                <Download size={16} />
                <span>Ver CV completo en HAL</span>
              </a>
            </div>

            <div className="cv-timeline" id="cv-timeline-container">
              {cvItems.map((item, idx) => (
                <div key={idx} className="cv-item" id={`cv-item-${idx}`}>
                  <div className="cv-header">
                    <h3>{item.role}</h3>
                    <span className="cv-date">{item.date}</span>
                  </div>
                  <p className="cv-institution">{item.institution}</p>
                  <p className="cv-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Lightbox / Art Mini Expo Overlay */}
      {lightboxArt && (
        <div className="lightbox-overlay" onClick={() => setLightboxArt(null)} id="lightbox-modal">
          <div className="lightbox-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button 
              id="close-lightbox-btn"
              className="lightbox-close" 
              onClick={() => setLightboxArt(null)}
              aria-label="Cerrar modal"
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
          <p>© {new Date().getFullYear()} Andrés Felipe Echavarría Peláez. Desarrollado con React & Vite.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Alojado de manera sostenible y escalable en GitLab Pages. Publicaciones sincronizadas vía API de HAL.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
