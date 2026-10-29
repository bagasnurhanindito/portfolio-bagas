export const personalData = {
  name: "Bagas Nur Hanindito",
  role: "Software Developer",
  bio: "Sebagai penerima beasiswa Pemprov Riau yang berhasil menyelesaikan studi tepat waktu, saya memadukan latar belakang Teknik Informatika dengan ketertarikan mendalam pada antarmuka web modern dan kecerdasan buatan. Saya berpengalaman membangun sistem informasi dasbor, aplikasi web interaktif, hingga implementasi machine learning untuk klasifikasi citra.",
  email: "bagasnurhanindito@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/bagasnurhanindito" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bagas-nur-hanindito-818071427/" }
  ]
};

export const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Laravel", "Machine Learning", "Data Analysis (SPSS)"," Computer Vision",
];

export const experience = [
  {
    year: "2026",
    role: "Peneliti Tugas Akhir (Skripsi)",
    company: "Universitas",
    description: "Melakukan penelitian perbandingan ekstraksi fitur menggunakan arsitektur MobileNetV2 yang dipadukan dengan algoritma klasifikasi hybrid SVM dan KNN untuk mendeteksi tingkat kematangan citra buah kelapa sawit, serta mengintegrasikan model tersebut ke dalam aplikasi web berbasis Flask."
  },
  {
    year: "2025",
    role: "IT Intern - Unit Airport Technology",
    company: "PT Angkasa Pura II (InJourney Airports)",
    description: "Berperan ganda dalam operasional infrastruktur dan pengembangan perangkat lunak. Bertanggung jawab atas pemeliharaan dan troubleshooting jaringan di area terminal bandara, serta merancang dua sistem web (Dashboard Presensi Rapat & Sistem Penilaian Kinerja 360-Degree) secara end-to-end untuk digitalisasi instansi."
  },
  {
    year: "2021", // Sesuaikan tahunnya jika perlu
    role: "Staff Administrasi Lapangan (Intern)",
    company: "PT Peputra Masterindo",
    description: "Bertanggung jawab memantau, memverifikasi, dan mencatat keakuratan data tonase panen kelapa sawit per blok dan afdeling secara harian."
  }
];

export const projects = [
  {
    id: 1,
    title: "Klasifikasi Kematangan Sawit",
    category: "Web App",
    description: "Aplikasi web berbasis Flask yang mengintegrasikan model deep learning MobileNetV2 dan algoritma hybrid SVM-KNN untuk mendeteksi tingkat kematangan buah kelapa sawit dari citra masukan.",
    tech: ["Python", "Flask", "Machine Learning", "MobileNetV2", "SVM", "KNN", "Deep Learning"],
    link: "https://github.com/bagasnurhanindito/palm-oil-maturity-classification", 
    image: "/Sawit (2).jpeg" // 👈 Perhatikan: pakai garis miring ke depan dan tanpa kata public
  },
  {
    id: 2,
    title: "Sistem Kehadiran Rapat Bandara",
    category: "Web App",
    description: "Sistem informasi berbasis dasbor untuk Bandara Sultan Syarif Kasim. Memfasilitasi pemantauan data kehadiran dengan alur yang dirancang rapi dari dokumen spesifikasi hingga implementasi.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    link: "https://github.com/bagasnurhanindito/airport-meeting-attendance", 
    image: "/Absen.png" // 👈
  },
  {
    id: 3,
    title: "Employee Peer Assessment",
    category: "Web App",
    description: "Aplikasi web yang dirancang khusus untuk memfasilitasi evaluasi dan penilaian kinerja antar rekan kerja (peer assessment) secara objektif, efisien, dan terstruktur.",
    tech: ["React", "Tailwind CSS", "API", "Laravel"], 
    link: "https://github.com/bagasnurhanindito/employee-peer-assessment", 
    image: "/employee.png" // 👈
  },
  {
    id: 4,
    title: "Sistem Deteksi Cuaca",
    category: "Web App",
    description: "Aplikasi pemantauan cuaca interaktif yang dibangun menggunakan framework Vue.js. Menampilkan data prakiraan dan kondisi cuaca secara real-time dengan antarmuka yang responsif.",
    tech: ["Vue.js", "Tailwind CSS", "REST API"],
    link: "https://uas-lab-bagas.vercel.app/", 
    image: "/Cuaca reel.png" // 👈
  }
];

export const certifications = [
  {
    title: "Belajar Dasar Manajemen Proyek Digital",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/Dicoding.png",
    pdf: "/Sertifikat dicoding.pdf" // 👈 Masukkan nama file PDF di folder public
  },
  {
    title: "Enterprise Networking, security, and Automation",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/Cisco 1.png",
    pdf: "/Sertifikat Enterprise.pdf" // 👈
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/Cisco 2.png",
    pdf: "/Sertifikat siber.pdf" // 👈
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/Cisco 3.png",
    pdf: "/Sertifikat Introduction.pdf" // 👈
  },
  {
    title: "Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor",
    issuer: "Digital Talent Scholarship (KOMDIGI)",
    year: "2026",
    image: "/Pelatihan.png",
    pdf: "/sertifikat pelatihan.pdf" // 👈
  },
  {
    title: "AI Engineer For Milenial",
    issuer: "Digital Talent Scholarship (KOMDIGI)",
    year: "2026",
    image: "/PelatihanAI.png", 
    pdf: "/Sertifikat AI.pdf" 
  }
];