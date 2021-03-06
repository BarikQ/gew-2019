$(document).ready(function() {
  const modal = document.querySelector("#modal");

  $("select").selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  $(".popup-menu").click(function() {
    $(".modal-menu").fadeToggle("fast");
  });
  $(".modal-menu").bind("click", function(e) {
    if (
      $(e.target).attr("class") === "modal-container" ||
      $(e.target).attr("class") === "close" ||
      $(e.target).attr("class") === "modal-link"
    ) {
      $(".modal").fadeOut("fast");
    }
  });

  $(window).on("scroll", () => {
    if (window.pageYOffset >= 100) {
      $(".navbar")[0].classList.add("sticky");
    } else {
      $(".navbar")[0].classList.remove("sticky");
    }
  });

  $(".open-photos").click(function() {
    $(".hotel-slider").slick({
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
    $(".modal-hotel").fadeToggle("fast");
  });

  $(".modal-hotel").bind("click", function(e) {
    e.preventDefault();
    if (
      $(e.target).attr("class") === "modal-container" ||
      $(e.target).attr("id") === "close-hotel"
    ) {
      $(".modal-hotel").fadeOut("fast");
      $(".hotel-slider").slick("unslick");
    }
  });

  $(".speaker")
    .not(".mentor")
    .on("click", function(e) {
      let bg = $(this)
        .children(".speaker__content-wrap")
        .children(".speaker__image")
        .css("background-image");
      let name = $(this)
        .children(".speaker__content-wrap")
        .children(".speaker__content")
        .children(".speaker__content__inner")
        .children(".speaker-name")
        .html();
      let position = $(this)
        .children(".speaker__content-wrap")
        .children(".speaker__content")
        .children(".speaker__content__inner")
        .children(".speaker-review")
        .html();
      let review = $(this)
        .children(".speaker__content-wrap")
        .children(".speaker__content")
        .children(".speaker__content__inner")
        .children(".speaker-text__inner")
        .html();

      bg = bg
        .replace("url(", "")
        .replace(")", "")
        .replace(/\"/gi, "");

      $(".speaker-image").attr("src", bg);
      $(".speaker-modal-name").html(name);
      $(".speaker-position").html(position);
      $(".speaker-modal-text__inner").html(review);
      $(".modal-speaker").fadeToggle("fast");
    });

  $(".modal-speaker").bind("click", function(e) {
    e.preventDefault();
    if (
      $(e.target).attr("class") === "modal-container" ||
      $(e.target).attr("class") === "close"
    ) {
      $(".modal-speaker").fadeOut("fast");
    }
  });

  $(".speakers-button").on("click", () => {
    let trigger = false;
    $(".fixedList").each(function() {
      if (this.classList.contains("hidden")) {
        this.classList.remove("hidden");
        trigger = true;
        return false;
      } else trigger = false;
    });
    if (!trigger) $(".speakers-button")[0].classList.add("hidden");
  });

  $(".callback-form").on("submit", e => {
    e.preventDefault();
    $(".footer-right__container").html(
      `
        <h4>Спасибо за Ваш вопрос!</h4>
        </p>В ближайшее время мы<br> свяжемся с Вами</p>
        <img src="./src/images/submit.png" alt="">
      `
    );
  });

  let show = true;
  let countbox = ".numbers-container";

  $(window).on("scroll load resize", function() {
    let width = $(window).width();
    let height = $(window).height();
    let circleSize = null;

    if (width <= 576) {
      circleSize = 160;
    } else circleSize = 223;

    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();

    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".dial").css("opacity", "1");
      $(".dial").css("display", "unset");

      $(document).ready(function() {
        $(".benefits__number").spincrement({
          thousandSeparator: "",
          duration: 2600
        });
      });

      $(".dial-1").knob({
        min: "0",
        max: "200",
        height: circleSize,
        width: circleSize
      });

      $(".dial-2").knob({
        min: "0",
        max: "200",
        height: circleSize,
        width: circleSize
      });

      $(".dial-3").knob({
        min: "0",
        max: "200",
        height: circleSize,
        width: circleSize
      });

      $(".dial-4").knob({
        min: "0",
        max: "200",
        height: circleSize,
        width: circleSize
      });

      $({
        animatedVal: 0
      }).animate(
        {
          animatedVal: 200
        },
        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $(".dial")
              .val(Math.ceil(this.animatedVal))
              .trigger("change");
          }
        }
      );

      $({
        animatedVal: 0
      }).animate(
        {
          animatedVal: 200
        },
        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $(".dial-2")
              .val(Math.ceil(this.animatedVal))
              .trigger("change");
          }
        }
      );

      $({
        animatedVal: 0
      }).animate(
        {
          animatedVal: 200
        },
        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $(".dial-3")
              .val(Math.ceil(this.animatedVal))
              .trigger("change");
          }
        }
      );

      $({
        animatedVal: 0
      }).animate(
        {
          animatedVal: 200
        },
        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $(".dial-4")
              .val(Math.ceil(this.animatedVal))
              .trigger("change");
          }
        }
      );

      show = false;
    }
  });

  $(".owl-carousel").owlCarousel({
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
    startPosition: "URLHash",
    dotsContainer: ".date-day__container",
    mouseDrag: false,
    navText: [
      "<img src='./src/images/left-arrow.png'>",
      "<img src='./src/images/right-arrow.png'>"
    ]
  });

  $(".companies-carousel").slick({
    infinite: true,
    lazyLoad: "ondemand",
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

  $(".battle-slider").slick({
    dots: true,
    arrows: false
  });

  $(".reviews-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerPadding: "20%",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1160,
        settings: {
          centerPadding: "15%",
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

  $(".program-slider").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: `<button class="program-arrow program-arrow__prev slick-prev slick-arrow"></button>`,
    nextArrow: `<button class="program-arrow program-arrow__next slick-next slick-arrow"></button>`,
    responsive: [
      {
        breakpoint: 1531,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          variableWidth: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("#gallery-line-video").slick({
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 3,
    prevArrow: `<button type="button" role="presentation" class="owl-prev companies-arrow companies-prev"><img src="./src/images/left-arrow-bl.png"></button>`,
    nextArrow: `<button type="button" role="presentation" class="owl-next companies-arrow companies-next"><img src="./src/images/right-arrow-bl.png"></button>`,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $(function() {
    $(".lazy").Lazy();
  });

  function Triangles() {
    const cards = document.querySelectorAll(".for-card");
    const triangles = document.querySelectorAll(".triangle-with-shadow");

    cards.forEach((elem, index) => {
      const left = elem.offsetLeft + Math.floor(elem.offsetWidth / 2);

      triangles[index].style.left = `${left}px`;
    });
  }

  function programSlider() {
    if (window.innerWidth < 580) {
      $("#program-slider").slick("unslick");
    }
  }

  function changeRadio() {
    if (window.innerWidth < 400) {
      console.log("da");
    }
  }

  $(".card-radio").on("change", function(e) {
    e.preventDefault();
    const current = $(this);
    const current2 = this;

    $(".card-radio").each(function() {
      let currentCard = this.id;
      currentCard += "-text";

      if (this.id !== current2.id) $(this).prop("checked", false);

      if ($(this).prop("checked")) {
        $(`.${currentCard}`).each(function() {
          $(this).addClass("active-text");
        });
      } else {
        $(`.${currentCard}`).each(function() {
          $(this).removeClass("active-text");
        });
      }
    });
  });

  $(".card-events-radio").on("change", function(e) {
    e.preventDefault();
    const current = $(this);
    const current2 = this;

    $(".card-events-radio").each(function() {
      let currentCard = this.id;
      currentCard += "-text";

      if (this.id !== current2.id) $(this).prop("checked", false);

      if ($(this).prop("checked")) {
        $(`.${currentCard}`).each(function() {
          $(this).addClass("active-text");
        });
      } else {
        $(`.${currentCard}`).each(function() {
          $(this).removeClass("active-text");
        });
      }
    });
  });

  Triangles();
  programSlider();
  window.addEventListener("resize", Triangles);
  window.addEventListener("resize", programSlider);
});
