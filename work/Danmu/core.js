$(function () {
    var input = $('.dm_string');
    var fontColor = ['skyblue', '#aaa', '#faa'];
    var cnt = 0;
    $('.dm_send').click(function () {
        if (input.val() != '') {
            var newEle = $('<div class="dm-text"></div>');
            newEle.html(input.val());
            input.val('');
            $('.show').append(newEle);
            newEle.css('top', Math.random()*90 + '%')
                    .css('color', fontColor[cnt%3])
                    .animate({}, function () {
                        newEle.css('transform', 'translate(-'+
                                        2 * window.outerWidth +'px)');
                    });
            cnt++;
        }
    })
});
