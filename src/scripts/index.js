$(document).ready(function () {
  const modal = document.querySelector('#modal');

  $('select').selectric();

  // document.addEventListener("DOMContentLoaded", function() {
  //   var lazyloadImages = document.querySelectorAll("img.lazy");    
  //   var lazyloadThrottleTimeout;
    
  //   function lazyload () {
  //     if(lazyloadThrottleTimeout) {
  //       clearTimeout(lazyloadThrottleTimeout);
  //     }    
      
  //     lazyloadThrottleTimeout = setTimeout(function() {
  //         var scrollTop = window.pageYOffset;
  //         lazyloadImages.forEach(function(img) {
  //             if(img.offsetTop < (window.innerHeight + scrollTop)) {
  //               img.src = img.dataset.src;
  //               img.classList.remove('lazy');
  //             }
  //         });
  //         if(lazyloadImages.length == 0) { 
  //           document.removeEventListener("scroll", lazyload);
  //           window.removeEventListener("resize", lazyload);
  //           window.removeEventListener("orientationChange", lazyload);
  //         }
  //     }, 20);
  //   }
    
  //   document.addEventListener("scroll", lazyload);
  //   window.addEventListener("resize", lazyload);
  //   window.addEventListener("orientationChange", lazyload);
  // });

  $(".popup-menu").click(function () {
    $(".modal-menu").fadeToggle('fast');
  });
  $(".modal-menu").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close' ||
        $(e.target).attr('class') === 'modal-link') {
      $(".modal").fadeOut('fast');
    }
  });

  $(window).on('scroll', () => {
      if (window.pageYOffset >= 100) {
        $('.navbar')[0].classList.add("sticky");
      } else {
        $('.navbar')[0].classList.remove("sticky");
      }
  });

  $(".video_svg").click(function () {
    $(".modal-video").fadeToggle('fast');
    $('.video-modal')[0].requestFullscreen();
    $('.video-modal')[0].play();
  });
  $(".modal-video").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close') {
          $('.video-modal')[0].pause();
      $(".modal-video").fadeOut('fast');
    }
  });

  $(".open-photos").click(function () {
    $('.hotel-slider').slick({
      centerMode: true,
      variableWidth: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 3,
      pauseOnHover: true,
    });

    $(".modal-hotel").fadeToggle('fast');
  });

  $(".modal-hotel").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close') {
      $(".modal-hotel").fadeOut('fast');
      $('.hotel-slider').slick('unslick');
    }
  });

  $('.hotel-image').on('click', (e) => {
    e.target.requestFullscreen();
  })

  $(".footer-nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.speakers-button').on('click', () => {
    let trigger = false;
    $('.fixedList').each(function() {
      if (this.classList.contains('hidden')) {
        this.classList.remove('hidden');
        trigger = true;
        return false;
      } else trigger = false;
    });
    if (!trigger) $('.speakers-button')[0].classList.add('hidden');
  });

  $(".menu-column").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.callback-form').on('submit', (e) => {
    e.preventDefault();
    $('.footer-right__container').html(
      `
        <h4>Спасибо за Ваш вопрос!</h4>
        </p>В ближайшее время мы<br> свяжемся с Вами</p>
        <img src="./src/images/submit.png" alt="">
      `);
  })

  $('.video-cover').on('click', (e) => {
    $(`#${e.target.classList[1]}`)[0].play();
    $(`#${e.target.classList[1]}`)[0].setAttribute('controls', 'controls');

    $(`.${$(e.target)[0].classList[1]}`)[0].classList.add('playing');
  });

  $('.video-source').on('pause', (e) => {
    $(`.${e.target.id}`)[0].classList.remove('playing');
    $(`.${e.target.id}`)[1].classList.remove('playing');

    if (e.target.hasAttribute("controls")) {
      e.target.removeAttribute('controls');
    }
  })

  let show = true;
  let countbox = ".numbers-container";

  $(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();

    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.dial').css('opacity', '1');
      $('.dial').css('display', 'unset');

      $(document).ready(function () {
        $('.benefits__number').spincrement({
          thousandSeparator: "",
          duration: 2600
        });
      });

      $(".dial-1").knob({
        min: '0',
        max: '200'
      });

      $(".dial-2").knob({
        min: '0',
        max: '200'
      });

      $(".dial-3").knob({
        min: '0',
        max: '200'
      });

      $(".dial-4").knob({
        min: '0',
        max: '200'
      });

      $({
        animatedVal: 0
      }).animate({
        animatedVal: 200
      }, {
        duration: 2000,
        easing: "swing",
        step: function () {
          $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
        }
      });

      $({
        animatedVal: 0
      }).animate({
        animatedVal: 200
      }, {
        duration: 2000,
        easing: "swing",
        step: function () {
          $(".dial-2").val(Math.ceil(this.animatedVal)).trigger("change");
        }
      });

      $({
        animatedVal: 0
      }).animate({
        animatedVal: 200
      }, {
        duration: 2000,
        easing: "swing",
        step: function () {
          $(".dial-3").val(Math.ceil(this.animatedVal)).trigger("change");
        }
      });

      $({
        animatedVal: 0
      }).animate({
        animatedVal: 200
      }, {
        duration: 2000,
        easing: "swing",
        step: function () {
          $(".dial-4").val(Math.ceil(this.animatedVal)).trigger("change");
        }
      });

      show = false;
    }
  });

  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    items: 1,
    URLhashListener: true,
    startPosition: 'URLHash',
    dotsContainer: '.date-day__container',
    mouseDrag: false
  });

  $('.companies-carousel').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.battle-slider').slick({
    dots: true
  });

  $('.reviews-slider').slick({
    dots: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '5px',
          slidesToShow: 1
        }
      }
    ]
  });
});