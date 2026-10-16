(function () {
  "use strict";
  function init() {
    const data = Array.isArray(window.ORIGOPEDIA_ARTICLES) ? window.ORIGOPEDIA_ARTICLES : [];
    const search = document.getElementById("op-article-search");
    const category = document.getElementById("op-article-category");
    const grid = document.getElementById("op-article-grid");
    const count = document.getElementById("op-article-count");
    const empty = document.getElementById("op-article-empty");
    const dialog = document.getElementById("op-article-dialog");
    const title = document.getElementById("op-article-dialog-title");
    const meta = document.getElementById("op-article-dialog-meta");
    const body = document.getElementById("op-article-dialog-body");
    const sources = document.getElementById("op-article-dialog-sources");
    const close = document.getElementById("op-article-dialog-close");
    if (!search || !category || !grid) { console.warn("Origopedia: HTML pustaka belum dipasang."); return; }
    const names = {"world-history":"Sejarah Dunia", indonesia:"Sejarah Indonesia", economics:"Ekonomi", "dark-history":"Dark History"};
    const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
    function openArticle(a) {
      if (!dialog || !title || !body) return;
      title.textContent = a.title || "Artikel";
      if (meta) meta.textContent = [names[a.category] || a.category, a.year, a.tag].filter(Boolean).join(" • ");
      body.replaceChildren(); (a.body || []).forEach(p => body.appendChild(el("p", "", p)));
      if (sources) { sources.replaceChildren(); sources.appendChild(el("h4", "", "Sumber bacaan")); (a.sources || []).forEach(s => { if (!s.url || !/^https?:\/\//i.test(s.url)) return; const link = el("a", "", s.title || s.url); link.href = s.url; link.target = "_blank"; link.rel = "noopener noreferrer"; sources.appendChild(link); }); }
      if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "open");
    }
    function render() {
      const q = search.value.trim().toLocaleLowerCase("id"), cat = category.value || "all";
      const filtered = data.filter(a => (cat === "all" || a.category === cat) && [a.title,a.tag,a.summary,a.year,...(a.body || [])].filter(Boolean).join(" ").toLocaleLowerCase("id").includes(q));
      grid.replaceChildren();
      filtered.forEach(a => {
        const card = el("article", "op-article-card"), button = el("button", "op-article-open", "Baca artikel");
        card.append(el("span", "op-article-tag", a.tag || names[a.category] || "Artikel"), el("h3", "op-article-card-title", a.title || "Tanpa judul"), el("p", "op-article-meta", [names[a.category],a.year].filter(Boolean).join(" • ")), el("p", "op-article-summary", a.summary || ""));
        button.type = "button"; button.addEventListener("click", () => openArticle(a)); card.appendChild(button); grid.appendChild(card);
      });
      if (count) count.textContent = filtered.length + " artikel"; if (empty) empty.hidden = filtered.length > 0;
    }
    search.addEventListener("input", render); category.addEventListener("change", render);
    if (close && dialog) close.addEventListener("click", () => dialog.close ? dialog.close() : dialog.removeAttribute("open"));
    if (dialog) dialog.addEventListener("click", e => { if (e.target === dialog && dialog.close) dialog.close(); });
    render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
