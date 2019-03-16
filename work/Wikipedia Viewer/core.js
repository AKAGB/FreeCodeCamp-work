$(function () {
    $('.icon-search').click(function () {
        $('.icon-search').animate({width: '250px'});
        $('.bar').hide();
        $('.form-search').removeAttr('hidden').focus();
        $('.rs-btn').removeAttr('hidden');
    })
    $('.rs-btn').click(function (e) {
        e.stopPropagation();
        var mainH = $('.labels').height() * 2 + $('.icon-search');
        $('.form-search').val('').attr({'hidden': 'hidden'});
        $('.rs-btn').attr({'hidden': 'hidden'});
        $('.icon-search').animate({width: '36px'}, function() {
            $('.bar').fadeIn();
        });
        $('#main').css({'height': 'calc(var(--textH) * 2 + var(--iconsize))'});
        $('.msg-container').html('');
        $('#message').fadeIn(500);
    });

    $('#search-text').keypress(function (e) {
        if (e.keyCode == 13) {
            // Search
            var str = $(this).val();
            $('#message').fadeOut(500);
            $('main').css({'height': '100%'});
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
                    + str + '&callback=JSON_CALLBACK',
                type: 'GET',
                dataType: 'jsonp',
                success: function (data) {
                    var pages = data['query']['pages'];
                    // console.log(pages);
                    var container = $('.msg-container');
                    for (var key in pages) {
                        container.append('<a class="msg-link" href="https://en.wikipedia.org/?curid='
                            + key + '" target="_blank"><li class="panel center-block display-data"><h3>'
                            + pages[key]['title'] + '</h3><p>' + pages[key]['extract'] + '</p></li></a>');
                        
                    }
                    $('.msg-container').css({'transform': 'translateY(0px)', 'opacity': '1'});
                }
            })
            return false;
        }
    });
});

// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=buffer&callback=JSON_CALLBACK