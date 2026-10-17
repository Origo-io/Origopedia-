(() => {
  "use strict";

  // Data ini adalah contoh awal yang disusun per rentang abad. Posisi marker hanya perkiraan.
  const entities = [
    {id:"rome",name:"Kekaisaran Romawi",type:"Kekaisaran",region:"Eropa 路 Afrika Utara 路 Asia Barat",start:1,end:5,x:47,y:35,articleId:"rome",description:"Kekaisaran Romawi menguasai wilayah luas di sekitar Laut Tengah. Wilayah dan pengaruhnya berubah dari abad ke abad; pada abad ke-4 pemerintahan terbelah secara administratif dan Kekaisaran Romawi Barat berakhir pada abad ke-5."},
    {id:"han",name:"Dinasti Han",type:"Dinasti",region:"Asia Timur",start:1,end:3,x:75,y:36,description:"Dinasti Han memerintah sebagian besar wilayah Tiongkok dari 206 SM hingga 220 M, dengan jeda singkat. Periode ini dikenal karena perkembangan administrasi, perdagangan, dan teknologi."},
    {id:"parthia",name:"Kekaisaran Parthia",type:"Kekaisaran",region:"Asia Barat",start:1,end:3,x:58,y:39,description:"Parthia menjadi kekuatan besar di Iran dan wilayah sekitarnya serta bersaing dengan Romawi untuk pengaruh di Asia Barat."},
    {id:"kushan",name:"Kekaisaran Kushan",type:"Kekaisaran",region:"Asia Tengah 路 Asia Selatan",start:1,end:4,x:66,y:43,description:"Kushan menghubungkan jalur perdagangan Asia Tengah dan Asia Selatan. Kekuasaan dan wilayahnya berubah sepanjang beberapa abad pertama Masehi."},
    {id:"aksum",name:"Kerajaan Aksum",type:"Kerajaan",region:"Afrika Timur",start:1,end:8,x:53,y:52,description:"Aksum berkembang sebagai kerajaan perdagangan penting di kawasan Laut Merah dan Afrika Timur."},
    {id:"maya",name:"Kota-kota Maya",type:"Peradaban / negara-kota",region:"Amerika Tengah",start:1,end:10,x:25,y:41,description:"Peradaban Maya terdiri dari banyak kota dan kerajaan yang berdiri pada waktu berbeda, bukan satu kekaisaran tunggal yang selalu bersatu."},
    {id:"byzantine",name:"Kekaisaran Romawi Timur (Bizantium)",type:"Kekaisaran",region:"Eropa Tenggara 路 Asia Barat",start:4,end:15,x:51,y:34,articleId:"rome",description:"Kekaisaran Romawi Timur bertahan setelah berakhirnya kekuasaan Romawi Barat dan berpusat di Konstantinopel hingga 1453."},
    {id:"gupta",name:"Kekaisaran Gupta",type:"Kekaisaran",region:"Asia Selatan",start:4,end:6,x:68,y:48,description:"Gupta berkuasa di sebagian besar India utara pada abad ke-4 hingga ke-6 dan sering dikaitkan dengan perkembangan seni, sastra, dan ilmu pengetahuan."},
    {id:"sui-tang",name:"Dinasti Sui dan Tang",type:"Dinasti",region:"Asia Timur",start:6,end:10,x:76,y:36,description:"Sui menyatukan kembali Tiongkok pada akhir abad ke-6, lalu Tang memerintah dari 618 hingga 907 dan memperluas hubungan diplomatik serta perdagangan."},
    {id:"srivijaya",name:"Sriwijaya",type:"Kerajaan maritim",region:"Asia Tenggara",start:7,end:13,x:77,y:57,description:"Sriwijaya merupakan pusat maritim dan perdagangan penting di Sumatra dan jaringan Selat Malaka. Batas serta masa kejayaannya tidak dapat diringkas sebagai wilayah tetap."},
    {id:"umayyad",name:"Kekhalifahan Umayyah",type:"Kekhalifahan",region:"Asia Barat 路 Afrika Utara 路 Semenanjung Iberia",start:7,end:8,x:55,y:40,description:"Dinasti Umayyah memerintah kekhalifahan yang meluas dari Asia Barat ke Afrika Utara dan Semenanjung Iberia pada abad ke-7 dan ke-8."},
    {id:"abbasid",name:"Kekhalifahan Abbasiyah",type:"Kekhalifahan",region:"Asia Barat",start:8,end:13,x:59,y:40,articleId:null,description:"Abbasiyah berkuasa sejak 750 hingga pengambilalihan Baghdad oleh Mongol pada 1258. Pengaruh politiknya berubah sepanjang masa, dan sejumlah dinasti regional memerintah secara mandiri."},
    {id:"carolingian",name:"Kekaisaran Karoling",type:"Kekaisaran",region:"Eropa Barat",start:8,end:9,x:44,y:31,description:"Kekaisaran Karoling mencapai puncak pada masa Charlemagne. Setelah pembagian politik, wilayahnya berkembang menjadi sejumlah kerajaan Eropa."},
    {id:"ghana",name:"Kekaisaran Ghana",type:"Kekaisaran / kerajaan",region:"Afrika Barat",start:8,end:13,x:43,y:49,description:"Ghana kuno berkembang melalui perdagangan emas dan garam di Afrika Barat. Kerajaan ini berbeda dari negara modern Ghana."},
    {id:"khmer",name:"Kekaisaran Khmer",type:"Kekaisaran",region:"Asia Tenggara",start:9,end:15,x:80,y:54,description:"Kekaisaran Khmer berpusat di kawasan Kamboja sekarang. Angkor menjadi pusat politik dan keagamaan penting, dengan jaringan pengairan dan bangunan monumental."},
    {id:"song",name:"Dinasti Song",type:"Dinasti",region:"Asia Timur",start:10,end:13,x:77,y:38,description:"Dinasti Song memerintah sebagian Tiongkok dari 960 hingga 1279 dan dikenal karena perkembangan kota, perdagangan, percetakan, dan teknologi."},
    {id:"seljuk",name:"Kekaisaran Seljuk",type:"Kekaisaran",region:"Asia Barat 路 Asia Tengah",start:11,end:12,x:59,y:35,description:"Seljuk memainkan peran besar dalam politik Asia Barat pada abad ke-11 dan ke-12. Kekuasaan pusatnya kemudian terpecah menjadi beberapa kesultanan."},
    {id:"fatimid",name:"Kekhalifahan Fatimiyah",type:"Kekhalifahan",region:"Afrika Utara 路 Mesir",start:10,end:12,x:51,y:44,description:"Fatimiyah memerintah wilayah Afrika Utara dan Mesir dari abad ke-10 hingga ke-12, dengan Kairo sebagai pusat penting."},
    {id:"japan-heian",name:"Periode Heian di Jepang",type:"Periode kekaisaran",region:"Asia Timur",start:8,end:12,x:84,y:39,description:"Periode Heian berlangsung dari 794 hingga 1185 dan dikenal karena perkembangan budaya istana Jepang."},
    {id:"mali",name:"Kekaisaran Mali",type:"Kekaisaran",region:"Afrika Barat",start:13,end:17,x:43,y:49,description:"Mali tumbuh melalui jaringan perdagangan trans-Sahara. Mansa Musa, yang memerintah pada abad ke-14, dikenal dari catatan perjalanan dan sejarah ekonomi kawasan."},
    {id:"mongol",name:"Kekaisaran Mongol",type:"Kekaisaran",region:"Asia Timur 路 Asia Tengah 路 Eropa Timur",start:13,end:14,x:70,y:27,description:"Kekaisaran Mongol berkembang cepat pada abad ke-13 dan menjadi salah satu kekaisaran daratan terbesar. Setelahnya, kekuasaan terbagi menjadi beberapa khanat."},
    {id:"majapahit",name:"Majapahit",type:"Kerajaan",region:"Asia Tenggara",start:13,end:16,x:80,y:59,description:"Majapahit berkembang di Jawa pada abad ke-13 hingga ke-16. Pengaruhnya terkait perdagangan dan hubungan politik di kepulauan Asia Tenggara, meski batas kekuasaannya diperdebatkan."},
    {id:"aztec",name:"Kekaisaran Aztek",type:"Kekaisaran / aliansi",region:"Amerika Tengah",start:14,end:16,x:25,y:42,description:"Aztek berkembang di Meksiko tengah. Tenochtitlan menjadi pusat utama hingga penaklukan Spanyol pada 1521."},
    {id:"inca",name:"Kekaisaran Inka",type:"Kekaisaran",region:"Amerika Selatan bagian barat",start:15,end:16,x:28,y:64,description:"Inka membangun jaringan jalan dan administrasi luas di Andes sebelum penaklukan Spanyol pada abad ke-16."},
    {id:"ming",name:"Dinasti Ming",type:"Dinasti",region:"Asia Timur",start:14,end:17,x:76,y:37,description:"Ming memerintah Tiongkok dari 1368 hingga 1644, dengan perkembangan kota, perdagangan, seni, dan pelayaran pada sejumlah periode."},
    {id:"ottoman",name:"Kekaisaran Ottoman",type:"Kekaisaran",region:"Eropa Tenggara 路 Asia Barat 路 Afrika Utara",start:14,end:20,x:53,y:37,description:"Ottoman berkembang dari Anatolia pada akhir abad pertengahan dan bertahan hingga awal abad ke-20. Wilayahnya berubah luas selama berabad-abad."},
    {id:"mughal",name:"Kekaisaran Mughal",type:"Kekaisaran",region:"Asia Selatan",start:16,end:19,x:68,y:48,description:"Mughal memerintah sebagian besar anak benua India pada beberapa periode, terutama pada abad ke-16 hingga ke-18."},
    {id:"safavid",name:"Dinasti Safawi",type:"Dinasti",region:"Iran / Asia Barat",start:16,end:18,x:60,y:41,description:"Safawi membangun negara yang berpusat di Iran dari awal abad ke-16 hingga abad ke-18."},
    {id:"qing",name:"Dinasti Qing",type:"Dinasti",region:"Asia Timur",start:17,end:20,x:76,y:37,description:"Qing memerintah Tiongkok dari 1644 hingga 1912. Wilayah dan tata pemerintahannya berubah sepanjang periode dinasti."},
    {id:"british-empire",name:"Kekaisaran Britania",type:"Kekaisaran kolonial",region:"Global",start:17,end:20,x:44,y:30,articleId:"colonialism",description:"Kekuasaan Britania meluas melalui jaringan perdagangan, koloni, dan penguasaan maritim. Bentuk serta cakupannya berubah besar dari abad ke abad."},
    {id:"usa",name:"Amerika Serikat",type:"Negara modern",region:"Amerika Utara",start:18,end:21,x:20,y:36,description:"Amerika Serikat berdiri pada akhir abad ke-18. Perbatasan, wilayah, dan peran globalnya berubah sepanjang abad-abad berikutnya."},
    {id:"haiti",name:"Haiti",type:"Negara modern",region:"Karibia",start:19,end:21,x:26,y:43,description:"Haiti merdeka pada 1804 setelah revolusi yang menggulingkan pemerintahan kolonial Prancis dan perbudakan kolonial."},
    {id:"indonesia",name:"Indonesia",type:"Negara modern",region:"Asia Tenggara",start:20,end:21,x:80,y:59,description:"Republik Indonesia memproklamasikan kemerdekaan pada 1945. Pengakuan kedaulatan oleh Belanda berlangsung pada 1949."},
    {id:"india",name:"India",type:"Negara modern",region:"Asia Selatan",start:20,end:21,x:68,y:47,description:"India merdeka dari pemerintahan Britania pada 1947 dan menjadi republik pada 1950."},
    {id:"china",name:"Republik Rakyat Tiongkok",type:"Negara modern",region:"Asia Timur",start:20,end:21,x:76,y:37,description:"Republik Rakyat Tiongkok didirikan pada 1949. Untuk peta abad ke-21, tampilan ini mewakili negara modern, bukan dinasti historis."},
    {id:"nigeria",name:"Nigeria",type:"Negara modern",region:"Afrika Barat",start:20,end:21,x:46,y:48,description:"Nigeria merdeka dari Britania pada 1960 dan menjadi negara berpenduduk besar dengan masyarakat yang sangat beragam."},
    {id:"brazil",name:"Brasil",type:"Negara modern",region:"Amerika Selatan",start:19,end:21,x:29,y:61,description:"Brasil merdeka dari Portugal pada 1822 dan menjadi republik pada 1889."},
    {id:"australia",name:"Australia",type:"Negara modern",region:"Oseania",start:20,end:21,x:84,y:69,description:"Persemakmuran Australia dibentuk pada 1901. Sejarah benua ini jauh lebih panjang dan mencakup masyarakat Aborigin serta Penduduk Kepulauan Selat Torres."}
  ];

  const $ = id => document.getElementById(id);
  const range = $("atlasCenturyRange");
  if (!range || !$("atlasEntityGrid")) return;
  let selectedCentury = 12;
  let selectedEntity = null;

  const centuryYearRange = century => {
    if (century === 21) return "2001鈥�2100 M";
    const start = (century - 1) * 100 + 1;
    const end = century * 100;
    return `${start}鈥�${end} M`;
  };

  function getEntitiesForCentury(century) {
    return entities.filter(item => item.start <= century && item.end >= century);
  }

  function renderAtlas() {
    selectedCentury = Number(range.value);
    const yearRange = centuryYearRange(selectedCentury);
    $("atlasCenturyTitle").textContent = `Abad ke-${selectedCentury}`;
    $("atlasYearRange").textContent = yearRange;
    $("atlasListTitle").textContent = `Kerajaan dan negara pada abad ke-${selectedCentury}`;
    const items = getEntitiesForCentury(selectedCentury);
    $("atlasEntityCount").textContent = `${items.length} contoh entitas`;
    $("atlasResultsCount").textContent = `${items.length} entitas`;
    $("atlasEmpty").hidden = items.length !== 0;
    $("atlasEntityGrid").innerHTML = items.map(item => `
      <button type="button" class="atlas-entity-card ${selectedEntity && selectedEntity.id === item.id ? "active" : ""}" data-atlas-entity="${item.id}">
        <span class="atlas-entity-type">${item.type}</span>
        <strong>${item.name}</strong>
        <span>${item.region}</span>
        <small>Perkiraan periode: abad ${item.start}鈥�${item.end}</small>
      </button>
    `).join("");
    $("atlasMapMarkers").innerHTML = items.map((item, index) => `
      <button type="button" class="atlas-marker ${selectedEntity && selectedEntity.id === item.id ? "active" : ""}" style="left:${item.x}%;top:${item.y}%" data-atlas-entity="${item.id}" aria-label="Pilih ${item.name}" title="${item.name}"><span>${index + 1}</span></button>
    `).join("");
    if (selectedEntity && !items.some(item => item.id === selectedEntity.id)) selectedEntity = null;
    if (!selectedEntity && items.length) selectedEntity = items[0];
    if (selectedEntity) renderDetail(selectedEntity);
    else {
      $("atlasDetail").innerHTML = '<span class="atlas-detail-kicker">DATA BELUM TERSEDIA</span><h3>Belum ada entitas pada abad ini</h3><p>Data bisa ditambahkan melalui berkas historical-atlas.js.</p>';
    }
    // Reapply marker/card selection after the lists are refreshed.
    if (selectedEntity) setSelectedVisual(selectedEntity.id);
  }

  function renderDetail(item) {
    selectedEntity = item;
    $("atlasDetail").innerHTML = `
      <span class="atlas-detail-kicker">${item.type} 路 ${item.region}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="atlas-detail-meta"><span>Perkiraan periode</span><strong>Abad ${item.start}鈥�${item.end}</strong></div>
      ${item.articleId ? `<button type="button" class="atlas-article-button" data-atlas-article="${item.articleId}">Baca artikel terkait 鈫�</button>` : `<p class="atlas-no-article">Artikel khusus untuk entitas ini belum tersedia.</p>`}
    `;
    setSelectedVisual(item.id);
  }

  function setSelectedVisual(id) {
    document.querySelectorAll("[data-atlas-entity]").forEach(node => {
      const active = node.dataset.atlasEntity === id;
      node.classList.toggle("active", active);
      if (node.classList.contains("atlas-marker")) node.setAttribute("aria-pressed", String(active));
    });
  }

  $("atlasPrev").addEventListener("click", () => { range.value = String(Math.max(1, Number(range.value) - 1)); renderAtlas(); });
  $("atlasNext").addEventListener("click", () => { range.value = String(Math.min(21, Number(range.value) + 1)); renderAtlas(); });
  range.addEventListener("input", renderAtlas);
  $("atlasEntityGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-atlas-entity]");
    if (!button) return;
    const item = entities.find(entity => entity.id === button.dataset.atlasEntity);
    if (item) renderDetail(item);
  });
  $("atlasMapMarkers").addEventListener("click", event => {
    const button = event.target.closest("[data-atlas-entity]");
    if (!button) return;
    const item = entities.find(entity => entity.id === button.dataset.atlasEntity);
    if (item) {
      renderDetail(item);
      const card = document.querySelector(`.atlas-entity-card[data-atlas-entity="${item.id}"]`);
      if (card) card.scrollIntoView({block:"nearest",behavior:"smooth"});
    }
  });
  $("atlasDetail").addEventListener("click", event => {
    const button = event.target.closest("[data-atlas-article]");
    if (!button) return;
    const id = button.dataset.atlasArticle;
    if (typeof window.openArticle === "function") {
      window.openArticle(id);
    } else {
      const search = document.getElementById("searchInput");
      const form = document.getElementById("searchForm");
      if (search && form) {
        const item = entities.find(entity => entity.articleId === id);
        search.value = item ? item.name : id;
        form.dispatchEvent(new Event("submit", {bubbles:true,cancelable:true}));
      }
    }
  });

  renderAtlas();
})();
