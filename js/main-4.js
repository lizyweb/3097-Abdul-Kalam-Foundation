document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
      // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="fa fa-angle-right"></i>',
        '<i class="fa fa-angle-left"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
});
// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 5000
});
    
 
    
});