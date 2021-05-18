export function workCard() {
  const modal = document.querySelector(".modal__img");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnsOpenModal = document.querySelectorAll(".show-modal");
  const images = [
    "img-1",
    "img-2",
    "img-3",
    "img-4",
    "img-5",
    "img-6",
    "img-7",
    "img-8",
    "img-9",
  ];

  // const openModal = function () {};

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  let imgIndex = 0;

  btnsOpenModal.forEach((item) => {
    item.addEventListener("click", loadImg);
  });

  function loadImg() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.src = `./resources/images/${images[imgIndex]}.jpg`;
    console.log(modal);
    imgIndex++;
  }

  // btnsOpenModal.forEach((item) => {
  //   console.log(item);
  //   item.addEventListener("click", loadImg(images[imgIndex]));
  // });

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    // console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // for swiper
  let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnIntraction: false,
    },
  });
}
