import Vue from "vue";

// 时间戳转年月日
Vue.filter("dateFormat", dataStr => {
    var time = new Date(dataStr);

    function timeAdd0(str) {
        if (str < 10) {
            str = "0" + str;
        }
        return str;
    }
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return (
        y +
        "-" +
        timeAdd0(m) +
        "-" +
        timeAdd0(d)
        // +
        // " " +
        // timeAdd0(h) +
        // ":" +
        // timeAdd0(mm) +
        // ":" +
        // timeAdd0(s)
    );
});

//时间差
Vue.filter("difftime", completeTime => {
    var stime = Date.parse(new Date());
    var etime = Date.parse(new Date(completeTime));
    //两个时间戳相差的毫秒数
    var usedTime = etime - stime;
    var days = -Math.floor(usedTime / (24 * 3600 * 1000));
    var leave1 = usedTime % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    // var time = days + "天" + hours + "时" + minutes + "分";
    return days;
});