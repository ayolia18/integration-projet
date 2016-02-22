/**
 * Created by Ayolia18 on 21/02/2016.
 */

    $('.loopCarousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:800,
        responsive:{
            768:{
                items:3
            },
            992:{
                items:6
            }
        }
    });

//cards
$(window).load(function() {
    $('.post-module').hover(function() {
        $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
});