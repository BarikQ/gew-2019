$(document).ready(function () {
  const modal = document.querySelector('#modal');

  $('select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  $(".popup-menu").click(function () {
    $(".modal-menu").fadeToggle('fast');
  });
  $(".modal-menu").bind("click", function (e) {
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close' ||
        $(e.target).attr('class') === 'modal-link') {
      $(".modal").fadeOut('fast');
    }
  });

  $('.callback-form').on('submit', (e) => {
    e.preventDefault();
    $(e.target).parent().html(
      `
        <h4>Спасибо за Ваш вопрос!</h4>
        </p>В ближайшее время мы<br> свяжемся с Вами</p>
        <img src="./src/images/submit.png" alt="">
      `);
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
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.battle-slider').slick({
    dots: true
  });
});
