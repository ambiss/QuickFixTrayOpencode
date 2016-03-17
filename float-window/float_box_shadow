jQuery(document).ready(function(){

    jQuery(".close-window").click( function() {
        jQuery(".float-window").hide();
        jQuery(".effects-shadow").hide();
        localStorage.float_window = "show";
    });
    
    jQuery(".effects-shadow").click( function() {
        jQuery(".effects-shadow").hide();
        jQuery(".float-window").hide();
    });
    
    if (localStorage.float_window !== 'show') {
        jQuery(".float-window").show();
        jQuery(".effects-shadow").show();
    }
    
});
