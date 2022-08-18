var swiperTrademark = new Swiper(".newchain__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    freeMode: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".newchain__dot",
        clickable: true,
      },
    navigation: {
      nextEl: ".newchain__button-next",
      prevEl: ".newchain__button-prev",
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