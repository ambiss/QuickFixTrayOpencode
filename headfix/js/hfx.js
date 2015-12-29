jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        var topScroll = Number(jQuery(window).scrollTop());

        if (topScroll >= 550) {
            if (!jQuery('.header.top-fx').hasClass('show-bar')) {
                jQuery('.header.top-fx').addClass('show-bar');
            }
        } else {
            if (jQuery('.header.top-fx').hasClass('show-bar')) {
                jQuery('.header.top-fx').removeClass('show-bar');
            }
        }
    });
    
});
