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
  lastUpdated: "2026-09-23",

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
    "I want to deepen my capability in Operations Research and Decision Analytics for industrial and supply-chain systems, gain technical experience in industry and research, and pursue graduate study in the field. In the long run, I hope to contribute to, or build, decision-intelligence and optimization tools that help industrial operations make better decisions.",

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
      "I am a final-year Industrial Engineering student in the International Program at Universitas Islam Indonesia in Yogyakarta, where I study on the Future Global Leaders Scholarship. The thread that runs through my work is a practical one: given the constraints an operation really faces, what is the better decision, and how can we show that it is better?",
      "My earlier projects were classic industrial engineering. I helped manufacture and assemble a hydraulic press in the manufacturing process laboratory, designed a normalized data model for a hospital management system, and worked with my team on an ergonomic, multifunctional pen that received the Best Presentation award at EXPO RSKE 2025. Those projects taught me to see products and processes as systems with users, constraints and trade-offs.",
      "Operations Research changed the way I work. In my second year I let an AI tool solve the linear programming problems on production planning in my Operations Research course, and then I could not rebuild the model myself in the lab session that followed. I later wrote about that experience in a published essay, and since then I have tried to understand every problem from the model up.",
      "Most of my recent work follows the same pattern: define the decision, build a model that is honest about its assumptions, and test it. As a trainee at the Delsim Laboratory I built and validated discrete-event and system-dynamics models in FlexSim and PowerSim. I have used simulation to study the bullwhip effect in a multi-echelon supply chain, queueing analysis to evaluate an RFID parking gate our team built, calibrated machine learning for predictive-maintenance decisions, and optimization for electric-truck routing, wheat-import sourcing and disaster-relief planning.",
      "Sustainability and resilience keep appearing in these problems as real constraints: battery range in electric logistics, post-harvest losses that a better dryer could reduce, road networks that fail together after a flood, and the footprint of the AI tools we use to teach sustainability itself.",
      "Studying in Indonesia as an international student has shaped how I work with people. I have led events and served as the Industrial Engineering ambassador for UII Global, represented Germany at the 12th International Youth Exchange and Conference in Malaysia and Singapore, where I was named Outstanding Delegate, and completed the Aspire Leaders Program."
    ],
    qualities: [
      "Analytical thinking",
      "Systems thinking",
      "Project management",
      "Technical writing",
      "Leadership",
      "Cross-cultural communication",
      "Public speaking",
      "Team collaboration",
      "Learning across disciplines"
    ],
    interests: [
      "Reading and continuous learning",
      "Learning languages",
      "Public speaking",
      "Photography",
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
