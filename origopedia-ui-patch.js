/* Origopedia UI patch — blue sea, 21st century Coming Soon, sequential quizzes */
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);

  // Keep the 21st century marked as in-progress rather than presenting it as a completed historical era.
  const atlas = $("#historical-atlas");
  const centuryTitle = $("#atlasCenturyTitle");
  const yearRange = $("#atlasYearRange");
  const entityCount = $("#atlasEntityCount");
  const range = $("#atlasCenturyRange");
  const prev = $("#atlasPrev");
  const next = $("#atlasNext");
  let comingSoonCard = null;

  function updateCenturyView() {
    if (!atlas || !range || !centuryTitle) return;
    const is21 = Number(range.value) === 21;
    atlas.classList.toggle("atlas-is-coming-soon", is21);

    if (is21) {
      centuryTitle.textContent = "Abad ke-21";
      if (yearRange) yearRange.textContent = "Coming soon · peristiwa masih berlangsung";
      if (entityCount) entityCount.textContent = "COMING SOON";
      const mapCard = $(".atlas-map-card", atlas);
      if (mapCard) {
        if (!comingSoonCard) {
          comingSoonCard = document.createElement("div");
          comingSoonCard.className = "atlas-coming-soon-card";
          comingSoonCard.innerHTML =
            "<strong>COMING SOON</strong><p>Abad ke-21 masih berlangsung. Bagian ini akan dikembangkan setelah tersedia jarak waktu dan sumber sejarah yang memadai.</p>";
        }
        if (!comingSoonCard.isConnected) mapCard.appendChild(comingSoonCard);
      }
    } else {
      if (comingSoonCard && comingSoonCard.isConnected) comingSoonCard.remove();
      // The original atlas script renders the proper title/count when the slider or buttons change.
    }
  }

  if (range) {
    range.addEventListener("input", () => setTimeout(updateCenturyView, 0));
    range.addEventListener("change", () => setTimeout(updateCenturyView, 0));
  }
  if (prev) prev.addEventListener("click", () => setTimeout(updateCenturyView, 0));
  if (next) next.addEventListener("click", () => setTimeout(updateCenturyView, 0));
  updateCenturyView();

  // Hide Chapter 2 completely until Chapter 1's results screen is reached.
  const chapter1 = $("#op-quiz");
  const chapter2 = $("#op-quiz-chapter2");
  const completedKey = "origopedia-quiz-chapter1-completed-v1";

  function revealChapter2() {
    try { localStorage.setItem(completedKey, "true"); } catch (_) {}
    if (chapter2) chapter2.hidden = false;
    window.dispatchEvent(new Event("origopedia:chapter1-completed"));
  }

  function syncChapter2Visibility() {
    if (!chapter2) return;
    let completed = false;
    try { completed = localStorage.getItem(completedKey) === "true"; } catch (_) {}
    chapter2.hidden = !completed;
  }

  if (chapter2) {
    // Hide the whole section initially, not just the lock card.
    syncChapter2Visibility();
  }
  const result = $("#op-quiz-result", chapter1 || document);
  if (result) {
    const observer = new MutationObserver(() => {
      if (!result.hidden) revealChapter2();
    });
    observer.observe(result, { attributes: true, attributeFilter: ["hidden", "class", "style"] });
    if (!result.hidden) revealChapter2();
  }
})();
