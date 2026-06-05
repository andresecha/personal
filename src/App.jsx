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
  X,
  GraduationCap
} from 'lucide-react';

// Custom SVG logos for academic profiles & tech collaborations
const HalLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }}
  >
    <circle cx="50" cy="50" r="45" fill="#E05224" />
    <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="5" />
    <circle cx="50" cy="50" r="11" fill="white" />
    <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <path d="M 50 90 A 40 40 0 0 1 10 50" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const AmisLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }}
  >
    <rect width="100" height="100" rx="20" fill="#1E3A8A" />
    <circle cx="35" cy="50" r="10" fill="#10B981" />
    <circle cx="65" cy="35" r="8" fill="#60A5FA" />
    <circle cx="65" cy="65" r="8" fill="#60A5FA" />
    <line x1="35" y1="50" x2="65" y2="35" stroke="white" strokeWidth="4" />
    <line x1="35" y1="50" x2="65" y2="65" stroke="white" strokeWidth="4" />
    <line x1="65" y1="35" x2="65" y2="65" stroke="white" strokeWidth="4" />
  </svg>
);

const PythonLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', color: '#3776AB', marginRight: '0.25rem' }}
  >
    <path d="M11.933 0c-3.766 0-3.957.016-5.433.084-2.822.13-4.148 1.41-4.394 4.393-.07 2.87-.063 3.63-.005 5.5.068 2.223.167 3.39.52 4.1.487.973 1.258 1.637 2.457 1.87 1.477.29 2.148.334 5.92.336H12v-1.89h-.067c-3.136-.002-3.666-.027-4.475-.187-.803-.16-1.127-.473-1.295-.973-.2-.596-.282-1.42-.323-3.754H12V9.5H5.842c.005-2.036.053-2.92.194-3.41.332-1.16 1.157-1.87 2.664-1.928.91-.035 3.3-.038 3.3-.038V0zM12 24c3.766 0 3.957-.016 5.433-.084 2.822-.13 4.148-1.41 4.394-4.393.07-2.87.063-3.63.005-5.5-.068-2.223-.167-3.39-.52-4.1-.487-.973-1.258-1.637-2.457-1.87-1.477-.29-2.148-.334-5.92-.336H12v1.89h.067c3.136.002 3.666.027 4.475.187.803.16 1.127.473 1.295.973.2.596.282 1.42.323 3.754H12V14.5h6.158c-.005 2.036-.053 2.92-.194 3.41-.332 1.16-1.157 1.87-2.664 1.928-.91.035-3.3.038-3.3.038V24zM9 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const OpenthesoLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }}
  >
    <rect width="100" height="100" rx="20" fill="#0D9488" />
    <circle cx="50" cy="25" r="10" fill="white" />
    <circle cx="25" cy="60" r="8" fill="white" />
    <circle cx="50" cy="60" r="8" fill="white" />
    <circle cx="75" cy="60" r="8" fill="white" />
    <line x1="50" y1="25" x2="25" y2="60" stroke="white" strokeWidth="4" />
    <line x1="50" y1="25" x2="50" y2="60" stroke="white" strokeWidth="4" />
    <line x1="50" y1="25" x2="75" y2="60" stroke="white" strokeWidth="4" />
  </svg>
);

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
    role: 'Webmaster del Consorcio ARIANE y del proyecto ANR CARTAS',
    institution: 'Consorcio ARIANE (Huma-Num) / Proyecto ANR CARTAS - Francia',
    date: '2024 - Presente',
    desc: 'Administración, desarrollo y mantenimiento técnico de los sitios web oficiales y las plataformas de difusión científica del Consorcio ARIANE (dentro de la infraestructura Huma-Num) y del proyecto de investigación <a href="http://cartas.huma-num.fr/" target="_blank" rel="noopener noreferrer">ANR CARTAS</a>.'
  },
  {
    role: 'Investigador Post-Doctoral / Ingeniero de Investigación (Proyecto AMIS)',
    institution: 'CNRS / Consorcio ARIANE / TGIR Huma-Num / Université de Poitiers - París/Poitiers, Francia',
    date: '2024 - Presente',
    desc: 'Investigación post-doctoral enfocada en el desarrollo y modelización del asistente de metadatos inteligente AMIS (Advanced Metadata Intelligent System), financiado por el programa europeo Horizon Europe (OSCARS). Encargado de la modelización de metadatos (Dublin Core, alineación con la ontología CAO_CRM) y de la integración de tesauros multilingües normalizados (ISO 25964 en SKOS) con la plataforma Opentheso y la infraestructura Huma-Num.'
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
                  id="tab-btn-formacion"
                  className={`nav-btn ${activeTab === 'formacion' ? 'active' : ''}`}
                  onClick={() => setActiveTab('formacion')}
                >
                  Formación & Talleres
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
            id="m-tab-btn-formacion"
            className={`mobile-nav-btn ${activeTab === 'formacion' ? 'active' : ''}`}
            onClick={() => setActiveTab('formacion')}
          >
            <GraduationCap size={18} />
            <span>Formación</span>
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
                  Soy un investigador colombo-francés cuya carrera se desarrolla en la convergencia entre las humanidades tradicionales y las tecnologías digitales, combinando historia, filología, lingüística, lexicografía y ciencia de los textos. Actualmente me desempeño como ingeniero de investigación en informática y humanidades digitales en el <strong>Centre National de la Recherche Scientifique (CNRS)</strong>, trabajando en el proyecto europeo <strong>AMIS (Advanced Metadata Intelligent System)</strong> financiado por el programa Horizon Europe (OSCARS), y soy miembro del comité de pilotaje científico y webmaster del Consorcio <strong>ARIANE</strong> y del proyecto <strong><a href="http://cartas.huma-num.fr/" target="_blank" rel="noopener noreferrer">ANR CARTAS</a></strong>, dentro de la infraestructura de investigación <strong>Huma-Num</strong>.
                </p>
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2.5rem' }}>
                  Mi formación comenzó con una Licenciatura en Artes Plásticas en la Universidad de Antioquia, complementada con un Diplôme National Supérieur d'Expression Plastique en la École Européenne Supérieure d'Art de Bretagne. Posteriormente obtuve una Maestría en Humanidades Digitales en la Université de Bretagne-Sud y concluí mi doctorado en 2025 en la Université de Montpellier Paul-Valéry con una tesis doctoral centrada en la editorialización de procesos de fe inquisitoriales y su estructuración digital.
                </p>
                
                <div className="profile-socials">
                  <a href="mailto:andres.echavarria@huma-num.fr" className="social-link email" title="Contacto (Email)" id="link-email"></a>
                  <a href="https://gitlab.huma-num.fr/aechavarria" target="_blank" rel="noopener noreferrer" className="social-link gitlab" title="GitLab Huma-Num" id="link-gitlab"></a>
                  <a href="https://github.com/andresecha" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub" id="link-github"></a>
                  <a href="https://cv.hal.science/andres-echavarria" target="_blank" rel="noopener noreferrer" className="social-link hal" title="HAL Open Science" id="link-hal"></a>
                  <a href="https://orcid.org/0000-0002-0332-8808" target="_blank" rel="noopener noreferrer" className="social-link orcid" title="ORCID" id="link-orcid"></a>
                  <a href="https://www.idref.fr/291243665" target="_blank" rel="noopener noreferrer" className="social-link idref" title="IdRef (291243665)" id="link-idref"></a>
                  <a href="https://theses.fr/2025UMPV0021" target="_blank" rel="noopener noreferrer" className="social-link theses" title="Tesis (theses.fr)" id="link-theses"></a>
                </div>
              </div>
            </div>

            {/* Featured Research Cards Grid */}
            <div className="animate-slide-up" style={{ marginTop: '2.5rem', textAlign: 'left' }} id="research-tech-section">
              <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Investigación & Desarrollo Tecnológico</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    <HalLogo size={18} /> Tesis Doctoral & Nakala Datasets
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                    Mi investigación de doctorado (2025, dirigida por G. Williams y K. Benmiloud, accesible en <a href="https://theses.hal.science/tel-05318449v1" target="_blank" rel="noopener noreferrer">theses.hal</a>) derivó en tres conjuntos de datos publicados en <strong>Nakala</strong>: el prototipo de anotación del <a href="https://nakala.fr/10.34847/nkl.aaeej9jp" target="_blank" rel="noopener noreferrer">proceso de Pedro de Cazalla</a>, el <a href="https://nakala.fr/10.34847/nkl.2a4e2h52" target="_blank" rel="noopener noreferrer">tesauro de tipologías inquisitoriales (SKOS)</a> y el <a href="https://nakala.fr/10.34847/nkl.ab374s00" target="_blank" rel="noopener noreferrer">esquema de anotación TEI (ODD, RNG)</a>. La documentación y scripts adicionales se hallan en <a href="https://zenodo.org/records/15035164" target="_blank" rel="noopener noreferrer">Zenodo</a> y <a href="https://gitlab.huma-num.fr/aechavarria/annexesthese" target="_blank" rel="noopener noreferrer">GitLab</a>.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="tool-tag">XML-TEI / SKOS</span>
                    <span className="tool-tag">Opentheso / Nakala</span>
                  </div>
                </div>
                
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    <HalLogo size={18} /> Métricas HTR (CER/WER)
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                    Colaboré en la definición cuantitativa para evaluar el rendimiento de modelos de reconocimiento de manuscritos e impresos antiguos mediante las tasas de error de caracteres (CER) y palabras (WER), publicadas en español (<a href="https://hal.science/hal-05267874v1" target="_blank" rel="noopener noreferrer">hal-05267874v1</a>) y francés (<a href="https://hal.science/hal-05267873v1" target="_blank" rel="noopener noreferrer">hal-05267873v1</a>) en el Consorcio ARIANE.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="tool-tag">Métricas CER/WER</span>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    <AmisLogo size={18} /> Post-Doctorado — Proyecto AMIS
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                    Desde noviembre de 2024, realizo mi investigación post-doctoral en el equipo técnico y científico del proyecto europeo <a href="https://oscars-project.eu/projects/amis-advanced-metadata-intelligent-system" target="_blank" rel="noopener noreferrer">AMIS (Advanced Metadata Intelligent System)</a>, financiado por OSCARS EU (Horizon Europe). Estoy a cargo de la <strong>modelización de metadatos</strong> (Dublin Core, CAO_CRM) y de la integración de tesauros multilingües (370 conceptos estructurados según ISO 25964 en SKOS) con Opentheso y Huma-Num.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="tool-tag">NLP & LLMs (AMIS)</span>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    <PythonLogo size={18} /> Computus y calendario-liturgico
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                    Desarrollé la librería de Python <strong>calendario-liturgico</strong> para calcular fechas litúrgicas mediante el algoritmo de computus de Gauss. El proceso de evolución de este script a una biblioteca reproducible de Ciencia Abierta se describe en mi publicación de Humanistica 2026 (<a href="https://hal.science/hal-05631254v1" target="_blank" rel="noopener noreferrer">hal-05631254v1</a> / <a href="https://anthology.ach.org/volumes/vol0004/du-script-artisanal-l-infrastructure-ouverte-gen-se-enjeux/" target="_blank" rel="noopener noreferrer">Anthology ACH</a>) y está disponible en <a href="https://pypi.org/project/calendario-liturgico/0.1.0/" target="_blank" rel="noopener noreferrer">PyPI</a>.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="tool-tag">computus (Gauss)</span>
                  </div>
                </div>

                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    <OpenthesoLogo size={18} /> Colaboración con Opentheso
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                    Colaboración con el ecosistema de <strong>Opentheso</strong>, un gestor de tesauros multilingüe y de código abierto desarrollado bajo la dirección de <strong>Miled Rousset</strong> (MOM-CNRS). Realicé la traducción completa de su interfaz de administración al castellano y publiqué guías metodológicas sobre la construcción y gestión de tesauros (<a href="https://opentheso.hypotheses.org/4944" target="_blank" rel="noopener noreferrer">buenas prácticas</a>, <a href="https://opentheso.hypotheses.org/4978" target="_blank" rel="noopener noreferrer">conceptos</a> e <a href="https://opentheso.hypotheses.org/5174" target="_blank" rel="noopener noreferrer">importación/exportación</a>).
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="tool-tag">Opentheso</span>
                  </div>
                </div>
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
              <p className="profile-title">Publicaciones Académicas</p>
              <h1>Producción Científica</h1>
              <p>
                Compilación de mi producción científica y publicaciones académicas, que incluye mi tesis doctoral, actas de congresos, informes técnicos y artículos en revistas especializadas sobre humanidades digitales, codificación de textos XML-TEI e HTR.
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
                  <div 
                    key={idx} 
                    className={`card pub-item ${expandedPubs[idx] ? 'expanded' : ''}`} 
                    id={`pub-item-${idx}`}
                    onClick={() => togglePub(idx)}
                  >
                    <span className="pub-type-badge">{getFriendlyDocType(pub.type)}</span>
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
                        <span>Año: {pub.year}</span>
                        {pub.journal && (
                          <>
                            <span>•</span>
                            <span>Revista: {pub.journal}</span>
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
                              <span>Descargar PDF</span>
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
                              <span>Sitio del Editor</span>
                            </a>
                          </>
                        )}
                      </div>
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

        {/* TAB: FORMACIÓN & TALLERES */}
        {activeTab === 'formacion' && (
          <section className="animate-slide-up" id="sec-formacion">
            <div className="section-intro">
              <p className="profile-title">Educación, Docencia y Divulgación</p>
              <h1>Formación & Talleres</h1>
              <p>
                Detalle de mi trayectoria académica formal, actividades de docencia universitaria y la impartición de talleres especializados en humanidades digitales en instituciones internacionales.
              </p>
            </div>

            <div className="formacion-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              
              {/* Column 1: Talleres y Docencia */}
              <div className="card" style={{ padding: '2rem' }}>
                <h2 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Code size={20} /> Docencia & Talleres Impartidos
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Consorcio ARIANE (Huma-Num)</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2024 - Presente</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                      Piloto del GT2 (Adquisición de Datos). Coordinador y docente en talleres especializados sobre <strong>Transkribus</strong> y <strong>eScriptorium</strong> aplicados a la transcripción asistida por ordenador en universidades europeas (como la Universidad Complutense de Madrid y UCLouvain).
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Université Sorbonne Nouvelle (París, Francia)</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2021 - Presente</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                      <strong>Docente en Máster en Humanidades Digitales:</strong> Curso de <em>"Introducción a la gestión de bases de datos en SHS"</em>.<br />
                      <strong>Docente en Máster de Letras Modernas:</strong> Curso de <em>"Metodología de la investigación digital"</em>.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Université de Montpellier Paul-Valéry (Francia)</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2022 - 2024</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                      Asignaturas de LANSAD Espagnol (B1-B2), Méthodologie du travail universitaire y reforzamiento metodológico/disciplinario en las Licencias LLCER y LEA.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Divulgación y Ateliers Invitados</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      • <strong>Campus Condorcet (2023):</strong> Ponencia invitada <em>"Éclairage TEI sur les procédures Inquisitoriales"</em> (GT Outils et pratiques éditoriales).<br />
                      • <strong>Universitat Autònoma de Barcelona (2022):</strong> Seminario <em>"Transkribus y transcripción automática del impreso antiguo"</em>.<br />
                      • <strong>Universidad de Antioquia (Colombia, 2022):</strong> Taller <em>"HTR aplicada a los manuscritos de Don Tomás Carrasquilla"</em>.<br />
                      • <strong>Fête de la Science (2022):</strong> Taller interactivo <em>"Livre ancien et Humanités numériques"</em>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Formación Académica */}
              <div className="card" style={{ padding: '2rem' }}>
                <h2 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} /> Formación Académica
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Doctorado en Estudios Romanes y Humanidades Digitales</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2021 - 2025</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Université de Montpellier Paul-Valéry</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Tesis doctoral: <em>"Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire"</em> (dirigida por G. Williams y K. Benmiloud). Especialización en modelización XML-TEI, vocabularios controlados en SKOS/RDF y HTR.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Máster en Humanidades Numéricas, Letras y Lexicografía</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2018 - 2020</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Université de Bretagne-Sud (Lorient, Francia)</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Procesamiento de corpus lexicográficos antiguos, marcado XML-TEI y bases de datos relacionales aplicadas a diccionarios antiguos (proyecto BasNum).
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>DNSEP (Diplôme National Supérieur d'Expression Plastique)</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2018</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>École Européenne Supérieure d'Art de Bretagne (EESAB Lorient)</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Grado superior homólogo a máster en bellas artes e investigación en artes plásticas y visuales.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Licenciatura en Educación: Artes Plásticas</h3>
                    <span className="cv-date" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>2010 - 2017</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Universidad de Antioquia (Medellín, Colombia)</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Formación profesional en pedagogía artística, bellas artes e historia del arte.
                    </p>
                  </div>
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
