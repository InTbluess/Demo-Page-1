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
    height: "calc(100vh - 96px)",
    ease: "power2.inOut",
    duration: 0.6,
  });
});

// Scroll stop
// lenis.stop();

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
},0);
tl.to(".section-1 .overlay", {
  boxShadow: "0px 100px 100px #8de8fd55",
});


// Header
tl.from(header, { y: -100, opacity: 1, duration: 1 },0);

// Nav
tl.from(nav, {
  y: -50,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
},1);

// Text reveal
const myText = new SplitType(".main-text h1", { types: "chars" });
tl.to(".char", {
  y: 0,
  stagger: 0.08,
  duration: 0.5,
  ease: "power4.out",
},1);

// Images
tl.from(".img-div1", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
},1);
tl.from(".img-div2",
  {
    x: window.innerWidth,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
  },1);

// Input area
tl.from(".input-area",
  {
    x: -window.innerWidth,
    opacity: 0,
    delay: 0.5,
    duration: 1.6,
    ease: "power2.out",
  },0);

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

  gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
      delay: 1.5,
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
gsap.registerPlugin(ScrollTrigger);

const sec2tl = gsap.timeline({
   scrollTrigger:{
        trigger:'.section-2',
        scroller:'body',
        scrub: true,
        markers: false,
        start: 'top top',
        end: '+=600%',
        pin: true,
    },
});

sec2tl.fromTo('.section-2 .overlay',
  {
    top: '90vh'
  },
  {

    top: '20vh',
    duration: 2,
  }
);

sec2tl.to('.section-2 .overlay',{
  scaleX: 1.115,
  top: '0vh',
  borderRadius: '0px',
},);


sec2tl.from('.section-2 .img-section',{
  top: '100vh',
  height: '30%',
  duration: 1.5,
},"<");

sec2tl.to('.section-2 .img-section img',{
  objectPosition: `0% 0%`,
  ease: 'none',
  duration: 5,
},"<")

sec2tl.from('.section-2 .text-section',{
  top: '100vh',
  duration: 2,
},"<");


// Text-Reveal
const splitTypes = document.querySelectorAll(".section-2 .text-section p");
splitTypes.forEach(el => new SplitType(el, { types: "chars" }));

const textArea = gsap.timeline();

splitTypes.forEach(el => {
  const chars = el.querySelectorAll(".char");
  textArea.fromTo(chars, 
    { 
      y: '-2vh',
      opacity: 0.1
    },
    { 
      opacity: 1,
      stagger: 0.02,
      duration: 0.5
    },
    ">");
});

sec2tl.add(textArea, ">");
//-------------------

sec2tl.to('.section-2 .text-section',{
  top: '-70vh',
  delay: 2,
  duration: 5,
  // ease: 'power3.inOut',
  
},">");


sec2tl.from('.section-2 .card-section',{
  bottom: '-100vh',
  duration: 5,
},"<");


sec2tl.to('.section-2 .img-section img',{
  objectPosition: `0% 100%`,
  ease: 'none',
  duration: 5,
},">")

sec2tl.to('.section-2 .img-section',{
  duration: 15,
  height: '30%',
  top: '-80vh'
});

sec2tl.to('.section-2 .card-section .card',{
  top: '-80vh',
  duration: 10,
},"<");

sec2tl.to('.section-2 .overlay',{
  top: '0vh',
  duration: 6,
  scaleX: 1,
  scaleY: 0.6,
  transformOrigin: 'top center',
  borderRadius: '0px 0px 30px 30px',
},">");

//Card-section on hover effect
const cards = document.querySelectorAll('.section-2 .card-section .card');

cards.forEach(card => {
  const content = card.querySelector('.card-content');

  card.addEventListener('mouseover', () => {
    gsap.to(content, {
      height: '85%',
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseout', () => {
    gsap.to(content, {
      height: '100%',
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

