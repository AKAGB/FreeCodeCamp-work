$(function () {
    $.getJSON('http://v.juhe.cn/weather/index', {
        cityname: '广州',
        dtype: 'json',
        format: 2,
        key: 'f499e2328f33ed80e9c794937498017b'
    }, function (data) {
        console.log(data);
    });
});
