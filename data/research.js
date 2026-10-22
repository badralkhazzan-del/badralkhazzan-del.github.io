/*
 * RESEARCH & PUBLICATIONS
 *
 * HOW TO UPDATE A STATUS
 *   Change the `status` field of one item. Allowed values are the keys of
 *   PORTFOLIO.researchStatuses below. The badge, grouping, Home page, linked
 *   projects and search-engine data all update automatically.
 *
 * ORDER
 *   Groups follow `order` in PORTFOLIO.researchStatuses; inside a group, papers keep
 *   their order in the list below (the same order as the CV).
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
  "accepted":         { label: "Accepted / Forthcoming", order: 1, note: "Accepted for publication. No public link until the official page is live." },
  "conference":       { label: "Conference",             order: 2, note: "Accepted for, or presented at, a conference." },
  "under-review":     { label: "Under Review",           order: 3, note: "Submitted and under review. Summary only; the manuscript is not public." },
  "in-progress":      { label: "Research in Progress",   order: 4, note: "Ongoing research. Summary only." },
  "published":        { label: "Published",              order: 5, note: "Publicly available through an official repository or publisher." },
  // Not used at the moment; kept for work that should be shown without any status claim.
  "research-project": { label: "Research Project",       order: 6, note: "Research work shown without a publication-status claim." }
};

// Name used to highlight the site owner in author lists.
PORTFOLIO.authorSelf = "Badr Aldeen Al-Khazan";

PORTFOLIO.research = [
  {
    id: "bullwhip",
    short: "Bullwhip effect simulation",
    title: "Simulation-Based Analysis of the Bullwhip Effect in a Multi-Echelon Bottled Water Supply Chain",
    type: "Journal article",
    status: "published",
    year: 2026,
    venue: "Jurnal Teknologi dan Manajemen Industri Terapan (JTMIT)",
    authors: ["Badr Aldeen Al-Khazan", "Agus Mansur"],
    summary:
      "A reproducible discrete-time simulation of a three-stage bottled-water supply chain (retailer, distributor, manufacturer) in which each stage follows a weekly order-up-to policy with moving-average forecasts, variable lead times, safety stock and batching. Across 1,000 replications, both ordering interfaces amplified relative demand variability, measured consistently as a coefficient-of-variation ratio. The model is a hypothetical scenario and makes no claim about a real company.",
    topics: ["Bullwhip effect", "Inventory policy", "Multi-echelon supply chain"],
    methods: ["simulation", "supply-chain", "statistics"],
    tools: ["Python", "NumPy"],
    links: [{ label: "View article", url: "https://jurnal-tmit.com/index.php/home/article/view/1980" }],
    doi: "10.55826/jtmit.v5i4.1980",
    featured: true
  },
  {
    id: "relief-prepositioning",
    short: "Relief pre-positioning",
    title: "Where Floods Strike and How Roads Fail: Testing Two Assumptions of Relief Pre-Positioning on the 2025 Cyclone Senyar Floods in Aceh",
    type: "Conference paper",
    status: "conference",
    year: 2026,
    venue: "16th AIC 2026, Universitas Syiah Kuala",
    statusDetail: "Accepted for presentation",
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "Tests two common assumptions of relief pre-positioning, that every district is equally likely to flood and that roads fail independently, for the 21 mainland regencies of Aceh, Indonesia. A two-stage stochastic model built only from public data decides where to store relief stock on a 2,107 km road network, and the plans were tested on simulated floods and on the November 2025 Cyclone Senyar floods, which were not used to build any plan. In the real flood, exposure taken from national village records reduced unmet demand from 57.2% to 44.3%, while linked road failures helped mainly because road cuts arrive in clusters.",
    topics: ["Humanitarian logistics", "Relief pre-positioning", "Flood exposure", "Correlated road failures"],
    methods: ["optimization", "stochastic-programming", "simulation", "supply-chain", "risk"],
    links: [],
    featured: true
  },
  {
    id: "risk-aware-routing",
    short: "Risk-aware last-mile routing",
    title: "When Does Risk-Aware Workload Balancing Pay Off? A Three-City Last-Mile Routing Benchmark Using Industrial Traces",
    type: "Conference abstract",
    status: "conference",
    year: 2026,
    venue: "ICORSI 2026, IIT Delhi, 21–23 December 2026",
    statusDetail: "Abstract accepted",
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "Asks when workload-aware routing can reduce courier imbalance and overtime risk in last-mile delivery without an excessive travel penalty. Using public LaDe-D delivery traces from Chongqing, Jilin and Yantai (about 1.17 million package records), a gradient-boosting model estimated courier effort, and six routing policies were compared on 36 real region-day instances. Relative to distance-only routing, scenario-CVaR balancing added 3.63% travel while cutting average workload imbalance by 39.50% and overtime probability by 32.67%, although it did not significantly outperform simpler balancing benchmarks.",
    topics: ["Last-mile logistics", "Workload balancing", "Conditional value at risk", "Predictive analytics"],
    methods: ["routing", "optimization", "machine-learning", "risk"],
    links: [],
    featured: true
  },
  {
    id: "wheat-cvar",
    short: "Wheat import Mean-CVaR",
    title: "Balancing Cost and Tail Risk in the Indonesian Wheat Import Portfolio Using Nested Mean CVaR Optimization",
    type: "Conference paper",
    status: "conference",
    year: 2026,
    venue: "ICOBLAST 2026, Diponegoro University",
    statusDetail: "Full paper accepted",
    authors: ["Badr Aldeen Al-Khazan"],
    summary:
      "A sourcing-portfolio study that balances cost against severe supply shortfalls in Indonesia's wheat imports. Using public UN Comtrade monthly records (2015 to 2025, 49 suppliers), a Mean-CVaR linear program with nested rolling validation selects annual supplier shares, which are then tested out of sample against seven benchmarks with bootstrap uncertainty and stress tests.",
    topics: ["Supply chain resilience", "Sourcing portfolio", "Tail risk", "Food security"],
    methods: ["optimization", "risk", "supply-chain", "statistics"],
    tools: ["Python", "SciPy (HiGHS)"],
    links: [],
    featured: false
  },
  {
    id: "predictive-maintenance",
    short: "Predictive maintenance calibration",
    title: "Calibration and Cost-Sensitive Threshold Selection for Imbalanced Predictive Maintenance: An AI4I 2020 Study",
    type: "Conference paper",
    status: "conference",
    year: 2026,
    venue: "TMIC 2026, 4th Trunodjoyo Madura International Conference",
    statusDetail: "Presented",
    authors: ["Badr Aldeen Al-Khazan", "Muhammad Ridwan Andi Purnomo"],
    summary:
      "Examines how class-imbalance handling, probability calibration and alarm-threshold choice interact in predictive maintenance on the public AI4I 2020 benchmark. Resampling with SMOTE gave no consistent ranking gain and inflated predicted probabilities, so cost-based thresholds applied to them performed poorly. Training on the original distribution and choosing the alarm threshold by validation-set cost was the most stable strategy across the cost ratios tested.",
    topics: ["Predictive maintenance", "Probability calibration", "Cost-sensitive decisions"],
    methods: ["machine-learning", "statistics", "risk"],
    tools: ["Python", "scikit-learn", "imbalanced-learn"],
    links: [],
    relatedAward: "tmic-2026",
    featured: true
  },
  {
    id: "school-meals",
    short: "School-meal kitchen capacity",
    title: "Safe Capacity and Time Compliance in School-Meal Kitchens: Evidence from Indonesia's Free Nutritious Meal Program",
    type: "Manuscript",
    status: "under-review",
    year: 2026,
    venue: "Spektrum Industri",
    authors: ["Badr Aldeen Al-Khazan", "Muhammad Mahdy Fadhlullah", "Muhammad Ridwan Andi Purnomo"],
    summary:
      "Asks whether school-meal kitchens in Indonesia's Free Nutritious Meal (MBG) program can keep every portion within the four-hour cook-to-consume limit. The study derives a safe-capacity condition for staggered meal deadlines and tests five readings of the operating rules in Sidoarjo Regency with a time-indexed scheduling model, a capacitated kitchen-location model and a 500-run Monte Carlo simulation. Reading the 02:00 to 08:00 kitchen hours as a cooking deadline caps compliance at 54.8 to 67.4%, whereas following the production-wave schedule reaches 89.7 to 97.4% with a network of 195 kitchens.",
    topics: ["School feeding", "Production and distribution scheduling", "Facility location", "Food safety"],
    methods: ["optimization", "simulation", "supply-chain", "risk"],
    links: [],
    featured: false
  },
  {
    id: "scor-governance",
    short: "SCOR supply chain governance",
    title: "Supply Chain Governance in Sustainability Reporting: A SCOR Orchestrate Analysis of an Indonesian State-Owned Enterprise",
    type: "Manuscript",
    status: "under-review",
    year: 2026,
    venue: "IJPMB",
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
    venue: "JuTISI",
    authors: ["Badr Aldeen Al-Khazan", "Prabaswara Mahameru Wangid", "Muhammad Mahdy Fadhlullah", "Harwati"],
    summary:
      "Evaluates the SIGAP RFID access-control prototype against manual paper-ticket checks at a university motorcycle parking exit. The study combines field time study, statistical testing and an M/G/1 queueing scenario to estimate the reduction in service time and the gain in capacity margin, and adds a usability trial with first-time users.",
    topics: ["Queueing analysis", "RFID", "Service time", "Process improvement"],
    methods: ["queueing", "statistics", "prototyping"],
    relatedProject: "sigap",
    links: [],
    featured: false
  },
  {
    id: "green-vrp",
    short: "Electric vehicle routing",
    title: "A Configurable Electric Vehicle Routing Framework for Urban Retail Delivery with Public Charging: A Yogyakarta Case Study",
    type: "Ongoing research",
    status: "in-progress",
    year: 2026,
    venue: null,
    authors: null,
    summary:
      "A configurable routing framework for electric retail delivery, applied to 87 publicly identified convenience stores in Kota Yogyakarta. It combines load-dependent energy consumption, public charging, route optimisation and independent feasibility checks, and minimises the number of vehicles before road distance. The reference solution serves every store with four vehicles over 121.6 km, and daily planning finds feasible plans for all 30 synthetic operating days, compared with 17 for an adaptive reference policy.",
    topics: ["Electric vehicle routing", "Public charging", "Urban freight", "Retail distribution"],
    methods: ["optimization", "routing", "supply-chain", "sustainability"],
    tools: ["Python", "PyVRP", "OR-Tools", "SciPy (HiGHS)", "OSRM"],
    relatedProject: "green-vrp",
    links: [],
    featured: false
  },
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
  }
];
