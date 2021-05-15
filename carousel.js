export function carousel() {
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
}
