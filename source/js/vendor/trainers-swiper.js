export const addTrainersSwiper = () => {
  new Swiper('.trainers__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    keyboard: {
      enabled: true,
      // onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


