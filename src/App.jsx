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

// Software and Research Data list
const tools = [
  {
    title: 'calendario-liturgico (PyPI)',
    desc: 'Librería de Python publicada en PyPI para el cálculo automático de fechas litúrgicas cristianas basada en el algoritmo de computus de Gauss. Su evolución desde un script personal a una biblioteca reproducible de Ciencia Abierta se describe en la ponencia presentada en el coloquio Humanistica 2026: "Du script artisanal à l\'infrastructure ouverte : genèse, enjeux et fondements de calendario_liturgico".',
    tags: ['Python', 'Computus', 'Gauss', 'PyPI', 'Humanistica', 'Ciencia Abierta'],
    link: 'https://pypi.org/project/calendario-liturgico/0.1.0/',
    buttonText: 'Ver en PyPI'
  },
  {
    title: 'RDF a TEI ODD / Taxonomy Converter (Zenodo)',
    desc: 'Scripts en Python en Zenodo para la conversión de un tesauro SKOS RDF (exportado de Opentheso) en formatos XML conformes a la TEI (valList para ODD y taxonomías estructuradas category/taxonomy), asegurando la trazabilidad de conceptos.',
    tags: ['Python', 'RDF', 'SKOS', 'TEI', 'Zenodo', 'Web Semántica'],
    link: 'https://zenodo.org/records/15044448',
    buttonText: 'Ver en Zenodo'
  },
  {
    title: 'Scripts de Extracción de Información XML-TEI (Zenodo)',
    desc: 'Colección de herramientas en Python y hojas de estilo XSLT en Zenodo para verificar esquemas de anotación TEI aplicados a juicios inquisitoriales y extraer tipologías (tachas mediante spaCy, acusaciones y respuestas, asignación de xml:id y reportes CSV).',
    tags: ['Python', 'XSLT', 'XML-TEI', 'Zenodo', 'Extracción'],
    link: 'https://zenodo.org/records/15035164',
    buttonText: 'Ver en Zenodo'
  },
  {
    title: 'Anexos de la Tesis Doctoral (GitLab)',
    desc: 'Repositorio institucional en el GitLab de Huma-Num que aloja el código fuente, esquemas de validación y la documentación de apoyo técnica complementaria desarrollada para la tesis de doctorado "Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire".',
    tags: ['GitLab', 'Huma-Num', 'TEI', 'SKOS', 'Documentación'],
    link: 'https://gitlab.huma-num.fr/aechavarria/annexesthese',
    buttonText: 'Ver en GitLab Huma-Num'
  },
  {
    title: 'Proceso de fe de Pedro de Cazalla (Nakala)',
    desc: 'Dataset publicado en Nakala (10.34847/nkl.aaeej9jp) que contiene la anotación XML/TEI completa del proceso inquisitorial de Valladolid (1558-1559) contra Pedro de Cazalla, clérigo cura de Pedrosa acusado de luteranismo, sirviendo como prototipo para el esquema de anotación de la tesis.',
    tags: ['Nakala', 'XML-TEI', 'Inquisición', 'Pedro de Cazalla', 'Dataset'],
    link: 'https://nakala.fr/10.34847/nkl.aaeej9jp',
    buttonText: 'Ver Dataset en Nakala'
  },
  {
    title: 'Tesauro de tipologías documentales de la Inquisición (Nakala)',
    desc: 'Vocabulario controlado bilingüe (SKOS/RDF) publicado en Nakala (10.34847/nkl.2a4e2h52) para la indización de piezas procesales en los expedientes inquisitoriales, estructurado bajo el estándar ISO 25964 e integrado con la TEI.',
    tags: ['Nakala', 'SKOS', 'RDF', 'Vocabulario Controlado', 'Opentheso'],
    link: 'https://nakala.fr/10.34847/nkl.2a4e2h52',
    buttonText: 'Ver Tesauro en Nakala'
  },
  {
    title: 'Esquema de anotación TEI para procesos de fe (Nakala)',
    desc: 'Esquema de validación XML estructurado en Nakala (10.34847/nkl.ab374s00) para codificar juicios históricos. Incluye especificación ODD (One Document Does it all), RelaxNG (RNG/RNC), XML Schema (XSD) y documentación en ODT.',
    tags: ['Nakala', 'ODD', 'RelaxNG', 'RNC', 'XSD', 'Validación'],
    link: 'https://nakala.fr/10.34847/nkl.ab374s00',
    buttonText: 'Ver Esquema en Nakala'
  },
  {
    title: 'Traducción y Documentación de Opentheso (Hypotheses)',
    desc: 'Traducción completa al castellano de la interfaz de administración del gestor de tesauros Opentheso, junto a la publicación de guías metodológicas detalladas sobre la estructuración de tesauros (post 4944), construcción de conceptos (post 4978) e importación/exportación de archivos (post 5174).',
    tags: ['Opentheso', 'Traducción', 'Documentación', 'ARIANE', 'Hypotheses'],
    link: 'https://opentheso.hypotheses.org/5174',
    buttonText: 'Ver en Hypotheses'
  }
];

