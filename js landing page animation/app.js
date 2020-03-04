const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const button = document.querySelector("#button");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(hamburger, 1, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(button, 0.8, { opacity: 0, x: 0 }, { opacity: 0.88, x: 0 }, "-=0.8");
