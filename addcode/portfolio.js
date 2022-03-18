$(function() {


    let pageWidth = 0;
    let pageHeight = 0;

    function getWindowSize() {
        pageWidth = $(window).width();
        pageHeight = $(window).height();
    }

    getWindowSize();

    $(window).resize(function() {
        getWindowSize();
    })
    

    $(".heightMax").css({
        height: pageHeight
    })

    if (pageWidth > 768) {
        $(".heightMax-pc").css({
            height: pageHeight
        })
    }else {
        $(".heightMax-sp").css({
            height: pageHeight
        })
    }

    function reverse() {
        if (pageWidth > 768) {

            $("#reverse1 .content-right").prependTo("#reverse1")
            $("#reverse2 .content-right").prependTo("#reverse2")

        }
    }

    reverse();

    $(window).resize(function() {

        reverse();
        
    })

})