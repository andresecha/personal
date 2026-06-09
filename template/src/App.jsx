/**
 * @file App.jsx
 * @description Componente principal de la aplicación para el portafolio académico.
 * Implementa la navegación por pestañas, traducción dinámica (ES/FR/EN),
 * alternancia de modo oscuro/claro, buscador y filtrado de publicaciones,
 * visualización de proyectos en ventana modal y una sección de CV unificada
 * con índice lateral interactivo (scrollspy) para escritorio.
 * 
 * Toutes les fonctions et la logique de présentation sont documentées en espagnol et en français.
 */

import { useState, useEffect } from 'react';
import publicationsData from './data/publications.json';
import { translations } from './locales/index';
import { 
  User, 
  FileText, 
  Palette, 
  Code, 
  ExternalLink, 
  Calendar, 
  Award, 
  Download, 
  Sun, 
  Moon, 
  X,
  GraduationCap,
  Languages,
  Users
} from 'lucide-react';

/* ==========================================================================
   LOGOTIPOS PERSONALIZADOS / LOGOTYPES PERSONNALISÉS (SVG & PNG)
   ========================================================================== */

/**
 * Componentes de logotipo para perfiles académicos e integraciones tecnológicas.
 * Todos estos componentes renderizan imágenes desde la carpeta pública o SVGs.
 */

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

const AmisLogo = ({ size = 18, className = "", theme = "light" }) => (
  <img 
    src={theme === 'dark' ? "/logos/amis-blanc.svg" : "/logos/amis-logo.svg"} 
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

const GithubLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 1024 1024" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
  </svg>
);

/* ==========================================================================
   FUNCIONES AUXILIARES / FONCTIONS UTILITAIRES
   ========================================================================== */

/**
 * Retorna el icono correspondiente según la URL o las etiquetas del recurso.
 * Retourne le logotype adapté selon l'URL ou les tags de la ressource logicielle.
 */
const renderToolIcon = (tool, size = 96) => {
  const link = tool.link.toLowerCase();
  const tags = tool.tags.map(t => t.toLowerCase());
  if (link.includes('pypi.org')) {
    return <PypiLogo size={size} />;
  } else if (link.includes('zenodo.org')) {
    return <ZenodoLogo size={size} />;
  } else if (link.includes('gitlab')) {
    return <GitlabLogo size={size} />;
  } else if (link.includes('nakala.fr')) {
    return <NakalaLogo size={size} />;
  } else if (link.includes('opentheso') || tags.includes('opentheso')) {
    return <OpenthesoLogo size={size} />;
  } else if (link.includes('github.com')) {
    return <GithubLogo size={size} />;
  }
  return <Code size={size * 0.8} />;
};

/**
 * Retorna el logo correcto para las tarjetas de investigación de la página de inicio.
 * Retourne le logo correct pour les cartes de recherche de la page d'accueil.
 */
const renderCardLogo = (logoType, size = 72, theme = 'light') => {
  switch (logoType) {
    case 'theses':
      return <ThesesLogo size={size} />;
    case 'hal':
      return <HalLogo size={size} />;
    case 'ariane':
      return <ArianeLogo size={size} />;
    case 'amis':
      return <AmisLogo size={size * 1.3} theme={theme} />;
    case 'python':
      return <PythonLogo size={size} />;
    case 'opentheso':
      return <OpenthesoLogo size={size} />;
    default:
      return <Code size={size} />;
  }
};

/**
 * Devuelve una etiqueta amigable según el tipo de documento y el idioma seleccionado.
 * Retourne un libellé lisible selon le type de publication et la langue sélectionnée.
 */
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
    },
    en: {
      'COMM': 'Conference Paper',
      'THESE': 'Doctoral Thesis',
      'REPORT': 'Technical Report',
      'PROCEEDINGS': 'Conference Proceedings',
      'OUV': 'Book',
      'COUV': 'Book Chapter',
      'ART': 'Journal Article',
      'THES': 'Documentary Thesaurus'
    }
  };
  return types[lang]?.[type] || (lang === 'es' ? 'Publicación' : 'Publication');
};

/**
 * Identificadores únicos de las secciones del CV para el índice lateral e IntersectionObserver.
 * Identifiants uniques des sections du CV pour l'index de navigation et IntersectionObserver.
 */
const cvSections = [
  'formacion-academica',
  'trayectoria-profesional',
  'comunidad-cientifica',
  'docencia-universitaria',
  'talleres-conferencias',
  'formacion-comunitaria'
];

