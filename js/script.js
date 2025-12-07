const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  mousewheel: true,
  //   Wenn die Zeile effect gelöscht/auskommentiert ist, werden die Slides horizontal bewegt
  //   Mit der Zeile werden sie überblendet
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 15,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

//Geminis Code
const swiperWrapper = document.querySelector(".swiper-wrapper");

// ERSETZE den alten Event-Listener komplett mit diesem neuen Code
swiperWrapper.addEventListener("click", (event) => {
  // 1. Die Gesamtbreite des Swiper-Containers abrufen
  const containerWidth = swiperWrapper.offsetWidth;

  // 2. Die X-Koordinate des Klicks relativ zum Container abrufen
  const clickX = event.clientX - swiperWrapper.getBoundingClientRect().left;

  // 3. Prüfen, ob der Klick in der linken oder rechten Hälfte war
  if (clickX < containerWidth / 2) {
    // Klick ist in der linken Hälfte -> ZURÜCK
    swiper.slidePrev();
  } else {
    // Klick ist in der rechten Hälfte -> WEITER
    swiper.slideNext();
  }

  const name = document.querySelector(".name");
  name.addEventListener("click", () => {});
});
