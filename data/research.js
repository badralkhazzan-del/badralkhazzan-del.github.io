/*
 * RESEARCH & PUBLICATIONS
 *
 * HOW TO UPDATE A STATUS
 *   Change the `status` field of one item. Allowed values are the keys of
 *   PORTFOLIO.researchStatuses below. The badge, grouping, Home page, linked
 *   projects and search-engine data all update automatically.
 *
 * WHEN A PAPER IS PUBLISHED
 *   status: "published", set `venue`, `year`, and add the official link in `links`.
 *   Add `doi` (without https://doi.org/) only when an official DOI exists.
 *
 * RULES
 *   Never add a DOI, journal, volume, date or link that is not official.
 *   Under-review and in-progress manuscripts are NOT linked or downloadable.
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.researchStatuses = {
  "published":        { label: "Published",              order: 1, note: "Publicly available through an official repository or publisher." },
  "accepted":         { label: "Accepted / Forthcoming", order: 2, note: "Accepted for publication. No public link until the official page is live." },
  "conference":       { label: "Conference",             order: 3, note: "Accepted for conference presentation." },
  "under-review":     { label: "Under Review",           order: 4, note: "Submitted and under review. Summary only; the manuscript is not public." },
  "in-progress":      { label: "Research in Progress",   order: 5, note: "Ongoing research. Summary only." },
  "research-project": { label: "Research Project",       order: 6, note: "Completed research work shown without a publication-status claim." }
};

// Name used to highlight the site owner in author lists.
PORTFOLIO.authorSelf = "Badr Aldeen Al-Khazan";

PORTFOLIO.research = [
  {
    id: "ai-critical-thinking",
    short: "AI dependence and critical thinking",
    title: "How Depending on AI Can Impact the Analytical Skills and Critical Thinking of Young People",
    type: "Essay",
    status: "published",
    year: 2026,
    venue: "Universitas Islam Indonesia Repository",
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "An essay arguing that students' dependence on AI is a response to how learning is evaluated rather than a sign of laziness, and that it can quietly erode critical thinking. Drawing on my own experience in an Operations Research course, it proposes a simple change to ordinary assignments: students reason first and record their approach, then use AI to challenge that reasoning.",
    topics: ["AI in education", "Critical thinking", "Cognitive offloading"],
    methods: ["qualitative"],
    links: [{ label: "View in UII Repository", url: "https://dspace.uii.ac.id/handle/123456789/66776" }],
    featured: false
  },
  {
    id: "germany-digital-framework",
    short: "Germany DIGITAL Cooperative Framework",
    title: "Germany's DIGITAL Cooperative Framework: Advancing Sustainable, Inclusive, and Innovative Global Digital Infrastructure",
    type: "Position paper",
    status: "published",
    year: 2025,
    venue: "Universitas Islam Indonesia Repository",
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "Position paper written as the delegate of Germany in the UNDP council of the 12th International Youth Exchange and Conference (IYEC 12), on digital innovation for sustainable industry and infrastructure. It proposes the DIGITAL Cooperative Framework: data sovereignty, infrastructure access, green digital transformation, innovation through industrial alliances, talent and skills, AI ethics and regulation, and localization and inclusion.",
    topics: ["Digital infrastructure", "Sustainable industrialization", "SDG 9"],
    methods: ["sustainability", "qualitative"],
    links: [{ label: "View in UII Repository", url: "https://dspace.uii.ac.id/handle/123456789/58910" }],
    relatedAward: "iyec12",
    featured: false
  },
  {
    id: "bullwhip",
    short: "Bullwhip effect simulation",
    title: "Simulation-Based Analysis of the Bullwhip Effect in a Multi-Echelon Bottled Water Supply Chain",
    type: "Journal article",
    status: "accepted",
    year: 2026,
    venue: null, // Add the journal name only once the official publication page is live.
    statusDetail: "Accepted for publication; currently in production",
    authors: ["Badr Aldeen Al-Khazan", "Agus Mansur"],
    summary:
      "A reproducible discrete-time simulation of a three-stage bottled-water supply chain (retailer, distributor, manufacturer) in which each stage follows a weekly order-up-to policy with moving-average forecasts, variable lead times, safety stock and batching. Across 1,000 replications, both ordering interfaces amplified relative demand variability, measured consistently as a coefficient-of-variation ratio. The model is a hypothetical scenario and makes no claim about a real company.",
    topics: ["Bullwhip effect", "Inventory policy", "Multi-echelon supply chain"],
    methods: ["simulation", "supply-chain", "statistics"],
    tools: ["Python", "NumPy"],
    links: [],
    featured: true
  },
  {
    id: "predictive-maintenance",
    short: "Predictive maintenance calibration",
    title: "Calibration and Cost-Sensitive Threshold Selection for Imbalanced Predictive Maintenance: An AI4I 2020 Study",
    type: "Conference paper",
    status: "conference",
    year: 2026,
    venue: "TMIC 2026",
    statusDetail: "Accepted for presentation",
    authors: ["Badr Aldeen Al-Khazan", "Muhammad Ridwan Andi Purnomo"],
    summary:
      "Examines how class-imbalance handling, probability calibration and alarm-threshold choice interact in predictive maintenance on the public AI4I 2020 benchmark. Resampling with SMOTE gave no consistent ranking gain and inflated predicted probabilities, so cost-based thresholds applied to them performed poorly. Training on the original distribution and choosing the alarm threshold by validation-set cost was the most stable strategy across the cost ratios tested.",
    topics: ["Predictive maintenance", "Probability calibration", "Cost-sensitive decisions"],
    methods: ["machine-learning", "statistics", "risk"],
    tools: ["Python", "scikit-learn", "imbalanced-learn"],
    links: [],
    featured: true
  },
  {
    id: "scor-governance",
    short: "SCOR supply chain governance",
    title: "Supply Chain Governance in Sustainability Reporting: A SCOR Orchestrate Analysis of an Indonesian State-Owned Enterprise",
    type: "Manuscript",
    status: "under-review",
    year: 2026,
    venue: null,
    authors: null, // Author list not shown while under review.
    summary:
      "A document-based case study of how the 2024 sustainability report of an Indonesian state-owned fertiliser enterprise evidences the capabilities needed to orchestrate an end-to-end supply chain. The report was assessed against 40 indicators across 13 SCOR Digital Standard Orchestrate categories and linked to GRI disclosures, scoring both disclosure quality and reported substance to give an auditable instrument for reporting and governance priorities.",
    topics: ["Supply chain governance", "Sustainability reporting", "SCOR", "GRI"],
    methods: ["supply-chain", "sustainability", "qualitative"],
    links: [],
    featured: false
  },
  {
    id: "sigap-parking",
    short: "SIGAP parking study",
    title: "Reducing University Motorcycle Exit Time through Automated Parking Access Control (SIGAP)",
    type: "Manuscript",
    status: "under-review",
    year: 2026,
    venue: null,
    authors: ["Badr Aldeen Al-Khazan", "Prabaswara Mahameru Wangid", "Muhammad Mahdy Fadhlullah", "Harwati"],
    summary:
      "Evaluates the SIGAP RFID access-control prototype against manual paper-ticket checks at a university motorcycle parking exit. The study combines field time study, statistical testing and an M/G/1 queueing scenario to estimate the reduction in service time and the gain in capacity margin, and adds a usability trial with first-time users.",
    topics: ["Queueing analysis", "RFID", "Service time", "Process improvement"],
    methods: ["queueing", "statistics", "prototyping"],
    relatedProject: "sigap",
    links: [],
    featured: true
  },
  {
    id: "green-ai-literacy",
    short: "Reflexive Green-AI literacy",
    title: "Teaching Sustainability with Unsustainable Tools: Toward a Reflexive Green-AI Literacy Framework for Education for Sustainable Development",
    type: "Manuscript",
    status: "under-review",
    year: 2026,
    venue: null,
    authors: null,
    summary:
      "A conceptual study of a tension in sustainability education: learners are taught environmental responsibility with AI tools whose energy and water footprint is rarely examined. Through a scoping review (2020 to 2026), a comparison of competence frameworks and an interpretive synthesis, it identifies a reflexivity gap and proposes Reflexive Green-AI Literacy with four dimensions: footprint awareness, critical cost-benefit assessment, sufficiency practices and reflexivity.",
    topics: ["Education for sustainable development", "Green AI", "Competence frameworks"],
    methods: ["sustainability", "qualitative"],
    links: [],
    featured: false
  },
  {
    id: "green-vrp",
    short: "Green vehicle routing",
    title: "Green Vehicle Routing for Electric Truck Distribution with Load-Dependent Energy Consumption",
    type: "Ongoing research",
    status: "in-progress",
    year: 2026,
    venue: null,
    authors: null,
    summary:
      "A green capacitated vehicle routing problem with time windows in which battery energy is tracked along each route with a load-dependent consumption model, and vehicles divert to the nearest reachable public charging station when needed. The model is applied to a retail delivery network in Yogyakarta built from real store and charging-station locations, and tested across battery-capacity scenarios.",
    topics: ["Electric vehicle routing", "Energy consumption", "Charging stations", "Logistics"],
    methods: ["optimization", "routing", "supply-chain", "sustainability"],
    tools: ["Python"],
    relatedProject: "green-vrp",
    links: [],
    featured: true
  },
  {
    id: "relief-prepositioning",
    short: "Relief pre-positioning",
    title: "Relief Pre-Positioning under Correlated Road Failures",
    type: "Humanitarian logistics study",
    status: "research-project",
    year: 2026,
    venue: null,
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "Asks when modelling spatially correlated road failures produces better disaster-relief plans. A two-stage stochastic program chooses depot locations and stock levels before a disaster and then routes supplies over the roads that remain open, using an open-data model of the 21 mainland regencies of Aceh, Indonesia. Plans are tested on simulated events and on a reconstruction of the late-2025 Cyclone Senyar floods.",
    topics: ["Humanitarian logistics", "Relief pre-positioning", "Correlated disruptions"],
    methods: ["optimization", "stochastic-programming", "simulation", "supply-chain", "risk"],
    links: [],
    featured: false
  },
  {
    id: "wheat-cvar",
    short: "Wheat import Mean-CVaR",
    title: "Mean-CVaR Optimization for Indonesia's Wheat Import Sourcing",
    type: "Decision analytics study",
    status: "research-project",
    year: 2026,
    venue: null,
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "A sourcing-portfolio study that balances cost against severe supply shortfalls in Indonesia's wheat imports. Using public UN Comtrade monthly records (2015 to 2025, 49 suppliers), a Mean-CVaR linear program with nested rolling validation selects annual supplier shares, which are then tested out of sample against seven benchmarks with bootstrap uncertainty and stress tests.",
    topics: ["Supply chain resilience", "Sourcing portfolio", "Tail risk", "Food security"],
    methods: ["optimization", "risk", "supply-chain", "statistics"],
    tools: ["Python", "SciPy (HiGHS)"],
    links: [],
    featured: false
  }
];
