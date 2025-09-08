// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

const header = document.querySelector(".header");
const headerCross = document.querySelector(".header .fa-xmark");
const container = document.querySelector(".container");

headerCross.addEventListener("click", () => {
  gsap.to(header, {
    y: -100, // slide up out of view
    opacity: 0, // fade out
    duration: 0.6, // smooth animation
    ease: "power2.inOut",
    onComplete: () => {
      header.style.display = "none"; // remove from layout after anim
    },
  });
  gsap.to(container, {
    top: 0,
    ease: "power2.inOut",
    duration: 0.6,
    onComplete: () => {
      section1.style.position = "relative"; // remove from layout after anim
    },
  });
});
