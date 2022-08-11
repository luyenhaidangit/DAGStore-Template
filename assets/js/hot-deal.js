var swiper = new Swiper(".mySwiper", {
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
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: "",
      prevEl: "",
    },

    breakpoints: {
        // when window width is >= 320px
        1000: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }
  });