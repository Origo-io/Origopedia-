const articles = [
  {
    id: "silk-road", title: "Jalur Rempah dan Jaringan Perdagangan Dunia",
    category: "business", categoryLabel: "Sejarah bisnis", period: "Abad ke-7–17",
    readTime: "6 menit", symbol: "✦", artBg: "linear-gradient(135deg,#8b6742,#26384a 78%)",
    summary: "Bagaimana rempah, pelabuhan, dan jaringan pelayaran menghubungkan masyarakat lintas benua.",
    body: "Perdagangan rempah merupakan bagian dari jaringan pertukaran yang menghubungkan Asia, Timur Tengah, Afrika, dan Eropa. Jalur ini bukan satu jalan tunggal, melainkan jaringan laut dan darat yang berubah mengikuti teknologi pelayaran, kondisi politik, permintaan pasar, serta hubungan antarpelabuhan. Rempah seperti cengkih dan pala dari Kepulauan Maluku menjadi komoditas bernilai tinggi dan ikut membentuk sejarah ekonomi serta kolonialisme. Untuk kajian mendalam, bandingkan arsip perdagangan, catatan pelayaran, dan penelitian sejarah maritim.",
    source: "Bacaan lanjutan yang disarankan: penelitian sejarah maritim Asia Tenggara, katalog museum, serta arsip perdagangan dan pelayaran yang terverifikasi."
  },
  {
    id: "rome", title: "Romawi: Hukum, Infrastruktur, dan Kekuasaan",
    category: "civilization", categoryLabel: "Peradaban", period: "753 SM–476 M (Barat)",
    readTime: "8 menit", symbol: "Ω", artBg: "linear-gradient(135deg,#9c7959,#5b3c32 65%,#20293a)",
    summary: "Mengenal jaringan jalan, administrasi, hukum, dan perubahan politik Romawi.",
    body: "Peradaban Romawi berkembang dari komunitas di Semenanjung Italia menjadi kekuatan yang menguasai wilayah luas di sekitar Laut Tengah. Jalan, pelabuhan, sistem administrasi, dan hukum membantu menghubungkan wilayahnya, meskipun akses terhadap hak dan kekuasaan sangat tidak merata. Kekaisaran Romawi Barat berakhir sebagai struktur politik pada abad ke-5 M, sedangkan Kekaisaran Romawi Timur bertahan jauh lebih lama. Sejarah Romawi juga perlu dibaca melalui perspektif masyarakat tak berkuasa, termasuk budak dan penduduk provinsi.",
    source: "Bacaan lanjutan yang disarankan: karya akademik tentang sejarah Romawi, koleksi arkeologi museum, dan sumber primer yang dikaji secara kritis."
  },
  {
    id: "industrial-revolution", title: "Revolusi Industri dan Lahirnya Ekonomi Modern",
    category: "science", categoryLabel: "Sains & teknologi", period: "Abad ke-18–19",
    readTime: "7 menit", symbol: "⌁", artBg: "linear-gradient(135deg,#62777d,#25394b 68%,#172033)",
    summary: "Perubahan mesin, pabrik, energi, dan pekerjaan yang mengubah kehidupan masyarakat.",
    body: "Revolusi Industri dimulai di Britania pada abad ke-18 dan berkembang ke wilayah lain dengan waktu serta pola yang berbeda. Mesin, penggunaan energi, produksi pabrik, dan perubahan transportasi meningkatkan kapasitas produksi, tetapi juga membawa kondisi kerja yang berat, urbanisasi cepat, dan ketimpangan baru. Tidak ada satu penyebab tunggal: modal, sumber daya, pengetahuan, institusi, pasar, dan tenaga kerja berinteraksi dalam proses panjang. Dampaknya masih dapat dilihat dalam ekonomi, kota, dan pola kerja modern.",
    source: "Bacaan lanjutan yang disarankan: publikasi sejarah ekonomi, arsip industri, dan koleksi museum sains serta teknologi."
  },
  {
    id: "alexandria", title: "Perpustakaan Alexandria dan Cita-cita Pengetahuan",
    category: "civilization", categoryLabel: "Peradaban", period: "Zaman Helenistik",
    readTime: "5 menit", symbol: "⌂", artBg: "linear-gradient(135deg,#c0a36a,#7a694c 55%,#24374b)",
    summary: "Kisah pusat pembelajaran kuno dan batas antara bukti sejarah dengan legenda.",
    body: "Alexandria di Mesir menjadi salah satu pusat intelektual penting pada zaman Helenistik. Tradisi tentang perpustakaannya menggambarkan upaya mengumpulkan dan mempelajari teks dari beragam wilayah. Namun, banyak detail populer mengenai ukuran koleksi dan kehancurannya masih diperdebatkan. Tidak ada dasar yang kuat untuk menyederhanakan sejarahnya menjadi satu peristiwa kebakaran yang pasti menghancurkan seluruh koleksi. Kisah Alexandria menunjukkan mengapa sejarawan perlu membedakan sumber sezaman, kesaksian belakangan, dan legenda.",
    source: "Bacaan lanjutan yang disarankan: kajian sejarah Helenistik, studi tentang perpustakaan kuno, dan publikasi akademik mengenai transmisi teks."
  },
  {
    id: "printing", title: "Mesin Cetak dan Perubahan Penyebaran Gagasan",
    category: "science", categoryLabel: "Sains & teknologi", period: "Eropa abad ke-15",
    readTime: "6 menit", symbol: "✧", artBg: "linear-gradient(135deg,#6f7c8a,#37465a 60%,#172033)",
    summary: "Teknologi cetak membantu mengubah skala penyebaran buku, informasi, dan perdebatan.",
    body: "Teknik pencetakan memiliki sejarah panjang di Asia sebelum mesin cetak dengan huruf logam bergerak berkembang di Eropa pada abad ke-15. Inovasi yang dikaitkan dengan Johannes Gutenberg membantu memperluas produksi buku di Eropa, tetapi perubahan itu juga bergantung pada kertas, jaringan perdagangan, pembaca, dan lembaga pendidikan. Teknologi cetak tidak otomatis membuat informasi akurat; ia memperluas kemampuan menyebarkan gagasan sekaligus kesalahan dan propaganda.",
    source: "Bacaan lanjutan yang disarankan: koleksi sejarah buku, katalog perpustakaan nasional, dan studi tentang sejarah percetakan lintas wilayah."
  },
  {
    id: "colonialism", title: "Kolonialisme: Kekuasaan, Perdagangan, dan Dampaknya",
    category: "dark", categoryLabel: "Dark History", period: "Beragam periode",
    readTime: "9 menit", symbol: "◈", artBg: "linear-gradient(135deg,#565b65,#303744 60%,#141a24)",
    summary: "Menelaah ekspansi kolonial melalui bukti, struktur ekonomi, pengalaman masyarakat, dan warisannya.",
    body: "Kolonialisme mencakup beragam sistem penguasaan wilayah dan masyarakat yang berbeda menurut tempat serta masa. Motif politik dan ekonomi, penguasaan tanah, perdagangan, kerja paksa, serta ketimpangan hukum dapat saling berkaitan. Pengalaman masyarakat yang dijajah tidak seragam, dan mereka juga memiliki sejarah perlawanan, adaptasi, serta pembentukan gerakan politik. Artikel yang bertanggung jawab perlu memakai sumber dari beragam perspektif, mengakui ketimpangan arsip, dan membedakan fakta terdokumentasi dari interpretasi.",
    source: "Bacaan lanjutan yang disarankan: arsip kolonial yang dikaji kritis, kesaksian masyarakat terdampak, serta penelitian sejarah dari beragam perspektif."
  }
];

