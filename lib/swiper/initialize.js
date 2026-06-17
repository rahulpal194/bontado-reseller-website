const swiper = new Swiper(".swiper", {
  speed: 5000,
  direction: "horizontal",
  loop: true,
  loopAdditionalSlides: 5,
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: false,
  zoom: true,
  keyboard: true,
  pagination: false,
  navigation: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
