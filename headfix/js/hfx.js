jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        var topScroll = Number(jQuery(window).scrollTop());

        if (topScroll >= 550) {
            if (!jQuery('.top-fx').hasClass('show-bar')) {
                jQuery('.top-fx').addClass('show-bar');
            }
        } else {
            if (jQuery('.top-fx').hasClass('show-bar')) {
                jQuery('.top-fx').removeClass('show-bar');
            }
        }
    });
    
});