/* ==========================================================================
   COMPONENTE PRINCIPAL / COMPOSANT PRINCIPAL
   ========================================================================== */

function App() {
  // Estado para el control de idiomas (por defecto: español)
  // État pour la sélection de la langue (par défaut : espagnol)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  // Estado para controlar la pestaña/sección activa en la navegación principal
  // État pour contrôler l'onglet actif dans la navigation principale
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    // Redirecciones de compatibilidad hacia la sección unificada de CV
    // Redirections de compatibilité vers la section unifiée du CV
    if (hash === 'formacion') return 'cv';
    if (cvSections.includes(hash)) return 'cv';
    const validTabs = ['sobre-mi', 'portafolio', 'publicaciones', 'herramientas', 'cv'];
    return validTabs.includes(hash) ? hash : 'sobre-mi';
  });

  // Estado de la sección activa dentro de la pestaña CV (para el scrollspy)
  // État de la sous-section active dans l'onglet CV (pour le scrollspy)
  const [activeSection, setActiveSection] = useState('formacion-academica');

  // Efecto para sincronizar la pestaña según el hash de la URL
  // Effet pour synchroniser l'onglet selon le hash de l'URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'formacion') {
        window.location.hash = 'cv';
        return;
      }
      
      if (cvSections.includes(hash)) {
        setActiveTab('cv');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return;
      }
      
      const validTabs = ['sobre-mi', 'portafolio', 'publicaciones', 'herramientas', 'cv'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (!hash) {
        setActiveTab('sobre-mi');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTab = (tabName, e) => {
    if (e) e.preventDefault();
    window.location.hash = tabName;
  };

  // Efecto de IntersectionObserver para resaltar el enlace correspondiente en el CV durante el desplazamiento
  // Effet IntersectionObserver pour mettre en valeur le lien correspondant dans le CV lors du défilement
  useEffect(() => {
    if (activeTab !== 'cv') return;

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Activa la sección cuando pasa por el centro de la pantalla
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cvSections.forEach(sectionId => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      cvSections.forEach(sectionId => {
        const el = document.getElementById(sectionId);
        if (el) observer.unobserve(el);
      });
    };
  }, [activeTab]);

  // Gestión del tema visual claro y oscuro
  // Gestion du thème visuel clair et sombre
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [lightboxArt, setLightboxArt] = useState(null);
  
  const handleCardClick = (url, e) => {
    // Evita abrir el recurso si se hace clic en botones, enlaces o etiquetas
    // Évite d'ouvrir la ressource si l'utilisateur clique sur un bouton ou tag
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a') || e.target.classList.contains('tool-tag')) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Manejo del correo electrónico seguro contra bots de SPAM
  // Gestion sécurisée de l'e-mail contre les robots collecteurs de SPAM
  const handleEmailClick = (e) => {
    e.preventDefault();
    const user = "nombre.apellido";
    const domain = "tu-institucion.fr";
    window.location.href = `mailto:${user}@${domain}`;
  };
  
  // Estados para el buscador y filtros de la sección de publicaciones
  // États pour le moteur de recherche et filtres de la section publications
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

  // Carga y sincronización del tema visual oscuro/claro con la etiqueta body
  // Chargement et synchronisation du thème avec la balise body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Filtrado lógico de las publicaciones científicas cargadas desde el archivo JSON
  // Filtrage logique des publications scientifiques chargées du fichier JSON
  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pub.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.year.toString().includes(searchQuery);
    const matchesType = typeFilter === 'ALL' || pub.type === typeFilter;
    return matchesSearch && matchesType;
  });

  // Obtiene los tipos únicos de documentos de la lista de publicaciones para generar los filtros automáticamente
  // Extrait les types de documents uniques de la liste pour générer les filtres de façon dynamique
  const availableTypes = ['ALL', ...new Set(publicationsData.map(pub => pub.type))];

  return (
    <>
      {/* Cabecera principal y barra de navegación / En-tête principal et barre de navigation */}
      <header className="header" id="navbar">
        <div className="container nav-container">
          <a 
            href="#sobre-mi" 
            className="logo-text" 
            id="logo-nav" 
            onClick={(e) => navigateToTab('sobre-mi', e)} 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <img src="/logos/zorro.svg" alt={t.ui.logoFoxAlt} className="logo-fox" />
            <span>{t.ui.shortName}</span>
          </a>
          
          <nav>
            <ul className="nav-links">
              <li>
                <button 
                  id="tab-btn-about"
                  className={`nav-btn ${activeTab === 'sobre-mi' ? 'active' : ''}`}
                  onClick={() => navigateToTab('sobre-mi')}
                >
                  {t.ui.navAbout}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-portfolio"
                  className={`nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
                  onClick={() => navigateToTab('portafolio')}
                >
                  {t.ui.navPortfolio}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-pubs"
                  className={`nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
                  onClick={() => navigateToTab('publicaciones')}
                >
                  {t.ui.navPublications}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-tools"
                  className={`nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
                  onClick={() => navigateToTab('herramientas')}
                >
                  {t.ui.navTools}
                </button>
              </li>
              <li>
                <button 
                  id="tab-btn-cv"
                  className={`nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
                  onClick={() => navigateToTab('cv')}
                >
                  {t.ui.navCv}
                </button>
              </li>
            </ul>
          </nav>

          <div className="controls-container">
            {/* Alternador de idioma / Sélecteur de langue */}
            <button 
              id="lang-toggle-btn"
              className="icon-btn lang-btn" 
              onClick={() => setLang(prev => prev === 'es' ? 'fr' : prev === 'fr' ? 'en' : 'es')} 
              aria-label={t.ui.langToggleAriaLabel}
              style={{ fontWeight: 600, fontSize: '0.8rem', paddingLeft: '0.65rem', paddingRight: '0.65rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Languages size={16} />
              <span>{lang === 'es' ? 'FR' : lang === 'fr' ? 'EN' : 'ES'}</span>
            </button>
            
            {/* Alternador de modo oscuro / Bascule de mode sombre */}
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

      {/* Barra de navegación inferior móvil / Barre de navigation mobile inférieure (Fixe au bas de l'écran) */}
      <nav className="mobile-nav" id="mobile-navbar">
        <div className="mobile-nav-container">
          <button 
            id="m-tab-btn-about"
            className={`mobile-nav-btn ${activeTab === 'sobre-mi' ? 'active' : ''}`}
            onClick={() => navigateToTab('sobre-mi')}
          >
            <User size={18} />
            <span>{t.ui.navAbout}</span>
          </button>
          <button 
            id="m-tab-btn-portfolio"
            className={`mobile-nav-btn ${activeTab === 'portafolio' ? 'active' : ''}`}
            onClick={() => navigateToTab('portafolio')}
          >
            <Palette size={18} />
            <span>{t.ui.navPortfolioShort}</span>
          </button>
          <button 
            id="m-tab-btn-pubs"
            className={`mobile-nav-btn ${activeTab === 'publicaciones' ? 'active' : ''}`}
            onClick={() => navigateToTab('publicaciones')}
          >
            <FileText size={18} />
            <span>{t.ui.navPublications}</span>
          </button>
          <button 
            id="m-tab-btn-tools"
            className={`mobile-nav-btn ${activeTab === 'herramientas' ? 'active' : ''}`}
            onClick={() => navigateToTab('herramientas')}
          >
            <Code size={18} />
            <span>{t.ui.navToolsShort}</span>
          </button>
          <button 
            id="m-tab-btn-cv"
            className={`mobile-nav-btn ${activeTab === 'cv' ? 'active' : ''}`}
            onClick={() => navigateToTab('cv')}
          >
            <Award size={18} />
            <span>{t.ui.navCv}</span>
          </button>
        </div>
      </nav>

      {/* Contenedor principal de contenidos / Zone principale de contenu */}
      <main className="main-content container animate-fade-in">
        
        {/* PESTAÑA: SOBRE MÍ / ONGLET : À PROPOS */}
        {activeTab === 'sobre-mi' && (
          <section className="animate-slide-up" id="sec-about">
            <div className="profile-grid">
              <div className="profile-avatar-container">
                <div className="profile-avatar-glow">
                  {!avatarError ? (
                    <img 
                      src="/images/profile.jpg" 
                      alt={t.profile.name} 
                      className="profile-avatar"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      {t.ui.shortName ? t.ui.shortName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'IN'}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="profile-title">{t.ui.roleText}</p>
                <h1>{t.profile.name}</h1>
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: t.profile.bioParagraph1 }} />
                <p className="profile-bio" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2.5rem' }} dangerouslySetInnerHTML={{ __html: t.profile.bioParagraph2 }} />
                
                {/* Enlaces a perfiles académicos y redes / Liens vers les profils académiques et réseaux */}
                <div className="profile-socials">
                  <a href="#contacto" onClick={handleEmailClick} className="social-link email" title={t.ui.emailTooltip} id="link-email"></a>
                  <a href="https://gitlab.example.org/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link gitlab" title={t.ui.gitlabTooltip} id="link-gitlab"></a>
                  <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link github" title={t.ui.githubTooltip} id="link-github"></a>
                  <a href="https://cv.hal.science/tu-perfil" target="_blank" rel="noopener noreferrer" className="social-link hal" title={t.ui.halTooltip} id="link-hal"></a>
                  <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" className="social-link orcid" title={t.ui.orcidTooltip} id="link-orcid"></a>
                  <a href="https://www.idref.fr/tu-idref" target="_blank" rel="noopener noreferrer" className="social-link idref" title={t.ui.idrefTooltip} id="link-idref"></a>
                  <a href="https://theses.fr/tu-tesis" target="_blank" rel="noopener noreferrer" className="social-link theses" title={t.ui.thesesTooltip} id="link-theses"></a>
                </div>
              </div>
            </div>

            {/* Tarjetas de investigación destacada / Cartes de recherche à la une */}
            <div className="animate-slide-up" style={{ marginTop: '2.5rem', textAlign: 'left' }} id="research-tech-section">
              <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>{t.ui.researchSectionTitle}</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                {t.researchCards.map((card) => (
                  <div 
                    key={card.id} 
                    className="card research-card" 
                    style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                    onClick={(e) => handleCardClick(card.link, e)}
                  >
                    <div className="research-icon-wrapper">
                      {renderCardLogo(card.logoType, 72, theme)}
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      {card.title}
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

        {/* PESTAÑA: PORTAFOLIO (DISEÑO Y ARTE) / ONGLET : PORTFOLIO */}
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
                    <p dangerouslySetInnerHTML={{ __html: art.desc }}></p>
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

        {/* PESTAÑA: PRODUCCIÓN CIENTÍFICA / ONGLET : PUBLICATIONS */}
        {activeTab === 'publicaciones' && (
          <section className="animate-slide-up" id="sec-publications">
            <div className="section-intro">
              <p className="profile-title">{t.ui.navPublications}</p>
              <h1>{t.ui.publicationsSectionTitle}</h1>
              <p>{t.ui.publicationsSectionIntro}</p>
            </div>

            {/* Barra de búsqueda y filtros interactivos / Barre de recherche et filtres */}
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

            {/* Lista interactiva de publicaciones / Liste des publications */}
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

        {/* PESTAÑA: SOFTWARE Y RECURSOS / ONGLET : LOGICIELS */}
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

        {/* PESTAÑA: CV UNIFICADO (FORMACIÓN, EXPERIENCIA, COMUNIDAD Y DOCENCIA) / ONGLET : CV */}
        {activeTab === 'cv' && (
          <section className="animate-slide-up" id="sec-cv">
            <div className="section-intro" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <p className="profile-title">{t.ui.cvSectionSubtitle}</p>
                <h1>{t.ui.navCv}</h1>
                <p>{t.ui.cvSectionIntro}</p>
              </div>
              <a href="https://cv.hal.science/tu-perfil" target="_blank" rel="noopener noreferrer" className="btn-primary" id="download-cv-btn">
                <Download size={16} />
                <span>{t.ui.downloadCv}</span>
              </a>
            </div>

            {/* Layout de CV con barra lateral e índice (scrollspy) / Structure de CV avec index collant */}
            <div className="cv-layout">
              {/* Barra lateral pegajosa (oculta en pantallas de tablet y móviles) / Index collant (caché sur mobile) */}
              <aside className="cv-sidebar">
                <nav className="cv-nav-index">
                  <ul>
                    <li>
                      <a 
                        href="#formacion-academica" 
                        className={`cv-nav-link ${activeSection === 'formacion-academica' ? 'active' : ''}`}
                      >
                        {t.ui.educationHeader}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#trayectoria-profesional" 
                        className={`cv-nav-link ${activeSection === 'trayectoria-profesional' ? 'active' : ''}`}
                      >
                        {t.ui.cvProfessionalHeader}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#comunidad-cientifica" 
                        className={`cv-nav-link ${activeSection === 'comunidad-cientifica' ? 'active' : ''}`}
                      >
                        {t.ui.cvScientificHeader}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#docencia-universitaria" 
                        className={`cv-nav-link ${activeSection === 'docencia-universitaria' ? 'active' : ''}`}
                      >
                        {t.ui.universityTeachingHeader}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#talleres-conferencias" 
                        className={`cv-nav-link ${activeSection === 'talleres-conferencias' ? 'active' : ''}`}
                      >
                        {t.ui.workshopsHeader}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#formacion-comunitaria" 
                        className={`cv-nav-link ${activeSection === 'formacion-comunitaria' ? 'active' : ''}`}
                      >
                        {t.ui.communityTeachingHeader}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>

              {/* Contenido principal del CV / Contenu textuel du CV */}
              <div className="cv-content">
                {/* 1. Formación académica / Formation Académique */}
                <div id="formacion-academica" style={{ scrollMarginTop: '7.5rem', marginBottom: '4rem' }}>
                  <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={22} /> {t.ui.educationHeader}
                  </h2>
                  <div className="cv-timeline">
                    {t.education.map((item, idx) => (
                      <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <div className="cv-header">
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.title}</h3>
                          <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                        </div>
                        <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                        <p 
                          className="cv-desc" 
                          style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Trayectoria profesional / Parcours Professionnel */}
                <div id="trayectoria-profesional" style={{ scrollMarginTop: '7.5rem', marginBottom: '4rem' }}>
                  <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={22} /> {t.ui.cvProfessionalHeader}
                  </h2>
                  <div className="cv-timeline">
                    {t.cvItems.map((item, idx) => (
                      <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <div className="cv-header">
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.role}</h3>
                          <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                        </div>
                        <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                        <p 
                          className="cv-desc" 
                          style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Comunidad científica / Communauté Scientifique */}
                {t.scientificCommunity && (
                  <div id="comunidad-cientifica" style={{ scrollMarginTop: '7.5rem', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={22} /> {t.ui.cvScientificHeader}
                    </h2>
                    <div className="cv-timeline">
                      {t.scientificCommunity.map((item, idx) => (
                        <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                          <div className="cv-header">
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.role}</h3>
                            <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                          </div>
                          <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                          <p 
                            className="cv-desc" 
                            style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Docencia universitaria / Enseignement Universitaire */}
                {t.universityTeaching && (
                  <div id="docencia-universitaria" style={{ scrollMarginTop: '7.5rem', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <GraduationCap size={22} /> {t.ui.universityTeachingHeader}
                    </h2>
                    <div className="cv-timeline">
                      {t.universityTeaching.map((item, idx) => (
                        <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                          <div className="cv-header">
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.role}</h3>
                            <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                          </div>
                          <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                          <p 
                            className="cv-desc" 
                            style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Talleres y conferencias / Ateliers et Conférences */}
                {t.teaching && (
                  <div id="talleres-conferencias" style={{ scrollMarginTop: '7.5rem', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Code size={22} /> {t.ui.workshopsHeader}
                    </h2>
                    <div className="cv-timeline">
                      {t.teaching.map((item, idx) => (
                        <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                          <div className="cv-header">
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.role}</h3>
                            <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                          </div>
                          <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                          <p 
                            className="cv-desc" 
                            style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Procesos de formación comunitaria / Formations Communautaires */}
                {t.communityTeaching && (
                  <div id="formacion-comunitaria" style={{ scrollMarginTop: '7.5rem', marginBottom: '2rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={22} /> {t.ui.communityTeachingHeader}
                    </h2>
                    <div className="cv-timeline">
                      {t.communityTeaching.map((item, idx) => (
                        <div key={idx} className="cv-item animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                          <div className="cv-header">
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item.role}</h3>
                            <span className="cv-date" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                          </div>
                          <p className="cv-institution" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.institution}</p>
                          <p 
                            className="cv-desc" 
                            style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}
                            dangerouslySetInnerHTML={{ __html: item.desc }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Ventana modal (Lightbox) para imágenes del portafolio / Boîte modale (Lightbox) pour les images */}
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
              <p className="lightbox-desc" dangerouslySetInnerHTML={{ __html: lightboxArt.desc }}></p>
            </div>
          </div>
        </div>
      )}

      {/* Pie de página / Pied de page */}
      <footer className="footer">
        <div className="container">
          <p dangerouslySetInnerHTML={{ __html: t.ui.copyright }} />
          <p style={{ fontSize: '0.75rem' }}>
            {t.ui.footerSustainability}
          </p>
          <p style={{ fontSize: '0.75rem' }} dangerouslySetInnerHTML={{ __html: t.ui.footerTemplateLink }} />
        </div>
      </footer>
    </>
  );
}

export default App;
