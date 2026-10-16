/* Origopedia Quiz — Chapter Romawi: 40 pertanyaan, termasuk 5 bonus nyeleneh. */
(() => {
  "use strict";

  const questions = [
    { q: "Di semenanjung manakah kota Roma berada?", options: ["Iberia", "Italia", "Anatolia", "Skandinavia"], answer: 1, explain: "Roma tumbuh di Semenanjung Italia, di kawasan Laut Tengah." },
    { q: "Menurut tradisi Romawi, siapa dua saudara pendiri Roma?", options: ["Achilles dan Hector", "Romulus dan Remus", "Castor dan Pollux", "Aeneas dan Paris"], answer: 1, explain: "Kisah Romulus dan Remus adalah legenda pendirian Roma, bukan bukti sejarah langsung." },
    { q: "Apa nama sistem politik Roma sebelum masa kekaisaran?", options: ["Republik", "Demokrasi modern", "Federasi negara bagian", "Monarki konstitusional modern"], answer: 0, explain: "Republik Romawi secara tradisional dimulai sekitar 509 SM." },
    { q: "Apa sebutan umum bagi dua pejabat tertinggi yang dipilih tiap tahun pada masa Republik?", options: ["Konsul", "Firaun", "Shogun", "Satrap"], answer: 0, explain: "Dua konsul biasanya menjabat bersamaan untuk membatasi pemusatan kekuasaan." },
    { q: "Apa nama bukit tempat tradisi menyebut Roma didirikan?", options: ["Olympus", "Palatine", "Sinai", "Fuji"], answer: 1, explain: "Bukit Palatine merupakan salah satu kawasan tertua Roma dan terkait legenda pendiriannya." },
    { q: "Bahasa utama administrasi dan sastra Romawi di wilayah barat adalah…", options: ["Latin", "Sanskerta", "Mandarin", "Nahuatl"], answer: 0, explain: "Bahasa Latin sangat berpengaruh pada bahasa-bahasa Roman dan tradisi hukum Eropa." },
    { q: "Apa nama ruang publik penting yang menjadi pusat politik dan kegiatan sosial Roma?", options: ["Forum", "Ziggurat", "Agora digital", "Pagoda"], answer: 0, explain: "Forum Romawi adalah kawasan publik dengan fungsi politik, hukum, perdagangan, dan upacara." },
    { q: "Siapakah Julius Caesar?", options: ["Jenderal dan tokoh politik Romawi", "Kaisar pertama Tiongkok", "Filsuf Yunani yang mendirikan Sparta", "Raja Mesir pada zaman piramida"], answer: 0, explain: "Caesar memainkan peran besar dalam krisis akhir Republik, tetapi ia bukan kaisar pertama dalam sistem kekaisaran." },
    { q: "Pada tahun berapa Julius Caesar dibunuh?", options: ["44 SM", "27 SM", "14 M", "476 M"], answer: 0, explain: "Caesar dibunuh pada 44 SM, pada peristiwa yang dikenal sebagai Ides of March." },
    { q: "Siapa yang secara umum dianggap sebagai kaisar Romawi pertama?", options: ["Nero", "Augustus", "Trajan", "Constantine"], answer: 1, explain: "Octavianus mengambil gelar Augustus dan menjadi kaisar pertama dalam urutan tradisional pada 27 SM." },
    { q: "Apa nama laut yang menjadi pusat jaringan perdagangan dan kekuasaan Romawi?", options: ["Laut Tengah", "Laut Baltik saja", "Laut Kaspia saja", "Laut Jepang"], answer: 0, explain: "Bangsa Romawi menyebut Laut Tengah Mare Nostrum, meski kendali mereka tidak selalu mutlak." },
    { q: "Apa fungsi utama jalan-jalan Romawi?", options: ["Hanya untuk balapan kereta", "Menghubungkan kota, tentara, administrasi, dan perdagangan", "Menjadi jalur kereta listrik", "Menghalangi semua perjalanan"], answer: 1, explain: "Jaringan jalan membantu pergerakan pasukan, pejabat, barang, dan orang." },
    { q: "Apa nama bangunan besar Romawi yang terkenal dengan arena gladiator?", options: ["Colosseum", "Parthenon", "Stonehenge", "Petra Treasury"], answer: 0, explain: "Colosseum di Roma dibuka pada abad ke-1 M dan digunakan untuk berbagai pertunjukan publik." },
    { q: "Apa yang dimaksud dengan aqueduct Romawi?", options: ["Saluran untuk membawa air", "Alat musik perang", "Jenis koin emas", "Kapal perang"], answer: 0, explain: "Akuaduk membawa air menuju kota dan fasilitas publik, dengan kombinasi saluran, terowongan, dan lengkungan." },
    { q: "Siapa gladiator dalam konteks Romawi?", options: ["Petarung dalam pertunjukan arena", "Pejabat pemungut pajak", "Penulis undang-undang", "Pelaut penjelajah Samudra Pasifik"], answer: 0, explain: "Gladiator bertarung dalam pertunjukan; kondisi dan status mereka beragam, dan banyak yang diperbudak." },
    { q: "Apa nama satuan militer utama Romawi yang terdiri atas banyak prajurit?", options: ["Legiun", "Phalanx Mesir", "Samurai", "Janissari"], answer: 0, explain: "Legiun adalah formasi utama tentara Romawi, dengan ukuran dan organisasinya berubah dari masa ke masa." },
    { q: "Apa peran Senat Romawi?", options: ["Lembaga politik berpengaruh yang perannya berubah menurut periode", "Perusahaan kereta api", "Sekolah gladiator saja", "Dewan ilmuwan modern"], answer: 0, explain: "Pengaruh Senat berbeda antara Republik, Kekaisaran, dan periode-periode berikutnya." },
    { q: "Apa yang dimaksud dengan Pax Romana?", options: ["Periode relatif stabil di kekaisaran, terutama sejak Augustus", "Nama kapal Viking", "Perang antara Roma dan Jepang", "Sistem pemilihan modern"], answer: 0, explain: "Pax Romana biasanya merujuk pada masa relatif stabil sekitar dua abad, meskipun perang tetap terjadi." },
    { q: "Kota Pompeii terkubur akibat letusan gunung berapi apa pada 79 M?", options: ["Vesuvius", "Etna pada 1669", "Krakatau", "Tambora"], answer: 0, explain: "Letusan Vesuvius pada 79 M mengubur Pompeii dan beberapa permukiman di sekitarnya." },
    { q: "Siapakah Cicero?", options: ["Orator, penulis, dan negarawan Romawi", "Kaisar pertama", "Arsitek Piramida Giza", "Penemu mesin uap"], answer: 0, explain: "Cicero dikenal karena pidato, karya filsafat, dan perannya dalam politik Republik." },
    { q: "Apa nama perang panjang antara Roma dan Kartago?", options: ["Perang Punisia", "Perang Mawar", "Perang Seratus Tahun", "Perang Opium"], answer: 0, explain: "Perang Punisia terdiri dari tiga perang besar antara Roma dan Kartago." },
    { q: "Jenderal Kartago yang terkenal menyeberangi Alpen dengan pasukannya adalah…", options: ["Hannibal", "Leonidas", "Pericles", "Alexander Severus"], answer: 0, explain: "Hannibal memimpin kampanye terkenal melawan Roma pada Perang Punisia Kedua." },
    { q: "Apa nama mata uang perak Romawi yang terkenal?", options: ["Denarius", "Yen", "Rupiah", "Drachma modern"], answer: 0, explain: "Denarius merupakan salah satu koin penting dalam ekonomi Romawi, meski sistem mata uang berubah dari waktu ke waktu." },
    { q: "Kaisar Romawi mana yang terkait dengan pembangunan tembok di Britania Utara?", options: ["Hadrianus", "Nero", "Caligula", "Romulus"], answer: 0, explain: "Tembok Hadrianus dibangun pada abad ke-2 M di Britania Romawi." },
    { q: "Apa nama agama yang pada akhirnya menjadi dominan di Kekaisaran Romawi?", options: ["Kekristenan", "Shinto", "Sikhisme", "Aztek"], answer: 0, explain: "Kekristenan berkembang dari komunitas awal dan memperoleh dukungan kekaisaran pada abad ke-4 M." },
    { q: "Kaisar Constantine terkenal antara lain karena…", options: ["Memberi dukungan kekaisaran pada Kekristenan dan mendirikan Konstantinopel sebagai ibu kota baru", "Mendirikan Republik Romawi pada 509 SM", "Menaklukkan Amerika", "Menciptakan mesin cetak modern"], answer: 0, explain: "Constantine berperan penting dalam perubahan agama dan politik kekaisaran pada abad ke-4 M." },
    { q: "Apa nama kota yang kemudian dikenal sebagai Konstantinopel?", options: ["Istanbul", "Athena", "Kairo", "Madrid"], answer: 0, explain: "Konstantinopel kini adalah Istanbul di Turki." },
    { q: "Pada tahun berapa Kekaisaran Romawi Barat secara konvensional dianggap berakhir?", options: ["476 M", "1453 M", "1492 M", "1914 M"], answer: 0, explain: "Tahun 476 M adalah penanda konvensional, tetapi perubahan politik dan sosial berlangsung bertahap." },
    { q: "Apakah Kekaisaran Romawi Timur langsung berakhir pada 476 M?", options: ["Ya, semuanya berakhir pada hari yang sama", "Tidak, kekaisaran timur bertahan hingga 1453", "Tidak, Roma langsung pindah ke London", "Ya, karena semua kota ditinggalkan"], answer: 1, explain: "Kekaisaran Romawi Timur, yang sering disebut Bizantium oleh sejarawan modern, bertahan sampai Konstantinopel jatuh pada 1453." },
    { q: "Apa itu hukum Dua Belas Meja?", options: ["Salah satu kodifikasi hukum awal Republik Romawi", "Peta dua belas provinsi modern", "Buku resep Romawi", "Perjanjian dagang dengan Amerika"], answer: 0, explain: "Hukum Dua Belas Meja berasal dari abad ke-5 SM dan menjadi tonggak tradisi hukum Romawi." },
    { q: "Apa sebutan bagi warga negara Romawi yang memiliki hak dan kewajiban tertentu?", options: ["Civis Romanus", "Samurai", "Mandarin", "Viking"], answer: 0, explain: "Status kewarganegaraan Romawi berkembang dan diperluas kepada banyak penduduk kekaisaran." },
    { q: "Mengapa bahasa Latin masih dipelajari dalam sejarah bahasa?", options: ["Berpengaruh pada bahasa Roman dan banyak istilah hukum serta sains", "Karena semua orang di dunia masih berbicara Latin sehari-hari", "Karena Latin adalah bahasa asli semua manusia", "Karena Latin ditemukan pada abad ke-20"], answer: 0, explain: "Bahasa Italia, Spanyol, Prancis, Portugis, dan Rumania berkembang dari bahasa Latin lisan." },
    { q: "Apa yang terutama dimaksud dengan romanisasi di provinsi-provinsi Romawi?", options: ["Proses beragam adopsi budaya, bahasa, dan institusi Romawi", "Semua orang dipaksa tinggal di Roma", "Penggantian seluruh bahasa dunia dalam sehari", "Program membangun bioskop"], answer: 0, explain: "Romanisasi bukan proses seragam; masyarakat lokal juga mempertahankan atau menggabungkan tradisi mereka." },
    { q: "Apa salah satu faktor yang melemahkan pemerintahan Romawi Barat pada masa akhirnya?", options: ["Gabungan konflik politik, tekanan militer, dan masalah fiskal", "Satu badai salju yang menghapus semua kota", "Larangan memakai jalan", "Kehabisan semua huruf alfabet"], answer: 0, explain: "Tidak ada satu penyebab tunggal; sejarawan membahas banyak faktor yang saling berkaitan." },
    { q: "Apakah semua penduduk Kekaisaran Romawi menikmati hak yang sama?", options: ["Ya, semua setara menurut standar modern", "Tidak, hak berbeda menurut status, gender, kewarganegaraan, dan kondisi sosial", "Hanya anak-anak yang memiliki hak", "Semua orang otomatis menjadi senator"], answer: 1, explain: "Masyarakat Romawi memiliki hierarki sosial dan hukum yang besar." },
    { q: "BONUS NYELENEH: Apakah bangsa Romawi pernah naik KRL Commuter Line?", options: ["Ya, dari Roma ke Depok setiap pagi", "Tidak—KRL modern belum ada pada zaman Romawi", "Ya, tapi hanya senator", "Ya, tiketnya dibayar denarius dan kartu tap"], answer: 1, silly: true, explain: "Ini pertanyaan bercanda: KRL adalah transportasi modern, ribuan tahun setelah masa Romawi kuno." },
    { q: "BONUS NYELENEH: Kalau Julius Caesar ingin mengirim pesan WhatsApp, apa yang paling masuk akal?", options: ["Ia mengirim voice note dari Colosseum", "WhatsApp belum ada; pesan saat itu bisa dibawa kurir atau ditulis", "Ia melakukan video call dengan Cleopatra", "Ia mengirim stiker toga"], answer: 1, silly: true, explain: "WhatsApp dan telepon pintar adalah teknologi modern. Orang Romawi menggunakan surat, kurir, dan prasasti." },
    { q: "BONUS NYELENEH: Apakah legiun Romawi bisa memesan pizza lewat aplikasi online?", options: ["Bisa, pesanannya tiba 20 menit", "Tidak ada aplikasi pesan-antar modern; makanan dijual dengan cara sezamannya", "Bisa, asal punya Wi-Fi", "Hanya kaisar yang punya akun premium"], answer: 1, silly: true, explain: "Kota Romawi memiliki kedai makanan, tetapi bukan aplikasi digital atau layanan pesan-antar berbasis ponsel." },
    { q: "BONUS NYELENEH: Kalau seorang senator Romawi lupa kata sandi Wi-Fi, apa yang harus ia lakukan?", options: ["Memanggil teknisi router kekaisaran", "Tidak ada Wi-Fi modern di Roma kuno", "Meminta password kepada gladiator", "Mengganti jaringan ke Wi-Fi SPQR"], answer: 1, silly: true, explain: "Wi-Fi membutuhkan teknologi yang berkembang ribuan tahun setelah zaman Romawi." },
    { q: "BONUS NYELENEH: Apakah kereta perang Romawi bisa memakai Google Maps untuk menghindari macet?", options: ["Ya, peta akan menyarankan jalan tol", "Tidak; mereka tidak memiliki Google Maps atau lalu lintas digital", "Bisa jika kudanya memakai smartwatch", "Ya, tapi hanya saat Pax Romana"], answer: 1, silly: true, explain: "Peta dan pengetahuan rute memang ada, tetapi navigasi digital modern belum ada." }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const section = $("#op-quiz");
  if (!section) return;

  const state = { index: 0, score: 0, selected: null, answered: false, correctCount: 0, lives: 3 };
  const bestKey = "origopedia-quiz-rome-best-v1";
  const savedBest = Number(localStorage.getItem(bestKey) || 0);

  const questionEl = $("#op-quiz-question");
  const optionsEl = $("#op-quiz-options");
  const feedbackEl = $("#op-quiz-feedback");
  const nextBtn = $("#op-quiz-next");
  const progressEl = $("#op-quiz-progress");
  const progressText = $("#op-quiz-progress-text");
  const scoreEl = $("#op-quiz-score");
  const livesEl = $("#op-quiz-lives");
  const bestEl = $("#op-quiz-best");
  const quizBody = $("#op-quiz-body");
  const resultEl = $("#op-quiz-result");

  bestEl.textContent = savedBest;

  function renderLives() {
    const hearts = Array.from({ length: 3 }, (_, index) => index < state.lives ? "❤️" : "🖤");
    livesEl.textContent = hearts.join(" ");
    livesEl.setAttribute("aria-label", `${state.lives} dari 3 nyawa tersisa`);
    livesEl.title = `${state.lives} dari 3 nyawa tersisa`;
  }

  function renderQuestion() {
    const item = questions[state.index];
    state.selected = null;
    state.answered = false;
    questionEl.textContent = item.q;
    optionsEl.innerHTML = item.options.map((option, index) => `
      <button type="button" class="op-quiz-option" data-option="${index}">
        <span class="op-quiz-option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeText(option)}</span>
      </button>
    `).join("");
    feedbackEl.hidden = true;
    feedbackEl.className = "op-quiz-feedback";
    nextBtn.disabled = true;
    nextBtn.textContent = state.index === questions.length - 1 ? "Lihat hasil" : "Lanjut →";
    progressEl.style.width = `${(state.index / questions.length) * 100}%`;
    progressText.textContent = `Soal ${state.index + 1} dari ${questions.length}`;
    scoreEl.textContent = state.score;
    renderLives();
  }

  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  optionsEl.addEventListener("click", event => {
    const button = event.target.closest("[data-option]");
    if (!button || state.answered) return;
    state.selected = Number(button.dataset.option);
    state.answered = true;
    const item = questions[state.index];
    const isCorrect = state.selected === item.answer;
    if (isCorrect) {
      state.score += item.silly ? 5 : 10;
      state.correctCount += 1;
      button.classList.add("is-correct");
      feedbackEl.className = "op-quiz-feedback is-correct";
      feedbackEl.innerHTML = `<strong>Benar! +${item.silly ? 5 : 10} XP</strong><p>${escapeText(item.explain)}</p>`;
    } else {
      state.lives = Math.max(0, state.lives - 1);
      button.classList.add("is-wrong");
      const rightButton = $(`[data-option="${item.answer}"]`, optionsEl);
      if (rightButton) rightButton.classList.add("is-correct");
      feedbackEl.className = "op-quiz-feedback is-wrong";
      feedbackEl.innerHTML = state.lives === 0
        ? `<strong>Nyawa habis! 💔</strong><p>${escapeText(item.explain)}</p><p>Kamu perlu mengulang chapter. Tekan tombol di bawah untuk memulai lagi dengan 3 nyawa.</p>`
        : `<strong>Belum tepat · Nyawa tersisa: ${state.lives}</strong><p>${escapeText(item.explain)}</p>`;
      renderLives();
    }
    [...optionsEl.querySelectorAll("button")].forEach(option => {
      option.disabled = true;
      option.setAttribute("aria-disabled", "true");
    });
    feedbackEl.hidden = false;
    nextBtn.disabled = false;
    if (state.lives === 0) nextBtn.textContent = "Ulangi dengan 3 nyawa ↻";
    scoreEl.textContent = state.score;
  });

  nextBtn.addEventListener("click", () => {
    if (!state.answered) return;
    if (state.lives === 0) {
      restartQuiz();
      return;
    }
    if (state.index < questions.length - 1) {
      state.index += 1;
      renderQuestion();
      questionEl.focus?.();
      return;
    }
    showResult();
  });

  function showResult() {
    const percent = Math.round((state.correctCount / questions.length) * 100);
    const previousBest = Number(localStorage.getItem(bestKey) || 0);
    if (state.score > previousBest) localStorage.setItem(bestKey, String(state.score));
    bestEl.textContent = Math.max(previousBest, state.score);
    quizBody.hidden = true;
    resultEl.hidden = false;
    progressEl.style.width = "100%";
    progressText.textContent = "Chapter selesai!";
    $("#op-quiz-result-score").textContent = state.score;
    $("#op-quiz-result-correct").textContent = `${state.correctCount} dari ${questions.length}`;
    $("#op-quiz-result-percent").textContent = `${percent}%`;
    const message = percent >= 90 ? "Luar biasa! Kamu sudah menguasai banyak fakta Romawi." : percent >= 70 ? "Bagus! Sedikit mengulang akan membuat ingatanmu makin kuat." : "Awal yang bagus. Baca artikel Romawi, lalu coba lagi untuk memperkuat ingatan.";
    $("#op-quiz-result-message").textContent = message;
  }

  function restartQuiz() {
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.correctCount = 0;
    state.lives = 3;
    quizBody.hidden = false;
    resultEl.hidden = true;
    renderQuestion();
  }

  $("#op-quiz-restart").addEventListener("click", restartQuiz);

  renderQuestion();
})();
