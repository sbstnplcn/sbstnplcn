$(document).ready(function() {
    $('.modal').modal();

    /* Smooth Scroll*/
    $('a[href^="#"]:not([data-toggle=collapse])').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
        return false;
    });
});
