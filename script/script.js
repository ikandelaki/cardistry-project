// Sticky navigation
const sectionWhatEl = document.querySelector(".section-hero");
const headerEl = document.querySelector(".header");
const observer = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionWhatEl);

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

// Mobile navigation
const btn = document.querySelector(".menu-icon");
btn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
