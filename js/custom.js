//Smooth Anchor Scroll Start
    $("#scroller").click(function() {
      $('html, body').animate({
          scrollTop: $("#starting").offset().top
      }, 2000);
  });

    
    //Smooth Anchor Scroll End
    //Smoothscroll Start
        $(document).ready(function(){
          if ($.browser.mozilla){
           return; 
          } else { 
              $('html, body').smoothWheel()
            }
          });
    //Smoothscroll End
  
    //Morphist Start
  $("#js-rotating").Morphist({
      // The entrance animation type (In).
      animateIn: "fadeInLeft",
      // The exit animation type (Out). Refer to Animate.css for a list of available animations.
      animateOut: "fadeOutRight",
      // The delay between the changing of each object in milliseconds.
      speed: 6000,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });
    //Morphist End
  
    //Wow.js Start
  new WOW().init();
    //Wow.js End

    //Skillbar Start
jQuery(function () {
  "use strict";
  $(document).ready(function(){
    
    jQuery('.skillbar').each(function() {
      jQuery(this).appear(function() {
        jQuery(this).find('.count-bar').animate({
          width:jQuery(this).attr('data-percent')
        },3000);
        var percent = jQuery(this).attr('data-percent');
        jQuery(this).find('.count').html('<span>' + percent + '</span>');
      });
    }); 
  });
  
}());
  //Skillbar End

//paste this code under the head tag or in a separate js file.
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con, .whitebg").fadeOut("slow");;
  });