$(function () {
    $('.icon-search').click(function () {
        $('.icon-search').animate({width: '250px'});
        $('.bar').hide();
        $('.form-search').removeAttr('hidden').focus();
        $('.rs-btn').removeAttr('hidden');
    });

    $('.rs-btn').click(function (e) {
        e.stopPropagation();
        $('.form-search').val('').attr({'hidden': 'hidden'});
        $('.rs-btn').attr({'hidden': 'hidden'});
        $('.icon-search').animate({width: '36px'}, function() {
            $('.bar').fadeIn();
        });
    });
});