$(function () {
    var input = $('.dm_string');
    $('.dm-text').ready(function () {
        console.log('Hello');
    });
    $('.dm_send').click(function () {
        var newEle = $('<div class="dm-text"></div>');
        newEle.html(input.val());
        input.val('');
        $('.show').append(newEle);
    })
});
