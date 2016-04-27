var isDevice = {
    android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    ios: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iphone: function() {
        return navigator.userAgent.match(/iPhone/i);
    },
    ipod: function() {
        return navigator.userAgent.match(/iPod/i);
    },
    ipad: function() {
        return navigator.userAgent.match(/iPad/i);
    },
    tablet: function() {
        return navigator.userAgent.match(/iPad|Android|IEMobile/i);
    },
    windowsphone: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    device: function() {
        return (isDevice.android() || isDevice.ios() || isDevice.iphone() || isDevice.ipad() || isDevice.ipod() || isDevice.windowsphone());
    }
};
    
if(isDevice.tablet()) {
    jQuery('body').addClass('_istablet'); // insere classe tablet no elemento body para fins de estilo especifico
    jQuery('#cmdAllDep').removeClass('block-alldep').addClass('tablet-block-alldep'); // desliga o :hover dos tablets do alldep e permite o uso do hasclick
    jQuery('.list-category section .subnivel').hide(); // desliga o :hover dos tablets no menu de categoria
    
    jQuery(".wrapper-category .alldep" ).click(function() {
      jQuery(this).toggleClass("has-click"); // habilita o click apos cancelamento do :hover [bloco acima]
    });
}

if(isDevice.device()) {
    jQuery('body').addClass('_isdevice');
    jQuery('.related-products ul').removeClass('showcase-carousel').addClass('slider-for-devices'); // necessario para desligar o slick e inserir slider for devies
    jQuery('.produto-imagem-miniaturas .jcarousel-skin-tango').removeClass('jcarousel-skin-tango').addClass('slider-for-devices'); // necessario para desligar o jcarousel e inserir slider for devies
}
