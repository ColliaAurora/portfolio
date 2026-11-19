const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  //   mousewheel: true,

  //   Wenn die Zeile effect gelöscht/auskommentiert ist, werden die Slides horizontal bewegt
  //   Mit der Zeile werden sie überblendet
  //   effect: "fade",
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  speed: 1,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
const name = document.querySelector(".name");
let previousSlide = null;

swiperWrapper.addEventListener("click", (event) => {
  // Klicks auf Bedienelemente innerhalb des Wrappers sollen nicht navigieren.
  if (event.target.closest("a, button")) return;

  const containerWidth = swiperWrapper.offsetWidth;
  const clickX = event.clientX - swiperWrapper.getBoundingClientRect().left;

  if (clickX < containerWidth / 2) {
    swiper.slidePrev();
  } else {
    swiper.slideNext();
  }
});

name.addEventListener("click", (event) => {
  event.preventDefault();

  if (previousSlide === null) {
    previousSlide = swiper.realIndex;
    swiper.el.classList.add("about-open");
    name.classList.add("is-about-open");
    const aboutSlide = swiper.slides.find((slide) => slide.dataset.hash === "ueber");
    swiper.slideToLoop(Number(aboutSlide.dataset.swiperSlideIndex));
    return;
  }

  const slideToRestore = previousSlide;
  previousSlide = null;
  swiper.el.classList.remove("about-open");
  name.classList.remove("is-about-open");
  swiper.slideToLoop(slideToRestore);
});
