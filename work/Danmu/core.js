$(function () {
    var input = $('.dm_string');
    var fontColor = ['skyblue', '#aaa', '#faa'];
    $('.dm_send').click(function () {
        if (input.val() != '') {
            var newEle = $('<div class="dm-text"></div>');
            newEle.html(input.val());
            input.val('');
            $('.show').append(newEle);
            newEle.css('top', Math.random()*90 + '%')
                    .css('color', fontColor[Math.floor(Math.random()*3)])
                    .animate({}, function () {
                        newEle.css('transform', 'translate(-'+
                                        2 * window.outerWidth +'px)');
                    });
        }
    })
});
