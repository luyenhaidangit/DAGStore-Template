var swiperDiscountPayonl = new Swiper(".discount-payonl__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".promo-brand-outstanding__dot",
        clickable: true,
      },
    navigation: {
      nextEl: ".discount-payonl__button-next",
      prevEl: ".discount-payonl__button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        992: {
            slidesPerView: 3,
            spaceBetween: 16
          },

        768: {
            slidesPerView: 2,
            spaceBetween: 16
          }
      }
  });