/*
 * SKILLS
 * Grouped, not a keyword cloud. Only list skills supported by the CV, research or projects.
 * `evidence` (optional) points to where the skill was used: "research:<id>", "project:<id>", "experience:<id>".
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.skills = [
  {
    group: "Operations Research & Optimization",
    items: [
      { name: "Linear programming", evidence: ["research:wheat-cvar"] },
      { name: "Vehicle routing with time windows and energy constraints", evidence: ["project:green-vrp"] },
      { name: "Mean-CVaR portfolio optimization", evidence: ["research:wheat-cvar"] },
      { name: "Two-stage stochastic programming", evidence: ["research:relief-prepositioning"] },
      { name: "Exact enumeration and construction/improvement heuristics", evidence: ["project:green-vrp"] },
      { name: "Queueing analysis (M/G/1)", evidence: ["project:sigap"] }
    ]
  },
  {
    group: "Simulation & Modeling",
    items: [
      { name: "Discrete-event simulation (FlexSim)", evidence: ["experience:delsim"] },
      { name: "System dynamics (PowerSim)", evidence: ["experience:delsim"] },
      { name: "Discrete-time Monte Carlo simulation", evidence: ["research:bullwhip"] },
      { name: "Stochastic modeling" },
      { name: "Scenario and sensitivity analysis", evidence: ["project:ai-phl", "project:green-vrp"] }
    ]
  },
  {
    group: "Supply Chain & Operations",
    items: [
      { name: "Supply chain analytics" },
      { name: "Inventory policies and bullwhip analysis", evidence: ["research:bullwhip"] },
      { name: "SCOR (Orchestrate) process assessment", evidence: ["research:scor-governance"] },
      { name: "Sourcing risk and resilience analysis", evidence: ["research:wheat-cvar"] },
      { name: "Humanitarian and EV logistics", evidence: ["research:relief-prepositioning", "project:green-vrp"] }
    ]
  },
  {
    group: "Manufacturing & Process Improvement",
    items: [
      { name: "SPC & Six Sigma" },
      { name: "Production planning" },
      { name: "Facility layout" },
      { name: "Work measurement and time study", evidence: ["project:sigap"] },
      { name: "Ergonomics, anthropometry and usability testing", evidence: ["project:ergonomic-pen"] },
      { name: "Manufacturing processes: machining, fabrication, assembly", evidence: ["project:hydraulic-press"] }
    ]
  },
  {
    group: "Data & Technical Tools",
    items: [
      { name: "Python (NumPy, SciPy, scikit-learn)", evidence: ["research:bullwhip", "research:predictive-maintenance", "research:wheat-cvar"] },
      { name: "Machine learning for decision support: calibration and cost-sensitive thresholds", evidence: ["research:predictive-maintenance"] },
      { name: "Statistical testing", evidence: ["project:sigap"] },
      { name: "Advanced Excel" },
      { name: "Database design (ERD, 3NF)", evidence: ["project:hospital-db"] },
      { name: "Arduino and RFID prototyping", evidence: ["project:sigap"] }
    ]
  },
  {
    group: "Project & Professional",
    items: [
      { name: "Project management (CAPM®)" },
      { name: "Technical and academic writing" },
      { name: "Public speaking", evidence: ["award:iyec12"] },
      { name: "Team leadership", evidence: ["experience:uii-global"] },
      { name: "Event management", evidence: ["experience:uii-global"] },
      { name: "Cross-cultural communication" }
    ]
  }
];
