var swiperTrademark = new Swiper(".trademark__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    freeMode: true,
    // loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".trademark__dot",
        clickable: true,
      },
    navigation: {
      nextEl: ".trademark__button-next",
      prevEl: ".trademark__button-prev",
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