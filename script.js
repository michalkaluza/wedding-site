// photo swap


$(document).on("scroll", function () {
    const mediaQueries = window.matchMedia('(min-width: 600px) and (max-width: 1023px) and(orientation: landscape)');
    const mediaQueries2 = window.matchMedia('(min-width: 1024px) and (orientation: landscape)');
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
            $boxShadow.addClass("active");
        } else {
            old.style.opacity = "0";
            $boxShadow.removeClass("active");
        }
    }

    else if (mediaQueries2.matches) {
        let startOpacityChange = $youngOffset - windowHeight + 1.2 * youngHeight;
        if (startOpacityChange <= scrollValue) {
            old.style.opacity = "1";
            $boxShadow.addClass("active");
        } else {
            old.style.opacity = "0";
            $boxShadow.removeClass("active");
        }
    }

    else {
        if (startOpacityChange <= scrollValue) {
            old.style.opacity = "1";
            $boxShadow.addClass("active");
        } else {
            old.style.opacity = "0";
            $boxShadow.removeClass("active");
        }
    }
    
    
    
    
})

$(document).on("scroll", function () {
    const windowHeight = window.innerHeight * 0.5;
    let scrollValue2 = $(document).scrollTop();
    const $underlineOffset = $(".underline").offset().top;
    if ($underlineOffset <= scrollValue2 + windowHeight) {
        $(".underline").css("background-size", "100% 1px")}
    })
// $(document).on("scroll", function () {
