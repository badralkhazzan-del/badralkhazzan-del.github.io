/*
 * SITE PROFILE
 * Identity, positioning, portrait, CV file and page-level settings.
 * Every page reads from here, so a change here updates the whole site.
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.site = {
  name: "Badr Aldeen Al-Khazan",
  shortName: "Badr Aldeen",
  initials: "BA",

  // Shown under the name in the hero and in the footer.
  identity: [
    "Industrial Engineering",
    "Operations Research",
    "Decision Analytics",
    "Supply Chain & Sustainable Systems"
  ],

  statement:
    "I model, analyze and optimize industrial and supply-chain systems using simulation, optimization, data and AI, with a focus on efficiency, resilience and sustainability.",

  // Current stage, one line.
  stage:
    "Final-year B.Sc. Industrial Engineering (International Program) student at Universitas Islam Indonesia.",

  location: "Yogyakarta, Indonesia",

  // Update this whenever the portfolio content changes (YYYY-MM-DD).
  lastUpdated: "2026-09-26",

  // Final public address of the site. Change it here and in the <meta property="og:*"> tags
  // if the site moves (see README, "Changing the site address").
  url: "https://badralkhazzan-del.github.io/",

  portrait: {
    // Base path without extension; .webp and .jpg versions exist.
    src: "assets/profile/badr-aldeen",
    small: "assets/profile/badr-aldeen-480",
    width: 800,
    height: 1000,
    alt: "Portrait of Badr Aldeen Al-Khazan in a dark suit and tie, smiling"
  },

  cv: {
    file: "assets/Badr_Aldeen_CV.pdf",
    // Image of page 1, shown where the browser cannot display PDFs (regenerate when the CV changes; see README).
    preview: "assets/cv-preview",
    previewW: 1241,
    previewH: 1754,
    updated: "2026-09-23",
    note: "For references or further details, please get in touch by email."
  },

  // What Badr is looking for (from the long-term direction in the Source of Truth).
  openTo: [
    "Technical internships in operations research, supply chain or industrial analytics",
    "Research collaboration in optimization, simulation and decision analytics",
    "Graduate study opportunities in operations research and related fields"
  ],

  direction:
    "Next, I want to deepen my work in Operations Research and Decision Analytics through industry experience and graduate study, and in the long run build decision tools that help industrial operations make better choices.",

  // Home page focus areas. "evidence" lists research/project ids used as examples.
  focusAreas: [
    {
      title: "Optimization & Operations Research",
      text: "Routing, sourcing and allocation models that turn real constraints into better decisions.",
      evidence: ["project:green-vrp", "research:wheat-cvar", "research:relief-prepositioning"]
    },
    {
      title: "Simulation & Stochastic Modeling",
      text: "Discrete-event, system-dynamics and Monte Carlo models for systems that behave under uncertainty.",
      evidence: ["research:bullwhip", "experience:delsim"]
    },
    {
      title: "Decision Analytics & AI",
      text: "Statistics, queueing and machine learning used as decision support and judged by the decisions they lead to.",
      evidence: ["research:predictive-maintenance", "project:sigap"]
    },
    {
      title: "Supply Chain & Sustainable Systems",
      text: "Inventory dynamics, electric-vehicle logistics, post-harvest loss and supply-chain governance.",
      evidence: ["research:bullwhip", "project:ai-phl", "research:scor-governance"]
    }
  ],

  // What is happening now (Home page).
  now: [
    "Completing the final year of my B.Sc. in Industrial Engineering (expected 2027).",
    "Developing research on green vehicle routing for electric delivery trucks."
  ],

  about: {
    story: [
      "I am a final-year Industrial Engineering student in the International Program at Universitas Islam Indonesia in Yogyakarta, where I study on the Future Global Leaders Scholarship. My work keeps returning to one practical question: given the constraints an operation really faces, what is the better decision, and how can we show that it is better?",
      "Operations Research is where my interest settled, because it turns a messy operational problem into a decision that can be tested. Most of my work follows the same pattern: define the decision, build a model that is honest about its assumptions, and test it, using simulation, queueing analysis, machine learning and optimization on problems that range from supply chains to electric-truck routing and disaster relief.",
      "Sustainability and resilience keep appearing in these problems as real constraints, such as battery range in electric logistics or road networks that fail together after a flood. Studying in Indonesia as an international student has also shaped how I work with people, from leading events for UII Global to representing Germany at IYEC 12, where I was named Outstanding Delegate."
    ],
    qualities: [
      "Analytical thinking",
      "Systems thinking",
      "Project management",
      "Technical writing",
      "Leadership",
      "Cross-cultural communication"
    ],
    interests: [
      "Reading and continuous learning",
      "Learning languages",
      "Travel and cultural exploration",
      "Nature and outdoor activities",
      "Volunteering and community work"
    ]
  },

  // Method vocabulary used to connect research and projects (About page "methods map").
  methods: {
    "optimization": "Optimization",
    "routing": "Vehicle routing",
    "stochastic-programming": "Stochastic programming",
    "simulation": "Simulation",
    "queueing": "Queueing analysis",
    "statistics": "Statistical analysis",
    "machine-learning": "Machine learning",
    "risk": "Risk analysis",
    "supply-chain": "Supply chain & logistics",
    "sustainability": "Sustainability",
    "thermal-design": "Engineering design",
    "ergonomics": "Ergonomics & usability",
    "prototyping": "Prototyping",
    "data-modeling": "Data modeling",
    "manufacturing": "Manufacturing processes",
    "qualitative": "Document & framework analysis"
  },

  // Methods shown on the About page map (the core of the current direction).
  aboutMethods: ["optimization", "routing", "stochastic-programming", "simulation", "queueing", "statistics", "machine-learning", "supply-chain"],

  nav: [
    { id: "about", label: "About", href: "about.html" },
    { id: "research", label: "Research", href: "research.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "experience", label: "Experience", href: "experience.html" },
    { id: "awards", label: "Awards", href: "awards.html" },
    { id: "education", label: "Education & Skills", href: "education.html" },
    { id: "cv", label: "CV", href: "cv.html" }
  ]
};
