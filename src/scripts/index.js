$(document).ready(function () {
  const modal = document.querySelector('#modal')

  $(".popup-menu").click(function () {
    $(".modal").fadeToggle('fast');
  });
  $(".modal").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container") {
      $(".modal").fadeOut('fast');
    }
  });

  let show = true;
  let countbox = ".numbers-container";

  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

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
    autoplay: true,
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