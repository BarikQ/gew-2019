$(window).ready(function() {
  
  // let vipHeight = $('#vip-head').height();

  // console.log(vipHeight, $('#standart-head').height());

  // $('#standart-head').css('min-height', vipHeight);
  // $('#business-head').css('min-height', vipHeight);

  // console.log(vipHeight, $('#standart-head').height());

  // $(window).on('resize', (e) => {
  //   vipHeight = $('#vip-head').height();

  //   $('#standart-head').css('height', vipHeight);
  //   $('#business-head').css('height', vipHeight);
  // });

  /////////////////////////////////////////////////////

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