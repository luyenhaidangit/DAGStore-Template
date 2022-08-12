var swiper = new Swiper(".big-campaign__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".big-campaign__dot",
        clickable: true,
      },
    navigation: {
      nextEl: ".big-campaign__button-next",
      prevEl: ".big-campaign__button-pre",
    },

    breakpoints: {
        // when window width is >= 320px
        1000: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }
  });