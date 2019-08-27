$(document).ready(function () {
  const modal = document.querySelector('#modal');

  $('select').selectric();

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

  $('.hotel-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    prevArrow: `<button type="button" role="presentation" class="owl-prev hotel-arrow hotel-prev"><img src="./src/images/left-arrow-bl.png"></button>`,
    nextArrow: `<button type="button" role="presentation" class="owl-next hotel-arrow hotel-next"><img src="./src/images/right-arrow-bl.png"></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".open-photos").click(function () {
    $(".modal-hotel").fadeToggle('fast');
  });

  $(".modal-hotel").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('id') === 'close-hotel') {
      $(".modal-hotel").fadeOut('fast');
      $('.big-image').css('display', 'none');
      $('#close-hotel').css('display', 'unset');
    }
  });

  $('.hotel-image').on('click', (e) => {
    if ($(window).width() < 768) return;
    $('.big-image').css('background', `url('${e.target.src}')`);
    $('.big-image').css('display', 'unset');
    $('#close-hotel').css({'display': 'none'});
  });

  $('#close-image').on('click', (e) => {
    $('.big-image').css('display', 'none');
    $('#close-hotel').css('display', 'unset');
  });

  $('.speaker').not('.mentor').on('click', function(e) {
    let bg = $(this).children('.speaker__content-wrap').children('.speaker__image').css('background-image');
    let name = $(this).children('.speaker__content-wrap').children('.speaker__content').children('.speaker__content__inner').children('.speaker-name').html();
    let position = $(this).children('.speaker__content-wrap').children('.speaker__content').children('.speaker__content__inner').children('.speaker-review').html();

    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");

    $('.speaker-image').attr('src', bg);
    $('.speaker-modal-name').html(name);
    $('.speaker-position').html(position);
    $(".modal-speaker").fadeToggle('fast');
  });

  $(".modal-speaker").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close') {
      $(".modal-speaker").fadeOut('fast');
    }
  });

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
        max: '200',
        height: 223,
        width: 223
      });

      $(".dial-2").knob({
        min: '0',
        max: '200',
        height: 223,
        width: 223
      });

      $(".dial-3").knob({
        min: '0',
        max: '200',
        height: 223,
        width: 223
      });

      $(".dial-4").knob({
        min: '0',
        max: '200',
        height: 223,
        width: 223
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
    mouseDrag: false,
    navText: ["<img src='./src/images/left-arrow.png'>","<img src='./src/images/right-arrow.png'>"]
  });

  $('.companies-carousel').slick({
    infinite: true,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 6,
    pauseOnHover: true,
    prevArrow: `<button type="button" role="presentation" class="owl-prev companies-arrow companies-prev"><img src="./src/images/left-arrow-bl.png"></button>`,
    nextArrow: `<button type="button" role="presentation" class="owl-next companies-arrow companies-next"><img src="./src/images/right-arrow-bl.png"></button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerPadding: '20%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1160,
        settings: {
          centerPadding: '15%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          centerPadding: 0
        }
      }
    ]
  });

  $(function() {
    $('.lazy').Lazy();
  });
});
