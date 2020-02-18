var active_index = 0;

function choose_chart(chart_index) {
    console.log(active_index);
    if (active_index !== chart_index) {
        if (active_index !== 0) {
            $("#big-chart-" + active_index).hide(500);
            $("#small-" + active_index).parent().removeClass("active");
        }
        active_index = chart_index;
        $("#big-chart-" + active_index).fadeIn(1000);
        $("#small-" + active_index).parent().addClass("active");
    } else {
        $("#big-chart-" + active_index).hide(500);
        $("#small-" + active_index).parent().removeClass("active")
        active_index = 0;
    }
}

function setActiveNav(item_index) {
    $(".nav-item:nth-child(" + item_index + ")").addClass("active");
}

function addNavSlide() {
    $(".nav-item").addClass("nav-slide slide");
}

// $(".main-title").click();

function drop () {
    var changeIcon = $(".main-title :nth-child(2)");
    if ($(".main-title").hasClass("main-title-after")) {
        $(".drop-content").css("height",0);
        changeIcon.addClass("icon-plus-circle");
        changeIcon.removeClass("icon-x-circle");
        $(".drop-content").addClass("invisible");
        $(".main-title").removeClass("main-title-after");
    } else {
        var itemNum = $(".drop-content>a").length;
        var rowNum = Math.floor((itemNum-1)/3+1);
        $(".drop-content").css("height",25+49*rowNum);
        changeIcon.addClass("icon-x-circle");
        changeIcon.removeClass("icon-plus-circle");
        $(".drop-content").removeClass("invisible");
        $(".main-title").addClass("main-title-after");
    }
}


// $(".nav-item").hover(showMenu(),hideMenu());
// $(".nav-item").mouseover(showMenu());
// $(".nav-item").mouseout(hideMenu());
//
// function showMenu() {
//     $(".menu-level2-box").css("display","block");
// }
//
// function hideMenu() {
//     $(".menu-level2-box").css("display","none");
// }


