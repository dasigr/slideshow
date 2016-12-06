/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, window, document) {

  'use strict';
  
  // Initialize slideshows.
  var $slideshows = $('.slideshow');
  var $slideImages = $($slideshows[0]).find('img');
  var slideLength = $slideshows.length;
  var imageLength = $slideImages.length;
  
  $slideshows.each(function(index) {
    $(this).cycle({
      speed: 1000,
      manualSpeed: 1000,
      paused: true
    });
  });
  
  // Run random slideshow.
  function runSlideshow(slide, image) {
    $($slideshows[slide]).cycle('goto', image);
  }
  
  // Run the slideshow if current slide is not the same as the previous slide
  // and that the current image is not the same as the previous image.
  var currentSlideshow = [0,1,2,3];
  var previousSlideshow = [0,1,2,3];
  var previousSlide = 0;
  
  var interval = self.setInterval(function() {
    var currentSlide = Math.floor((Math.random() * slideLength));
    var currentImage = Math.floor((Math.random() * imageLength));
    
    // Save current image.
    currentSlideshow[currentSlide] = currentImage;
    
    if (currentSlide != previousSlide) {
      // If not same slideshow.
      // console.log('Not same slide');
      if (currentImage != previousSlideshow[currentSlide]) {
        // If not same image of this slideshow.
        runSlideshow(currentSlide, currentImage);
        
        // Copy current slideshow to previous slideshow.
        previousSlide = currentSlide;
        previousSlideshow[currentSlide] = currentImage;
      } else {
        // console.log('But same image');
      }
    } else {
      // console.log('Same slide');
    }
  }, 3000);

})(jQuery, this, this.document);
