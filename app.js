"use strict";

//NAVBAR
const navClose = document.getElementById("navi-toggle");
const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
const navServices = document.getElementById("nav-services");
const navTeam = document.getElementById("nav-team");
const navBlogs = document.getElementById("nav-blogs");
const navMeetings = document.getElementById("nav-meetings");

const navItems = [
  navHome,
  navAbout,
  navServices,
  navTeam,
  navBlogs,
  navMeetings,
];

for (let i in navItems) {
  navItems[i].addEventListener("click", function () {
    navClose.checked = false;
  });
}

const navbar = document.querySelector(".navigation");
const landing = document.querySelector(".landing");

const landingOptions = {
  rootMargin: "-80% 0px 0px 0px",
};

const landingObserver = new IntersectionObserver(function (
  entries,
  landingObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("navScrolled");
    } else {
      navbar.classList.remove("navScrolled");
    }
  });
},
landingOptions);

landingObserver.observe(landing);

//Carousel
let slideIndex = 1;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

setTimeout(showSlides, 7000); // Change image every 2 seconds
