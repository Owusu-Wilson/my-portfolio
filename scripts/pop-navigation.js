const nav = document.getElementById("nav");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
});

// Smooth scrolling when clicking on navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    // Scroll smoothly to the target section
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
