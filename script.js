//counter

        // Set the date we're counting down to
        var countDownDate = new Date("Sep 10, 2022 16:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);


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
