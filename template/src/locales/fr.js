/**
 * @file fr.js
 * @description Traductions en français pour le modèle de portfolio académique.
 * Ce fichier contient toutes les chaînes de texte pour l'interface utilisateur, la biographie et les données
 * d'exemple pour les sections du portfolio (projets, publications, outils et CV).
 */

export default {
  // Chaînes de texte pour l'interface utilisateur (UI)
  ui: {
    navAbout: "À propos",
    navPortfolio: "Projets & Design",
    navPublications: "Publications",
    navTools: "Logiciels & Données",
    navFormacion: "Formation",
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
    cvProfessionalHeader: "Parcours professionnel",
    cvScientificHeader: "Communauté scientifique",
    universityTeachingHeader: "Enseignement universitaire",
    workshopsHeader: "Ateliers et conférences",
    communityTeachingHeader: "Formations communautaires",
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
  
  // Données de profil
  profile: {
    name: "Nom Complet du Chercheur",
    bioParagraph1: `Écrivez ici le premier paragraphe de votre biographie professionnelle. Décrivez votre domaine d'expertise, votre affiliation institutionnelle principale et les projets de recherche dans lesquels vous êtes actuellement impliqué. Vous pouvez ajouter des liens vers des projets ou des institutions à l'aide de balises HTML standard telles que <strong>gras</strong> et <a href="#" target="_blank" rel="noopener noreferrer">des liens externes</a>.`,
    bioParagraph2: `Écrivez ici le deuxième paragraphe de votre biographie. Vous pouvez détailler votre parcours universitaire, votre doctorat, votre master, vos principaux axes de recherche ou les méthodologies que vous appliquez dans votre travail quotidien. Cette mise en page est idéale pour les profils académiques et en humanités numériques.`
  },
  
  // Projets ou créations graphiques
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
  
  // Cartes de recherche
  researchCards: [
    {
      id: 'research-1',
      logoType: 'generic',
      title: 'Votre Thèse de Doctorat ou Projet Phare',
      desc: `Résumé de votre thèse ou de votre projet de recherche clé. Présentez le standard scientifique ou la méthodologie employée. Vous pouvez inclure des liens de téléchargement vers l'archive institutionnelle ou les jeux de données en accès libre.`,
      tags: ['Méthodologie', 'Science Ouverte'],
      link: 'https://example.org'
    },
    {
      id: 'research-2',
      logoType: 'generic',
      title: 'Projet Collaboratif ou Consortium',
      desc: `Description de votre participation à des consortiums de recherche ou à des projets internationaux. Ajoutez des liens vers les sites officiels et les outils de visualisation de données ou les ressources numériques que vous avez apportés.`,
      tags: ['Consortium', 'Données Ouvertes'],
      link: 'https://example.org'
    }
  ],
  
  // Logiciels et données
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
  
  // Parcours universitaire
  education: [
    {
      title: 'Doctorat dans votre Spécialité',
      institution: 'Nom de l\'Université / Centre de Recherche',
      date: '2021 - 2025',
      desc: 'Description de votre thèse de doctorat. Mentionnez le titre de la thèse, le directeur de thèse et les principales contributions de vos recherches.'
    },
    {
      title: 'Master de Recherche',
      institution: 'Nom de l\'Université',
      date: '2019 - 2021',
      desc: 'Spécialisation ou parcours suivi. Décrivez votre mémoire de recherche ou un stage significatif.'
    }
  ],
  
  // Parcours professionnel
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
  ],
  
  // Contribution à la communauté scientifique
  scientificCommunity: [
    {
      role: 'Évaluateur externe / Membre de comité',
      institution: 'Revue Scientifique / Association Académique',
      date: '2025 - Présent',
      desc: 'Participation à des comités d\'évaluation scientifique, relecture d\'articles (peer-review) et organisation de colloques universitaires.'
    }
  ],
  
  // Activités d'enseignement universitaire
  universityTeaching: [
    {
      role: 'Chargé d\'Enseignement',
      institution: 'Nom de l\'Université',
      date: '2023 - 2024',
      desc: 'Cours ou travaux dirigés dispensés au niveau licence ou master. Conception de programmes et évaluation académique.'
    }
  ],
  
  // Ateliers animés et conférences invitées
  teaching: [
    {
      role: 'Animateur d\'Atelier Spécialisé / Conférencier',
      institution: 'Centre de Recherche / École Doctorale',
      date: '2023',
      desc: 'Ateliers pratiques intensifs orientés vers l\'apprentissage de compétences techniques spécifiques pour les chercheurs et étudiants.'
    }
  ],
  
  // Formations populaires ou engagement social
  communityTeaching: [
    {
      role: 'Enseignant en Contexte Populaire (Engagement Social)',
      institution: 'Association Locale / Centre Culturel',
      date: '2022',
      desc: 'Planification et animation d\'ateliers éducatifs ouverts au grand public afin de démocratiser l\'accès aux connaissances.'
    }
  ]
};
