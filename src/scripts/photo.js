(function($) {
  let width = $( window ).width();
  let height = $( window ).height(); 
  
  if (width < 1000) {
    $('.hotel-link').attr({'data-height': Math.floor(height * 0.7), 'data-width': Math.floor(width * 1)});
  } if(width < 576) {
    $('.hotel-link').attr({'data-height': Math.floor(height * 0.4), 'data-width': Math.floor(width * 1)});
  } else {
    $('.hotel-link').attr({'data-height': Math.floor(height * 0.9), 'data-width': Math.floor(width * 0.9)});
  }
  

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('.hotel-slider').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('.hotel-image').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.2,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));