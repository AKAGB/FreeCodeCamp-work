$(function () {
    getQuote();
    $('.new-quote').click(getQuote);

    function getRandomColor () {
        // 返回非白色颜色
        return '#' + ('00000'+Math.random()*0xffffff<<0).toString(16).substr(-6);
    }

    function getReverseColor(color) {
        var re = /^#(\w{2})(\w{2})(\w{2})$/;
        var rgb = re.exec(color).slice(1, 4);
        rgb = rgb.map(function (ele) {
            return parseInt(ele, 16);
        });
        if (rgb[0] > 100 && rgb[0] < 150 &&
            rgb[1] > 100 && rgb[1] < 150 &&
            rgb[2] > 100 && rgb[2] < 150)
            return '#ffffff';
        return '#' + rgb.map(function (e) {return (255-e).toString(16);})
                        .reduce(function(a, b) {return a+b;});
    }

    function getQuote () {
        $.getJSON('https://v1.hitokoto.cn/?c=a')
         .done(function (data) {
            var ranColor = getRandomColor(),
                revColor = getReverseColor(ranColor);
            $('body').animate({
                backgroundColor: ranColor
            }, 2000);
            $('footer').animate({
                color: revColor
            }, 2000);
            $('.new-quote').animate({
                backgroundColor: ranColor,
                color: revColor
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
