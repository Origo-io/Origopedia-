/* Origopedia patch v2
   Muat setelah Leaflet dan sebelum historical-atlas.js.
   Mengubah basemap gelap menjadi basemap dengan laut biru dan mengunci abad 21. */
(() => {
  "use strict";

  // 1) Ganti tile layer CARTO dark yang membuat peta tampak terlalu gelap/oranye.
  if (window.L && typeof window.L.tileLayer === "function" && !window.L.__origopediaBlueTiles) {
    const originalTileLayer = window.L.tileLayer.bind(window.L);
    window.L.tileLayer = function (url, options) {
      let chosenUrl = url;
      if (typeof url === "string" && url.includes("basemaps.cartocdn.com/dark_all")) {
        chosenUrl = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
      }
      return originalTileLayer(chosenUrl, options);
    };
    window.L.__origopediaBlueTiles = true;
  }

  function setupCenturyLock() {
    const section = document.getElementById("historical-atlas");
    const range = document.getElementById("atlasCenturyRange");
    const canvas = document.getElementById("atlasMapCanvas");
    const title = document.getElementById("atlasCenturyTitle");
    const yearRange = document.getElementById("atlasYearRange");
    const count = document.getElementById("atlasEntityCount");
    if (!section || !range || !canvas || !title) return false;

    let overlay = document.getElementById("atlasComingSoonOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "atlasComingSoonOverlay";
      overlay.className = "atlas-coming-soon-overlay";
      overlay.setAttribute("role", "status");
      overlay.setAttribute("aria-live", "polite");
      overlay.innerHTML = `
        <div class="atlas-coming-soon-card">
          <div class="atlas-coming-soon-lock" aria-hidden="true">🔒</div>
          <p class="atlas-coming-soon-kicker">PERIODE DALAM PENGEMBANGAN</p>
          <h3>COMING SOON</h3>
          <p>Abad ke-21 belum tersedia di Atlas Sejarah. Bagian ini akan dibuka setelah dokumentasi dan kurasi peristiwanya siap.</p>
        </div>`;
      canvas.appendChild(overlay);
    }

    const update = () => {
      const isLocked = Number(range.value) === 21;
      section.classList.toggle("atlas-is-coming-soon", isLocked);
      overlay.hidden = !isLocked;

      if (isLocked) {
        title.textContent = "Abad ke-21 🔒";
        if (yearRange) yearRange.textContent = "COMING SOON";
        if (count) count.textContent = "Periode terkunci";
        const resultCount = document.getElementById("atlasResultsCount");
        if (resultCount) resultCount.textContent = "Belum tersedia";
      }
    };

    // Jalankan setelah renderAtlas selesai memperbarui judul/daftar.
    range.addEventListener("input", () => window.setTimeout(update, 0));
    const prev = document.getElementById("atlasPrev");
    const next = document.getElementById("atlasNext");
    if (prev) prev.addEventListener("click", () => window.setTimeout(update, 0));
    if (next) next.addEventListener("click", () => window.setTimeout(update, 0));

    const observer = new MutationObserver(() => update());
    observer.observe(title, { childList: true, characterData: true, subtree: true });
    update();
    return true;
  }

  function start() {
    if (setupCenturyLock()) return;
    document.addEventListener("DOMContentLoaded", setupCenturyLock, { once: true });
  }
  start();
})();
