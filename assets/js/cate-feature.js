var swiperuu = new Swiper(".cate-feature__body", {
  // slidesPerView: 2,
  grid: {
    rows: 2,
  },
  freeMode: true,
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1200:{
      slidesPerView: 10,
      grid: {
        rows: 2,
      },
    },
   
    992:{
      slidesPerView: 8,
      grid: {
        rows: 2,
      },
    },
    768:{
      slidesPerView: 6,
      grid: {
        rows: 2,
      },
    },
    576:{
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    0:{
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    }
  }
});