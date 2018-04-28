$(function () {
    $('.navbar-nav li').click(function () {
        var a = $(this).find('a'),
            h = parseFloat($('.navbar-header').css('height'));
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        console.log(parseInt(window.outerWidth));
        if (parseInt(window.outerWidth) < 800) {
            $('.navbar-toggle').click();
        }
        $('html, body').stop().animate({
            scrollTop: '' + parseFloat($(a.attr('href')).offset().top) - h
        }, 500);
    });

    $('#icon').click(function () {
        $('#rhome').click();
    });
});
