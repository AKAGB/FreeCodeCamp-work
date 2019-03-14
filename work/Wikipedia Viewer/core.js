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

// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=buffer&callback=JSON_CALLBACK