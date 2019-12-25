(function($) {
  let width = $(window).width();
  let height = $(window).height();

  // if (width < 1000) {
  //   $(".photo-link").attr({
  //     "data-height": Math.floor(height * 0.7),
  //     "data-width": Math.floor(width * 1)
  //   });
  // }
  // if (width < 576) {
  //   $(".photo-link").attr({
  //     "data-height": Math.floor(height * 0.4),
  //     "data-width": Math.floor(width * 1)
  //   });
  // } else {
  //   $(".photo-link").attr({
  //     "data-height": Math.floor(height * 0.9),
  //     "data-width": Math.floor(width * 0.9)
  //   });
  // }

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $(".photos-container")
    .find("figure")
    .each(function() {
      var $link = $(this).find("a"),
        item = {
          src: $link.attr("href"),
          w: $link.data("width"),
          h: $link.data("height"),
          title: $link.data("caption")
        };
      container.push(item);
    });

  // Define click event on gallery item
  $(".event-photo").click(function(event) {
    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $(".pswp")[0],
      options = {
        index: $(this)
          .parent("figure")
          .index(),
        bgOpacity: 0.3,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe(
      $pswp,
      PhotoSwipeUI_Default,
      container,
      options
    );
    gallery.init();
  });
})(jQuery);

$(window).ready(function() {
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
});
