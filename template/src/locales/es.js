export default {
  ui: {
    navAbout: "Sobre mí",
    navPortfolio: "Proyectos & Diseño",
    navPublications: "Publicaciones",
    navTools: "Software & Datos",
    navFormacion: "Formación",
    navCv: "CV",
    roleText: "Investigador en Humanidades Digitales / Tu Disciplina",
    searchPlaceholder: "Buscar por título, año, autores...",
    filterAll: "Todas",
    filterComm: "Congresos",
    filterTheses: "Tesis",
    filterReports: "Informes",
    filterBooks: "Libros",
    filterChapters: "Capítulos",
    filterArticles: "Artículos",
    filterThesaurus: "Otros",
    noPubsFound: "No se encontraron publicaciones que coincidan con la búsqueda o filtro.",
    downloadCv: "Ver CV completo en HAL / ORCID",
    closeModal: "Cerrar",
    copyright: "Copyright &copy; 2026 Nombre del Investigador. Distribuido bajo la licencia libre <a href='/LICENSE' target='_blank'>WTFPL</a>.",
    footerSustainability: "Alojado de manera sostenible en GitHub Pages.",
    footerTemplateLink: "Basado en esta <a href='https://github.com/andresecha/personal' target='_blank' rel='noopener noreferrer'>plantilla de portafolio</a>.",
    researchSectionTitle: "Investigación & desarrollo tecnológico",
    portfolioSectionTitle: "Proyectos destacados",
    portfolioSectionIntro: "Galería de proyectos de investigación, identidades visuales o recursos desarrollados en el marco de proyectos científicos.",
    publicationsSectionTitle: "Producción científica",
    publicationsSectionIntro: "Compilación de publicaciones académicas, que incluye tesis doctorales, actas de congresos, informes técnicos y artículos en revistas especializadas.",
    toolsSectionTitle: "Software & datos de investigación",
    toolsSectionIntro: "Herramientas, scripts, bases de datos o colecciones digitales desarrolladas que responden a los principios de ciencia abierta.",
    formacionSectionTitle: "Formación & talleres",
    formacionSectionIntro: "Detalle de trayectoria académica formal, actividades de docencia universitaria y facilitación de talleres especializados.",
    teachingHeader: "Docencia & talleres impartidos",
    educationHeader: "Formación académica",
    viewVisualIdentity: "Ver detalles del proyecto →",
    viewResource: "Ver Recurso",
    emailTooltip: "Contacto (E-mail)",
    gitlabTooltip: "GitLab",
    githubTooltip: "GitHub",
    halTooltip: "HAL Open Science",
    orcidTooltip: "ORCID",
    idrefTooltip: "IdRef",
    thesesTooltip: "Tesis",
    shortName: "Tu Nombre",
    pubYear: "Año",
    pubJournal: "Revista",
    pubDownload: "Descargar PDF",
    pubPublisher: "Sitio del Editor",
    toolsSectionSubtitle: "Código abierto, datos y recursos",
    formacionSectionSubtitle: "Educación, docencia y divulgación",
    cvSectionSubtitle: "Trayectoria profesional",
    cvSectionIntro: "Síntesis de formación académica y experiencia laboral en el ecosistema científico.",
    logoFoxAlt: "Logotipo personal",
    langToggleAriaLabel: "Cambiar de idioma",
    themeToggleAriaLabel: "Alternar modo claro y oscuro",
    navPortfolioShort: "Proyectos",
    navToolsShort: "Software",
    navFormacionShort: "Formación"
  },
  profile: {
    name: "Nombre Completo del Investigador",
    bioParagraph1: `Escribe aquí el primer párrafo de tu biografía profesional. Describe tu área de especialidad, tu afiliación institucional principal y los proyectos de investigación en los que participas actualmente. Puedes enlazar a proyectos o instituciones usando etiquetas HTML estándares como <strong>negrita</strong> y <a href="#" target="_blank" rel="noopener noreferrer">enlaces externos</a>.`,
    bioParagraph2: `Escribe aquí el segundo párrafo de tu biografía. Puedes detallar tu formación académica, doctorado, maestría, líneas de investigación principales o las metodologías que empleas en tu trabajo diario. Este diseño es ideal para perfiles académicos y de humanidades digitales.`
  },
  artworks: [
    {
      id: 'proyecto-1',
      title: 'Ejemplo de Proyecto 1',
      tag: 'Investigación / Identidad',
      desc: 'Descripción detallada de tu primer proyecto. Explica el contexto de la investigación, el problema abordado y los resultados obtenidos. Puedes describir las tecnologías empleadas y las metas logradas en el marco de la financiación científica.',
      img: '/portfolio/digital_humanities.png'
    },
    {
      id: 'proyecto-2',
      title: 'Ejemplo de Proyecto 2',
      tag: 'Diseño / Datos',
      desc: 'Descripción detallada de tu segundo proyecto. Explica las fuentes de datos utilizadas, el diseño metodológico y cómo se integran los principios FAIR de ciencia abierta en este desarrollo.',
      img: '/portfolio/historical_texts.png'
    }
  ],
  researchCards: [
    {
      id: 'investigacion-1',
      logoType: 'generic',
      title: 'Tu Tesis Doctoral o Proyecto Principal',
      desc: `Resumen de tu tesis o de tu proyecto de investigación clave. Explica el estándar científico o la metodología empleada. Puedes incluir enlaces de descarga al repositorio institucional o a los conjuntos de datos en acceso abierto.`
    },
    {
      id: 'investigacion-2',
      logoType: 'generic',
      title: 'Proyecto de Colaboración o Consorcio',
      desc: `Descripción de tu participación en consorcios de investigación o proyectos internacionales. Enlaza a los sitios oficiales y a las herramientas de visualización de datos o recursos digitales que hayas aportado.`
    }
  ],
  tools: [
    {
      title: 'Nombre del Software o Herramienta',
      desc: 'Librería, script, plugin o suite de software de código abierto desarrollado para procesar datos de investigación. Explica brevemente su funcionamiento y su utilidad para la comunidad.',
      tags: ['Python', 'XML-TEI', 'API'],
      link: 'https://github.com/tu-usuario',
      buttonText: 'Ver en GitHub'
    },
    {
      title: 'Dataset / Corpus de Datos',
      desc: 'Colección de datos de investigación publicados de forma abierta en un repositorio confiable (como Zenodo o Nakala) cumpliendo los principios FAIR de reusabilidad.',
      tags: ['JSON', 'Metadata', 'FAIR'],
      link: 'https://zenodo.org',
      buttonText: 'Descargar Datos'
    }
  ],
  education: [
    {
      title: 'Doctorado en tu Especialidad',
      institution: 'Nombre de la Universidad / Centro de Investigación',
      date: '2021 - 2025',
      desc: 'Descripción de tu tesis doctoral. Incluye el título de la tesis, director científico y las principales contribuciones de tu investigación.',
      points: [
        'Hito o logro destacado 1 durante el doctorado.',
        'Hito o logro destacado 2 durante el doctorado.'
      ]
    },
    {
      title: 'Maestría / Máster en Ciencias',
      institution: 'Nombre de la Universidad',
      date: '2019 - 2021',
      desc: 'Especialización o mención cursada. Describe tu trabajo de investigación de grado o pasantía destacada.',
      points: [
        'Promoción o distinción académica.',
        'Detalles sobre la tesis de maestría.'
      ]
    }
  ],
  teaching: [
    {
      role: 'Profesor / Docente Universitario',
      institution: 'Nombre de la Facultad o Departamento',
      date: '2024 (1 semestre)',
      desc: 'Cátedra o materias impartidas a nivel de grado o posgrado. Describe el enfoque pedagógico y la audiencia.',
      points: [
        'Nombre del curso impartido (número de horas).',
        'Temarios clave cubiertos (ej. Humanidades Digitales, Bases de Datos, etc.).'
      ]
    },
    {
      role: 'Animador de Taller Especializado',
      institution: 'Centro de Investigación / Escuela Doctoral',
      date: '2023 (3 días)',
      desc: 'Serie de talleres prácticos para investigadores o estudiantes avanzados.',
      points: [
        'Taller intensivo de herramientas o frameworks.',
        'Metodología práctica y desarrollo de ejercicios dirigidos.'
      ]
    }
  ],
  cvItems: [
    {
      role: 'Ingeniero de Investigación / Postdoc',
      institution: 'Centro Nacional de Investigación / Universidad',
      date: '2025 - Presente',
      desc: 'Detalles de tus responsabilidades profesionales actuales, proyectos gestionados y funciones en el equipo de desarrollo científico.'
    },
    {
      role: 'Investigador Pre-doctoral (PhD Candidate)',
      institution: 'Universidad o Instituto Financiador',
      date: '2021 - 2025',
      desc: 'Labores de investigación vinculadas al doctorado, redacción de artículos, docencia y participación en congresos internacionales.'
    }
  ]
};
