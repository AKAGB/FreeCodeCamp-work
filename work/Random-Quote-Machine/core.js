$(function () {
    getQuote();
    $('.new-quote').click(getQuote);

    function getRandomColor () {
        // 返回非白色颜色
        return '#' + ('00000'+Math.random()*0xffffff<<0).toString(16).substr(-6);
    };

    function getQuote () {
        $.getJSON('https://v1.hitokoto.cn/?c=a')
         .done(function (data) {
             var ranColor = getRandomColor();
             $('body').animate({
                 backgroundColor: ranColor
             }, 2000);
             $('.new-quote').animate({
                 backgroundColor: ranColor
             }, 2000);
             $('.quote-author').animate({
                 opacity: 0
             }, 1000, function () {
                 $('.quote').html('<i class="fa fa-quote-left fa-1x"></i>' +
                                    data['hitokoto']);
                 $('.author').html('- ' + data['from']);
             })
             .animate({
                 opacity: 1,
                 color: ranColor
             }, 1000);
         });
    }
});
