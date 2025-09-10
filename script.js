window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);


// Lenis
const lenis = new Lenis({ autoRaf: true });

lenis.on("scroll", (e) => console.log(e));


// Section 1

// Elements
const header = document.querySelector(".header");
const headerCross = document.querySelector(".header .fa-xmark");
const container = document.querySelector(".container");
const section1 = document.querySelector(".section-1");
const nav = document.querySelector("nav");

// Header Close
headerCross.addEventListener("click", () => {
  gsap.to(header, {
    y: -window.innerHeight,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => (header.style.display = "none"),
  });

  gsap.to(container, {
    top: 0,
    ease: "power2.inOut",
    duration: 0.6,
    onComplete: () => (section1.style.position = "relative"),
  });

  gsap.to(section1, {
    height: "calc(100vh - 116px)",
    ease: "power2.inOut",
    duration: 0.6,
  });
});

// Scroll stop
lenis.stop();

// Main timeline
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" },
  onComplete: startInfiniteAnimations,
});

// Overlay
tl.to(".section-1 .overlay", {
  background: "linear-gradient(to top, #8de8fd55, #ffffff, #ffffff)",
  duration: 1,
  ease: "power2.in",
});

// Header
tl.from(header, { y: -100, opacity: 1, duration: 1 });

// Nav
tl.from(nav, {
  y: -50,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});

// Text reveal
const myText = new SplitType(".main-text h1", { types: "chars" });
tl.to(".char", {
  y: 0,
  stagger: 0.08,
  duration: 0.5,
  ease: "power4.out",
});

// Images
tl.from(".img-div1", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});
tl.from(
  ".img-div2",
  {
    x: window.innerWidth,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
  },
  "<"
);

// Input area
tl.from(
  ".input-area",
  {
    x: -window.innerWidth,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
  "<"
);

// After intro
function startInfiniteAnimations() {
  lenis.start();

  // Image floting
  const imgDiv1 = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { duration: 2, ease: "power3.inOut" },
  });
  imgDiv1.to(".img-div1", { x: "-10px" })
    .to(".img-div1", { y: "-10px", scale: 0.9 })
    .to(".img-div1", { x: "10px" })
    .to(".img-div1", { y: "10px", scale: 1 });

  const imgDiv2 = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { duration: 2, ease: "power3.inOut" },
  });
  imgDiv2.to(".img-div2", { x: "10px", scale: 1.1 })
    .to(".img-div2", { y: "10px" })
    .to(".img-div2", { x: "-10px", scale: 1 })
    .to(".img-div2", { y: "-10px" });

  // Overlay Pulsing

  gsap
    .timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
      repeat: -1,
      yoyo: true,
    })
    .to(".section-1 .overlay", {
      background: "linear-gradient(to top, #8de8fd55, #ffffff, #ffffff)",
    })
    .to(".section-1 .overlay", {
      background: "linear-gradient(to top, #8de8fd55, #8de8fd55, #ffffff)",
    });
}

// Section 2
gsap.to(".section-2", {
  scrollTrigger: {
    trigger: ".section-2",
    start: "top 80%",
    markers: true,
    scrub: true,
  },
});
