//Designed Scroller with smooth moves
//By _pumpke :D

//CREDIT ME IF YOU WANNA USE THIS!!!

console.log("Made By _pumpke :P");

// Test Movement Commands
/* $('html, body').animate({scrollTop: $("#slide-2").offset().top}, 1000);
$('html, body').animate({scrollTop: $("#slide-3").offset().top}, 1000);
$('html, body').animate({scrollTop: $("#slide-1").offset().top}, 1000); */

//Disabling Scrollbar
var html = jQuery('html');
html.css('overflow', 'hidden');
  
  
  //If you want to unlock the Scrolling
/*   var html = jQuery('html');
  var scrollPosition = html.data('scroll-position');
  html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1]) */

//Slide Variables
var currentslide = 1;
var isChangingSlide = false;

//Smooth Scroll Animation
$(window).bind('mousewheel DOMMouseScroll', function(event){

    if (isChangingSlide != true) {
        $("#main").bind("wheel", function() {
            return false;
        });

        isChangingSlide = true;

        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

            console.log("Scrollin' up!");
    
            if (currentslide != 1) {
                currentslide = currentslide - 1;
            }
            else {
                currentslide = 3;
            }
            console.log("Current Slide: " + currentslide);
    
            $('html, body').animate({scrollTop: $("#slide-" + currentslide).offset().top}, 1000, function(){
                $("#main").unbind("wheel");
                isChangingSlide = false;
            });
        }
        else {
            console.log("Scrollin' down!");
    
            if (currentslide != 3) {
                currentslide = currentslide + 1;
            }
            else {
                currentslide = 1;
            }
            console.log("Current Slide: " + currentslide);
    
            $('html, body').animate({scrollTop: $("#slide-" + currentslide).offset().top}, 1000, function(){
                $("#main").unbind("wheel");
                isChangingSlide = false;
            });
        }
    }
});