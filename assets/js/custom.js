var swipers = new Swiper('.swiper-containers', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  toggle: true,
  allowTouchMove: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,

  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});
var swiperz = new Swiper('.swiper-containerz', {
  slidesPerView: 7,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    reverseDirection: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

window.addEventListener('load', function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
//initialize AOS
AOS.init();
//adding delayed modal
if($(document).ready()){
  $('.preloader').fadeOut(300);
}
else{
  setTimeout(function(){
    $('.preloader').fadeOut(300);
  },1000);
}
//typed.js init
var typed = new Typed('#typed', {
  strings: ["Mewujudkan mimpi di dunia Digital.", "Dari Developer untuk Developer.","KeepNgoding_KeepLearning."],
  typeSpeed: 60,
  loop:true,
  showCursor: true,
  cursorChar: '_',
});
