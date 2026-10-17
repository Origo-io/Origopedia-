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
  // Koordinat pusat/kawasan perkiraan untuk marker. Ini bukan batas wilayah historis.
  const coordinates = {
    "rome":[41.9,12.5],"han":[34.0,108.0],"parthia":[32.0,53.0],"kushan":[34.0,69.0],
    "aksum":[14.1,38.7],"maya":[17.0,-90.0],"byzantine":[41.0,29.0],"gupta":[25.0,80.0],
    "sui-tang":[34.0,108.0],"srivijaya":[-2.0,104.0],"umayyad":[33.5,36.3],"abbasid":[33.3,44.4],
    "carolingian":[49.0,6.0],"ghana":[13.0,-3.0],"khmer":[13.4,103.9],"song":[34.0,112.0],
    "seljuk":[38.0,45.0],"fatimid":[30.0,31.2],"japan-heian":[35.0,135.0],"mali":[17.0,-4.0],
    "mongol":[47.0,103.0],"majapahit":[-7.5,112.5],"aztec":[19.4,-99.1],"inca":[-13.5,-72.0],
    "ming":[35.0,116.0],"ottoman":[41.0,29.0],"mughal":[27.0,77.0],"safavid":[32.0,53.0],
    "qing":[39.0,116.0],"british-empire":[51.5,-0.1],"usa":[39.0,-98.0],"haiti":[19.0,-72.3],
    "indonesia":[-2.0,118.0],"india":[22.0,79.0],"china":[35.0,105.0],"nigeria":[9.0,8.0],
    "brazil":[-10.0,-55.0],"australia":[-25.0,134.0]
  };
  const $ = id => document.getElementById(id);
  const range = $("atlasCenturyRange");
  if (!range || !$("atlasEntityGrid")) return;
  let selectedCentury = 12;
  let selectedEntity = null;
  let leafletMap = null;
  let leafletMarkers = [];

  let hasDetailedMap = false;
  let historicalBorderLayer = null;
  let historicalIndexPromise = null;
  const borderCache = new Map();

  function addStylesheet(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function loadLeaflet() {
    if (window.L && typeof window.L.map === "function") return Promise.resolve();
    const src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    addStylesheet("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        if (window.L && typeof window.L.map === "function") resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function initDetailedMap() {
    const canvas = $("atlasMapCanvas");
    if (!canvas) return false;
    let mapElement = $("atlasLeafletMap");
    if (!mapElement) {
      mapElement = document.createElement("div");
      mapElement.id = "atlasLeafletMap";
      mapElement.className = "atlas-leaflet-map";
      mapElement.setAttribute("role", "application");
      mapElement.setAttribute("aria-label", "Peta sejarah interaktif; gunakan kontrol zoom dan pilih marker kerajaan");
      canvas.insertBefore(mapElement, canvas.firstChild);
    }
    try {
      mapElement.hidden = false;
      const svg = document.querySelector(".atlas-world-svg");
      const fallbackMarkers = $("atlasMapMarkers");
      if (svg) svg.hidden = true;
      if (fallbackMarkers) fallbackMarkers.hidden = true;
      leafletMap = window.L.map(mapElement, {
        worldCopyJump: true, scrollWheelZoom: false, minZoom: 2, maxZoom: 7,
        zoomControl: true, preferCanvas: true
      }).setView([18, 12], 2);
      window.L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
      }).addTo(leafletMap);
      historicalBorderLayer = window.L.geoJSON([], {
        style: feature => {
          const precision = Number(feature && feature.properties && feature.properties.BORDERPRECISION || 1);
          return {
            color: precision >= 3 ? "#ffe09a" : "#83e5f1",
            weight: precision >= 3 ? 1.7 : 1.2,
            opacity: 0.95,
            dashArray: precision <= 1 ? "5 4" : null,
            fillColor: precision >= 3 ? "#d7a94f" : "#2997ad",
            fillOpacity: precision >= 3 ? 0.30 : 0.20
          };
        },
        onEachFeature: (feature, layer) => {
          const props = feature.properties || {};
          const name = props.NAME || props.name || props.SUBJECTO || "Wilayah historis";
          const precision = Number(props.BORDERPRECISION || 1);
          const accuracy = precision >= 3 ? "lebih terperinci pada dataset" : precision === 2 ? "ketepatan menengah" : "perkiraan / kasar";
          layer.bindTooltip(`${name} 路 ${accuracy}`, { sticky: true });
          const safeName = String(name).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
          layer.bindPopup(`<strong>${safeName}</strong><br>Ketepatan batas: ${accuracy}<br><small>Sumber: Historical Basemaps; verifikasi diperlukan.</small>`);
        }
      }).addTo(leafletMap);
      const note = document.querySelector(".atlas-map-note");
      if (note) note.textContent = "Dasar geografis modern dipakai untuk orientasi; poligon historis adalah rekonstruksi dari snapshot terdekat yang tersedia, bukan batas pasti untuk seluruh abad. Tahun snapshot ditampilkan di atas peta. Abad ke-21 dibuat ringkas. Data poligon: Historical Basemaps (aourednik), GPL-3.0; peta dasar: OpenStreetMap/CARTO.";
      const topLabel = document.querySelector(".atlas-map-topline span:first-child");
      if (topLabel) topLabel.textContent = "PETA SEJARAH 路 WILAYAH & LOKASI";
      return true;
    } catch (error) {
      console.warn("Origopedia: peta rinci gagal dimuat, memakai peta ilustrasi.", error);
      mapElement.hidden = true;
      const svg = document.querySelector(".atlas-world-svg");
      const fallbackMarkers = $("atlasMapMarkers");
      if (svg) svg.hidden = false;
      if (fallbackMarkers) fallbackMarkers.hidden = false;
      return false;
    }
  }

  function loadHistoricalIndex() {
    if (!historicalIndexPromise) {
      historicalIndexPromise = fetch("https://raw.githubusercontent.com/aourednik/historical-basemaps/master/index.json")
        .then(response => { if (!response.ok) throw new Error("Index batas historis tidak tersedia"); return response.json(); });
    }
    return historicalIndexPromise;
  }

  async function loadHistoricalBorders(century) {
    if (!hasDetailedMap || !historicalBorderLayer || !leafletMap) return;
    historicalBorderLayer.clearLayers();
    const status = $("atlasEntityCount");
    if (century === 21) {
      if (status) status.textContent = `${getEntitiesForCentury(century).length} entitas 路 tampilan modern ringkas`;
      return;
    }
    const targetYear = Math.round(((century - 1) * 100 + 1 + century * 100) / 2);
    try {
      if (status) status.textContent = "Memuat batas historis鈥�";
      const indexData = await loadHistoricalIndex();
      const years = (indexData.years || []).filter(item => Number(item.year) >= 1 && Number(item.year) <= 2010 && item.filename);
      if (!years.length) throw new Error("Snapshot historis tidak ditemukan");
      const snapshot = years.reduce((best, item) => Math.abs(Number(item.year) - targetYear) < Math.abs(Number(best.year) - targetYear) ? item : best, years[0]);
      let geojson = borderCache.get(snapshot.filename);
      if (!geojson) {
        const url = `https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/${encodeURIComponent(snapshot.filename)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Gagal memuat snapshot ${snapshot.filename}`);
        geojson = await response.json();
        borderCache.set(snapshot.filename, geojson);
      }
      if (century !== Number(range.value)) return; // abaikan respons lama jika pengguna sudah memilih abad lain
      historicalBorderLayer.addData(geojson);
      if (status) status.textContent = `${getEntitiesForCentury(century).length} entitas 路 snapshot ${snapshot.year} M`;
    } catch (error) {
      console.warn("Origopedia: poligon historis tidak berhasil dimuat.", error);
      if (status) status.textContent = `${getEntitiesForCentury(century).length} entitas 路 poligon tak tersedia`;
      const note = document.querySelector(".atlas-map-note");
      if (note) note.textContent = "Peta dasar dan marker tetap tersedia, tetapi data batas historis gagal dimuat. Periksa koneksi internet. Sumber data poligon: Historical Basemaps, sebuah proyek yang masih berkembang.";
    }
  }

  function startDetailedMap() {
    loadLeaflet().then(() => {
      hasDetailedMap = initDetailedMap();
      if (hasDetailedMap) {
        renderAtlas();
        setTimeout(() => { if (leafletMap) leafletMap.invalidateSize(); }, 180);
      }
    }).catch(error => {
      console.warn("Origopedia: Leaflet tidak bisa dimuat; memakai ilustrasi bawaan.", error);
      hasDetailedMap = false;
      renderAtlas();
    });
  }

  function loadExtraEntities() {
    return fetch("historical-atlas-extra.json")
      .then(response => { if (!response.ok) throw new Error("Data tambahan belum tersedia"); return response.json(); })
      .then(extra => {
        const known = new Set(entities.map(item => item.id));
        extra.forEach(item => {
          if (known.has(item.id)) return;
          const x = Number.isFinite(item.lon) ? ((item.lon + 180) / 360) * 100 : 50;
          const y = Number.isFinite(item.lat) ? ((90 - item.lat) / 180) * 100 : 50;
          entities.push({ ...item, x, y });
          if (Number.isFinite(item.lat) && Number.isFinite(item.lon)) coordinates[item.id] = [item.lat, item.lon];
        });
      })
      .catch(error => console.warn("Origopedia: data tambahan kerajaan belum dimuat.", error));
  }

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
    if (hasDetailedMap && leafletMap) {
      leafletMarkers.forEach(marker => marker.remove());
      leafletMarkers = items.map((item, index) => {
        const point = coordinates[item.id];
        if (!point) return null;
        const icon = window.L.divIcon({
          className: "atlas-leaflet-icon",
          html: `<span class="atlas-leaflet-marker ${selectedEntity && selectedEntity.id === item.id ? "active" : ""}">${index + 1}</span>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        const marker = window.L.marker(point, { icon, title: item.name, keyboard: true }).addTo(leafletMap);
        marker.bindTooltip(item.name, { direction: "top", offset: [0, -12] });
        marker.on("click", () => {
          renderDetail(item);
          const card = document.querySelector(`.atlas-entity-card[data-atlas-entity="${item.id}"]`);
          if (card) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
        return marker;
      }).filter(Boolean);
    } else {
      $("atlasMapMarkers").innerHTML = items.map((item, index) => `
        <button type="button" class="atlas-marker ${selectedEntity && selectedEntity.id === item.id ? "active" : ""}" style="left:${item.x}%;top:${item.y}%" data-atlas-entity="${item.id}" aria-label="Pilih ${item.name}" title="${item.name}"><span>${index + 1}</span></button>
      `).join("");
    }
    if (hasDetailedMap && leafletMap) loadHistoricalBorders(selectedCentury);
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
    if (hasDetailedMap && leafletMap) {
      leafletMarkers.forEach((marker, index) => {
        const item = getEntitiesForCentury(selectedCentury)[index];
        if (!item) return;
        marker.setIcon(window.L.divIcon({
          className: "atlas-leaflet-icon",
          html: `<span class="atlas-leaflet-marker ${item.id === id ? "active" : ""}">${index + 1}</span>`,
          iconSize: [30, 30], iconAnchor: [15, 15]
        }));
      });
    }
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
  startDetailedMap();
  loadExtraEntities().then(() => {
    renderAtlas();
  });
})();
