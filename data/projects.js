/*
 * PROJECTS
 *
 * short: short label used in chips and links.
 * tier: "flagship" (large case study) or "supporting" (compact card).
 * Each project gets a detail page automatically at project.html?id=<id>.
 *
 * Images: `src` is a path WITHOUT extension; a .webp and a .jpg must both exist.
 *         Optional `focus` (CSS object-position, e.g. "50% 30%") controls cropping in cards.
 * results: short verified figures only. Never add a metric that is not in the source material.
 * recognition: id from data/awards.js.   relatedResearch: ids from data/research.js.
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.projects = [
  {
    id: "sigap",
    short: "SIGAP",
    tier: "flagship",
    title: "SIGAP: RFID Parking Access System",
    fullName: "SIGAP (Sistem Integrasi Gerbang Akses Parkir)",
    year: "2026",
    category: "Process improvement · Queueing · Automation",
    tagline: "Cutting motorcycle exit time at a campus parking gate with RFID access control, backed by time study and queueing analysis.",
    problem:
      "At a motorcycle parking facility serving two faculties on the main campus of Universitas Islam Indonesia, entry was already automatic but exit was not. An attendant read a paper ticket, checked the entry time and raised the barrier by hand. Field observation placed this at 10 to 15 seconds per motorcycle, above the facility's five-second target, and the process left no searchable record of access events.",
    context:
      "Departures peak around the end of scheduled classes, so the exit transaction was the observed bottleneck. The study treated SIGAP as a prototype and compared it with the existing manual process at the same site.",
    role:
      "One of a three-person team (with Muhammad Mahdy Fadhlullah and Prabaswara Mahameru Wangid). First and corresponding author of the research manuscript.",
    approach: [
      "Timed the manual exit process with a stopwatch for 35 motorcycles over four days of peak dismissal, and counted arrivals in 15 ten-minute windows.",
      "Built a three-layer prototype: an RFID reader and Arduino Uno controller driving a servo barrier with an infrared passage sensor, plus a desktop application that logs every event with a timestamp and credential.",
      "Recorded 55 authorization cycles from firmware timestamps and ran a usability trial with 15 first-time users.",
      "Compared service times with Shapiro-Wilk, Mann-Whitney U and Welch tests, and translated the measured means and variances into an M/G/1 queueing scenario to estimate the capacity margin."
    ],
    methods: ["queueing", "statistics", "prototyping"],
    tools: ["Arduino Uno", "MFRC522 RFID reader", "Servo actuator", "Infrared sensor", "M/G/1 queueing model"],
    results: [
      { value: "12.40 s → 3.15 s", label: "Mean exit service time, manual process vs. prototype test cycles" },
      { value: "4.84 → 19.04", label: "Estimated service rate, vehicles per minute" },
      { value: "12 of 15", label: "First-time users who succeeded on the first attempt" }
    ],
    caveat:
      "These are prototype-stage results. Manual and prototype timings used different start and end triggers, and the prototype was tested under controlled conditions, so live multi-gate trials and database-based credential management are the next steps before deployment.",
    recognition: "expo-psit-2026",
    relatedResearch: ["sigap-parking"],
    cover: { src: "assets/img/projects/sigap/team", w: 720, h: 1278, alt: "Badr Aldeen Al-Khazan (right) with his two SIGAP teammates holding the Juara 1 EXPO PSIT 2026 first-place board" },
    gallery: [
      { src: "assets/img/projects/sigap/team", w: 720, h: 1278, alt: "Badr Aldeen Al-Khazan (right) with his two SIGAP teammates holding the Juara 1 EXPO PSIT 2026 first-place board", caption: "The SIGAP team after winning 1st Place at EXPO PSIT 2026." },
      { src: "assets/img/projects/sigap/prototype", w: 240, h: 300, alt: "Tabletop model of the SIGAP gate with an RFID reader, a servo-driven barrier arm and a model motorcycle on a mock exit lane", caption: "Tabletop model of the SIGAP gate prototype." }
    ],
    featured: true
  },
  {
    id: "ai-phl",
    short: "AI-PHL Guardian",
    tier: "flagship",
    title: "AI-PHL Guardian: Smart Solar Drying for Post-Harvest Loss",
    year: "2025–2026",
    category: "Sustainable engineering · Thermal design · Agri-food supply chain",
    tagline: "A proposed system that combines solar drying, low-cost sensors and an AI drying advisor to reduce post-harvest losses, supported by a thermal design study for an affordable chili dryer.",
    problem:
      "Post-harvest losses in Indonesia's chili supply chain have been reported in the literature at 30 to 50 percent, driven largely by open-sun drying that is slow, stops when it rains and exposes the crop to contamination.",
    context:
      "Smallholder farmers depend on open-sun drying, which the literature reports can take 40 to 90 hours for chili. Most published solar dryer designs were developed for drier climates than tropical Indonesia, where humidity stays high for much of the year.",
    role:
      "One of a three-person team (with Jean De Dieu Habumuremyi as team leader and Muhammad Mahdy Fadhlullah) for Idea Champion 2.0.",
    approach: [
      "Proposed an integrated concept: a smart solar dryer built from locally available materials, an IoT monitoring unit tracking humidity, temperature and airflow, and a machine-learning drying advisor that predicts drying time and flags mold risk.",
      "Designed an indirect forced-convection solar cabinet dryer (1.2 m² collector, photovoltaic-powered fan, three-tray chamber) for smallholder batches.",
      "Predicted its thermal performance with the Hottel-Whillier-Bliss collector model and a chamber energy balance, using Yogyakarta climate data from BMKG for dry-season and wet-season boundary conditions.",
      "Ran a parametric study of airflow rate, collector length and tilt, and a preliminary cost analysis based on a 2026 survey of Indonesian market prices."
    ],
    methods: ["thermal-design", "sustainability", "supply-chain"],
    tools: ["Hottel-Whillier-Bliss model", "Energy balance", "Parametric analysis", "Cost analysis"],
    results: [
      { value: "62.9%", label: "Predicted collector efficiency (dry season)" },
      { value: "47.2 °C", label: "Predicted chamber temperature, within the 45–55 °C band for chili" },
      { value: "3.6 h", label: "Predicted drying time for a 12 kg batch (dry season)" },
      { value: "IDR 1.98 M", label: "Estimated build cost from local materials" }
    ],
    caveat:
      "These figures are predictions from a steady-state design model, not field measurements. Building a physical prototype and validating it under field conditions in Yogyakarta is the stated next step. The IoT and AI components are part of the proposed concept.",
    recognition: "idea-champion-2",
    relatedResearch: [],
    cover: { src: "assets/img/projects/ai-phl/winners", w: 720, h: 1280, alt: "Badr Aldeen Al-Khazan (centre) with his AI-PHL Guardian teammates holding the Idea Champion 2.0 1st Winner board beside their project poster" },
    gallery: [
      { src: "assets/img/projects/ai-phl/winners", w: 720, h: 1280, alt: "Badr Aldeen Al-Khazan (centre) with his AI-PHL Guardian teammates holding the Idea Champion 2.0 1st Winner board beside their project poster", caption: "With the AI-PHL Guardian poster after the result." },
      { src: "assets/img/projects/ai-phl/award-stage", w: 810, h: 1080, alt: "The AI-PHL Guardian team on stage at the Idea Champion 2.0 awards, holding the 1st Winner board", caption: "On stage at the Idea Champion 2.0 awards, Universitas Islam Indonesia." }
    ],
    featured: true
  },
  {
    id: "green-vrp",
    short: "Green vehicle routing",
    tier: "flagship",
    title: "Green Vehicle Routing for Electric Truck Delivery",
    year: "2026",
    category: "Operations research · Vehicle routing · EV logistics",
    tagline: "Routing battery-electric delivery trucks when energy use depends on the load they carry, applied to retail delivery in Yogyakarta.",
    problem:
      "Electric trucks have a limited range, and their energy use per kilometre rises with payload. Routing models that only minimise distance ignore both effects, which matters when public charging stations are sparse.",
    context:
      "Indonesia is promoting battery-electric vehicles, but public charging stations (SPKLU) are still unevenly distributed. For an operator planning an electric fleet today, the order in which stores are visited can decide whether a route is feasible at all.",
    role:
      "One of two authors of the study, which is still in progress.",
    approach: [
      "Formulated a green capacitated vehicle routing problem with time windows that tracks battery energy along each route with a load-dependent consumption model, and diverts the vehicle to the nearest reachable charging station when needed.",
      "Built a geographically grounded case from one depot, seven convenience stores and five public charging stations in Yogyakarta, using real locations. Demand, time windows and service times are literature-informed estimates.",
      "Solved the case to proven optimality by complete enumeration of all 5,040 visiting sequences, and developed a two-phase heuristic (nearest-neighbour construction with 2-opt improvement) for larger instances.",
      "Compared three battery-capacity scenarios to see how routing decisions change as energy becomes a binding constraint."
    ],
    methods: ["optimization", "routing", "supply-chain", "sustainability"],
    tools: ["Python", "Exact enumeration", "Nearest-neighbour + 2-opt heuristic", "OpenStreetMap / OSRM road data"],
    results: [],
    findings: [
      "When energy use depends on load, route direction becomes a real decision: with a constrained battery, traversing the distance-optimal route in reverse kept it feasible without recharging, at the same distance.",
      "The effect of a smaller battery appears in stages, from no effect, to a binding constraint that changes the route, to charging detours that add distance and time."
    ],
    caveat:
      "Research in progress. Results may change as the model is extended to more vehicles and stores.",
    demo: {
      src: "assets/demos/ev-routing-explorer.html",
      title: "Interactive explorer: Yogyakarta electric delivery routes",
      note: "An extended planning model under development, with 87 stores, 18 candidate charging stations and several vehicles on the real road network (OpenStreetMap, routed with OSRM). It is a research planning view, not a dispatch plan.",
      poster: { src: "assets/img/projects/green-vrp/route-explorer", w: 1400, h: 860, alt: "Screenshot of the interactive map of electric delivery routes across Kota Yogyakarta, showing four vehicle routes, stores and candidate charging stations" }
    },
    recognition: null,
    relatedResearch: ["green-vrp"],
    cover: { src: "assets/img/projects/green-vrp/route-explorer", w: 1400, h: 860, focus: "72% 45%", alt: "Interactive map of electric delivery routes across Kota Yogyakarta, showing vehicle routes, stores and candidate charging stations" },
    gallery: [
      { src: "assets/img/projects/green-vrp/case-network", w: 1000, h: 769, alt: "Plot of the case network: one depot, seven Indomaret stores and five public charging stations (SPKLU) in Yogyakarta by latitude and longitude", caption: "Case network in the study: one depot, seven stores and five public charging stations." }
    ],
    featured: true
  },
  {
    id: "ergonomic-pen",
    short: "Ergonomic pen",
    tier: "supporting",
    title: "Multifunctional Ergonomic & Sustainable Pen",
    year: "2025",
    category: "Ergonomics · Product design · Sustainability",
    tagline: "A human-centred pen that combines ergonomic fit, useful extra functions and recyclable materials.",
    problem:
      "Conventional pens are often uncomfortable in long use, serve a single purpose and are made of non-recyclable plastic.",
    context:
      "Big Project WSDE 2025, a work-system and ergonomics course project in the Department of Industrial Engineering, Universitas Islam Indonesia.",
    role: "Member of a four-person team.",
    approach: [
      "Designed a prototype in biodegradable PLA and recyclable aluminium with a telescopic barrel (12 to 15 cm), soft grip, built-in 10 cm ruler, mini voice recorder and replaceable modules.",
      "Evaluated usability with 15 respondents using the System Usability Scale.",
      "Checked physical fit with anthropometric measurements from 5 participants against P5 to P95 percentiles."
    ],
    methods: ["ergonomics", "prototyping", "sustainability", "statistics"],
    tools: ["System Usability Scale", "Anthropometry", "3D printing (PLA)"],
    results: [
      { value: "75", label: "System Usability Scale score from 15 respondents" },
      { value: "P5–P95", label: "Hand-size range the design was checked against" }
    ],
    caveat: "Users asked for a simpler look and questioned the value of the ruler, which the team recorded as the main improvements for a next version.",
    recognition: "expo-rske-2025",
    relatedResearch: [],
    cover: { src: "assets/img/projects/ergonomic-pen/render", w: 705, h: 443, alt: "3D render of the multifunctional pen design with a wood-textured barrel, green grip module and recorder button" },
    gallery: [
      { src: "assets/img/projects/ergonomic-pen/render", w: 705, h: 443, alt: "3D render of the multifunctional pen design with a wood-textured barrel, green grip module and recorder button", caption: "Design render of the pen." },
      { src: "assets/img/projects/ergonomic-pen/render-side", w: 641, h: 357, alt: "Side view render of the pen showing the built-in ruler markings along the barrel", caption: "Side view with the built-in ruler." },
      { src: "assets/img/projects/ergonomic-pen/award", w: 756, h: 1008, alt: "Badr Aldeen Al-Khazan (right) and a teammate holding the Best Presentation certificate at the Big Project WSDE Awards 2025", caption: "Receiving the Best Presentation certificate." }
    ],
    featured: false
  },
  {
    id: "sea-save",
    short: "SEA-Save",
    tier: "supporting",
    title: "SEA-Save: Round-Up Savings Feature",
    year: "2025",
    category: "Business case · Financial inclusion · Product concept",
    tagline: "A bank-linked savings feature concept that turns everyday spare change into progress toward a savings goal.",
    problem: null,
    context:
      "Developed for the International Business Case Competition at the Ganesha Business Management Festival 2025, themed \"Advancing Economic Inclusivity for Equitable Growth\". The entry reached the semifinal.",
    role: "Semifinalist participant.",
    approach: [
      "Business case for a savings feature linked to everyday bank transactions.",
      "The concept is demonstrated with a working prototype: each transaction is rounded up and the difference moves into savings, with a savings goal, a progress bar, milestone badges and short financial tips."
    ],
    methods: ["prototyping"],
    tools: ["Business case analysis", "Interactive prototype"],
    results: [],
    caveat: null,
    recognitionNote: "Semifinalist, International Business Case Competition, Ganesha Business Management Festival 2025",
    recognition: null,
    relatedResearch: [],
    video: { src: "assets/img/projects/sea-save/app-demo.mp4", webm: "assets/img/projects/sea-save/app-demo.webm", poster: "assets/img/projects/sea-save/app-demo-poster", w: 478, h: 642, label: "Screen recording of the SEA-Save prototype: entering a transaction, setting a goal and seeing the saved spare change and a financial tip" },
    cover: { src: "assets/img/projects/sea-save/app-demo-poster", w: 478, h: 642, focus: "50% 0%", alt: "SEA-Save prototype screen showing transaction entry, a savings goal, total savings and a financial tip" },
    gallery: [],
    featured: false
  },
  {
    id: "hydraulic-press",
    short: "Hydraulic press",
    tier: "supporting",
    title: "Hydraulic Press: Manufacturing Process & Assembly",
    year: "",
    category: "Manufacturing processes · Fabrication · Assembly",
    tagline: "Manufacturing and assembling a hydraulic press in UII's Manufacturing Process tutorial.",
    problem: null,
    context:
      "Completed within the Manufacturing Process (Prosman) tutorial at the Integrated Manufacturing System Laboratory, Universitas Islam Indonesia. The flow covers training, production, assembly and finishing.",
    role: "Student participant in the tutorial project.",
    approach: [
      "Production of press components such as the frame, steel base, guard, platform and couplers on the laboratory's machines: cutting and grinding, drilling and milling, welding, a lathe, a Dobot and a scroll saw.",
      "Assembled and finished the press, applying machining, fabrication and workshop-safety concepts across a multi-stage production process."
    ],
    methods: ["manufacturing"],
    tools: ["Lathe", "Milling & drilling", "Welding", "Grinding", "Dobot", "Scroll saw"],
    results: [],
    caveat: null,
    recognition: null,
    relatedResearch: [],
    cover: { src: "assets/img/projects/hydraulic-press/diagram", w: 640, h: 658, alt: "Labelled diagram of the hydraulic press showing the top frame, side frames, steel base, hydraulic pump, springs, coupler, steel guard and hollow platform" },
    coverCaption: "Component diagram from the tutorial guidebook of the Integrated Manufacturing System Laboratory, UII.",
    gallery: [],
    featured: false
  },
  {
    id: "hospital-db",
    short: "Hospital database design",
    tier: "supporting",
    title: "Hospital Management System: Database Design & ERD",
    year: "2025",
    category: "Data modeling · Database design · Systems thinking",
    tagline: "A normalized data model for a hospital management system with nine entities and advanced ER modelling features.",
    problem: null,
    context:
      "Database Management System course, Department of Industrial Engineering, Universitas Islam Indonesia, 2025.",
    role: "Course project.",
    approach: [
      "Designed an Entity Relationship Diagram that organizes hospital data consistently and is normalized to Third Normal Form (3NF).",
      "Used supertype and subtype modelling (Person to Patient and Doctor), a recursive relationship (a doctor supervises doctors), a barred arc (a treatment is either a surgery or a medication) and a non-transferable patient-room relationship."
    ],
    entities: ["Department", "Person", "Patient", "Doctor", "Room", "Bill", "Treatment", "Surgery", "Medication"],
    methods: ["data-modeling"],
    tools: ["ERD", "Primary & foreign keys", "3NF normalization"],
    results: [],
    caveat: "A data-modelling project. No hospital software was built or deployed.",
    recognition: null,
    relatedResearch: [],
    cover: null,
    gallery: [],
    featured: false
  }
];