const timelineData = [
  { year: "c. 3000 SM", title: "Kota dan tulisan awal", place: "Mesopotamia", detail: "Di sejumlah masyarakat Mesopotamia, kota, administrasi, dan sistem tulisan berkembang dalam hubungan dengan perdagangan, pemerintahan, dan pengelolaan sumber daya.", articleId: null },
  { year: "27 SM", title: "Awal Kekaisaran Romawi", place: "Roma", detail: "Pemerintahan Augustus menandai awal periode kekaisaran Romawi dalam historiografi tradisional, setelah konflik politik pada akhir Republik.", articleId: "rome" },
  { year: "Abad ke-7", title: "Jaringan perdagangan meluas", place: "Asia dan Samudra Hindia", detail: "Jaringan pelayaran dan perdagangan di Samudra Hindia menghubungkan berbagai pelabuhan, komunitas, barang, dan gagasan. Perubahan berlangsung bertahap dan lintas wilayah.", articleId: "silk-road" },
  { year: "Abad ke-15", title: "Perubahan teknologi cetak", place: "Eropa dan Asia", detail: "Teknik cetak berkembang melalui sejarah yang berbeda di berbagai wilayah. Di Eropa, mesin cetak huruf logam bergerak membantu memperbesar produksi buku.", articleId: "printing" },
  { year: "Abad ke-18", title: "Revolusi Industri", place: "Britania", detail: "Produksi mekanis dan sistem pabrik berkembang melalui kombinasi energi, pengetahuan, modal, tenaga kerja, dan institusi. Perubahan ini kemudian menyebar secara tidak seragam.", articleId: "industrial-revolution" },
  { year: "1945", title: "Tatanan dunia pascaperang", place: "Global", detail: "Berakhirnya Perang Dunia II mengubah hubungan internasional, mempercepat pembentukan lembaga multilateral, dan membuka periode dekolonisasi yang berlangsung dengan jalur berbeda.", articleId: null }
];

