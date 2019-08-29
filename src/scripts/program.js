window.onload = function() {

  let inputsDate = document.querySelectorAll('.date-radio');
  let inputsEvent = document.querySelectorAll('.event-radio');

  inputsDate.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      
      inputsDate.forEach(element => {
        if (element !== e.target) {
          element.checked = false;
        }
      });
    });
  });

  inputsEvent.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      
      inputsEvent.forEach(element => {
        if (element !== e.target) {
          element.checked = false;
        }
      });
    });
  });
}

$(window).ready(function() {
  $('select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  $(window).on('scroll', () => {
    if (window.pageYOffset >= 100) {
      $('.navbar')[0].classList.add("sticky");
    } else {
      $('.navbar')[0].classList.remove("sticky");
    }
  });

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

  $(".footer-nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});