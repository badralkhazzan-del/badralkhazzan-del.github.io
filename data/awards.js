/*
 * AWARDS & RECOGNITION
 *
 * type decides where an item appears and how it is labelled:
 *   "competition"  -> competitive award (Awards page, Home recognition strip)
 *   "scholarship"  -> scholarship
 *   "program"      -> selective leadership / development program
 * certificate (optional): scanned certificate shown as a thumbnail linking to the full image.
 *   Needs <src>.jpg/.webp (max 1600 px wide) and <src>-thumb.jpg/.webp (480 px wide).
 *   Hide certificate numbers, IDs and QR codes before publishing. Other evidence stays in Google Drive.
 */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.awardTypes = {
  "competition": "Competitive award",
  "scholarship": "Scholarship",
  "program": "Leadership development"
};

PORTFOLIO.awards = [
  {
    id: "expo-psit-2026",
    type: "competition",
    title: "1st Place",
    event: "EXPO PSIT 2026",
    for: "SIGAP RFID Automated Parking Access System",
    date: "2026",
    detail: "Team of three, with Muhammad Mahdy Fadhlullah and Prabaswara Mahameru Wangid.",
    project: "sigap",
    image: { src: "assets/img/projects/sigap/team", w: 720, h: 1278, alt: "Badr Aldeen Al-Khazan (right) with his two SIGAP teammates holding the Juara 1 EXPO PSIT 2026 first-place board" }
  },
  {
    id: "idea-champion-2",
    type: "competition",
    title: "1st Place",
    event: "Idea Champion 2.0",
    eventDetail: "National Innovation & Solution Challenge, Universitas Islam Indonesia",
    for: "AI-PHL Guardian",
    date: "November 2025",
    detail: "Team of three, led by Jean De Dieu Habumuremyi, with Muhammad Mahdy Fadhlullah.",
    project: "ai-phl",
    image: { src: "assets/img/projects/ai-phl/winners", w: 720, h: 1280, alt: "Badr Aldeen Al-Khazan (centre) with his AI-PHL Guardian teammates holding the Idea Champion 2.0 1st Winner board" },
    certificate: { src: "assets/img/certificates/idea-champion-2", w: 984, h: 694, alt: "Certificate of Appreciation from Universitas Islam Indonesia naming Badr Aldeen Al-Khazan 1st Winner of Idea Champion 2.0, National Innovation & Solution Challenges, 28 November 2025" }
  },
  {
    id: "iyec12",
    short: "Outstanding Delegate, IYEC 12",
    type: "competition",
    title: "Outstanding Delegate",
    event: "12th International Youth Exchange and Conference (IYEC 12)",
    eventDetail: "Malaysia & Singapore",
    for: "Delegate of Germany, UNDP council",
    date: "November 2025",
    detail: "Recognized for communication, clarity and innovation in the presentation to international delegates. The position paper is published in the UII Repository.",
    research: "germany-digital-framework",
    image: { src: "assets/img/events/iyec12/germany-delegate", w: 904, h: 1220, alt: "Badr Aldeen Al-Khazan seated at the conference table behind a Germany delegate placard at IYEC 12" },
    certificate: { src: "assets/img/certificates/iyec12", w: 1600, h: 1130, alt: "Certificate of Achievement from Indonesian Youth Action for the Outstanding Delegate Award at the International Youth Exchange & Conference #12, Malaysia & Singapore, 4-8 November 2025" }
  },
  {
    id: "expo-rske-2025",
    type: "competition",
    title: "Best Presentation",
    event: "EXPO RSKE 2025",
    for: "Multifunctional Ergonomic Pen",
    date: "July 2025",
    detail: "Team award for the Big Project WSDE 2025 course project. The certificate is issued to the team (IP-1).",
    project: "ergonomic-pen",
    image: { src: "assets/img/projects/ergonomic-pen/award", w: 756, h: 1008, alt: "Badr Aldeen Al-Khazan (right) and a teammate holding the Best Presentation certificate at the Big Project WSDE Awards 2025" },
    certificate: { src: "assets/img/certificates/expo-rske-2025", w: 1185, h: 852, alt: "Certificate of award (Sertifikat Penghargaan) for Best Presentation at the Big Project Rekayasa Sistem Kerja dan Ergonomi 2025, issued to team IP-1, 28 July 2025" }
  },
  {
    id: "fgls",
    type: "scholarship",
    title: "Future Global Leaders Scholarship",
    event: "Universitas Islam Indonesia",
    for: "B.Sc. Industrial Engineering (International Program)",
    date: "2023–2027",
    detail: "University scholarship supporting my undergraduate study in the International Program."
  },
  {
    id: "aspire",
    type: "program",
    title: "Aspire Leaders Program",
    event: "Aspire Institute",
    for: "Leadership development program",
    date: "2025",
    detail: "Completed all modules of the 2025 program (40 hours of coursework) in October 2025.",
    certificate: { src: "assets/img/certificates/aspire", w: 1584, h: 1224, alt: "Aspire Institute certificate for completing all modules of the 2025 Aspire Leaders Program, October 2025" }
  }
];