const mapLocations = [
  { id: "mesopotamia", name: "Mesopotamia", region: "Asia Barat", period: "Peradaban awal", x: 58, y: 37, article: "", detail: "Kawasan antara sungai Tigris dan Efrat menjadi salah satu pusat awal kota dan administrasi." },
  { id: "rome", name: "Roma", region: "Eropa Selatan", period: "Zaman Kuno", x: 48, y: 35, article: "rome", detail: "Roma berkembang dari kota di Italia menjadi pusat kekuasaan regional dan kekaisaran." },
  { id: "alexandria", name: "Alexandria", region: "Afrika Utara", period: "Zaman Helenistik", x: 51, y: 43, article: "alexandria", detail: "Alexandria dikenal sebagai pusat perdagangan dan pembelajaran di pesisir Mediterania." },
  { id: "maluku", name: "Kepulauan Maluku", region: "Asia Tenggara", period: "Jaringan perdagangan maritim", x: 78, y: 58, article: "silk-road", detail: "Kepulauan Maluku merupakan sumber penting cengkih dan pala dalam sejarah perdagangan global." },
  { id: "britain", name: "Britania", region: "Eropa Barat", period: "Abad ke-18–19", x: 45, y: 29, article: "industrial-revolution", detail: "Britania menjadi salah satu pusat awal Revolusi Industri." }
];

let activeCategory = "all";
let currentTimelineIndex = 0;
let currentMapLocation = mapLocations[0];
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderArticles() {
  const query = $("#searchInput").value.trim().toLocaleLowerCase("id");
  const filtered = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const searchable = `${article.title} ${article.summary} ${article.categoryLabel} ${article.period} ${article.body}`.toLocaleLowerCase("id");
    return matchesCategory && (!query || searchable.includes(query));
  });

  $("#articleGrid").innerHTML = filtered.map(article => `
    <article class="article-card">
      <div class="article-art" style="--art-bg:${article.artBg}">
        <span class="art-symbol" aria-hidden="true">${article.symbol}</span>
        <span class="art-period">${escapeHTML(article.period.toUpperCase())}</span>
      </div>
      <div class="article-card-body">
        <div class="article-meta">
          <span class="category-tag">${escapeHTML(article.categoryLabel)}</span>
          <span class="read-time">${escapeHTML(article.readTime)} baca</span>
        </div>
        <h3>${escapeHTML(article.title)}</h3>
        <p>${escapeHTML(article.summary)}</p>
        <div class="card-footer">
          <span>Origopedia · Artikel demo</span>
          <button class="read-link" data-article="${escapeHTML(article.id)}">Baca artikel <span>→</span></button>
        </div>
      </div>
    </article>
  `).join("");

  $("#resultCount").textContent = `${filtered.length} artikel`;
  $("#emptyState").classList.toggle("hidden", filtered.length !== 0);
  $("#articleGrid").classList.toggle("hidden", filtered.length === 0);
}

