// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Target the text element
  const textElement = document.getElementById("changing-text");

  // Define the text sequence
  const textSequence = ["Software Developer", "Graphic Designer", "Data Scientist", "Mobile App Developer"];

  // Create a GSAP timeline
  const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop

  // Function to animate the text change with typewriter effect
  function animateTextChange(text) {
    // Clear the text element
    textElement.textContent = "";

    // Create a GSAP timeline for the animation
    const textTimeline = gsap.timeline();

    // Split the text into individual characters
    const textArray = text.split("");
    
    // Loop through the characters and animate them
    textArray.forEach((character, index) => {
      textTimeline.to(textElement, {
        duration: 0.02,
        textContent: text.slice(0, index + 1),
        ease: "none",
      }, "+=0.1");
    });

    // Add the animation to the main timeline
    timeline.add(textTimeline);
    // Add a delay between text changes
    timeline.to({}, { duration: 2 }); // Increased delay for better readability
  }

  // Function to get the next text in the sequence
  function getNextText(currentText) {
    const currentIndex = textSequence.indexOf(currentText);
    return textSequence[(currentIndex + 1) % textSequence.length];
  }

  // Initialize with the first text
  let currentText = textSequence[0];
  
  // Animate the text change
  function animate() {
    animateTextChange(currentText);
    currentText = getNextText(currentText);
  }

  // Start the animation
  animate();
  // Repeat the animation every 2.5 seconds (animation duration + delay)
  setInterval(animate, 2500);
});