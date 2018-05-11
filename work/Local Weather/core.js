$(function () {
    
    var _todayWea = {
            city: '城市',
            date_y: '日期',
            temperature: '温度',
            weather: '天气',
            wind: '风向',
            dressing_index: '穿衣指数',
            travel_index: '旅游指数',
            wash_index: '洗车指数',
            exercise_index: '锻炼指数'
        },
        _othWea = {
            date: '日期',
            temperature: '温度',
            weather: '天气',
            wind: '风向'
        };


        

    function setToday(data) {
        var today = $('#today-weather').children(),
            i = 0;
        for (var each in _todayWea) {
            today.eq(i).html(_todayWea[each] + '：' + data[each]);
            i++;
        }
    }

    function setOthers(data) {
        var others = $('#others').children();
        for (var i = 0; i < data.length; i++) {
            var j = 0;
            for (var each in _othWea) {
                if (j !== 0) {
                    others.eq(i).children().eq(j).html(_othWea[each]+'：'+data[i][each]);
                } else {
                    others.eq(i).children().eq(j).html(_othWea[each]+'：' + 
                            data[i][each].slice(0, 4) + '年' +
                            data[i][each].slice(4, 6) + '月' + 
                            data[i][each].slice(6) + '日');
                }
                j++;
            }
        }
    }
    
    $.ajax({
        type: 'get',
        url: 'http://v.juhe.cn/weather/index',
        dataType: 'jsonp',
        data: {
            cityname: '广州',
            dtype: 'json',
            format: 2,
            key: 'f499e2328f33ed80e9c794937498017b'
        },
        jsonp: 'callback',
        jsonCallback: 'jsonhandle',
        success: function (data) {
            setToday(data.result.today);
            setOthers(data.result.future);
        }
    });
});
