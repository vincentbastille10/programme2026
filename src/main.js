// Moulin Rouge 2026 — Centre de Danse Delphine Letort
// Interactions légères, sans dépendance.

// 1) Apparition progressive des éléments au défilement
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// 2) Bouton « retour en haut »
const toTop = document.querySelector(".totop");
if (toTop) {
  const onScroll = () => {
    toTop.classList.toggle("show", window.scrollY > 640);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

console.log("Moulin Rouge 2026 — programme chargé");
