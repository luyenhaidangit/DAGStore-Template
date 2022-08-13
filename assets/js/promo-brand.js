var swiperOutstanding = new Swiper(".promo-brand__swiper-outstanding", {
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
      nextEl: ".promo-brand-outstanding__button-next",
      prevEl: ".promo-brand-outstanding__button-prev",
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

var swiperProduct = new Swiper(".promo-brand__swiper-product", {
    spaceBetween: 16,
    slidesPerGroup: 2,
    freeMode: true,
    navigation: {
      nextEl: ".promo-brand-product__button-next",
      prevEl: ".promo-brand-product__button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      1400: {
        slidesPerView: 5,
        spaceBetween: 16,
        slidesPerGroup: 5,
        loop: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loop: true,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 3,
        loop: true,
      },
      768: {
          watchSlidesProgress: true,
          slidesPerView: 2,
          spaceBetween: 24,
          slidesPerGroup: 2,
      },
      567: {
        watchSlidesProgress: true,
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
        loop: true,
        freeMode: false,
    },
      
    }
});