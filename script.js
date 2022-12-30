$(document).ready(function(){
  $('.menu-icon').on('click', function() {
		$('.navigation').slideToggle(300);
	});
});

var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });	  
var swiper = new Swiper(".mySwiper--1", {
    loop: true,
		freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
     // Default parameters  
  // Responsive breakpoints
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
    },
    // when window width is >= 1100px
    1000: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 1280px
    1000: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1500px
    1750: {
      slidesPerView: 2,
      spaceBetween: 100
    },
	1751: {
      slidesPerView: 3,
      spaceBetween: 64
    }  
  }
});
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
  });