export default {
  ui: {
    navAbout: "About me",
    navPortfolio: "Projects & Design",
    navPublications: "Publications",
    navTools: "Software & Data",
    navFormacion: "Education & Teaching",
    navCv: "CV",
    roleText: "Researcher in Digital Humanities / Your Discipline",
    searchPlaceholder: "Search by title, year, authors...",
    filterAll: "All",
    filterComm: "Conferences",
    filterTheses: "Theses",
    filterReports: "Reports",
    filterBooks: "Books",
    filterChapters: "Chapters",
    filterArticles: "Articles",
    filterThesaurus: "Others",
    noPubsFound: "No publications found matching your search or filters.",
    downloadCv: "View complete CV on HAL / ORCID",
    closeModal: "Close",
    copyright: "Researcher Name. Open source under WTFPL license.",
    footerSustainability: "Hosted sustainably and scalably on GitHub Pages.",
    footerTemplateLink: "Open source under <a href='/LICENSE' target='_blank'>WTFPL</a> license. Based on this <a href='https://github.com/andresecha/personal' target='_blank' rel='noopener noreferrer'>portfolio template</a>.",
    researchSectionTitle: "Research & technological development",
    portfolioSectionTitle: "Featured Projects",
    portfolioSectionIntro: "Gallery of research projects, visual identities, or resources developed in the framework of scientific projects.",
    publicationsSectionTitle: "Scientific Output",
    publicationsSectionIntro: "Compilation of academic publications, including doctoral theses, conference papers, technical reports, and journal articles.",
    toolsSectionTitle: "Software & Research Data",
    toolsSectionIntro: "Tools, scripts, databases, or digital collections developed that align with open science principles.",
    formacionSectionTitle: "Education & Workshops",
    formacionSectionIntro: "Details of formal academic history, university teaching activities, and facilitation of specialized workshops.",
    teachingHeader: "Teaching & Workshops Conducted",
    educationHeader: "Academic Education",
    viewVisualIdentity: "View project details →",
    viewResource: "View Resource",
    emailTooltip: "Contact (E-mail)",
    gitlabTooltip: "GitLab",
    githubTooltip: "GitHub",
    halTooltip: "HAL Open Science",
    orcidTooltip: "ORCID",
    idrefTooltip: "IdRef",
    thesesTooltip: "Thesis",
    shortName: "Your Name",
    pubYear: "Year",
    pubJournal: "Journal",
    pubDownload: "Download PDF",
    pubPublisher: "Publisher Site",
    toolsSectionSubtitle: "Open source, data and resources",
    formacionSectionSubtitle: "Education, teaching and dissemination",
    cvSectionSubtitle: "Professional Journey",
    cvSectionIntro: "Synthesis of academic education and work experience in the scientific ecosystem.",
    logoFoxAlt: "Personal logo",
    langToggleAriaLabel: "Change language",
    themeToggleAriaLabel: "Toggle light and dark mode",
    navPortfolioShort: "Projects",
    navToolsShort: "Software",
    navFormacionShort: "Education"
  },
  profile: {
    name: "Full Name of the Researcher",
    bioParagraph1: `Write the first paragraph of your professional biography here. Describe your field of expertise, your primary institutional affiliation, and the research projects you are currently involved in. You can link to projects or institutions using standard HTML tags like <strong>bold</strong> and <a href="#" target="_blank" rel="noopener noreferrer">external links</a>.`,
    bioParagraph2: `Write the second paragraph of your biography here. You can detail your academic background, PhD, Master's degree, main research lines, or the methodologies you apply in your daily work. This layout is ideal for academic and digital humanities profiles.`
  },
  artworks: [
    {
      id: 'project-1',
      title: 'Project Example 1',
      tag: 'Research / Identity',
      desc: 'Detailed description of your first project. Explain the research context, the problem addressed, and the results obtained. You can describe the technologies used and the milestones achieved under scientific funding.',
      img: '/portfolio/digital_humanities.png'
    },
    {
      id: 'project-2',
      title: 'Project Example 2',
      tag: 'Design / Data',
      desc: 'Detailed description of your second project. Explain the data sources used, the methodological design, and how the FAIR open science principles are integrated into this development.',
      img: '/portfolio/historical_texts.png'
    }
  ],
  researchCards: [
    {
      id: 'research-1',
      logoType: 'generic',
      title: 'Your Doctoral Thesis or Key Project',
      desc: `Summary of your thesis or your key research project. Explain the scientific standard or methodology used. You can include download links to the institutional repository or open access datasets.`
    },
    {
      id: 'research-2',
      logoType: 'generic',
      title: 'Collaborative Project or Consortium',
      desc: `Description of your participation in research consortia or international projects. Link to official sites and the data visualization tools or digital resources you have contributed.`
    }
  ],
  tools: [
    {
      title: 'Software or Tool Name',
      desc: 'Open source library, script, plugin, or software suite developed to process research data. Briefly explain its functionality and usefulness to the community.',
      tags: ['Python', 'XML-TEI', 'API'],
      link: 'https://github.com/your-username',
      buttonText: 'View on GitHub'
    },
    {
      title: 'Dataset / Corpus',
      desc: 'Research data collection published openly in a reliable repository (such as Zenodo or Nakala) complying with the FAIR principles of reusability.',
      tags: ['JSON', 'Metadata', 'FAIR'],
      link: 'https://zenodo.org',
      buttonText: 'Download Data'
    }
  ],
  education: [
    {
      title: 'PhD in Your Field',
      institution: 'University Name / Research Center',
      date: '2021 - 2025',
      desc: 'Description of your PhD thesis. Include the thesis title, scientific advisor, and the main contributions of your research.',
      points: [
        'Key milestone or highlight 1 during the PhD.',
        'Key milestone or highlight 2 during the PhD.'
      ]
    },
    {
      title: 'Master of Science',
      institution: 'University Name',
      date: '2019 - 2021',
      desc: 'Specialization or track completed. Describe your graduation thesis or prominent internship.',
      points: [
        'Academic honors or distinction.',
        'Details about the master\'s thesis.'
      ]
    }
  ],
  teaching: [
    {
      role: 'University Lecturer',
      institution: 'Faculty or Department Name',
      date: '2024 (1 semester)',
      desc: 'Courses or subjects taught at the undergraduate or graduate level. Describe the pedagogical approach and audience.',
      points: [
        'Name of course taught (number of hours).',
        'Key syllabus topics covered (e.g., Digital Humanities, Databases, etc.).'
      ]
    },
    {
      role: 'Specialized Workshop Facilitator',
      institution: 'Research Center / Doctoral School',
      date: '2023 (3 days)',
      desc: 'Series of practical workshops for researchers or advanced students.',
      points: [
        'Intensive workshop on tools or frameworks.',
        'Hands-on methodology and development of guided exercises.'
      ]
    }
  ],
  cvItems: [
    {
      role: 'Research Engineer / Postdoc',
      institution: 'National Research Center / University',
      date: '2025 - Present',
      desc: 'Details of your current professional responsibilities, managed projects, and role in the scientific development team.'
    },
    {
      role: 'Pre-doctoral Researcher (PhD Candidate)',
      institution: 'University or Funding Institute',
      date: '2021 - 2025',
      desc: 'Research activities linked to the PhD, writing articles, teaching, and participation in international conferences.'
    }
  ]
};
