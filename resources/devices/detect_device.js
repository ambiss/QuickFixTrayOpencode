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
    jQuery('#cmdAllDep').removeClass('block-alldep').addClass('tablet-block-alldep'); // desliga o :hover dos tablets do alldep e permite o uso do hasclick
    jQuery('.list-category section .subnivel').hide(); // desliga o :hover dos tablets
    
    jQuery(".wrapper-category .alldep" ).click(function() {
      jQuery(this).toggleClass("has-click"); // habilita o click apos cancelamento do :hover [bloco acima]
    });
}

