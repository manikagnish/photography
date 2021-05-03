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

const slider = function () {
  const slides = document.querySelectorAll(".mySlides");
  const btnLeft = document.querySelector(".prev");
  const btnRight = document.querySelector(".next");
  const dotContainer = document.querySelector(".dots");

  window.addEventListener("mousemove", function () {
    btnLeft.style.opacity = 1;
    btnRight.style.opacity = 1;
  });

  window.addEventListener("mouseout", function () {
    btnLeft.style.opacity = 0;
    btnRight.style.opacity = 0;
  });

  let curSlide = 0;
  const maxSlide = slides.length;

  // functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (mySlides) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${mySlides}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (mySlides) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - mySlides)}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  setInterval(nextSlide, 7000); // Change image every 7 seconds
};
slider();

// WORK CARD
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// for swiper
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
