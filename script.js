// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});




//header
const header = document.querySelector(".header");
const headerCross = document.querySelector(".header .fa-xmark");
const container = document.querySelector(".container");
const section1 = document.querySelector(".section-1");


headerCross.addEventListener("click", () => {
  gsap.to(header, {
    y: -window.innerHeight,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      header.style.display = "none";
    },
  });
  
  gsap.to(container, {
    top: 0,
    ease: "power2.inOut",
    duration: 0.6,
    onComplete: () => {
      section1.style.position = "relative";
    },
  });
  gsap.to(section1, {
    height: "calc(100vh - 116px)",
    ease: "power2.inOut",
    duration: 0.6,
  });
});



//main timeline
const nav = document.querySelector("nav");

const tl = gsap.timeline({
  repeat: 0,
  delay: 0.3,
  defaults: { duration: 1, ease: "power2.inOut" },
});

//header
tl.from(header, {
  y: -100,
  opacity: 1,
  duration: 1,
});

//nav
tl.from(nav, {
  y: -50,
  opacity: 0,
  duration: 0.7,
  delay: 0.1,
  ease: "power2.out",

}); 

//text-reveal animation

const myText = new SplitType(".main-text h1", { types: "chars" });

tl.to(".char", {
  y: 0,
  // opacity: 1,
  stagger: 0.08,
  delay: 0,
  duration: 0.5,
  ease: "power4.out"
});

//images

const imgTl = gsap.timeline();

imgTl.from(".img-div1", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});

imgTl.from(".img-div2", {
  x: window.innerWidth,
  zIndex: 9,
  
  opacity: 1,
  duration: 2,
  delay: 0.3,
  ease: "power3.out",
},"<");

tl.add(imgTl, "<");

//input-area

tl.from(".input-area", {
  x: -window.innerWidth,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
},"<");
