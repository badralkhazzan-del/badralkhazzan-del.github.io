/*
 * BAHASA INDONESIA
 * Translation of the interface (ui) and of the content in /data (content).
 * English stays the source: anything missing here is shown in English.
 *
 * content is matched by id. Lists inside an item (approach steps, results, gallery...)
 * are matched by position and must have the same number of entries as the English list;
 * if they do not, the English list is shown. `node tools/check.mjs` reports gaps.
 * Official names stay as written: paper titles, people, events, organizations, certifications.
 */
window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.i18n = PORTFOLIO.i18n || {};

PORTFOLIO.i18n.id = {
  ui: {
    "skip": "Langsung ke konten",
    "header.home": "{name}, beranda",
    "header.menu": "Menu",
    "header.navLabel": "Utama",
    "nav.about": "Tentang",
    "nav.research": "Riset",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.awards": "Penghargaan",
    "nav.education": "Pendidikan & Keahlian",
    "nav.cv": "CV",
    "nav.contact": "Kontak",
    "util.label": "Bahasa dan tema",
    "util.language": "Bahasa",
    "util.theme": "Tema",
    "theme.light": "Terang",
    "theme.dark": "Gelap",
    "footer.explore": "Jelajahi",
    "footer.connect": "Terhubung",
    "footer.updated": "Portofolio terakhir diperbarui {date}",
    "date.present": "Sekarang",
    "punct.comma": ", ",

    "title.home": "{name} · Teknik Industri, Riset Operasi & Analitik Keputusan",
    "title.about": "Tentang · {name}",
    "title.research": "Riset & Publikasi · {name}",
    "title.projects": "Proyek · {name}",
    "title.experience": "Pengalaman & Kepemimpinan · {name}",
    "title.awards": "Penghargaan & Pengakuan · {name}",
    "title.education": "Pendidikan, Kredensial & Keahlian · {name}",
    "title.cv": "CV · {name}",
    "title.contact": "Kontak · {name}",
    "title.notfound": "Halaman tidak ditemukan · {name}",

    "intro.about.eyebrow": "Tentang",
    "intro.about.title": "Dari teknik industri ke analitik keputusan",
    "intro.about.text": "Bagaimana karya saya bergeser dari produk dan proses menuju riset operasi dan analitik keputusan, dan ke mana arahnya.",
    "intro.research.eyebrow": "Riset",
    "intro.research.title": "Riset & Publikasi",
    "intro.research.text": "Karya terbit, makalah yang diterima dan makalah konferensi, naskah yang sedang ditinjau, serta riset yang sedang berjalan. Setiap karya menampilkan status sebenarnya, dan hanya karya terbit yang ditautkan ke salinan publik.",
    "intro.projects.eyebrow": "Proyek",
    "intro.projects.title": "Proyek",
    "intro.projects.text": "Proyek rekayasa dan analitik, dari akses parkir RFID dan pengeringan tenaga surya hingga penentuan rute kendaraan listrik, ditampilkan bersama bukti pendukungnya.",
    "intro.project.eyebrow": "Proyek",
    "intro.project.title": "Proyek",
    "intro.experience.eyebrow": "Pengalaman",
    "intro.experience.title": "Pengalaman & Kepemimpinan",
    "intro.experience.text": "Pelatihan simulasi dan pemodelan, kepemimpinan mahasiswa, dan kegiatan komunitas.",
    "intro.awards.eyebrow": "Pengakuan",
    "intro.awards.title": "Penghargaan & Pengakuan",
    "intro.awards.text": "Penghargaan kompetisi, beasiswa universitas, dan pengembangan kepemimpinan, masing-masing diberi label sesuai jenisnya.",
    "intro.education.eyebrow": "Pendidikan & Keahlian",
    "intro.education.title": "Pendidikan, Kredensial & Keahlian",
    "intro.education.text": "Gelar, sertifikasi, bahasa, keahlian, dan program akademik yang pernah saya ikuti.",
    "intro.cv.eyebrow": "CV",
    "intro.cv.title": "Curriculum Vitae",
    "intro.cv.text": "Lihat CV terbaru saya di sini atau unduh sebagai PDF.",
    "intro.contact.eyebrow": "Kontak",
    "intro.contact.title": "Hubungi saya",
    "intro.contact.text": "Cara terbaik untuk menghubungi saya adalah melalui email. Saya juga ada di LinkedIn dan GitHub.",
    "intro.notfound.eyebrow": "404",
    "intro.notfound.title": "Halaman tidak ditemukan",
    "intro.notfound.text": "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    "notfound.home": "Ke beranda",
    "notfound.research": "Riset",
    "notfound.projects": "Proyek",

    "home.fieldsLabel": "Bidang",
    "home.gpa": " IPK {gpa}.",
    "home.exploreResearch": "Jelajahi riset",
    "home.viewProjects": "Lihat proyek",
    "home.downloadCv": "Unduh CV",
    "home.glance": "Sekilas",
    "home.stat.published": "Karya terbit",
    "home.stat.accepted": "Diterima, segera terbit",
    "home.stat.conference": "Makalah konferensi",
    "home.stat.review": "Naskah sedang ditinjau",
    "home.stat.awards": "Penghargaan kompetisi",
    "home.stat.gpa": "IPK dari 4,00",
    "home.focus.eyebrow": "Bidang yang saya tekuni",
    "home.focus.title": "Keputusan yang lebih baik untuk sistem operasional yang kompleks",
    "home.focus.text": "Pertanyaan yang sama muncul di seluruh riset dan proyek saya: bagaimana sebuah sistem berperilaku, di mana sistem itu gagal, dan keputusan apa yang memperbaikinya.",
    "home.research.eyebrow": "Riset",
    "home.research.title": "Riset pilihan",
    "home.research.text": "Setiap karya ditampilkan dengan status sebenarnya. Hanya karya yang sudah terbit yang ditautkan ke salinan publik.",
    "home.research.link": "Semua riset",
    "home.projects.eyebrow": "Proyek",
    "home.projects.title": "Proyek unggulan",
    "home.projects.text": "Tiga proyek yang paling dekat dengan arah saya saat ini. Dua di antaranya meraih juara pertama dalam kompetisi.",
    "home.projects.link": "Semua proyek",
    "home.awards.eyebrow": "Pengakuan",
    "home.awards.title": "Penghargaan",
    "home.awards.link": "Semua pengakuan",
    "home.now.eyebrow": "Kini",
    "home.now.title": "Saat ini",
    "home.openTo": "Terbuka untuk",
    "cta.title": "Mari berdiskusi",
    "cta.text": "Magang, kolaborasi riset, atau studi lanjut: saya akan senang mendengar dari Anda.",
    "cta.email": "Kirim email",

    "about.kind.project": "Proyek",
    "about.kind.research": "Riset",
    "about.iyecCaption": "Delegasi Jerman di IYEC 12, Malaysia dan Singapura, November 2025.",
    "about.quickFacts": "Fakta singkat",
    "about.basedIn": "Berdomisili di {place}",
    "about.methods.eyebrow": "Bagaimana semuanya terhubung",
    "about.methods.title": "Metode dan di mana saya menggunakannya",
    "about.methods.text": "Disusun otomatis dari catatan riset dan proyek saya, sehingga tetap mutakhir ketika karya baru ditambahkan.",
    "about.direction": "Arah",
    "about.qualities.eyebrow": "Gaya kerja",
    "about.qualities.title": "Kualitas",
    "about.interests.eyebrow": "Di luar pekerjaan",
    "about.interests.title": "Minat",

    "research.legend": "Arti label status",
    "research.filterLabel": "Saring riset berdasarkan status",
    "research.all": "Semua",
    "research.items": "{n} karya",
    "research.readSummary": "Baca ringkasan",
    "research.readMore": "Selengkapnya",
    "research.topics": "Topik",
    "research.relatedProject": "Proyek terkait: {name}",
    "research.accepted": "Diterima untuk publikasi",
    "research.acceptedPresentation": "Diterima untuk presentasi",
    "research.underReview": "Telah diajukan, sedang ditinjau",
    "research.ongoing": "Riset sedang berjalan",
    "research.noStatus": "Status publikasi tidak disebutkan",

    "projects.flagship.eyebrow": "Arah saat ini",
    "projects.flagship.title": "Proyek unggulan",
    "projects.flagship.text": "Riset operasi, teori antrean, dan rekayasa berkelanjutan, masing-masing dengan studi kasus lengkap.",
    "projects.supporting.eyebrow": "Fondasi",
    "projects.supporting.title": "Proyek pendukung",
    "projects.supporting.text": "Proyek rekayasa, desain, bisnis, dan pemodelan data yang memperluas dasar di balik arah saya saat ini.",
    "projects.relatedResearch": "Riset terkait",
    "projects.readCaseStudy": "Baca studi kasus",
    "projects.details": "Detail proyek",
    "projects.all": "Semua proyek",

    "project.notFound.title": "Proyek tidak ditemukan",
    "project.notFound.text": "Tautan proyek ini mungkin sudah usang.",
    "project.notFound.link": "Lihat semua proyek",
    "project.tier.flagship": "Proyek unggulan",
    "project.tier.supporting": "Proyek pendukung",
    "project.demo.load": "Muat peta interaktif (sekitar 1,2 MB)",
    "project.demo.cta": "Muat peta interaktif",
    "project.demo.fullscreen": "Buka layar penuh",
    "project.video.title": "Demo prototipe",
    "project.video.noAudio": "Tanpa audio.",
    "project.feature": "Desain",
    "project.openImage": "Buka gambar ukuran penuh: {alt}",
    "project.problem": "Masalah",
    "project.context": "Konteks",
    "project.role": "Peran saya",
    "project.approach": "Pendekatan",
    "project.features": "Fitur utama",
    "project.dataModel": "Model data",
    "project.entities": "Entitas",
    "project.relationships": "Relasi",
    "project.results": "Hasil",
    "project.findings": "Temuan utama sejauh ini",
    "project.gallery": "Bukti visual",
    "project.visual": "Visual",
    "project.recognition": "Pengakuan",
    "project.aboutAward": "Tentang penghargaan ini",
    "project.methods": "Metode",
    "project.tags": "Tag",
    "project.document": "Dokumen",
    "project.tools": "Alat & teknik",
    "project.facts": "Fakta proyek",
    "project.more": "Proyek lainnya",
    "project.prev": "Sebelumnya",
    "project.next": "Berikutnya",

    "experience.roles.eyebrow": "Peran",
    "experience.roles.title": "Peran teknis dan kepemimpinan",
    "experience.roles.text": "Pelatihan teknis dalam simulasi dan pemodelan, serta kepemimpinan di organisasi mahasiswa dan komunitas.",
    "experience.community.eyebrow": "Komunitas",
    "experience.community.title": "Komunitas & kerelawanan",
    "experience.progression": "Perkembangan",
    "experience.also": "Juga:",
    "kind.Technical": "Teknis",
    "kind.Leadership": "Kepemimpinan",
    "kind.Internship": "Magang",

    "awards.comp.eyebrow": "Penghargaan kompetisi",
    "awards.comp.title": "Penghargaan",
    "awards.comp.text": "Hasil dari kompetisi dan sebuah konferensi internasional, masing-masing ditautkan ke karya di baliknya.",
    "awards.other.eyebrow": "Beasiswa & pengembangan",
    "awards.other.title": "Beasiswa dan pengembangan kepemimpinan",
    "awards.other.text": "Dicantumkan terpisah dari penghargaan kompetisi.",
    "awards.otherRecognition": "Pengakuan lainnya",
    "awards.project": "Proyek: {name}",
    "awards.viewCert": "Lihat sertifikat",
    "awards.certLabel": "Lihat sertifikat (terbuka dalam ukuran penuh): {alt}",
    "awards.certNote": "Sertifikat ditampilkan jika tersedia, dengan nomor referensi disembunyikan. Dokumen pendukung lainnya tersedia atas permintaan.",

    "education.degree.eyebrow": "Pendidikan",
    "education.degree.title": "Gelar",
    "education.certs.eyebrow": "Kredensial",
    "education.certs.title": "Sertifikasi",
    "education.langs.eyebrow": "Bahasa",
    "education.langs.title": "Bahasa",
    "education.langs.text": "Level CEFR. Bahasa Arab adalah bahasa ibu saya.",
    "education.skills.eyebrow": "Keahlian",
    "education.skills.title": "Keahlian per bidang",
    "education.skills.text": "Dikelompokkan per bidang, dengan tautan ke tempat setiap keahlian digunakan jika ada contoh yang jelas.",
    "education.programs.eyebrow": "Keterlibatan akademik",
    "education.programs.title": "Program, kursus & lokakarya",
    "education.programs.text": "Kursus musim panas, program internasional, dan kegiatan akademik singkat, dari yang terbaru.",
    "education.scholarship": "Beasiswa:",
    "education.coursework": "Mata kuliah relevan",
    "education.gpaOf": "IPK / {max}",
    "education.validUntil": ", berlaku hingga {date}",
    "education.usedIn": "Digunakan di",
    "education.leadershipBadge": "Kepemimpinan",
    "level.Native": "Bahasa ibu",

    "cv.downloadPdf": "Unduh CV (PDF)",
    "cv.newTab": "Buka di tab baru",
    "cv.open": "Buka CV (PDF)",
    "cv.objectLabel": "CV {name} (PDF)",
    "cv.previewAlt": "Pratinjau halaman pertama CV {name}",
    "cv.updated": "Diperbarui {date}.",
    "cv.languageNote": "CV ini ditulis dalam bahasa Inggris.",
    "cv.glance": "Sekilas",
    "cv.gpa": "IPK {gpa}",
    "cv.awards": "{n} penghargaan kompetisi",

    "contact.email": "Email",
    "contact.copy": "Salin",
    "contact.copied": "Tersalin",
    "contact.linkedinText": "Profil profesional dan kabar terbaru",
    "contact.location": "Lokasi",
    "contact.openTo.eyebrow": "Terbuka untuk",
    "contact.openTo.title": "Yang saya cari",
    "contact.send": "Kirim email",
    "contact.viewCv": "Lihat CV"
  },

  content: {
    site: {
      identity: ["Teknik Industri", "Riset Operasi", "Analitik Keputusan", "Rantai Pasok & Sistem Berkelanjutan"],
      statement: "Saya memodelkan, menganalisis, dan mengoptimalkan sistem industri dan rantai pasok dengan simulasi, optimasi, data, dan AI, dengan fokus pada efisiensi, ketahanan, dan keberlanjutan.",
      stage: "Mahasiswa tingkat akhir S1 Teknik Industri (Program Internasional) di Universitas Islam Indonesia.",
      location: "Yogyakarta, Indonesia",
      portrait: { alt: "Potret Badr Aldeen Al-Khazan mengenakan jas gelap dan dasi, tersenyum" },
      cv: { note: "Untuk referensi atau informasi lebih lanjut, silakan hubungi saya melalui email." },
      openTo: [
        "Magang teknis di bidang riset operasi, rantai pasok, atau analitik industri",
        "Kolaborasi riset di bidang optimasi, simulasi, dan analitik keputusan",
        "Peluang studi pascasarjana di bidang riset operasi dan bidang terkait"
      ],
      direction: "Saya ingin memperdalam kemampuan dalam Riset Operasi dan Analitik Keputusan untuk sistem industri dan rantai pasok, memperoleh pengalaman teknis di industri dan riset, serta melanjutkan studi pascasarjana di bidang ini. Dalam jangka panjang, saya berharap dapat berkontribusi pada, atau membangun, perangkat kecerdasan keputusan dan optimasi yang membantu operasi industri mengambil keputusan yang lebih baik.",
      focusAreas: [
        { title: "Optimasi & Riset Operasi", text: "Model penentuan rute, pengadaan, dan alokasi yang mengubah kendala nyata menjadi keputusan yang lebih baik." },
        { title: "Simulasi & Pemodelan Stokastik", text: "Model simulasi kejadian diskret, dinamika sistem, dan Monte Carlo untuk sistem yang bekerja di bawah ketidakpastian." },
        { title: "Analitik Keputusan & AI", text: "Statistik, teori antrean, dan pembelajaran mesin yang digunakan sebagai pendukung keputusan dan dinilai dari keputusan yang dihasilkannya." },
        { title: "Rantai Pasok & Sistem Berkelanjutan", text: "Dinamika persediaan, logistik kendaraan listrik, susut pascapanen, dan tata kelola rantai pasok." }
      ],
      now: [
        "Menyelesaikan tahun terakhir S1 Teknik Industri (perkiraan lulus 2027).",
        "Mengembangkan riset tentang penentuan rute kendaraan hijau untuk truk pengiriman listrik."
      ],
      about: {
        story: [
          "Saya adalah mahasiswa tingkat akhir Teknik Industri di Program Internasional Universitas Islam Indonesia di Yogyakarta, tempat saya belajar dengan Future Global Leaders Scholarship. Benang merah dalam karya saya bersifat praktis: dengan kendala yang benar-benar dihadapi sebuah operasi, keputusan apa yang lebih baik, dan bagaimana kita dapat menunjukkan bahwa keputusan itu memang lebih baik?",
          "Proyek-proyek awal saya adalah teknik industri klasik. Saya ikut memproduksi dan merakit mesin press hidrolik di laboratorium proses manufaktur, merancang model data yang ternormalisasi untuk sistem manajemen rumah sakit, dan bersama tim mengembangkan pena ergonomis multifungsi yang meraih penghargaan Best Presentation di EXPO RSKE 2025. Proyek-proyek tersebut mengajarkan saya untuk melihat produk dan proses sebagai sistem yang memiliki pengguna, kendala, dan kompromi.",
          "Riset Operasi mengubah cara saya bekerja. Pada tahun kedua, saya membiarkan alat AI menyelesaikan soal pemrograman linear tentang perencanaan produksi dalam mata kuliah Riset Operasi, lalu saya tidak mampu menyusun ulang modelnya sendiri pada sesi laboratorium berikutnya. Saya kemudian menuliskan pengalaman itu dalam sebuah esai yang telah terbit, dan sejak itu saya berusaha memahami setiap masalah mulai dari modelnya.",
          "Sebagian besar karya terbaru saya mengikuti pola yang sama: mendefinisikan keputusan, membangun model yang jujur tentang asumsinya, lalu mengujinya. Sebagai trainee di Laboratorium Delsim, saya membangun dan memvalidasi model simulasi kejadian diskret dan dinamika sistem di FlexSim dan PowerSim. Saya telah menggunakan simulasi untuk mempelajari bullwhip effect pada rantai pasok multi-eselon, analisis antrean untuk mengevaluasi gerbang parkir RFID yang dibangun tim kami, pembelajaran mesin yang terkalibrasi untuk keputusan pemeliharaan prediktif, serta optimasi untuk penentuan rute truk listrik, pengadaan impor gandum, dan perencanaan bantuan bencana.",
          "Keberlanjutan dan ketahanan terus muncul dalam masalah-masalah ini sebagai kendala nyata: jangkauan baterai dalam logistik listrik, susut pascapanen yang dapat dikurangi oleh pengering yang lebih baik, jaringan jalan yang lumpuh bersamaan setelah banjir, dan jejak lingkungan alat AI yang kita gunakan untuk mengajarkan keberlanjutan itu sendiri.",
          "Belajar di Indonesia sebagai mahasiswa internasional telah membentuk cara saya bekerja dengan orang lain. Saya pernah memimpin berbagai acara dan menjadi duta Teknik Industri untuk UII Global, mewakili Jerman di International Youth Exchange and Conference ke-12 di Malaysia dan Singapura, tempat saya dinobatkan sebagai Outstanding Delegate, dan menyelesaikan Aspire Leaders Program."
        ],
        qualities: ["Berpikir analitis", "Berpikir sistem", "Manajemen proyek", "Penulisan teknis", "Kepemimpinan", "Komunikasi lintas budaya", "Berbicara di depan umum", "Kerja sama tim", "Belajar lintas disiplin"],
        interests: ["Membaca dan belajar berkelanjutan", "Belajar bahasa", "Berbicara di depan umum", "Fotografi", "Perjalanan dan penjelajahan budaya", "Alam dan kegiatan luar ruang", "Kerelawanan dan kegiatan komunitas"]
      },
      methods: {
        "optimization": "Optimasi",
        "routing": "Penentuan rute kendaraan",
        "stochastic-programming": "Pemrograman stokastik",
        "simulation": "Simulasi",
        "queueing": "Analisis antrean",
        "statistics": "Analisis statistik",
        "machine-learning": "Pembelajaran mesin",
        "risk": "Analisis risiko",
        "supply-chain": "Rantai pasok & logistik",
        "sustainability": "Keberlanjutan",
        "thermal-design": "Perancangan teknik",
        "ergonomics": "Ergonomi & kegunaan",
        "prototyping": "Pembuatan prototipe",
        "data-modeling": "Pemodelan data",
        "manufacturing": "Proses manufaktur",
        "qualitative": "Analisis dokumen & kerangka kerja"
      }
    },

    researchStatuses: {
      "published": { label: "Terbit", note: "Tersedia untuk publik melalui repositori resmi atau penerbit." },
      "accepted": { label: "Diterima / Segera Terbit", note: "Diterima untuk publikasi. Belum ada tautan publik sampai halaman resminya tersedia." },
      "conference": { label: "Konferensi", note: "Diterima untuk presentasi konferensi." },
      "under-review": { label: "Sedang Ditinjau", note: "Telah diajukan dan sedang ditinjau. Hanya ringkasan; naskahnya belum dipublikasikan." },
      "in-progress": { label: "Riset Berjalan", note: "Riset yang sedang berlangsung. Hanya ringkasan." },
      "research-project": { label: "Proyek Riset", note: "Karya riset yang ditampilkan tanpa klaim status publikasi." }
    },

    research: {
      "ai-critical-thinking": {
        short: "Ketergantungan pada AI dan berpikir kritis",
        type: "Esai",
        venue: "Repositori Universitas Islam Indonesia",
        summary: "Esai yang berargumen bahwa ketergantungan mahasiswa pada AI merupakan respons terhadap cara pembelajaran dinilai, bukan tanda kemalasan, dan bahwa ketergantungan itu dapat diam-diam mengikis kemampuan berpikir kritis. Berdasarkan pengalaman saya sendiri dalam mata kuliah Riset Operasi, esai ini mengusulkan perubahan sederhana pada tugas sehari-hari: mahasiswa bernalar lebih dulu dan mencatat pendekatannya, lalu menggunakan AI untuk menguji penalaran tersebut.",
        topics: ["AI dalam pendidikan", "Berpikir kritis", "Pengalihan beban kognitif"],
        links: [{ label: "Lihat di Repositori UII" }]
      },
      "germany-digital-framework": {
        short: "Kerangka Kerja Sama DIGITAL Jerman",
        type: "Makalah posisi",
        venue: "Repositori Universitas Islam Indonesia",
        summary: "Makalah posisi yang ditulis sebagai delegasi Jerman di dewan UNDP pada International Youth Exchange and Conference ke-12 (IYEC 12), tentang inovasi digital untuk industri dan infrastruktur berkelanjutan. Makalah ini mengusulkan DIGITAL Cooperative Framework: kedaulatan data, akses infrastruktur, transformasi digital hijau, inovasi melalui aliansi industri, talenta dan keterampilan, etika dan regulasi AI, serta lokalisasi dan inklusi.",
        topics: ["Infrastruktur digital", "Industrialisasi berkelanjutan", "SDG 9"],
        links: [{ label: "Lihat di Repositori UII" }]
      },
      "bullwhip": {
        short: "Simulasi bullwhip effect",
        type: "Artikel jurnal",
        statusDetail: "Diterima untuk publikasi; sedang dalam proses produksi",
        summary: "Simulasi waktu diskret yang dapat direproduksi dari rantai pasok air minum dalam kemasan tiga tingkat (peritel, distributor, produsen), di mana setiap tingkat menerapkan kebijakan order-up-to mingguan dengan peramalan rata-rata bergerak, lead time yang bervariasi, stok pengaman, dan pemesanan dalam batch. Dalam 1.000 replikasi, kedua antarmuka pemesanan memperbesar variabilitas permintaan relatif, yang diukur secara konsisten sebagai rasio koefisien variasi. Model ini merupakan skenario hipotetis dan tidak membuat klaim tentang perusahaan nyata.",
        topics: ["Bullwhip effect", "Kebijakan persediaan", "Rantai pasok multi-eselon"]
      },
      "predictive-maintenance": {
        short: "Kalibrasi pemeliharaan prediktif",
        type: "Makalah konferensi",
        statusDetail: "Diterima untuk presentasi",
        summary: "Mengkaji bagaimana penanganan ketidakseimbangan kelas, kalibrasi probabilitas, dan pemilihan ambang alarm saling berinteraksi dalam pemeliharaan prediktif pada benchmark publik AI4I 2020. Resampling dengan SMOTE tidak memberikan peningkatan peringkat yang konsisten dan membuat probabilitas prediksi membengkak, sehingga ambang berbasis biaya yang diterapkan padanya berkinerja buruk. Melatih model pada distribusi asli dan memilih ambang alarm berdasarkan biaya pada set validasi merupakan strategi paling stabil di seluruh rasio biaya yang diuji.",
        topics: ["Pemeliharaan prediktif", "Kalibrasi probabilitas", "Keputusan sensitif biaya"]
      },
      "scor-governance": {
        short: "Tata kelola rantai pasok SCOR",
        type: "Naskah",
        summary: "Studi kasus berbasis dokumen tentang bagaimana laporan keberlanjutan 2024 sebuah BUMN pupuk di Indonesia menunjukkan kapabilitas yang dibutuhkan untuk mengorkestrasi rantai pasok dari hulu ke hilir. Laporan tersebut dinilai terhadap 40 indikator dalam 13 kategori Orchestrate pada SCOR Digital Standard dan dikaitkan dengan pengungkapan GRI, dengan menilai kualitas pengungkapan sekaligus substansi yang dilaporkan, untuk menghasilkan instrumen yang dapat diaudit bagi prioritas pelaporan dan tata kelola.",
        topics: ["Tata kelola rantai pasok", "Pelaporan keberlanjutan", "SCOR", "GRI"]
      },
      "sigap-parking": {
        short: "Studi parkir SIGAP",
        type: "Naskah",
        summary: "Mengevaluasi prototipe kontrol akses RFID SIGAP dibandingkan pemeriksaan karcis kertas manual di pintu keluar parkir sepeda motor kampus. Studi ini menggabungkan studi waktu di lapangan, uji statistik, dan skenario antrean M/G/1 untuk mengestimasi penurunan waktu layanan dan peningkatan margin kapasitas, serta menambahkan uji kegunaan dengan pengguna yang baru pertama kali mencoba.",
        topics: ["Analisis antrean", "RFID", "Waktu layanan", "Perbaikan proses"]
      },
      "green-ai-literacy": {
        short: "Literasi Green-AI reflektif",
        type: "Naskah",
        summary: "Studi konseptual tentang sebuah ketegangan dalam pendidikan keberlanjutan: peserta didik diajari tanggung jawab lingkungan dengan alat AI yang jejak energi dan airnya jarang dikaji. Melalui scoping review (2020 hingga 2026), perbandingan kerangka kompetensi, dan sintesis interpretatif, studi ini mengidentifikasi kesenjangan refleksivitas dan mengusulkan Reflexive Green-AI Literacy dengan empat dimensi: kesadaran jejak, penilaian biaya-manfaat yang kritis, praktik kecukupan, dan refleksivitas.",
        topics: ["Pendidikan untuk pembangunan berkelanjutan", "Green AI", "Kerangka kompetensi"]
      },
      "green-vrp": {
        short: "Rute kendaraan hijau",
        type: "Riset berjalan",
        summary: "Masalah penentuan rute kendaraan hijau berkapasitas dengan jendela waktu, di mana energi baterai dilacak di sepanjang setiap rute dengan model konsumsi yang bergantung pada muatan, dan kendaraan dialihkan ke stasiun pengisian umum terdekat yang dapat dijangkau bila diperlukan. Model ini diterapkan pada jaringan pengiriman ritel di Yogyakarta yang disusun dari lokasi toko dan stasiun pengisian yang nyata, serta diuji pada beberapa skenario kapasitas baterai.",
        topics: ["Penentuan rute kendaraan listrik", "Konsumsi energi", "Stasiun pengisian", "Logistik"]
      },
      "relief-prepositioning": {
        short: "Pra-penempatan bantuan",
        type: "Studi logistik kemanusiaan",
        summary: "Studi ini bertanya kapan pemodelan kegagalan jalan yang berkorelasi secara spasial menghasilkan rencana bantuan bencana yang lebih baik. Program stokastik dua tahap memilih lokasi depot dan tingkat stok sebelum bencana, lalu merutekan pasokan melalui jalan yang masih terbuka, menggunakan model data terbuka dari 21 kabupaten daratan di Aceh, Indonesia. Rencana diuji pada kejadian simulasi dan pada rekonstruksi banjir Siklon Senyar akhir 2025.",
        topics: ["Logistik kemanusiaan", "Pra-penempatan bantuan", "Gangguan yang berkorelasi"]
      },
      "wheat-cvar": {
        short: "Mean-CVaR impor gandum",
        type: "Studi analitik keputusan",
        summary: "Studi portofolio pengadaan yang menyeimbangkan biaya dengan risiko kekurangan pasokan yang parah dalam impor gandum Indonesia. Dengan data bulanan publik UN Comtrade (2015 hingga 2025, 49 pemasok), program linear Mean-CVaR dengan validasi bergulir bersarang memilih pangsa pemasok tahunan, yang kemudian diuji di luar sampel terhadap tujuh pembanding dengan ketidakpastian bootstrap dan uji tekanan.",
        topics: ["Ketahanan rantai pasok", "Portofolio pengadaan", "Risiko ekor", "Ketahanan pangan"]
      }
    },

    projects: {
      "sigap": {
        title: "SIGAP: Sistem Akses Parkir RFID",
        category: "Perbaikan proses · Teori antrean · Otomasi",
        tagline: "Memangkas waktu keluar sepeda motor di gerbang parkir kampus dengan kontrol akses RFID, didukung studi waktu dan analisis antrean.",
        problem: "Di fasilitas parkir sepeda motor yang melayani dua fakultas di kampus utama Universitas Islam Indonesia, proses masuk sudah otomatis tetapi proses keluar belum. Petugas membaca karcis kertas, memeriksa waktu masuk, dan mengangkat palang secara manual. Observasi lapangan menunjukkan proses ini memakan 10 hingga 15 detik per sepeda motor, di atas target fasilitas sebesar lima detik, dan proses ini tidak meninggalkan catatan akses yang dapat ditelusuri.",
        context: "Kepulangan memuncak sekitar akhir jadwal perkuliahan, sehingga transaksi keluar menjadi hambatan yang teramati. Studi ini memperlakukan SIGAP sebagai prototipe dan membandingkannya dengan proses manual yang ada di lokasi yang sama.",
        role: "Salah satu anggota tim tiga orang (bersama Muhammad Mahdy Fadhlullah dan Prabaswara Mahameru Wangid). Penulis pertama dan penulis korespondensi naskah riset.",
        approach: [
          "Mengukur waktu proses keluar manual dengan stopwatch untuk 35 sepeda motor selama empat hari pada jam pulang puncak, dan menghitung kedatangan dalam 15 jendela sepuluh menit.",
          "Membangun prototipe tiga lapis: pembaca RFID dan pengendali Arduino Uno yang menggerakkan palang servo dengan sensor lintasan inframerah, ditambah aplikasi desktop yang mencatat setiap kejadian beserta stempel waktu dan kredensialnya.",
          "Merekam 55 siklus otorisasi dari stempel waktu firmware dan menjalankan uji kegunaan dengan 15 pengguna yang baru pertama kali mencoba.",
          "Membandingkan waktu layanan dengan uji Shapiro-Wilk, Mann-Whitney U, dan Welch, lalu menerjemahkan rata-rata dan varians terukur ke dalam skenario antrean M/G/1 untuk mengestimasi margin kapasitas."
        ],
        tools: ["Arduino Uno", "Pembaca RFID MFRC522", "Aktuator servo", "Sensor inframerah", "Model antrean M/G/1"],
        results: [
          { value: "12,40 dtk → 3,15 dtk", label: "Rata-rata waktu layanan keluar, proses manual vs. siklus uji prototipe" },
          { value: "4,84 → 19,04", label: "Estimasi laju layanan, kendaraan per menit" },
          { value: "12 dari 15", label: "Pengguna baru yang berhasil pada percobaan pertama" }
        ],
        caveat: "Ini adalah hasil tahap prototipe. Pengukuran waktu manual dan prototipe menggunakan pemicu awal dan akhir yang berbeda, dan prototipe diuji dalam kondisi terkendali, sehingga uji coba langsung di beberapa gerbang dan pengelolaan kredensial berbasis basis data menjadi langkah berikutnya sebelum penerapan.",
        cover: { alt: "Badr Aldeen Al-Khazan (kanan) bersama dua rekan tim SIGAP memegang papan Juara 1 EXPO PSIT 2026" },
        gallery: [
          { alt: "Badr Aldeen Al-Khazan (kanan) bersama dua rekan tim SIGAP memegang papan Juara 1 EXPO PSIT 2026", caption: "Tim SIGAP setelah meraih Juara 1 di EXPO PSIT 2026." },
          { alt: "Model meja gerbang SIGAP dengan pembaca RFID, lengan palang bertenaga servo, dan model sepeda motor di jalur keluar tiruan", caption: "Model meja prototipe gerbang SIGAP." }
        ]
      },
      "ai-phl": {
        title: "AI-PHL Guardian: Pengeringan Tenaga Surya Cerdas untuk Susut Pascapanen",
        category: "Rekayasa berkelanjutan · Desain termal · Rantai pasok agri-pangan",
        tagline: "Sistem usulan yang memadukan pengeringan tenaga surya, sensor berbiaya rendah, dan penasihat pengeringan berbasis AI untuk mengurangi susut pascapanen, didukung studi desain termal untuk pengering cabai yang terjangkau.",
        problem: "Susut pascapanen dalam rantai pasok cabai di Indonesia dilaporkan dalam literatur mencapai 30 hingga 50 persen, sebagian besar akibat penjemuran di bawah sinar matahari terbuka yang lambat, terhenti saat hujan, dan membuat hasil panen terpapar kontaminasi.",
        context: "Petani kecil bergantung pada penjemuran terbuka, yang menurut literatur dapat memakan waktu 40 hingga 90 jam untuk cabai. Sebagian besar desain pengering surya yang dipublikasikan dikembangkan untuk iklim yang lebih kering daripada Indonesia yang tropis, di mana kelembapan tetap tinggi hampir sepanjang tahun.",
        role: "Salah satu anggota tim tiga orang (dengan Jean De Dieu Habumuremyi sebagai ketua tim dan Muhammad Mahdy Fadhlullah) untuk Idea Champion 2.0.",
        approach: [
          "Mengusulkan konsep terpadu: pengering surya cerdas dari bahan yang tersedia secara lokal, unit pemantauan IoT yang melacak kelembapan, suhu, dan aliran udara, serta penasihat pengeringan berbasis pembelajaran mesin yang memprediksi waktu pengeringan dan menandai risiko jamur.",
          "Merancang pengering kabinet surya konveksi paksa tidak langsung (kolektor 1,2 m², kipas bertenaga fotovoltaik, ruang tiga rak) untuk skala petani kecil.",
          "Memprediksi kinerja termalnya dengan model kolektor Hottel-Whillier-Bliss dan neraca energi ruang pengering, menggunakan data iklim Yogyakarta dari BMKG sebagai kondisi batas musim kemarau dan musim hujan.",
          "Melakukan studi parametrik atas laju aliran udara, panjang kolektor, dan kemiringan, serta analisis biaya awal berdasarkan survei harga pasar Indonesia tahun 2026."
        ],
        tools: ["Model Hottel-Whillier-Bliss", "Neraca energi", "Analisis parametrik", "Analisis biaya"],
        results: [
          { value: "62,9%", label: "Prediksi efisiensi kolektor (musim kemarau)" },
          { value: "47,2 °C", label: "Prediksi suhu ruang, dalam rentang 45–55 °C untuk cabai" },
          { value: "3,6 jam", label: "Prediksi waktu pengeringan untuk 12 kg per batch (musim kemarau)" },
          { value: "Rp1,98 juta", label: "Estimasi biaya pembuatan dari bahan lokal" }
        ],
        caveat: "Angka-angka ini adalah prediksi dari model desain kondisi tunak, bukan hasil pengukuran lapangan. Membangun prototipe fisik dan memvalidasinya dalam kondisi lapangan di Yogyakarta adalah langkah berikutnya yang telah ditetapkan. Komponen IoT dan AI merupakan bagian dari konsep yang diusulkan.",
        cover: { alt: "Badr Aldeen Al-Khazan (tengah) bersama rekan tim AI-PHL Guardian memegang papan 1st Winner Idea Champion 2.0 di samping poster proyek mereka" },
        gallery: [
          { alt: "Badr Aldeen Al-Khazan (tengah) bersama rekan tim AI-PHL Guardian memegang papan 1st Winner Idea Champion 2.0 di samping poster proyek mereka", caption: "Bersama poster AI-PHL Guardian setelah pengumuman hasil." },
          { alt: "Tim AI-PHL Guardian di atas panggung penganugerahan Idea Champion 2.0, memegang papan 1st Winner", caption: "Di atas panggung penganugerahan Idea Champion 2.0, Universitas Islam Indonesia." }
        ]
      },
      "green-vrp": {
        short: "Rute kendaraan hijau",
        title: "Penentuan Rute Kendaraan Hijau untuk Pengiriman dengan Truk Listrik",
        category: "Riset operasi · Penentuan rute kendaraan · Logistik kendaraan listrik",
        tagline: "Menentukan rute truk pengiriman listrik berbaterai ketika penggunaan energi bergantung pada muatan yang dibawa, diterapkan pada pengiriman ritel di Yogyakarta.",
        problem: "Truk listrik memiliki jangkauan terbatas, dan penggunaan energinya per kilometer meningkat seiring muatan. Model penentuan rute yang hanya meminimalkan jarak mengabaikan kedua efek ini, yang menjadi penting ketika stasiun pengisian umum masih jarang.",
        context: "Indonesia sedang mendorong kendaraan listrik berbaterai, tetapi stasiun pengisian kendaraan listrik umum (SPKLU) masih belum merata. Bagi operator yang merencanakan armada listrik saat ini, urutan kunjungan ke toko dapat menentukan apakah sebuah rute layak dijalankan atau tidak.",
        role: "Salah satu dari dua penulis studi ini, yang masih berjalan.",
        approach: [
          "Merumuskan masalah penentuan rute kendaraan hijau berkapasitas dengan jendela waktu yang melacak energi baterai di sepanjang setiap rute dengan model konsumsi bergantung muatan, serta mengalihkan kendaraan ke stasiun pengisian terdekat yang dapat dijangkau bila diperlukan.",
          "Membangun kasus berbasis geografis dari satu depot, tujuh minimarket, dan lima stasiun pengisian umum di Yogyakarta, menggunakan lokasi nyata. Permintaan, jendela waktu, dan waktu layanan merupakan estimasi berbasis literatur.",
          "Menyelesaikan kasus hingga optimal terbukti dengan enumerasi lengkap seluruh 5.040 urutan kunjungan, dan mengembangkan heuristik dua fase (konstruksi nearest-neighbour dengan perbaikan 2-opt) untuk kasus yang lebih besar.",
          "Membandingkan tiga skenario kapasitas baterai untuk melihat bagaimana keputusan rute berubah ketika energi menjadi kendala yang mengikat."
        ],
        tools: ["Python", "Enumerasi eksak", "Heuristik nearest-neighbour + 2-opt", "Data jalan OpenStreetMap / OSRM"],
        findings: [
          "Ketika penggunaan energi bergantung pada muatan, arah rute menjadi keputusan nyata: dengan baterai terbatas, menjalani rute jarak-optimal secara terbalik membuatnya tetap layak tanpa pengisian ulang, dengan jarak yang sama.",
          "Pengaruh baterai yang lebih kecil muncul secara bertahap, dari tidak berpengaruh, menjadi kendala mengikat yang mengubah rute, hingga jalan memutar untuk mengisi daya yang menambah jarak dan waktu."
        ],
        caveat: "Riset sedang berjalan. Hasil dapat berubah seiring model diperluas ke lebih banyak kendaraan dan toko.",
        demo: {
          title: "Penjelajah interaktif: rute pengiriman listrik di Yogyakarta",
          note: "Model perencanaan lanjutan yang sedang dikembangkan, dengan 87 toko, 18 kandidat stasiun pengisian, dan beberapa kendaraan pada jaringan jalan nyata (OpenStreetMap, dirutekan dengan OSRM). Ini adalah tampilan perencanaan riset, bukan rencana pengiriman.",
          poster: { alt: "Tangkapan layar peta interaktif rute pengiriman listrik di Kota Yogyakarta, menampilkan empat rute kendaraan, toko, dan kandidat stasiun pengisian" }
        },
        cover: { alt: "Peta interaktif rute pengiriman listrik di Kota Yogyakarta, menampilkan rute kendaraan, toko, dan kandidat stasiun pengisian" },
        gallery: [
          { alt: "Plot jaringan kasus: satu depot, tujuh toko Indomaret, dan lima stasiun pengisian umum (SPKLU) di Yogyakarta berdasarkan lintang dan bujur", caption: "Jaringan kasus dalam studi: satu depot, tujuh toko, dan lima stasiun pengisian umum." }
        ]
      },
      "lembah-susu": {
        category: "Desain web · Pengembangan front-end · UX",
        tagline: "Situs web demo dwibahasa untuk peternakan sapi perah di Baturraden, Indonesia, yang mengajarkan pengunjung bagaimana susu dibuat dan memudahkan pembelian produk serta pemesanan kunjungan.",
        problem: "Saat berkunjung ke Mini Ranch Baturraden di Banyumas, Jawa Tengah, kami melihat usaha susu sapi yang besar tanpa situs web: tidak ada profil perusahaan, harga produk, maupun informasi pengunjung secara daring. Studi kasus ini juga menanyakan bagaimana satu pelajaran tentang sapi atau produksi susu dapat dibuat mudah dipahami dan diingat oleh pengunjung yang baru pertama kali datang.",
        context: "Dibuat dalam The INDEX 2026: The Indonesia Experience, program pertukaran budaya di Telkom University Purwokerto (28 September hingga 3 Oktober 2026), untuk Studi Kasus 2, \"From Cow to Cup\".",
        role: "Anggota tim Six Seven (bersama Mel, Ayman, dan Guli), bertanggung jawab atas desain dan pengembangan situs web serta poster.",
        approach: [
          "Membangun situs web demo lengkap untuk peternakan sapi perah fiktif, Lembah Susu Dairy, sebagai contoh yang dapat digunakan oleh usaha sebenarnya.",
          "Menjadikan perjalanan interaktif \"From Cow to Cup\" sebagai pusatnya: enam langkah bergambar yang mencakup pemberian pakan, pemerahan, uji kualitas, pasteurisasi, pengolahan, serta pengemasan dan pengiriman.",
          "Memberi setiap langkah satu kalimat singkat \"Ingat ini\" dan sebuah fakta menarik, lalu kuis \"Milk Master\" yang menguji apa yang diingat pengunjung."
        ],
        features: [
          "Perjalanan belajar enam langkah dengan bilah kemajuan berbentuk botol susu",
          "Kuis \"Milk Master\" dengan umpan balik instan dan lencana",
          "Katalog produk dengan filter, pencarian, dan pemesanan melalui WhatsApp",
          "Perencana kunjungan dengan kalkulator harga tiket langsung dalam rupiah",
          "Peta peternakan bergambar yang dapat diklik",
          "Grafik simulasi dampak bisnis sebelum dan sesudah adanya situs web",
          "Versi bahasa Indonesia dan Inggris yang lengkap, dengan mode terang dan gelap",
          "Dapat digunakan di ponsel, tablet, dan desktop, serta dengan keyboard"
        ],
        tools: ["HTML", "CSS", "JavaScript", "Ilustrasi SVG inline", "Hosting Netlify", "Bantuan AI (Claude Code)"],
        tags: ["Desain web", "Pengembangan front-end", "UX", "Edukasi", "Studi kasus", "Dwibahasa"],
        caveat: "Perusahaan, orang, harga, dan data pada situs web demo ini bersifat fiktif.",
        links: [{ label: "Kunjungi situs web" }]
      },
      "ergonomic-pen": {
        short: "Pena ergonomis",
        title: "Pena Ergonomis Multifungsi & Berkelanjutan",
        category: "Ergonomi · Desain produk · Keberlanjutan",
        tagline: "Pena yang berpusat pada manusia, memadukan kesesuaian ergonomis, fungsi tambahan yang berguna, dan bahan yang dapat didaur ulang.",
        problem: "Pena konvensional sering tidak nyaman dipakai lama, hanya memiliki satu fungsi, dan terbuat dari plastik yang tidak dapat didaur ulang.",
        context: "Big Project WSDE 2025, proyek mata kuliah sistem kerja dan ergonomi di Jurusan Teknik Industri, Universitas Islam Indonesia.",
        role: "Anggota tim beranggotakan empat orang.",
        approach: [
          "Merancang prototipe dari PLA yang dapat terurai secara hayati dan aluminium yang dapat didaur ulang, dengan batang teleskopik (12 hingga 15 cm), pegangan lembut, penggaris 10 cm bawaan, perekam suara mini, dan modul yang dapat diganti.",
          "Mengevaluasi kegunaan dengan 15 responden menggunakan System Usability Scale.",
          "Memeriksa kesesuaian fisik dengan pengukuran antropometri dari 5 partisipan terhadap persentil P5 hingga P95."
        ],
        tools: ["System Usability Scale", "Antropometri", "Cetak 3D (PLA)"],
        results: [
          { value: "75", label: "Skor System Usability Scale dari 15 responden" },
          { value: "P5–P95", label: "Rentang ukuran tangan yang menjadi acuan pemeriksaan desain" }
        ],
        caveat: "Pengguna meminta tampilan yang lebih sederhana dan mempertanyakan manfaat penggaris, yang dicatat tim sebagai perbaikan utama untuk versi berikutnya.",
        cover: { alt: "Render 3D desain pena multifungsi dengan batang bertekstur kayu, modul pegangan hijau, dan tombol perekam" },
        gallery: [
          { alt: "Render 3D desain pena multifungsi dengan batang bertekstur kayu, modul pegangan hijau, dan tombol perekam", caption: "Render desain pena." },
          { alt: "Render tampak samping pena yang menunjukkan tanda penggaris bawaan di sepanjang batang", caption: "Tampak samping dengan penggaris bawaan." },
          { alt: "Badr Aldeen Al-Khazan (kanan) dan seorang rekan tim memegang sertifikat Best Presentation di Big Project WSDE Awards 2025", caption: "Menerima sertifikat Best Presentation." }
        ]
      },
      "sea-save": {
        title: "SEA-Save: Fitur Tabungan Pembulatan",
        category: "Kasus bisnis · Inklusi keuangan · Konsep produk",
        tagline: "Konsep fitur tabungan yang terhubung dengan bank, yang mengubah uang kembalian sehari-hari menjadi kemajuan menuju target tabungan.",
        context: "Dikembangkan untuk International Business Case Competition di Ganesha Business Management Festival 2025, bertema \"Advancing Economic Inclusivity for Equitable Growth\". Karya ini mencapai babak semifinal.",
        role: "Peserta semifinalis.",
        approach: [
          "Kasus bisnis untuk fitur tabungan yang terhubung dengan transaksi bank sehari-hari.",
          "Konsep ini didemonstrasikan dengan prototipe yang berfungsi: setiap transaksi dibulatkan ke atas dan selisihnya dipindahkan ke tabungan, dengan target tabungan, bilah kemajuan, lencana pencapaian, dan tips keuangan singkat."
        ],
        tools: ["Analisis kasus bisnis", "Prototipe interaktif"],
        recognitionNote: "Semifinalis, International Business Case Competition, Ganesha Business Management Festival 2025",
        video: { label: "Rekaman layar prototipe SEA-Save: memasukkan transaksi, menetapkan target, serta melihat uang kembalian yang ditabung dan sebuah tips keuangan" },
        cover: { alt: "Layar prototipe SEA-Save yang menampilkan input transaksi, target tabungan, total tabungan, dan tips keuangan" }
      },
      "hydraulic-press": {
        short: "Mesin press hidrolik",
        title: "Mesin Press Hidrolik: Proses Manufaktur & Perakitan",
        category: "Proses manufaktur · Fabrikasi · Perakitan",
        tagline: "Memproduksi dan merakit mesin press hidrolik dalam praktikum Proses Manufaktur UII.",
        context: "Diselesaikan dalam praktikum Proses Manufaktur (Prosman) di Laboratorium Sistem Manufaktur Terintegrasi, Universitas Islam Indonesia. Alurnya mencakup pelatihan, produksi, perakitan, dan finishing.",
        role: "Peserta praktikum dalam proyek ini.",
        approach: [
          "Memproduksi komponen press seperti rangka, alas baja, pelindung, platform, dan kopling dengan mesin-mesin laboratorium: pemotongan dan gerinda, pengeboran dan frais, pengelasan, mesin bubut, Dobot, dan scroll saw.",
          "Merakit dan menyelesaikan press, menerapkan konsep pemesinan, fabrikasi, dan keselamatan bengkel di sepanjang proses produksi multi-tahap."
        ],
        tools: ["Mesin bubut", "Frais & pengeboran", "Pengelasan", "Gerinda", "Dobot", "Scroll saw"],
        cover: { alt: "Diagram berlabel mesin press hidrolik yang menunjukkan rangka atas, rangka samping, alas baja, pompa hidrolik, pegas, kopling, pelindung baja, dan platform berongga" },
        coverCaption: "Diagram komponen dari buku panduan praktikum Laboratorium Sistem Manufaktur Terintegrasi, UII."
      },
      "hospital-db": {
        short: "Desain basis data rumah sakit",
        title: "Sistem Manajemen Rumah Sakit: Desain Basis Data & ERD",
        category: "Pemodelan data · Desain basis data · Berpikir sistem",
        tagline: "Model data ternormalisasi untuk sistem manajemen rumah sakit, dengan sembilan entitas dan fitur pemodelan ER tingkat lanjut.",
        problem: "Rumah sakit mengelola banyak data yang saling terkait tentang pasien, dokter, perawatan, obat, dan tagihan. Tanpa basis data yang terstruktur, catatan menjadi ganda, data menjadi tidak konsisten, dan operasional melambat.",
        context: "Proyek akhir mata kuliah Sistem Manajemen Basis Data, Jurusan Teknik Industri, Universitas Islam Indonesia, dikumpulkan pada Agustus 2025.",
        role: "Proyek mata kuliah individu.",
        approach: [
          "Mengidentifikasi entitas inti dari operasional rumah sakit dan menetapkan atribut, primary key, dan foreign key untuk masing-masing.",
          "Memetakan relasi antarentitas, dari relasi satu-ke-satu dan satu-ke-banyak hingga sebuah relasi rekursif dan sebuah relasi yang tidak dapat dipindahkan.",
          "Meninjau desain agar memenuhi Bentuk Normal Ketiga (3NF): atribut atomik tanpa ketergantungan parsial maupun transitif.",
          "Menerapkan fitur pemodelan tingkat lanjut: supertype Person dengan subtype Patient dan Doctor, hierarki dokter-mengawasi-dokter, dan exclusive arc sehingga setiap perawatan adalah operasi atau pengobatan.",
          "Menerapkan penempatan kamar pasien yang tidak dapat dipindahkan dengan menempatkan Room_ID sebagai foreign key pada entitas Patient."
        ],
        relationships: [
          { link: "Department mempekerjakan Doctor", type: "1 : M" },
          { link: "Department dipimpin oleh seorang Head Doctor", type: "1 : 1" },
          { link: "Doctor menangani Patient", type: "1 : M" },
          { link: "Patient ditempatkan di sebuah Room", type: "Tidak dapat dipindahkan" },
          { link: "Patient menerima Bill", type: "1 : M" },
          { link: "Patient menerima Treatment", type: "1 : M" },
          { link: "Doctor melakukan Treatment", type: "1 : M" },
          { link: "Treatment mencakup Surgery atau Medication", type: "Exclusive arc" },
          { link: "Doctor mengawasi Doctor", type: "Rekursif" }
        ],
        tools: ["ERD", "Primary & foreign key", "Supertype / subtype", "Normalisasi 3NF"],
        results: [
          { value: "9", label: "Entitas dalam model data" },
          { value: "9", label: "Relasi yang dipetakan, termasuk relasi 1:1, 1:M, rekursif, dan exclusive arc" },
          { value: "3NF", label: "Tingkat normalisasi desain akhir" }
        ],
        caveat: "Proyek pemodelan data. Tidak ada perangkat lunak rumah sakit yang dibangun atau diterapkan.",
        cover: { alt: "Slide judul: Hospital Management System, Entity Relationship Diagram, dengan 9 entitas, ternormalisasi 3NF, dan pemodelan tingkat lanjut" },
        feature: { alt: "Entity Relationship Diagram sistem manajemen rumah sakit yang menampilkan Department, Person, Patient, Doctor, Room, Bill, Treatment, Surgery, dan Medication beserta atribut, kunci, dan relasinya", caption: "Entity Relationship Diagram lengkap. Pilih gambar untuk membukanya dalam ukuran penuh." },
        gallery: [
          { alt: "Slide yang merangkum kelompok entitas (orang, sumber daya rumah sakit, tindakan klinis) dan relasi utama beserta kardinalitasnya", caption: "Entitas dan relasi utama." },
          { alt: "Slide yang merangkum sorotan desain: supertype dan subtype, relasi arc, relasi rekursif, dan Bentuk Normal Ketiga", caption: "Teknik pemodelan tingkat lanjut yang digunakan dalam desain." }
        ],
        document: { label: "Lihat presentasi ERD (PDF)" }
      }
    },

    experience: {
      roles: {
        "delsim": {
          title: "Trainee Simulasi & Pemodelan",
          org: "Laboratorium Delsim, Universitas Islam Indonesia",
          short: "Laboratorium Delsim",
          summary: "Laboratorium pemodelan dan simulasi industri di Jurusan Teknik Industri.",
          bullets: ["Membangun dan memvalidasi model simulasi kejadian diskret dan dinamika sistem menggunakan FlexSim dan PowerSim untuk menganalisis perilaku sistem industri."],
          related: ["Panitia penyelenggara seminar laboratorium \"Optimization via Simulation (OVS): Shifting from What-if to What-Best Analysis\" (November 2024)."],
          tags: ["FlexSim", "PowerSim", "Simulasi kejadian diskret", "Dinamika sistem"]
        },
        "uii-global": {
          title: "Wakil Kepala Divisi Acara & Duta Teknik Industri",
          org: "UII Global (Relawan)",
          short: "UII Global",
          summary: "UII Global mendukung komunitas mahasiswa internasional di Universitas Islam Indonesia.",
          bullets: ["Memimpin acara akademik dan budaya, logistik, serta kemitraan; menjadi PIC untuk kegiatan mahasiswa internasional."],
          progression: [
            { when: "Periode 2023/2024", what: "Anggota, Divisi Acara" },
            { when: "Maret 2025", what: "Penanggung jawab, Iftar Drive 2025" },
            { when: "Jul–Des 2025", what: "Wakil Kepala Divisi Acara & Duta Teknik Industri" }
          ],
          tags: ["Manajemen acara", "Kemitraan", "Komunikasi lintas budaya"],
          image: { alt: "Pengumuman duta mahasiswa UII Global yang menampilkan Badr Aldeen Alkhazan, Teknik Industri '23" }
        },
        "ysu": {
          title: "Wakil Kepala, Departemen Tanggung Jawab Sosial",
          org: "Persatuan Mahasiswa Yaman di Indonesia",
          short: "Persatuan Mahasiswa Yaman di Indonesia",
          bullets: ["Mengoordinasikan program dukungan mahasiswa dan program komunitas, serta acara budaya besar."],
          tags: ["Program komunitas", "Dukungan mahasiswa"]
        }
      },
      community: {
        "iftar-drive": {
          date: "28 Maret 2025",
          role: "Penanggung jawab",
          text: "Memimpin penyelenggaraan pembagian makanan berbuka puasa Ramadan untuk masyarakat kurang mampu dan anak-anak di sebuah panti asuhan."
        },
        "wcu-batik": {
          title: "Proyek Inbound Pengabdian Masyarakat",
          org: "Skema hibah World Class University, Universitas Islam Indonesia",
          date: "April 2026",
          role: "Peserta",
          text: "Proyek masyarakat tentang desain mesin ramah lingkungan untuk meningkatkan keberlanjutan produksi batik pada usaha mikro, kecil, dan menengah (UMKM)."
        }
      }
    },

    awardTypes: {
      "competition": "Penghargaan kompetisi",
      "scholarship": "Beasiswa",
      "program": "Pengembangan kepemimpinan"
    },

    awards: {
      "expo-psit-2026": {
        title: "Juara 1",
        for: "Sistem Akses Parkir Otomatis RFID SIGAP",
        detail: "Tim tiga orang, bersama Muhammad Mahdy Fadhlullah dan Prabaswara Mahameru Wangid.",
        image: { alt: "Badr Aldeen Al-Khazan (kanan) bersama dua rekan tim SIGAP memegang papan Juara 1 EXPO PSIT 2026" }
      },
      "idea-champion-2": {
        title: "Juara 1",
        date: "November 2025",
        detail: "Tim tiga orang, dipimpin oleh Jean De Dieu Habumuremyi, bersama Muhammad Mahdy Fadhlullah.",
        image: { alt: "Badr Aldeen Al-Khazan (tengah) bersama rekan tim AI-PHL Guardian memegang papan 1st Winner Idea Champion 2.0" },
        certificate: { alt: "Sertifikat Penghargaan dari Universitas Islam Indonesia yang menyatakan Badr Aldeen Al-Khazan sebagai 1st Winner Idea Champion 2.0, National Innovation & Solution Challenges, 28 November 2025" }
      },
      "iyec12": {
        eventDetail: "Malaysia & Singapura",
        for: "Delegasi Jerman, dewan UNDP",
        date: "November 2025",
        detail: "Diakui atas komunikasi, kejelasan, dan inovasi dalam presentasi di hadapan para delegasi internasional. Makalah posisinya terbit di Repositori UII.",
        image: { alt: "Badr Aldeen Al-Khazan duduk di meja konferensi di belakang papan nama delegasi Jerman di IYEC 12" },
        certificate: { alt: "Sertifikat Prestasi dari Indonesian Youth Action untuk Outstanding Delegate Award di International Youth Exchange & Conference #12, Malaysia & Singapura, 4-8 November 2025" }
      },
      "expo-rske-2025": {
        for: "Pena Ergonomis Multifungsi",
        date: "Juli 2025",
        detail: "Penghargaan tim untuk proyek mata kuliah Big Project WSDE 2025. Sertifikat diberikan kepada tim (IP-1).",
        image: { alt: "Badr Aldeen Al-Khazan (kanan) dan seorang rekan tim memegang sertifikat Best Presentation di Big Project WSDE Awards 2025" },
        certificate: { alt: "Sertifikat Penghargaan untuk Best Presentation di Big Project Rekayasa Sistem Kerja dan Ergonomi 2025, diberikan kepada tim IP-1, 28 Juli 2025" }
      },
      "fgls": {
        for: "S1 Teknik Industri (Program Internasional)",
        detail: "Beasiswa universitas yang mendukung studi sarjana saya di Program Internasional."
      },
      "aspire": {
        for: "Program pengembangan kepemimpinan",
        detail: "Menyelesaikan seluruh modul program 2025 (40 jam perkuliahan) pada Oktober 2025.",
        certificate: { alt: "Sertifikat Aspire Institute atas penyelesaian seluruh modul Aspire Leaders Program 2025, Oktober 2025" }
      }
    },

    education: {
      degrees: [
        {
          degree: "S1 Teknik Industri (Program Internasional)",
          period: "2023 – perkiraan lulus 2027",
          gpa: "3,90 / 4,00",
          coursework: ["Riset Operasi", "Perencanaan Produksi", "Simulasi & Pemodelan", "Tata Letak Fasilitas", "Kualitas Six Sigma", "Proses Manufaktur"]
        }
      ],
      certifications: {
        "capm": { kind: "Kredensial profesional", issued: "Mei 2026", validUntil: "Mei 2029" },
        "toefl": { kind: "Tes bahasa Inggris", issued: "Maret 2026" }
      },
      languages: [
        { name: "Bahasa Arab" },
        { name: "Bahasa Inggris" },
        { name: "Bahasa Indonesia" },
        { name: "Bahasa Jerman" }
      ]
    },

    programs: {
      "aspire-2025": { kind: "Program kepemimpinan", date: "Selesai Oktober 2025", note: "40 jam perkuliahan." },
      "ipb-summer-2025": { org: "Departemen Teknologi Industri Pertanian, IPB University", kind: "Kursus musim panas", date: "13 Juli – 7 Agustus 2025" },
      "ubaya-uii-summer-2025": { org: "Universitas Surabaya dan Universitas Islam Indonesia", kind: "Program musim panas", date: "18–23 Juni 2025" },
      "ai-agriculture-lecture-2024": { org: "Davao del Sur State College dan Universitas Islam Indonesia", kind: "Kuliah", date: "7 Juni 2024" },
      "nuni-seminar-2024": { kind: "Seminar", date: "20 Februari 2024" },
      "triz-workshop-2023": { org: "Growth Hub, Universitas Islam Indonesia, bersama InTRIZ dan MyTRIZ", kind: "Lokakarya", date: "1–2 Desember 2023" },
      "umy-webinar-2023": { org: "ISA-UMY dan Yemeni Students Union di UMY", kind: "Webinar", date: "23–25 September 2023" }
    },

    skills: {
      "or": {
        group: "Riset Operasi & Optimasi",
        items: [
          { name: "Pemrograman linear" },
          { name: "Penentuan rute kendaraan dengan jendela waktu dan kendala energi" },
          { name: "Optimasi portofolio Mean-CVaR" },
          { name: "Pemrograman stokastik dua tahap" },
          { name: "Enumerasi eksak serta heuristik konstruksi/perbaikan" },
          { name: "Analisis antrean (M/G/1)" }
        ]
      },
      "simulation": {
        group: "Simulasi & Pemodelan",
        items: [
          { name: "Simulasi kejadian diskret (FlexSim)" },
          { name: "Dinamika sistem (PowerSim)" },
          { name: "Simulasi Monte Carlo waktu diskret" },
          { name: "Pemodelan stokastik" },
          { name: "Analisis skenario dan sensitivitas" }
        ]
      },
      "supply-chain": {
        group: "Rantai Pasok & Operasi",
        items: [
          { name: "Analitik rantai pasok" },
          { name: "Kebijakan persediaan dan analisis bullwhip" },
          { name: "Penilaian proses SCOR (Orchestrate)" },
          { name: "Analisis risiko dan ketahanan pengadaan" },
          { name: "Logistik kemanusiaan dan kendaraan listrik" }
        ]
      },
      "manufacturing": {
        group: "Manufaktur & Perbaikan Proses",
        items: [
          { name: "SPC & Six Sigma" },
          { name: "Perencanaan produksi" },
          { name: "Tata letak fasilitas" },
          { name: "Pengukuran kerja dan studi waktu" },
          { name: "Ergonomi, antropometri, dan uji kegunaan" },
          { name: "Proses manufaktur: pemesinan, fabrikasi, perakitan" }
        ]
      },
      "data": {
        group: "Data & Perangkat Teknis",
        items: [
          { name: "Python (NumPy, SciPy, scikit-learn)" },
          { name: "Pembelajaran mesin untuk pendukung keputusan: kalibrasi dan ambang sensitif biaya" },
          { name: "Uji statistik" },
          { name: "Excel tingkat lanjut" },
          { name: "Desain basis data (ERD, 3NF)" },
          { name: "Prototipe Arduino dan RFID" }
        ]
      },
      "professional": {
        group: "Proyek & Profesional",
        items: [
          { name: "Manajemen proyek (CAPM®)" },
          { name: "Penulisan teknis dan akademik" },
          { name: "Berbicara di depan umum" },
          { name: "Kepemimpinan tim" },
          { name: "Manajemen acara" },
          { name: "Komunikasi lintas budaya" }
        ]
      }
    }
  }
};
