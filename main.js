// var updateMasonry = function(){
//     $('.tab-pane.active').masonry({
//       itemSelector: '.cards',
//       columnWidth: '.cards'
//     });
//   }
  
//   $('a[data-toggle="tab"]').on('shown.bs.tab', updateMasonry);
//   $(window).on('resize load', updateMasonry);
(function( $ ) {

    var $container = $('.masonry-container');
    $container.imagesLoaded( function () {
      $container.masonry({
        columnWidth: '.cards',
        itemSelector: '.cards'
      });
    });
    
    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-bs-toggle=tab]').each(function () {
      var $this = $(this);
  
      $this.on('shown.bs.tab', function () {
      
        $container.imagesLoaded( function () {
          $container.masonry({
            columnWidth: '.cards',
            itemSelector: '.cards'
          });
        });
  
      }); //end shown
    });  //end each
    
})(jQuery);



  


/* ---------------------------------------------- /*
 * Scroll top
/* ---------------------------------------------- */
jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });
});