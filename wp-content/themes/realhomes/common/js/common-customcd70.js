(function ($) {
    "use strict";

    /*-----------------------------------------------------------------------------------*/
    /*	Owl Carousel
    /*-----------------------------------------------------------------------------------*/
    if (jQuery().owlCarousel) {
        $('.brands-owl-carousel').owlCarousel({
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
            loop: true,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true,
            margin: 0,
            responsive:{
                0:{
                    items: 1
                },
                480:{
                    items: 2
                },
                768:{
                    items: 3
                },
                992:{
                    items: 4
                },
                1199:{
                    items: 5
                }
            }
        });
    }

    /*-----------------------------------------------------------------------------------*/
    /*	VenoBox - Just another responsive jQuery lightbox plugin.
     /*-----------------------------------------------------------------------------------*/
    if (jQuery().venobox) {
        $('.inspiry-lightbox-item, .venobox').venobox({
           // autoplay : true,
            numeratio: true,
            numerationPosition: 'bottom',
            titlePosition: 'bottom'
        });
    }

})(jQuery);
