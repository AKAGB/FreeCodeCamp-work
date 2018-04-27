$(function () {
    $('.navbar-nav li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        if (parseInt(window.outerWidth) < 800) {
            $('.navbar-toggle').click();
        }
    });
});
