// photo swap


$(document).on("scroll", function () {
    const mediaQueries = window.matchMedia('(min-width: 600px) and (orientation: landscape)');
    const old = document.getElementById("old");
    const $boxShadow = $(".boxShadowOnOld");
    const windowHeight = window.innerHeight;
    let scrollValue = $(document).scrollTop();
    const $youngOffset = $("#young").offset().top;
    const youngHeight = $("#young").outerHeight();
    let startOpacityChange = $youngOffset - windowHeight + 1 * youngHeight;
    if (mediaQueries.matches) {
        let startOpacityChange = $youngOffset - windowHeight + 0.8 * youngHeight;
        if (startOpacityChange <= scrollValue) {
            old.style.opacity = "1";
        } else {
            old.style.opacity = "0"; 
        }
        if (startOpacityChange = scrollValue) {
            $boxShadow.addClass("active");
            setTimeout(function () { 
                $boxShadow.removeClass("active");
            }, 1300);
        } 
    }

    else {
        if (startOpacityChange <= scrollValue) {
            old.style.opacity = "1";
        } else {
            old.style.opacity = "0"; 
        }

        if (startOpacityChange = scrollValue) {
            $boxShadow.addClass("active");
            setTimeout(function () { 
                $boxShadow.removeClass("active");
            }, 1300);
        } 
    }
    
    
    
    
})

// $(document).on("scroll", function () {
