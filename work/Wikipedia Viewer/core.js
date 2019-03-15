$(function () {
    $('.icon-search').click(function () {
        $('.icon-search').animate({width: '250px'});
        $('.bar').hide();
        $('.form-search').removeAttr('hidden').focus();
        $('.rs-btn').removeAttr('hidden');
    })
    $('.rs-btn').click(function (e) {
        e.stopPropagation();
        $('.form-search').val('').attr({'hidden': 'hidden'});
        $('.rs-btn').attr({'hidden': 'hidden'});
        $('.icon-search').animate({width: '36px'}, function() {
            $('.bar').fadeIn();
        });
    });

    $('#search-text').keypress(function (e) {
        if (e.keyCode == 13) {
            // Search
            var str = $(this).val();
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
                    + str + '&callback=JSON_CALLBACK',
                type: 'GET',
                dataType: 'jsonp',
                success: function (data) {
                    pages = data['query']['pages'];
                    console.log(pages);
                    $('#message').hide();
                    $('main')
                        // .css('height', '100%')
                        .animate({'height': '100%'}, 1000, 'swing');
                }
            })
            return false;
        }
    });
});

// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=buffer&callback=JSON_CALLBACK