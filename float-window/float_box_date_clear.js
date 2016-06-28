/**
 * Box flutuante para ser exibido com temporizador
 * Baseado em segundos onde 60 equivale a 60 segundos
 * A Formula usada em additioalTime equivale a 30 dias baseados em segundos
 */
jQuery(document).ready(function(){
    
    var currentDate = parseInt(new Date().getTime()/1000);

    jQuery(".close-window").click( function() {
        jQuery(".box-float").hide();
        jQuery(".effects-shadow").hide();
        localStorage.box_float = "show";
        
        // referente a 30 dias baseado em segundos
        var additionalTime = 60*60*24*30;
        
        // save the future date
        localStorage.setItem('modal_time', currentDate + additionalTime);
    });
    
    jQuery(".effects-shadow").click( function() {
        jQuery(".effects-shadow").hide();
        jQuery(".box-float").hide();
    });
    
    var dateSave = localStorage.getItem('modal_time');
    if(currentDate > dateSave){
        localStorage.removeItem('modal_time');
        localStorage.removeItem('box_float');
    }
    
    if (localStorage.box_float !== 'show') {
        jQuery(".box-float").show();
        jQuery(".effects-shadow").show();
    }
    
});