function openArticle(articleId) {
  const article = articles.find(item => item.id === articleId);
  if (!article) return;
  $("#dialogContent").innerHTML = `
    <div class="dialog-art" style="--art-bg:${article.artBg}">
      <span>${escapeHTML(article.categoryLabel.toUpperCase())} · ${escapeHTML(article.period.toUpperCase())}</span>
    </div>
    <div class="dialog-body">
      <div class="article-meta"><span class="category-tag">${escapeHTML(article.categoryLabel)}</span><span class="read-time">${escapeHTML(article.readTime)} baca</span></div>
      <h2>${escapeHTML(article.title)}</h2>
      <p><strong>${escapeHTML(article.summary)}</strong></p>
      <p>${escapeHTML(article.body)}</p>
      <div class="dialog-source"><strong>Sumber dan bacaan lanjutan</strong>${escapeHTML(article.source)}<br><br>Catatan: konten ini adalah contoh prototipe dan perlu diverifikasi serta dilengkapi referensi spesifik sebelum dipublikasikan sebagai ensiklopedia.</div>
    </div>
  `;
  const dialog = $("#articleDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else showToast("Browser ini belum mendukung jendela artikel. Coba browser terbaru.");
}

function renderTimeline() {
  $("#timelineEvents").innerHTML = timelineData.map((event, index) => `
    <button class="timeline-event ${index === currentTimelineIndex ? "active" : ""}" data-timeline="${index}" aria-pressed="${index === currentTimelineIndex}">
      <span class="timeline-node"></span>
      <span class="timeline-year">${escapeHTML(event.year)}</span>
      <strong>${escapeHTML(event.title)}</strong>
      <small>${escapeHTML(event.place)}</small>
    </button>
  `).join("");

  const event = timelineData[currentTimelineIndex];
  const relatedArticle = event.articleId
    ? articles.find(article => article.id === event.articleId)
    : null;

  $("#timelineDetail").innerHTML = `
    <span class="detail-label">PERISTIWA TERPILIH · ${escapeHTML(event.year.toUpperCase())}</span>
    <h3>${escapeHTML(event.title)}</h3>
    <p>${escapeHTML(event.detail)}</p>
    ${relatedArticle
      ? `<button type="button" class="read-link" data-timeline-article="${escapeHTML(relatedArticle.id)}">Baca artikel terkait →</button>`
      : `<p class="timeline-note">Artikel terkait akan segera ditambahkan.</p>`
    }
  `;
  $("#timelinePosition").textContent = `${String(currentTimelineIndex + 1).padStart(2, "0")} / ${String(timelineData.length).padStart(2, "0")}`;
}

function renderMapPins() {
  $("#mapPins").innerHTML = mapLocations.map(location => `
    <button class="map-pin ${location.id === currentMapLocation.id ? "active" : ""}"
      style="left:${location.x}%;top:${location.y}%"
      data-location="${escapeHTML(location.id)}"
      aria-label="Pilih ${escapeHTML(location.name)}"
      title="${escapeHTML(location.name)}"></button>
  `).join("");
  updateMapInfo();
}

function updateMapInfo() {
  const location = currentMapLocation;
  $("#mapInfo").querySelector("h3").textContent = location.name;
  $("#mapInfo").querySelector("p").textContent = location.detail + " Peta pada prototipe ini bersifat ilustratif, bukan peta koordinat presisi.";
  $("#mapRegion").textContent = location.region;
  $("#mapPeriod").textContent = location.period;
  $("#mapReadMore").dataset.article = location.article;
  const index = mapLocations.findIndex(item => item.id === location.id);
  $(".pin-number").textContent = String(index + 1).padStart(2, "0");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function selectCategory(category) {
  activeCategory = category;
  $$(".filter-btn").forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderArticles();
}

$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  activeCategory = "all";
  $$(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.category === "all"));
  renderArticles();
  $("#explore").scrollIntoView({ behavior: "smooth" });
});