// Experience timeline
const cvItems = [
  {
    role: 'Ingeniero de Investigación en Humanidades Digitales (Proyecto AMIS)',
    institution: 'CNRS / Consorcio ARIANE / TGIR Huma-Num / Université de Poitiers - París/Poitiers, Francia',
    date: '2024 - Presente',
    desc: 'Desarrollo y modelización del asistente de metadatos AMIS (Advanced Metadata Intelligent System), financiado por el programa europeo Horizon Europe (OSCARS). Encargado de la modelización de metadatos (Dublin Core, alineación con la ontología CAO_CRM) y de la integración de tesauros multilingües normalizados (ISO 25964 en SKOS) con la plataforma Opentheso y la infraestructura Huma-Num.'
  },
  {
    role: 'Docente (Chargé de Cours)',
    institution: 'Université Sorbonne Nouvelle - París, Francia',
    date: '2021 - Presente',
    desc: 'Impartición de asignaturas en el Master en Humanidades Digitales ("Introducción a la gestión de bases de datos en SHS") y en el Master de Letras Modernas ("Metodología de la investigación digital").'
  },
  {
    role: 'Piloto del Grupo de Trabajo GT2 (Adquisición de Datos)',
    institution: 'Consorcio ARIANE, Huma-Num - París, Francia',
    date: '2024 - Presente',
    desc: 'Coordinador del grupo enfocado en adquisición de datos y transcripción asistida por ordenador (HTR/OCR). Coordinación y animación de talleres especializados en Transkribus y eScriptorium en diversas universidades europeas (Madrid Complutense, UCLouvain, etc.).'
  },
  {
    role: 'Doctor en Estudios Romanes y Humanidades Digitales',
    institution: 'Université de Montpellier Paul-Valéry - Montpellier, Francia',
    date: '2021 - 2025',
    desc: 'Defensa en junio de 2025 de la tesis de doctorado titulada "Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire", realizada bajo la dirección de Geoffrey Williams y Karim Benmiloud. Especialización en modelización TEI de documentos históricos, taxonomías semánticas en SKOS/RDF y principios de Ciencia Abierta.'
  },
  {
    role: 'Doctorando y Editor de Corpus Digitales (Proyecto ANR-D4R)',
    institution: 'IRIEC - Université Paul-Valéry Montpellier 3 / Universitat de Barcelona',
    date: '2021 - 2025',
    desc: 'Investigación en la exploración interactiva y visual de un corpus sobre la inquisición española del siglo XVI. Modelado y representación de redes egocentradas a partir de anotaciones XML-TEI y entrenamiento de modelos HTR.'
  },
  {
    role: 'Ingeniero de Datos (Consorcio CAHIER)',
    institution: 'CNRS / Université de Poitiers - Francia',
    date: 'Abril - Octubre 2021',
    desc: 'Migración y estructuración de bases de datos científicas de las SHS según los principios FAIR. Optimización de archivos XML-TEI.'
  },
  {
    role: 'Máster en Humanidades Numéricas, Letras y Lexicografía',
    institution: 'Université de Bretagne-Sud - Lorient, Francia',
    date: '2018 - 2020',
    desc: 'Especialización en lexicografía histórica y procesamiento digital. Trabajo en el proyecto BasNum (ANR-18-CE38-0003) para el marcado diplomático del Dictionnaire Universel de Furetière (1690-1725) y entrenamiento de modelos automáticos.'
  },
  {
    role: 'Licenciado en Educación: Artes Plásticas',
    institution: 'Universidad de Antioquia - Medellín, Colombia',
    date: '2010 - 2017',
    desc: 'Formación pedagógica y en artes visuales. Complementada en 2018 con un Diplôme National Supérieur d\'Expression Plastique (DNSEP) en la École Européenne Supérieure d\'Art de Bretagne (EESAB Lorient).'
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
  const [theme, setTheme] = useState('light');
  const [lightboxArt, setLightboxArt] = useState(null);
  
  // Publication states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [avatarError, setAvatarError] = useState(false);

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
                  Software & Datos
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
            <span>Software & Datos</span>
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
                  {!avatarError ? (
                    <img 
                      src="/avatar.jpg" 
                      alt="Andrés Felipe Echavarría Peláez" 
                      className="profile-avatar"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="avatar-placeholder">AE</div>
                  )}
                </div>
              </div>
              <div>
                <p className="profile-title">Digital Humanities & Computer Science</p>
                <h1>Andrés Felipe Echavarría Peláez</h1>
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Soy un investigador colombo-francés cuya carrera se desarrolla en la convergencia entre las humanidades tradicionales y las tecnologías digitales, combinando historia, filología, lingüística, lexicografía y ciencia de los textos. Actualmente me desempeño como ingeniero de investigación en informática y humanidades digitales en el **Centre National de la Recherche Scientifique (CNRS)**, trabajando en el proyecto europeo **AMIS (Advanced Metadata Intelligent System)** financiado por el programa Horizon Europe (OSCARS), y soy miembro del comité de pilotaje científico del Consorcio **ARIANE** dentro de la infraestructura de investigación **Huma-Num**.
                </p>
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2.5rem' }}>
                  Mi formación comenzó con una Licenciatura en Artes Plásticas en la Universidad de Antioquia, complementada con un Diplôme National Supérieur d'Expression Plastique en la École Européenne Supérieure d'Art de Bretagne. Posteriormente obtuve una Maestría en Humanidades Digitales en la Université de Bretagne-Sud y concluí mi doctorado en 2025 en la Université de Montpellier Paul-Valéry con una tesis doctoral centrada en la editorialización de procesos de fe inquisitoriales y su estructuración digital.
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
                  <a href="https://cv.hal.science/andres-echavarria" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-hal">
                    <BookOpen size={16} />
                    <span>HAL Open Science</span>
                  </a>
                  <a href="https://orcid.org/0000-0002-0332-8808" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-orcid">
                    <ExternalLink size={16} />
                    <span>ORCID</span>
                  </a>
                  <a href="https://www.idref.fr/291243665" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="link-idref">
                    <ExternalLink size={16} />
                    <span>IdRef (291243665)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Research Card */}
            <div className="card animate-slide-up" style={{ marginTop: '2rem', textAlign: 'left' }} id="featured-project-card">
              <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Investigación & Desarrollo Tecnológico</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    🎓 Tesis Doctoral & Nakala Datasets
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Mi investigación de doctorado (2025, dirigida por G. Williams y K. Benmiloud, accesible en <a href="https://theses.hal.science/tel-05318449v1" target="_blank" rel="noopener noreferrer">theses.hal</a>) derivó en tres conjuntos de datos publicados en <strong>Nakala</strong>: el prototipo de anotación del <a href="https://nakala.fr/10.34847/nkl.aaeej9jp" target="_blank" rel="noopener noreferrer">proceso de Pedro de Cazalla</a>, el <a href="https://nakala.fr/10.34847/nkl.2a4e2h52" target="_blank" rel="noopener noreferrer">tesauro de tipologías inquisitoriales (SKOS)</a> y el <a href="https://nakala.fr/10.34847/nkl.ab374s00" target="_blank" rel="noopener noreferrer">esquema de anotación TEI (ODD, RNG)</a>. La documentación y scripts adicionales se hallan en <a href="https://zenodo.org/records/15035164" target="_blank" rel="noopener noreferrer">Zenodo</a> y <a href="https://gitlab.huma-num.fr/aechavarria/annexesthese" target="_blank" rel="noopener noreferrer">GitLab</a>.
                  </p>
                </div>
                
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    📦 Métricas HTR (CER/WER)
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Colaboré en la definición cuantitativa para evaluar el rendimiento de modelos de reconocimiento de manuscritos e impresos antiguos mediante las tasas de error de caracteres (CER) y palabras (WER), publicadas en español (<a href="https://hal.science/hal-05267874v1" target="_blank" rel="noopener noreferrer">hal-05267874v1</a>) y francés (<a href="https://hal.science/hal-05267873v1" target="_blank" rel="noopener noreferrer">hal-05267873v1</a>) en el Consorcio ARIANE.
                  </p>
                </div>

                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    🚀 Proyecto AMIS — OSCARS (Actualidad)
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Desde noviembre de 2024, formo parte del equipo técnico y científico del proyecto europeo <a href="https://oscars-project.eu/projects/amis-advanced-metadata-intelligent-system" target="_blank" rel="noopener noreferrer">AMIS (Advanced Metadata Intelligent System)</a>, financiado por OSCARS EU, encargado de la <strong>modelización de metadatos</strong> (Dublin Core, CAO_CRM) y de la integración de tesauros multilingües (370 conceptos estructurados según ISO 25964 en SKOS) con Opentheso y Huma-Num.
                  </p>
                </div>

                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    🐍 Computus y calendario-liturgico
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Desarrollé la librería de Python <strong>calendario-liturgico</strong> para calcular fechas litúrgicas mediante el algoritmo de computus de Gauss. El proceso de evolución de este script a una biblioteca reproducible de Ciencia Abierta se describe en mi publicación de Humanistica 2026 (<a href="https://hal.science/hal-05631254v1" target="_blank" rel="noopener noreferrer">hal-05631254v1</a> / <a href="https://anthology.ach.org/volumes/vol0004/du-script-artisanal-l-infrastructure-ouverte-gen-se-enjeux/" target="_blank" rel="noopener noreferrer">Anthology ACH</a>).
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <span className="tool-tag">Métricas CER/WER</span>
                <span className="tool-tag">NLP & LLMs (AMIS)</span>
                <span className="tool-tag">XML-TEI / SKOS</span>
                <span className="tool-tag">Opentheso / Nakala</span>
                <span className="tool-tag">computus (Gauss)</span>
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
                Se actualizan automáticamente mediante GitHub Actions en cada compilación del sitio.
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
              <p className="profile-title">Código Abierto, Datos y Recursos</p>
              <h1>Software & Datos de Investigación</h1>
              <p>
                Desarrollo librerías, scripts, esquemas de codificación y conjuntos de datos FAIR para facilitar la aplicación de tecnologías en humanidades digitales, historia y lingüística.
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
                    <span>{tool.buttonText || 'Ver Recurso'}</span>
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
              <a href="https://cv.hal.science/andres-echavarria" target="_blank" rel="noopener noreferrer" className="btn-primary" id="download-cv-btn">
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
            Alojado de manera sostenible y escalable en GitHub Pages. Publicaciones sincronizadas vía API de HAL e IdRef.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
