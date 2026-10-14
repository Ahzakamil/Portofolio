// olah.js — GSAP + ScrollTrigger + ScrollToPlugin untuk portfolio Ahza
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ==========================================
   1. SMOOTH SCROLL SAAT NAVBAR DIKLIK
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");
    if (target === "#" || !document.querySelector(target)) return;

    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      ease: "power3.inOut",
      scrollTo: { y: target, offsetY: 0 }
    });
  });
});

/* ==========================================
   2. NAVBAR ACTIVE STATE (ikut section yang dilihat)
   ========================================== */
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (!section) return;

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onToggle: (self) => {
      if (self.isActive) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

/* ==========================================
   3. ANIMASI (dimatikan jika user pilih reduce motion)
   ========================================== */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {

  // ---------- NAVBAR ----------
  gsap.from(".navbar-background", { y: -80, opacity: 0, duration: 0.8, ease: "power3.out" });
  gsap.from(".navbar-link, .navbar-btn-outline", {
    y: -20, opacity: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: "power2.out"
  });

  // ---------- HERO ----------
  gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 })
    .from(".hero-greeting", { y: 30, opacity: 0, duration: 0.7 })
    .from(".hero-title", { y: 50, opacity: 0, duration: 0.9 }, "-=0.4")
    .from(".hero-btn-primary", { y: 30, opacity: 0, scale: 0.9, duration: 0.6 }, "-=0.5");

  gsap.to(".hero-greeting", {
    y: -6, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5
  });

  // ---------- ABOUT ----------
  gsap.timeline({
    scrollTrigger: { trigger: ".horizon-about-section", start: "top 75%" },
    defaults: { ease: "power3.out" }
  })
    .from(".horizon-about-pill-tag", { x: -40, opacity: 0, duration: 0.6 })
    .from(".horizon-about-lead-text", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3");

  gsap.from(".horizon-about-card", {
    scrollTrigger: { trigger: ".horizon-about-bento-grid", start: "top 80%" },
    y: 80, opacity: 0, duration: 0.9, stagger: 0.2, ease: "power3.out"
  });

  gsap.from(".horizon-about-dot", {
    scrollTrigger: { trigger: ".horizon-about-dots-container", start: "top 85%" },
    scale: 0, opacity: 0, duration: 0.4, stagger: 0.03, ease: "back.out(2)"
  });

  // Counter angka: 80+, 75, 6+, 20+
  gsap.utils.toArray(".horizon-about-num").forEach((el) => {
    const text = el.textContent.trim();
    const target = parseInt(text, 10);
    const suffix = text.replace(/[0-9]/g, "");
    if (isNaN(target)) return;

    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => { el.textContent = Math.round(counter.val) + suffix; }
    });
  });

  gsap.from(".horizon-about-bottom-title", {
    scrollTrigger: { trigger: ".horizon-about-bottom-section", start: "top 85%" },
    y: 30, opacity: 0, duration: 0.7
  });

  // ---------- SERVICES ----------
  gsap.from(".services-header > *", {
    scrollTrigger: { trigger: ".services-header", start: "top 80%" },
    y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out"
  });
  gsap.from(".services-card", {
    scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
    y: 70, opacity: 0, duration: 0.8, stagger: 0.18, ease: "power3.out"
  });

  // ---------- STACKS ----------
  gsap.from(".background-container-content-stacks-header > *", {
    scrollTrigger: { trigger: ".background-container-content-stacks-header", start: "top 80%" },
    y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out"
  });
  gsap.from(".background-container-content-stacks-card", {
    scrollTrigger: { trigger: ".background-container-content-stacks-grid", start: "top 85%" },
    y: 50, opacity: 0, scale: 0.92, duration: 0.6, stagger: 0.08, ease: "power2.out"
  });

  // ---------- PROJECTS ----------
  gsap.from(".background-container-content-header > *", {
    scrollTrigger: { trigger: ".background-container-content-header", start: "top 80%" },
    y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out"
  });
  gsap.from(".background-container-content-card", {
    scrollTrigger: { trigger: ".background-container-content-grid", start: "top 80%" },
    y: 90, opacity: 0, duration: 0.9, stagger: 0.2, ease: "power3.out"
  });

  // ---------- FOOTER ----------
  gsap.from(".footer-card", {
    scrollTrigger: { trigger: ".footer-background", start: "top 80%" },
    y: 60, opacity: 0, scale: 0.97, duration: 0.9, ease: "power3.out"
  });
  gsap.from(".footer-cta > *", {
    scrollTrigger: { trigger: ".footer-card", start: "top 75%" },
    y: 30, opacity: 0, duration: 0.6, stagger: 0.12, delay: 0.2, ease: "power2.out"
  });
  gsap.from(".footer-bottom", {
    scrollTrigger: { trigger: ".footer-bottom", start: "top 95%" },
    opacity: 0, y: 20, duration: 0.6
  });
}

// Hitung ulang posisi trigger setelah semua gambar selesai dimuat
window.addEventListener("load", () => ScrollTrigger.refresh());