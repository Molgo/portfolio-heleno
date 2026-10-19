/* Renderiza as páginas de perfil a partir de window.PROFILE.
   heleno.html e paula.html compartilham exatamente este código e a mesma estrutura HTML. */
(function () {
  "use strict";
  var P = window.PROFILE;
  if (!P) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  /* ---------- Hero / Bio ---------- */
  document.title = P.name + " | Artes Cênicas";
  $("#hero-overline").textContent = P.overline;
  $("#hero-name").textContent = P.name;
  $("#hero-photo").src = P.photo;
  $("#hero-photo").alt = "Retrato de " + P.name;
  $("#header-name").textContent = P.shortName;
  $("#roles").innerHTML = P.roles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
  $("#bio").innerHTML = P.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

  /* ---------- Espetáculos: um Swiper coverflow por projeto ---------- */
  var showsHtml = P.shows.map(function (s, i) {
    var slides = s.slides.map(function (sl) {
      return '<div class="swiper-slide"><img src="' + esc(sl.src) + '" alt="' + esc(sl.alt) +
        '" loading="lazy"><span class="slide-tag">' + esc(sl.tag) + "</span></div>";
    }).join("");
    var ficha = '<div class="swiper-slide ficha"><h4>Ficha técnica</h4><dl>' +
      s.ficha.map(function (f) { return "<dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd>"; }).join("") +
      "</dl></div>";
    return '<article class="show">' +
      '<div class="show-head"><h3>' + esc(s.title) + "</h3><span>" + esc(s.meta) + "</span></div>" +
      '<p class="show-sub">' + esc(s.description) + "</p>" +
      '<div class="swiper show-swiper" id="show-swiper-' + i + '">' +
      '<div class="swiper-wrapper">' + slides + ficha + "</div>" +
      '<div class="swiper-button-prev" aria-label="Anterior"></div>' +
      '<div class="swiper-button-next" aria-label="Próximo"></div>' +
      '<div class="swiper-pagination"></div></div></article>';
  }).join("");
  $("#shows-list").innerHTML = showsHtml;

  if (window.Swiper) {
    P.shows.forEach(function (_, i) {
      new Swiper("#show-swiper-" + i, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false,
        coverflowEffect: { rotate: 38, stretch: 0, depth: 140, modifier: 1, slideShadows: true },
        navigation: {
          nextEl: "#show-swiper-" + i + " .swiper-button-next",
          prevEl: "#show-swiper-" + i + " .swiper-button-prev"
        },
        pagination: { el: "#show-swiper-" + i + " .swiper-pagination", clickable: true },
        keyboard: { enabled: true }
      });
    });
  }

  /* ---------- Prêmios ---------- */
  $("#awards-list").innerHTML = P.awards.map(function (a) {
    return '<li class="award"><div class="year">' + esc(a.year) + "</div><div><h3>" + esc(a.title) +
      "</h3><p>" + esc(a.detail) + "</p></div></li>";
  }).join("");

  /* ---------- Galeria em 2 níveis ---------- */
  var level1 = $("#gallery-projects");
  var level2 = $("#gallery-detail");
  var photosGrid = $("#gallery-photos");
  var galleryTitle = $("#gallery-title");

  level1.innerHTML = P.gallery.map(function (g, i) {
    return '<button type="button" class="gallery-item" data-project="' + i + '">' +
      '<img src="' + esc(g.cover) + '" alt="Capa: ' + esc(g.title) + '" loading="lazy">' +
      '<div class="cap"><strong>' + esc(g.title) + "</strong><span>" + g.photos.length + " fotos</span></div></button>";
  }).join("");

  var currentPhotos = [];

  function openProject(i) {
    var g = P.gallery[i];
    currentPhotos = g.photos.map(function (src, n) {
      return { src: src.replace("/800/600", "/1600/1200"), thumb: src, alt: g.title + " — foto " + (n + 1) };
    });
    galleryTitle.textContent = g.title;
    photosGrid.innerHTML = currentPhotos.map(function (p, n) {
      return '<button type="button" class="gallery-item" data-photo="' + n + '">' +
        '<img src="' + esc(p.thumb) + '" alt="' + esc(p.alt) + '" loading="lazy"></button>';
    }).join("");
    level1.hidden = true;
    level2.hidden = false;
    level2.classList.remove("fade-in");
    void level2.offsetWidth;
    level2.classList.add("fade-in");
    $("#gallery").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function closeProject() {
    level2.hidden = true;
    level1.hidden = false;
    level1.classList.remove("fade-in");
    void level1.offsetWidth;
    level1.classList.add("fade-in");
  }

  level1.addEventListener("click", function (e) {
    var b = e.target.closest("[data-project]");
    if (b) openProject(Number(b.getAttribute("data-project")));
  });
  $("#gallery-back").addEventListener("click", closeProject);

  /* ---------- Lightbox (JS puro) ---------- */
  var lb = $("#lightbox");
  var lbImg = $("#lb-img");
  var lbCap = $("#lb-cap");
  var lbIndex = 0;
  var lastFocus = null;

  function showLb(n) {
    lbIndex = (n + currentPhotos.length) % currentPhotos.length;
    var p = currentPhotos[lbIndex];
    lbImg.src = p.src;
    lbImg.alt = p.alt;
    lbCap.textContent = p.alt + "  (" + (lbIndex + 1) + "/" + currentPhotos.length + ")";
  }
  function openLb(n) {
    lastFocus = document.activeElement;
    showLb(n);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#lb-close").focus();
  }
  function closeLb() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  photosGrid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-photo]");
    if (b) openLb(Number(b.getAttribute("data-photo")));
  });
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", function () { showLb(lbIndex - 1); });
  $("#lb-next").addEventListener("click", function () { showLb(lbIndex + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") showLb(lbIndex - 1);
    else if (e.key === "ArrowRight") showLb(lbIndex + 1);
  });
})();
