// inserir na pasta modules que esta dentroa da pasta js

jQuery(document).ready(function(){

    jQuery(".close-window").click( function() {
        jQuery(".float-window").hide();
        localStorage.float_window = "show";
    });
    
    if (localStorage.float_window !== 'show') {
        jQuery(".float-window").show();
    }
    
});
