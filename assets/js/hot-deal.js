// var swiper = new Swiper(".hot-deal__swiper", {
//     slidesPerView: 5,
//     spaceBetween: 0,
//     slidesPerGroup: 5,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },


//     breakpoints: {
//         // when window width is >= 320px
//         // 1000: {
//         //   slidesPerView: 5,
//         //   spaceBetween: 16
//         // }
//       }
//   });

var swiper = new Swiper(".hot-deal__swiper", {
  // slidesPerView: 2,
  spaceBetween: 16,
  slidesPerGroup: 2,
  freeMode: true,
  navigation: {
    nextEl: ".hot-deal__button-next",
    prevEl: ".hot-deal__button-prev",
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