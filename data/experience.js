/*
 * EXPERIENCE & LEADERSHIP
 *
 * Role wording and dates follow the current Master CV. Certificates are supporting evidence.
 * Dates: "YYYY-MM" strings; end: null means ongoing; omit both if no date is verified.
 * To add an internship: copy one object into `roles`, set kind: "Internship".
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.experience = {
  roles: [
    {
      id: "delsim",
      kind: "Technical",
      title: "Simulation & Modelling Trainee",
      org: "Delsim Laboratory, Universitas Islam Indonesia",
      start: "2025-07",
      end: "2025-09",
      summary: "Industrial modelling and simulation laboratory in the Industrial Engineering department.",
      bullets: [
        "Built and validated discrete-event and system-dynamics models using FlexSim and PowerSim to analyze industrial system behavior."
      ],
      related: [
        "Organizing committee, laboratory seminar \"Optimization via Simulation (OVS): Shifting from What-if to What-Best Analysis\" (November 2024)."
      ],
      tags: ["FlexSim", "PowerSim", "Discrete-event simulation", "System dynamics"]
    },
    {
      id: "uii-global",
      kind: "Leadership",
      title: "Deputy Head, Events Division & Industrial Engineering Ambassador",
      org: "UII Global (Volunteer)",
      start: "2025-07",
      end: "2025-12",
      summary: "UII Global supports the international student community at Universitas Islam Indonesia.",
      bullets: [
        "Led academic and cultural events, logistics and partnerships; served as PIC for international-student activities."
      ],
      progression: [
        { when: "2023/2024 term", what: "Member, Events Division" },
        { when: "March 2025", what: "Person in charge, Iftar Drive 2025" },
        { when: "Jul–Dec 2025", what: "Deputy Head, Events Division & Industrial Engineering Ambassador" }
      ],
      tags: ["Event management", "Partnerships", "Cross-cultural communication"],
      image: { src: "assets/img/experience/uii-global-ambassador", w: 358, h: 464, alt: "UII Global student ambassador announcement featuring Badr Aldeen Alkhazan, Industrial Engineering '23" }
    },
    {
      id: "ysu",
      kind: "Leadership",
      title: "Deputy Head, Social Responsibility Circle",
      org: "Yemeni Students' Union in Indonesia",
      bullets: [
        "Coordinated student-support and community programs and major cultural events."
      ],
      tags: ["Community programs", "Student support"]
    }
  ],

  community: [
    {
      id: "iftar-drive",
      title: "Iftar Drive 2025",
      org: "UII Global",
      date: "28 March 2025",
      role: "Person in charge",
      text: "Led the organization of a Ramadan iftar meal drive for underprivileged people and children at an orphanage."
    },
    {
      id: "wcu-batik",
      title: "Community Development Inbound Project",
      org: "World Class University grant scheme, Universitas Islam Indonesia",
      date: "April 2026",
      role: "Participant",
      text: "Community project on environmentally friendly machine design to improve the sustainability of batik production in micro, small and medium enterprises (UMKM)."
    }
  ]
};
