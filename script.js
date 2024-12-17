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

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Target the text element
  const textElement = document.getElementById("changing-text");

  // Define the text sequence
  const textSequence = ["Developer", "Engineer"];

  // Create a GSAP timeline
  const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop

  // Function to animate the text change with typewriter effect
  function animateTextChange() {
    timeline.to(textElement, {
      duration: 0.5,
      opacity: 0.2, // Fade out the text
      onComplete: function () {
        // Change the text
        textElement.textContent = getNextText(textElement.textContent);
        // Animate the text back with typewriter effect
        timeline.to(
          textElement,
          { duration: 0.7, opacity: 1, ease: "power1.inOut" },
          "+=1" // Delay between text changes
        );
      },
    });
  }

  // Function to get the next text in the sequence
  function getNextText(currentText) {
    const currentIndex = textSequence.indexOf(currentText);
    return textSequence[(currentIndex + 1) % textSequence.length];
  }

  // Start the animation
  animateTextChange();
});
