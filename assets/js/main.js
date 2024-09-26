// $(function () {
//   'use strict';

//   var wind = $(window);

//   $.scrollIt({
//     upKey: 38,
//     downKey: 40,
//     easing: 'swing',
//     scrollTime: 600,
//     activeClass: 'active',
//     onPageChange: null,
//     topOffset: -80,
//   });

//   $('.navbar .dropdown').hover(
//     function () {
//       $(this).find('.dropdown-menu').addClass('show');
//     },
//     function () {
//       $(this).find('.dropdown-menu').removeClass('show');
//     }
//   );

//   $('.navbar .dropdown-item').hover(
//     function () {
//       $(this).find('.dropdown-side').addClass('show');
//     },
//     function () {
//       $(this).find('.dropdown-side').removeClass('show');
//     }
//   );

//   wind.on('scroll', function () {
//     var bodyScroll = wind.scrollTop(),
//       navbar = $('.navbar'),
//       logo = $('.navbar.change .logo> img');

//     if (bodyScroll > 300) {
//       navbar.addClass('nav-scroll');
//       logo.attr('src', 'assets/img/logo-dark.png');
//     } else {
//       navbar.removeClass('nav-scroll');
//       logo.attr('src', 'assets/img/logo-light.png');
//     }
//   });

//   $('.navbar-unav > .unav-item.dropdown .unav-link').on('click', function () {
//     $('.navbar-unav').addClass('gosub');
//     $(this).parent().parent().addClass('unav-active');
//     $('.navbar-unav .dropdown-menu').removeClass('drop-active');
//     $(this).parent().find('.dropdown-menu').addClass('drop-active');
//   });

//   $('.navbar-unav > .unav-item .goback').on('click', function () {
//     $('.navbar-unav').removeClass('gosub');
//     $('.navbar-unav .dropdown-menu').removeClass('drop-active');
//     $('.navbar-unav').removeClass('unav-active');
//     $('.navbar-unav .dropdown-item .slide-menu').removeClass('active');
//     $('.dropdown-side').slideUp();
//   });

//   $('.navbar-unav .dropdown-menu .dropdown-item .slide-menu').on(
//     'click',
//     function () {
//       $(this).toggleClass('active');
//       $(this).parent().find('.dropdown-side').slideToggle();
//     }
//   );

//   $('.nav-left-fixed .menu-bar').on('mouseenter', function () {
//     $('.nav-side').addClass('show');
//     $('.nav-left-fixed .overlay-nav').addClass('show');
//   });

//   $('.nav-left-fixed .overlay-nav').on('mouseenter', function () {
//     $('.nav-side').removeClass('show');
//     $(this).removeClass('show');
//   });
// });

//
//
//
//

jQuery(document).ready(function ($) {
  $(".partnerMarquee").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  $(".portfolioMarqueeRight").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  $(".portfolioMarqueeLeft").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: -1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  $(".reviewSlider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

var toggleOpen = document.getElementById("toggleOpen");
var toggleClose = document.getElementById("toggleClose");
var collapseMenu = document.getElementById("collapseMenu");

function handleClick() {
  if (collapseMenu.style.display === "block") {
    collapseMenu.style.display = "none";
  } else {
    collapseMenu.style.display = "block";
  }
}

toggleOpen.addEventListener("click", handleClick);
toggleClose.addEventListener("click", handleClick);

//
//
//
//
//
//

$(function () {
  $(".smPostSlider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $(".smallVideoSlider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $(".clientsLogo").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
    swipe: false,
    slidesToShow: 8,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 8, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $(".imagesLtrCarousel").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
    swipe: false,
    slidesToShow: 3,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },

      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $(".imagesCarousel").slick({
    autoplay: true,
    arrow: false,
    autoplaySpeed: 0,
    speed: 5000,
    swipe: false,
    slidesToShow: 3,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },

      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

// $(document).ready(function () {
//   $('.sCarousel').slick({
//     speed: 10000,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     rtl: true,
//     mobileFirst: true,
//     rows: 3,

//     // Disable all interaction
//     arrows: false,
//     dots: false,
//     accessibility: false,
//     draggable: false,
//     pauseOnHover: false,
//     swipe: false,
//     touchMove: false,
//   });
// });

$(function () {
  $(".productSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $(".testimSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});
