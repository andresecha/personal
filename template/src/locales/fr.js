export default {
  ui: {
    navAbout: "À propos",
    navPortfolio: "Projets & Design",
    navPublications: "Publications",
    navTools: "Logiciels & Données",
    navFormacion: "Formation & Enseignement",
    navCv: "CV",
    roleText: "Chercheur en Humanités Numériques / Votre Discipline",
    searchPlaceholder: "Rechercher par titre, année, auteurs...",
    filterAll: "Toutes",
    filterComm: "Congrès",
    filterTheses: "Thèses",
    filterReports: "Rapports",
    filterBooks: "Livres",
    filterChapters: "Chapitres",
    filterArticles: "Articles",
    filterThesaurus: "Autres",
    noPubsFound: "Aucune publication ne correspond à votre recherche ou à vos filtres.",
    downloadCv: "Voir le CV complet sur HAL / ORCID",
    closeModal: "Fermer",
    copyright: "Copyright &copy; 2026 Nom du Chercheur. Distribué sous licence libre <a href='/LICENSE' target='_blank'>WTFPL</a>.",
    footerSustainability: "Hébergé de manière durable sur GitHub Pages.",
    footerTemplateLink: "Basé sur ce <a href='https://github.com/andresecha/personal' target='_blank' rel='noopener noreferrer'>modèle de portfolio</a>.",
    researchSectionTitle: "Recherche & développement technologique",
    portfolioSectionTitle: "Projets à la une",
    portfolioSectionIntro: "Galerie de projets de recherche, d'identités visuelles ou de ressources développées dans le cadre de projets scientifiques.",
    publicationsSectionTitle: "Production Scientifique",
    publicationsSectionIntro: "Compilation de publications académiques, comprenant thèses de doctorat, communications en congrès, rapports techniques et articles de revue.",
    toolsSectionTitle: "Logiciels & Données de Recherche",
    toolsSectionIntro: "Outils, scripts, bases de données ou collections numériques développés conformément aux principes de la science ouverte.",
    formacionSectionTitle: "Formation & Ateliers",
    formacionSectionIntro: "Détails du parcours académique formel, des activités d'enseignement universitaire et de l'animation d'ateliers spécialisés.",
    teachingHeader: "Enseignement & Ateliers Animés",
    educationHeader: "Formation Académique",
    viewVisualIdentity: "Voir les détails du projet →",
    viewResource: "Voir la Ressource",
    emailTooltip: "Contact (E-mail)",
    gitlabTooltip: "GitLab",
    githubTooltip: "GitHub",
    halTooltip: "HAL Open Science",
    orcidTooltip: "ORCID",
    idrefTooltip: "IdRef",
    thesesTooltip: "Thèse",
    shortName: "Votre Nom",
    pubYear: "Année",
    pubJournal: "Revue",
    pubDownload: "Télécharger le PDF",
    pubPublisher: "Site de l'Éditeur",
    toolsSectionSubtitle: "Open source, données et ressources",
    formacionSectionSubtitle: "Éducation, enseignement et médiation",
    cvSectionSubtitle: "Parcours Professionnel",
    cvSectionIntro: "Synthèse des études supérieures et de l'expérience professionnelle dans l'écosystème scientifique.",
    logoFoxAlt: "Logo personnel",
    langToggleAriaLabel: "Changer de langue",
    themeToggleAriaLabel: "Basculer entre mode clair et sombre",
    navPortfolioShort: "Projets",
    navToolsShort: "Logiciels",
    navFormacionShort: "Formation"
  },
  profile: {
    name: "Nom Complet du Chercheur",
    bioParagraph1: `Écrivez ici le premier paragraphe de votre biographie professionnelle. Décrivez votre domaine d'expertise, votre affiliation institutionnelle principale et les projets de recherche dans lesquels vous êtes actuellement impliqué. Vous pouvez ajouter des liens vers des projets ou des institutions à l'aide de balises HTML standard telles que <strong>gras</strong> et <a href="#" target="_blank" rel="noopener noreferrer">des liens externes</a>.`,
    bioParagraph2: `Écrivez ici le deuxième paragraphe de votre biographie. Vous pouvez détailler votre parcours universitaire, votre doctorat, votre master, vos principaux axes de recherche ou les méthodologies que vous appliquez dans votre travail quotidien. Cette mise en page est idéale pour les profils académiques et en humanités numériques.`
  },
  artworks: [
    {
      id: 'project-1',
      title: 'Exemple de Projet 1',
      tag: 'Recherche / Identité',
      desc: 'Description détaillée de votre premier projet. Expliquez le contexte de la recherche, la problématique abordée et les résultats obtenus. Vous pouvez décrire les technologies utilisées et les jalons atteints grâce aux financements scientifiques.',
      img: '/portfolio/digital_humanities.png'
    },
    {
      id: 'project-2',
      title: 'Exemple de Projet 2',
      tag: 'Design / Données',
      desc: 'Description détaillée de votre deuxième projet. Expliquez les sources de données exploitées, la méthodologie mise en œuvre et la façon dont les principes de la science ouverte (FAIR) sont intégrés dans ce développement.',
      img: '/portfolio/historical_texts.png'
    }
  ],
  researchCards: [
    {
      id: 'research-1',
      logoType: 'generic',
      title: 'Votre Thèse de Doctorat ou Projet Phare',
      desc: `Résumé de votre thèse ou de votre projet de recherche clé. Présentez le standard scientifique ou la méthodologie employée. Vous pouvez inclure des liens de téléchargement vers l'archive institutionnelle ou les jeux de données en accès libre.`
    },
    {
      id: 'research-2',
      logoType: 'generic',
      title: 'Projet Collaboratif ou Consortium',
      desc: `Description de votre participation à des consortiums de recherche ou à des projets internationaux. Ajoutez des liens vers les sites officiels et les outils de visualisation de données ou les ressources numériques que vous avez apportés.`
    }
  ],
  tools: [
    {
      title: 'Nom du Logiciel ou de l\'Outil',
      desc: 'Bibliothèque, script, plugin ou suite logicielle open source développée pour traiter des données de recherche. Expliquez brièvement son fonctionnement et son utilité pour la communauté.',
      tags: ['Python', 'XML-TEI', 'API'],
      link: 'https://github.com/votre-nom',
      buttonText: 'Voir sur GitHub'
    },
    {
      title: 'Jeu de Données / Corpus',
      desc: 'Collection de données de recherche publiée en libre accès sur un entrepôt de confiance (comme Zenodo ou Nakala) conformément aux principes FAIR de réutilisabilité.',
      tags: ['JSON', 'Metadata', 'FAIR'],
      link: 'https://zenodo.org',
      buttonText: 'Télécharger Données'
    }
  ],
  education: [
    {
      title: 'Doctorat dans votre Spécialité',
      institution: 'Nom de l\'Université / Centre de Recherche',
      date: '2021 - 2025',
      desc: 'Description de votre thèse de doctorat. Mentionnez le titre de la thèse, le directeur de thèse et les principales contributions de vos recherches.',
      points: [
        'Jalon important ou distinction durant le doctorat.',
        'Détails sur la valorisation scientifique des travaux.'
      ]
    },
    {
      title: 'Master de Recherche',
      institution: 'Nom de l\'Université',
      date: '2019 - 2021',
      desc: 'Spécialisation ou parcours suivi. Décrivez votre mémoire de recherche ou un stage significatif.',
      points: [
        'Mention ou distinction académique.',
        'Détails sur le sujet du mémoire.'
      ]
    }
  ],
  teaching: [
    {
      role: 'Chargé d\'Enseignement',
      institution: 'Nom de la Faculté ou du Département',
      date: '2024 (1 semestre)',
      desc: 'Cours ou travaux dirigés dispensés au niveau licence ou master. Décrivez l\'approche pédagogique et le public visé.',
      points: [
        'Intitulé du cours dispensé (nombre d\'heures).',
        'Thématiques clés abordées (ex. Humanités Numériques, Bases de Données, etc.).'
      ]
    },
    {
      role: 'Animateur d\'Atelier Spécialisé',
      institution: 'Centre de Recherche / École Doctorale',
      date: '2023 (3 jours)',
      desc: 'Série d\'ateliers pratiques pour chercheurs ou étudiants avancés.',
      points: [
        'Atelier intensif d\'outils ou de frameworks.',
        'Méthodologie active et encadrement d\'exercices dirigés.'
      ]
    }
  ],
  cvItems: [
    {
      role: 'Ingénieur de Recherche / Postdoc',
      institution: 'Centre National de Recherche / Université',
      date: '2025 - Présent',
      desc: 'Détails de vos responsabilités professionnelles actuelles, projets gérés et rôle au sein de l\'équipe de développement scientifique.'
    },
    {
      role: 'Doctorant Contractuel (PhD Candidate)',
      institution: 'Université ou Institution de Financement',
      date: '2021 - 2025',
      desc: 'Activités de recherche liées à la thèse, rédaction d\'articles, enseignement et participation à des conférences internationales.'
    }
  ]
};
