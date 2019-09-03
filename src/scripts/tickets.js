$(window).ready(function() {
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

  if ($(window).width() < 1124) {
    $('.ticket-title').each(function() {
      let len = $(this).html().length;

      let str = $(this).html().slice(0, len);
      let strMas = str.split(' ');
      
      $(this).html(`${strMas[0]} ${strMas[1]}<br />${strMas[2]}`);
      $(this).css('margin', 0);
    });
  }
});