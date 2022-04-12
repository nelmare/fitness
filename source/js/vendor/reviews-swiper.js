export const addReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
}


