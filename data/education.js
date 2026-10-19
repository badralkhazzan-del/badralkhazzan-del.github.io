/*
 * EDUCATION, CREDENTIALS & LANGUAGES
 * Score reports and certificates stay private in Google Drive; only the verified claim is shown.
 * Never publish certificate numbers, candidate IDs or student numbers.
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.education = {
  degrees: [
    {
      degree: "B.Eng. Industrial Engineering (International Program)",
      institution: "Universitas Islam Indonesia",
      location: "Yogyakarta, Indonesia",
      period: "2023 – expected 2027",
      gpa: "3.90 / 4.00",
      scholarship: "fgls",
      coursework: [
        "Operations Research I & II",
        "System Simulation",
        "System Modeling",
        "Supply Chain System",
        "SCM Performance Management",
        "Data Analytics",
        "Statistics I & II",
        "Production Planning and Control",
        "Research Methodology"
      ]
    }
    // Add a master's degree here later, newest first.
  ],

  certifications: [
    {
      id: "capm",
      name: "Certified Associate in Project Management (CAPM)®",
      issuer: "Project Management Institute (PMI)",
      kind: "Professional credential",
      issued: "May 2026",
      validUntil: "May 2029"
    },
    {
      id: "toefl",
      name: "TOEFL iBT: 90 / 120 (CEFR B2)",
      issuer: "ETS",
      kind: "English language test",
      issued: "March 2026",
      validUntil: "2028"
    }
  ],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2", note: "TOEFL iBT 90" },
    { name: "Bahasa Indonesia", level: "B2" },
    { name: "German", level: "A1" }
  ]
};
