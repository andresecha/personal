export default {
  ui: {
    navAbout: "About me",
    navPortfolio: "Design & Art",
    navPublications: "Publications",
    navTools: "Software & Data",
    navFormacion: "Teaching",
    navCv: "CV",
    roleText: "Digital Humanities & Text Mining",
    searchPlaceholder: "Search by title, year, authors...",
    filterAll: "All",
    filterComm: "Conferences",
    filterTheses: "Theses",
    filterReports: "Reports",
    filterBooks: "Books",
    filterChapters: "Chapters",
    filterArticles: "Articles",
    filterThesaurus: "Thesauri",
    noPubsFound: "No publications matched your search or filter.",
    downloadCv: "View full CV on HAL",
    closeModal: "Close",
    copyright: "Andrés Felipe Echavarría Peláez. Developed with React & Vite.",
    footerSustainability: "Sustainably and scalably hosted on GitHub Pages. Publications synced via HAL and IdRef APIs.",
    researchSectionTitle: "Research & Tech Development",
    portfolioSectionTitle: "Visual Identity & Brand Design",
    portfolioSectionIntro: "A gallery of graphic design and visual identity projects developed for scientific projects, digital humanities research consortia, and personal branding.",
    publicationsSectionTitle: "Scientific Production",
    publicationsSectionIntro: "Compilation of my scientific production and academic publications, including my doctoral thesis, conference proceedings, technical reports, and journal articles on digital humanities, XML-TEI encoding, and HTR.",
    toolsSectionTitle: "Research Software & Data",
    toolsSectionIntro: "Developing libraries, scripts, encoding schemas, and FAIR datasets to facilitate the application of technologies in digital humanities, history, and linguistics.",
    formacionSectionTitle: "Teaching & Workshops",
    formacionSectionIntro: "Details of my formal academic background, university teaching activities, and specialized digital humanities workshops conducted at international institutions.",
    teachingHeader: "Teaching & Workshops Conducted",
    educationHeader: "Academic Background",
    viewVisualIdentity: "View Visual Identity →",
    viewResource: "View Resource",
    emailTooltip: "Contact (Email)",
    gitlabTooltip: "GitLab Huma-Num",
    githubTooltip: "GitHub",
    halTooltip: "HAL Open Science",
    orcidTooltip: "ORCID",
    idrefTooltip: "IdRef",
    thesesTooltip: "Thesis",
    shortName: "Andrés Echavarría",
    pubYear: "Year",
    pubJournal: "Journal",
    pubDownload: "Download PDF",
    pubPublisher: "Publisher Site",
    toolsSectionSubtitle: "Open Source, Data and Resources",
    formacionSectionSubtitle: "Education, Teaching and Outreach",
    cvSectionSubtitle: "Professional Path",
    cvSectionIntro: "Structured summary of my training and work experience in the French digital ecosystem.",
    logoFoxAlt: "Zorro Logo",
    langToggleAriaLabel: "Cambiar de idioma a español",
    themeToggleAriaLabel: "Toggle light and dark mode",
    navPortfolioShort: "Art",
    navToolsShort: "Software",
    navFormacionShort: "Teaching"
  },
  profile: {
    name: "Andrés Felipe Echavarría Peláez",
    bioParagraph1: `I am a Colombian-French researcher specializing in the intersection of traditional humanistic disciplines and digital technologies. My work integrates methods from history, philology, linguistics, lexicography, and text mining. I currently work as a research engineer in digital humanities at the <strong>Centre National de la Recherche Scientifique (CNRS)</strong>. In this role, I participate in the development of <strong>AMIS (Advanced Metadata Intelligent System)</strong>, a European project funded by the Horizon Europe program (OSCARS). I am also part of the scientific steering committee as webmaster for the <strong>ARIANE</strong> Consortium and the <strong><a href="http://cartas.huma-num.fr/" target="_blank" rel="noopener noreferrer">ANR CARTAS</a></strong> project, both initiatives integrated within the <strong>Huma-Num</strong> research infrastructure.`,
    bioParagraph2: `My academic career began with a Bachelor's Degree in Visual Arts from the Universidad de Antioquia, complemented in France by a National Higher Diploma in Plastic Expression from the École Européenne Supérieure d'Art de Bretagne. Subsequently, I obtained a Master's Degree in Digital Humanities, Literature and Lexicography from the Université de Bretagne-Sud, followed by a PhD in Romance Studies and Digital Humanities from the Université de Montpellier Paul-Valéry. My doctoral thesis, using Spanish Inquisition trials as a case study, proposes a practical application of the theory of <a href="https://networkcultures.org/wp-content/uploads/2018/03/Marcello_Vitali-Rosati_OnEditorialization-complete.pdf" target="_blank" rel="noopener noreferrer">editorialization</a> formulated by Marcello Vitali-Rosati. This research represents an effort to promote open science and develop methodological frameworks that foster academic collaboration around historical data.`
  },
  artworks: [
    {
      id: 'logo-zorro',
      title: 'The Fox (Personal Brand)',
      tag: 'Visual Identity',
      desc: 'Visual identity design for the personal brand "El Zorro" (The Fox). Inspired by the figure of Joaquín Murrieta (mid-19th century), who stood up to external interests to defend Latin American resources, this graphic concept symbolizes the reclaiming of situated critical thinking and intellectual resistance. The fox represents biological and cultural adaptability, capable of inhabiting any environment. Its geometric and dynamic design evokes cleverness, the active search for solutions to complex problems, and the ability to blend in and integrate with the surroundings. The visual composition plays on the duality of the masked character, articulating tensions between legality and justice, life and historical narrative.',
      img: '/portfolio/zorro_presentation.png'
    },
    {
      id: 'logo-amis',
      title: 'AMIS Project (OSCARS)',
      tag: 'Visual Identity',
      desc: 'This graphic concept represents the visual identity of the AMIS (<em>Advanced Metadata Intelligent System</em>) project. The initiative is part of the Horizon Europe program and receives backing from the OSCARS (<em>Open Science Clusters Action for Research and Society</em>) framework. The logo design conveys intelligent automation and semantic structuring. The layout highlights the integration of research metadata. This work aims to support open science and data interoperability.',
      img: '/portfolio/amis_presentation.png'
    },
    {
      id: 'logo-ariane',
      title: 'ARIANE Consortium (Huma-Num)',
      tag: 'Visual Identity',
      desc: 'Graphic identity developed for the ARIANE Consortium (Analyses, Recherches, Intelligence Artificielle et Nouvelles Éditions numériques), backed by the French research infrastructure IR* Huma-Num. The visual concept represents the synergy and interdisciplinary dialogue between the humanities and advanced computing methods, ranging from digital publishing and artificial intelligence (HTR, NLP) to semantic analysis and deep reading.',
      img: '/portfolio/ariane_presentation.png'
    },
    {
      id: 'logo-cartas',
      title: 'ANR CARTAS Project',
      tag: 'Visual Identity',
      desc: 'Visual identity design for the CARTAS project ("Pablo Picasso en toutes lettres"), funded by the Agence Nationale de la Recherche (ANR). The logo and its branding symbolize the digitization, analysis, and relational mapping of Pablo Picasso\'s historical correspondence, combining digital humanities techniques and knowledge graphs to map the artist\'s network of contacts between 1900 and 1973.',
      img: '/portfolio/cartas_presentation.png'
    }
  ],
  researchCards: [
    {
      id: 'tesis',
      logoType: 'theses',
      title: 'Doctoral Thesis & Nakala Datasets',
      desc: `This research (2025, directed by Geoffrey Clive Williams and available for <a href="https://theses.hal.science/tel-05318449v1/file/2025_ECHAVARRIA-PELAEZ_arch.pdf" target="_blank" rel="noopener noreferrer">download on HAL</a>) introduces a formal model to structure the diplomatic and substantive content of inquisitorial files under the XML-TEI standard. The model defines <a href="https://aechavarria.gitpages.huma-num.fr/annexesthese/" target="_blank" rel="noopener noreferrer">custom coding guidelines compatible with TEI recommendations</a>, integrating a controlled vocabulary that classifies and organizes document units according to their diplomatic form, procedural role, and jurisdictional scope. Access the <a href="https://opentheso.huma-num.fr/?idt=Inq_Thes" target="_blank" rel="noopener noreferrer">Thesaurus interface on Opentheso</a>.`,
      tags: ['XML-TEI / SKOS', 'Opentheso / Nakala'],
      link: 'https://theses.hal.science/tel-05318449v1/file/2025_ECHAVARRIA-PELAEZ_arch.pdf'
    },
    {
      id: 'metricas',
      logoType: 'hal',
      title: 'ATR Metrics (CER/WER)',
      desc: `Conceived as a support resource for researchers and paleographers in both Spanish and French-speaking communities, this work systematizes evaluation criteria for automatic text transcription (ATR) models. It is structured as a set of methodological sheets that explain the foundations of key metrics (such as CER and WER), examine their practical limitations, and present scientific debates surrounding quality measurement in historical handwritten documents. These guides address recurring methodological questions in collaborative digital transcription projects (available in <a href="https://hal.science/hal-05267874v1" target="_blank" rel="noopener noreferrer">Spanish</a> and <a href="https://hal.science/hal-05267873v1" target="_blank" rel="noopener noreferrer">French</a>).`,
      tags: ['CER/WER Metrics', 'ATR / HTR'],
      link: 'https://hal.science/hal-05267874v1'
    },
    {
      id: 'postdoc',
      logoType: 'amis',
      title: 'Post-Doctorate — AMIS Project',
      desc: `Since September 2025 I participate in the infrastructure development of the European web application AMIS (<em>Advanced Metadata Intelligent System</em>). The OSCARS initiative and the Horizon Europe program fund this project. The system automates metadata creation and enrichment through machine learning and natural language processing. My duties center on metadata modeling and vocabulary interoperability. We integrate multilingual thesauri into the Huma-Num Opentheso platform. Users can enrich their research data with external European repositories. You can access the resource on <a href="https://opentheso.huma-num.fr/?idt=43" target="_blank" rel="noopener noreferrer">Opentheso</a>.`,
      tags: ['NLP & LLMs (AMIS)'],
      link: 'https://oscars-project.eu/projects/amis-advanced-metadata-intelligent-system'
    },
    {
      id: 'computus',
      logoType: 'python',
      title: 'Computus and calendario-liturgico',
      desc: `I developed the Python library <strong>calendario-liturgico</strong> to automate the calculation of Christian calendar feasts, resolving the mathematical complexity inherent to the Julian calendar (prior to October 1582). Born from the practical need to normalize temporal references in XML-TEI within inquisitorial trials, the package adopts a hybrid approach: it executes the Gauss-Meeus algorithm for Gregorian dates and integrates a database of 1,052 Julian dates (532–1582) verified against historical medieval tables (such as Beda or Grosseteste). This provides a rigorous environment that prevents chronological anachronisms in time attribute coding. Available on <a href="https://pypi.org/project/calendario-liturgico/0.1.0/" target="_blank" rel="noopener noreferrer">PyPI</a>.`,
      tags: ['computus (Gauss)', 'Julian Calendar'],
      link: 'https://pypi.org/project/calendario-liturgico/0.1.0/'
    },
    {
      id: 'colab-opentheso',
      logoType: 'opentheso',
      title: 'Collaboration with Opentheso',
      desc: `As part of my active collaboration with the open-source thesaurus manager <strong>Opentheso</strong>, led by <strong>Miled Rousset</strong> (MOM-CNRS), I translated the entire administration interface into Spanish. I also published a series of methodological articles aimed at the scientific community: "<a href="https://opentheso.hypotheses.org/4944" target="_blank" rel="noopener noreferrer">Best practices for structuring a thesaurus</a>", "<a href="https://opentheso.hypotheses.org/4978" target="_blank" rel="noopener noreferrer">Building a thesaurus</a>" (a practical guide to the main features of the platform), and "<a href="https://opentheso.hypotheses.org/5174" target="_blank" rel="noopener noreferrer">Importing and Exporting a Thesaurus</a>".`,
      tags: ['Opentheso'],
      link: 'https://opentheso.hypotheses.org/4944'
    },
    {
      id: 'tesauro-inq',
      logoType: 'opentheso',
      title: 'Thesaurus of Inquisitorial Typologies (Opentheso)',
      desc: `I developed a bilingual (Spanish/French) controlled vocabulary under the <strong>SKOS</strong> standard for indexing inquisitorial trial documents. Designed to integrate with <strong>XML-TEI</strong> and <strong>ODD</strong> schemas for validation, it is based on the thesis of B. Santiago Medina and is part of my doctoral research. Available on the Huma-Num institutional Opentheso platform.`,
      tags: ['SKOS / RDF', 'XML-TEI ODD', 'Semantic Web'],
      link: 'https://opentheso.huma-num.fr/?idt=Inq_Thes'
    }
  ],
  tools: [
    {
      title: 'calendario-liturgico (PyPI)',
      desc: 'Python library to calculate Christian liturgical calendar dates, addressing Julian calendar complexities (532-1582) and normalizing temporal data in XML-TEI schemas. Its scientific foundation and historical validation with medieval sources are presented in the paper "Du script artisanal à l\'infrastructure ouverte : genèse, enjeux et fondements de Calendario litúrgico" (Humanistica 2026 Colloquium).',
      tags: ['Python', 'Computus', 'Gauss', 'PyPI', 'Humanistica', 'Open Science'],
      link: 'https://pypi.org/project/calendario-liturgico/0.1.0/',
      buttonText: 'View on PyPI'
    },
    {
      title: 'RDF to TEI ODD / Taxonomy Converter (Zenodo)',
      desc: 'Python scripts on Zenodo for converting a SKOS RDF thesaurus (exported from Opentheso) into XML formats conforming to the TEI (valList for ODD and structured category/taxonomy), ensuring traceability of concepts.',
      tags: ['Python', 'RDF', 'SKOS', 'TEI', 'Zenodo', 'Semantic Web'],
      link: 'https://zenodo.org/records/15044448',
      buttonText: 'View on Zenodo'
    },
    {
      title: 'XML-TEI Information Extraction Scripts (Zenodo)',
      desc: 'Collection of Python tools and XSLT stylesheets on Zenodo to validate TEI annotation schemas applied to inquisitorial trials and extract typologies (recusations via spaCy, accusations and responses, xml:id assignment, and CSV reporting).',
      tags: ['Python', 'XSLT', 'XML-TEI', 'Zenodo', 'Extraction'],
      link: 'https://zenodo.org/records/15035164',
      buttonText: 'View on Zenodo'
    },
    {
      title: 'Doctoral Thesis Appendix (GitLab)',
      desc: 'Institutional repository on Huma-Num GitLab hosting the source code, validation schemas, and technical support documentation developed for the PhD thesis "Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire".',
      tags: ['GitLab', 'Huma-Num', 'TEI', 'SKOS', 'Documentation'],
      link: 'https://gitlab.huma-num.fr/aechavarria/annexesthese',
      buttonText: 'View on GitLab Huma-Num'
    },
    {
      title: 'Pedro de Cazalla Trial (Nakala)',
      desc: 'Dataset published on Nakala (10.34847/nkl.aaeej9jp) containing the complete XML/TEI annotation of the inquisitorial trial of Valladolid (1558-1559) against Pedro de Cazalla, a curate accused of Lutheranism, serving as the annotation scheme prototype for the thesis.',
      tags: ['Nakala', 'XML-TEI', 'Inquisition', 'Pedro de Cazalla', 'Dataset'],
      link: 'https://nakala.fr/10.34847/nkl.aaeej9jp',
      buttonText: 'View Dataset on Nakala'
    },
    {
      title: 'Thesaurus of Inquisitorial Document Types (Nakala)',
      desc: 'Bilingual (SKOS/RDF) controlled vocabulary published on Nakala (10.34847/nkl.2a4e2h52) for indexing trial documents in inquisitorial files, structured under the ISO 25964 standard and integrated with the TEI.',
      tags: ['Nakala', 'SKOS', 'RDF', 'Controlled Vocabulary', 'Opentheso'],
      link: 'https://nakala.fr/10.34847/nkl.2a4e2h52',
      buttonText: 'View Thesaurus on Nakala'
    },
    {
      title: 'TEI Annotation Schema for Trials (Nakala)',
      desc: 'XML validation schema structured on Nakala (10.34847/nkl.ab374s00) to encode historical trials. Includes ODD (One Document Does it all) specification, RelaxNG (RNG/RNC), XML Schema (XSD), and documentation in ODT.',
      tags: ['Nakala', 'ODD', 'RelaxNG', 'RNC', 'XSD', 'Validation'],
      link: 'https://nakala.fr/10.34847/nkl.ab374s00',
      buttonText: 'View Schema on Nakala'
    },
    {
      title: 'Opentheso Translation and Documentation (Hypotheses)',
      desc: 'Complete translation of the Opentheso administration interface into Spanish, with methodological guides: "Best practices for structuring a thesaurus", "Building a thesaurus", and "Importing and Exporting a Thesaurus".',
      tags: ['Opentheso', 'Translation', 'Documentation', 'ARIANE', 'Hypotheses'],
      link: 'https://opentheso.hypotheses.org/5174',
      buttonText: 'View on Hypotheses'
    }
  ],
  cvItems: [
    {
      role: 'Webmaster of the ARIANE Consortium and the ANR CARTAS Project',
      institution: 'ARIANE Consortium (Huma-Num) / ANR CARTAS Project - France',
      date: '2024 - Present',
      desc: 'Administration, development, and technical maintenance of the official websites and scientific dissemination platforms of the ARIANE Consortium (within the Huma-Num infrastructure) and the <a href="http://cartas.huma-num.fr/" target="_blank" rel="noopener noreferrer">ANR CARTAS</a> research project.'
    },
    {
      role: 'Post-Doctoral Researcher / Research Engineer (AMIS Project)',
      institution: 'CNRS / ARIANE Consortium / TGIR Huma-Num / Université de Poitiers - Paris/Poitiers, France',
      date: 'September 2025 - Present',
      desc: 'Post-doctoral research dedicated to the development of the AMIS (<em>Advanced Metadata Intelligent System</em>) web application. The European program Horizon Europe and the OSCARS initiative fund this project. My work includes metadata modeling and the integration of controlled vocabularies. I collaborate directly with the ARIANE, CAHIER, CORLI 2, and Biblissima+ consortia to link multilingual thesauri.'
    },
    {
      role: 'Lecturer (Chargé de Cours)',
      institution: 'Université Sorbonne Nouvelle - Paris, France',
      date: '2021 - Present',
      desc: 'Teaching courses in the Master of Digital Humanities ("Introduction to database management in SHS") and Master of Modern Letters ("Methodology of digital research").'
    },
    {
      role: 'Leader of Working Group WG2 (Data Acquisition)',
      institution: 'ARIANE Consortium, Huma-Num - Paris, France',
      date: '2024 - Present',
      desc: 'Coordinator of the group focused on data acquisition and computer-assisted transcription (HTR/OCR). Coordination and organization of specialized workshops on Transkribus and eScriptorium at various European universities (Madrid Complutense, UCLouvain, etc.).'
    },
    {
      role: 'PhD in Romance Studies and Digital Humanities',
      institution: 'Université de Montpellier Paul-Valéry - Montpellier, France',
      date: '2021 - 2025',
      desc: 'Defended in June 2025, doctoral thesis titled "Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire", supervised by Geoffrey Clive Williams. Specialization in TEI modeling of historical documents, semantic taxonomies in SKOS/RDF, and Open Science principles.'
    },
    {
      role: 'Doctoral Candidate and Digital Corpus Editor (ANR-D4R Project)',
      institution: 'IRIEC - Université Paul-Valéry Montpellier 3 / Universitat de Barcelona',
      date: '2021 - 2025',
      desc: 'Research on the interactive and visual exploration of a corpus on the 16th-century Spanish Inquisition. Modeling and representing egocentered networks from XML-TEI annotations and training HTR models.'
    },
    {
      role: 'Data Engineer (CAHIER Consortium)',
      institution: 'CNRS / Université de Poitiers - France',
      date: 'April - October 2021',
      desc: 'Migration and structuring of scientific databases in SHS according to FAIR principles. Optimization of XML-TEI files.'
    },
    {
      role: 'Master in Digital Humanities, Literature and Lexicography',
      institution: 'Université de Bretagne-Sud - Lorient, France',
      date: '2018 - 2020',
      desc: 'Specialization in historical lexicography and digital processing. Work on the BasNum project (ANR-18-CE38-0003) for the diplomatic markup of Furetière\'s Dictionnaire Universel (1690-1725) and training automatic models.'
    },
    {
      role: 'Bachelor\'s Degree in Education: Visual Arts',
      institution: 'Universidad de Antioquia - Medellín, Colombia',
      date: '2010 - 2017',
      desc: 'Teacher training and visual arts. Complemented in 2018 with a National Higher Diploma in Plastic Expression (DNSEP) at the École Européenne Supérieure d\'Art de Bretagne (EESAB Lorient).'
    }
  ],
  teaching: [
    {
      institution: "ARIANE Consortium (Huma-Num)",
      date: "2024 - Present",
      desc: "Leader of WG2 (Data Acquisition). Coordinator and instructor in specialized workshops on <strong>Transkribus</strong> and <strong>eScriptorium</strong> applied to computer-assisted transcription in European universities (such as Universidad Complutense de Madrid and UCLouvain)."
    },
    {
      institution: "Université Sorbonne Nouvelle (Paris, France)",
      date: "2021 - Present",
      desc: "<strong>Lecturer in Master of Digital Humanities:</strong> Course <em>\"Introduction to database management in SHS\"</em>.<br /><strong>Lecturer in Master of Modern Letters:</strong> Course <em>\"Methodology of digital research\"</em>."
    },
    {
      institution: "Université de Montpellier Paul-Valéry (France)",
      date: "2022 - 2024",
      desc: "Courses in LANSAD Spanish (B1-B2), University Work Methodology, and reinforcement in LLCER and LEA."
    },
    {
      institution: "Outreach and Invited Workshops",
      desc: "• <strong>Campus Condorcet (2023):</strong> Invited lecture <em>\"Éclairage TEI sur les procédures Inquisitoriales\"</em> (GT Outils et pratiques éditoriales).<br />• <strong>Universitat Autònoma de Barcelona (2022):</strong> Seminar <em>\"Transkribus and automatic transcription of old prints\"</em>.<br />• <strong>Universidad de Antioquia (Colombia, 2022):</strong> Workshop <em>\"HTR applied to the manuscripts of Don Tomás Carrasquilla\"</em>.<br />• <strong>Fête de la Science (2022):</strong> Interactive workshop <em>\"Old books and digital humanities\"</em>."
    }
  ],
  education: [
    {
      title: "PhD in Romance Studies and Digital Humanities",
      institution: "Université de Montpellier Paul-Valéry",
      date: "2021 - 2025",
      desc: "Doctoral thesis: <em>\"Éditorialisation des procès de foi espagnols : annotation textuelle et thésaurus documentaire\"</em> (supervised by G. Williams). Specialization in XML-TEI modeling, SKOS/RDF controlled vocabularies, and HTR."
    },
    {
      title: "Master in Digital Humanities, Literature and Lexicography",
      institution: "Université de Bretagne-Sud (Lorient, France)",
      date: "2018 - 2020",
      desc: "Processing of historical lexicographical corpora, XML-TEI markup, and relational databases applied to old dictionaries (BasNum project)."
    },
    {
      title: "DNSEP (National Higher Diploma in Plastic Expression)",
      institution: "École Européenne Supérieure d'Art de Bretagne (EESAB Lorient)",
      date: "2018",
      desc: "Higher degree equivalent to a master's in fine arts and research in plastic and visual arts."
    },
    {
      title: "Bachelor's Degree in Education: Visual Arts",
      institution: "Universidad de Antioquia (Medellín, Colombia)",
      date: "2010 - 2017",
      desc: "Professional training in art education, fine arts, and art history."
    }
  ]
};
