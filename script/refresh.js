var item = ["user", "resource", "activity"];

init();

function init() {
    $.ajax("../php/refreshStateInit.php", {
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (data.success === 0) {
                console.log('初始化成功！');
                for (var i = 0; i < 3; i++) {
                    if (data[item[i]+"Time"] !== null) {
                        $("#refresh-back-"+item[i]).html("上次更新：" + formatDateTime(data[item[i]+"Time"]));
                    }
                }
            } else {
                console.log('初始化失败！');
            }
        },
        error: function () {
            console.log('初始化Ajax连接失败！');
        }
    })
}

function refresh(index) {
    var thisItem = item[index - 1];

    var flag;
    $.ajax("../php/refresh" + index + ".php", {
        type: "GET",
        dataType: "json",
        data: {"message": 0},
        beforeSend: function () {
            $("#refresh-back-" + thisItem).html("正在更新……");
        },
        success: function (data) {
            if (data.success === 0) {
                console.log('更新成功！');
                flag = true;
            } else {
                console.log('更新失败！');
                flag = false;
            }
        },
        error: function () {
            console.log('Ajax连接失败！');
            flag = false;
        },
        complete: function () {
            console.log(flag);
            if (flag) {
                $("#refresh-back-" + thisItem).html('<span style= "color: #0084ff">更新成功!</span>');
            } else {
                $("#refresh-back-" + thisItem).html('<span style= "color: #ff0081">更新失败!</span>');
            }
        }
    });
}

function refreshAll() {
    $("#refresh-back-all").html("成功启动所有更新!");
    for (var i = 1; i <= 3; i++) {
        refresh(i);
    }
}

//formatDateTime
function formatDateTime(stamp) {
    stamp *= 1000;
    var dateTime = new Date(stamp)
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}