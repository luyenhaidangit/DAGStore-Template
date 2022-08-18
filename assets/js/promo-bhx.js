var swiperPromoBhx = new Swiper(".promo-bhx__swiper", {
    slidesPerView: 1,
    spaceBetween: 4,
    slidesPerGroup: 1,
    freeMode: true,
    // loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: 5,
            spaceBetween: 12
          },

        1200: {
            slidesPerView: 4,
            spaceBetween: 12
          },
        992:{
            slidesPerView: 3,
            spaceBetween: 12
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 12
        },
        576:{
            slidesPerView: 1,
            spaceBetween: 12
        }
      }
  });