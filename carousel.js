    let w = window.innerWidth;
    if (w>900) {
      
      var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      var swiper2 = new Swiper(".mySwiper2", {
        direction: "horizontal",
        loop: true,
        mousewheel: true,
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
    }
    else {
      var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        loop: true,
        mousewheel: true,
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
    }
      