$("#searchInput").addEventListener("input", renderArticles);
$("#categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (button) selectCategory(button.dataset.category);
});

$$(".search-chip").forEach(button => button.addEventListener("click", () => {
  $("#searchInput").value = button.dataset.search;
  activeCategory = "all";
  $$(".filter-btn").forEach(filter => filter.classList.toggle("active", filter.dataset.category === "all"));
  renderArticles();
  $("#explore").scrollIntoView({ behavior: "smooth" });
}));

$("#articleGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-article]");
  if (button) openArticle(button.dataset.article);
});
$("#resetSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  selectCategory("all");
});

$("#timelineEvents").addEventListener("click", event => {
  const button = event.target.closest("[data-timeline]");
  if (!button) return;
  currentTimelineIndex = Number(button.dataset.timeline);
  renderTimeline();
});
$("#timelineDetail").addEventListener("click", event => {
  const button = event.target.closest("[data-timeline-article]");
  if (!button) return;
  openArticle(button.dataset.timelineArticle);
});
$("#timelinePrev").addEventListener("click", () => {
  currentTimelineIndex = (currentTimelineIndex - 1 + timelineData.length) % timelineData.length;
  renderTimeline();
});
$("#timelineNext").addEventListener("click", () => {
  currentTimelineIndex = (currentTimelineIndex + 1) % timelineData.length;
  renderTimeline();
});

$("#mapPins").addEventListener("click", event => {
  const button = event.target.closest("[data-location]");
  if (!button) return;
  currentMapLocation = mapLocations.find(location => location.id === button.dataset.location) || mapLocations[0];
  renderMapPins();
});
$("#mapReadMore").addEventListener("click", event => {
  const articleId = event.currentTarget.dataset.article;
  if (articleId) openArticle(articleId);
  else showToast("Artikel untuk lokasi ini akan segera ditambahkan.");
});
$("#darkHistoryBtn").addEventListener("click", () => {
  selectCategory("dark");
  $("#explore").scrollIntoView({ behavior: "smooth" });
  showToast("Koleksi Dark History ditampilkan.");
});

$("#themeToggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("theme-dark");
  $("#themeToggle").textContent = dark ? "☾" : "☼";
  $("#themeToggle").setAttribute("aria-label", dark ? "Aktifkan tema terang" : "Aktifkan tema gelap");
});

$("#mobileMenuBtn").addEventListener("click", () => {
  const nav = $("#mainNav");
  const open = nav.classList.toggle("open");
  $("#mobileMenuBtn").setAttribute("aria-expanded", String(open));
  $("#mobileMenuBtn").textContent = open ? "×" : "☰";
});
$$('#mainNav a').forEach(link => link.addEventListener("click", () => {
  $("#mainNav").classList.remove("open");
  $("#mobileMenuBtn").setAttribute("aria-expanded", "false");
  $("#mobileMenuBtn").textContent = "☰";
}));

$("#dialogClose").addEventListener("click", () => $("#articleDialog").close());
$("#articleDialog").addEventListener("click", event => {
  if (event.target === $("#articleDialog")) $("#articleDialog").close();
});
$("#currentYear").textContent = new Date().getFullYear();
$("#backToTop").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderArticles();
renderTimeline();
renderMapPins();
