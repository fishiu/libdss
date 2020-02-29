<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户情况</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pa_4.2.js"></script>

</head>

<body>
<!--页眉，调用header模板-->
<?php include "../templates/header.html" ?>
<!--选择导航栏的高亮项目，编号对应-->
<script>setActiveNav(4);</script>

<div class="main">
    <!--面包屑导航-->
    <div class="breadNav">
        <a href="../index/adjust.php" class="breadNav-link">服务调整</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">系列活动调整</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">用户情况</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <!--下拉选择区-->
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            用户情况
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多购置图书信息:</div>
            <a href="pa_4.1.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>活动情况</div>
            </a>
            <a href="pa_4.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>图书情况</div>
            </a>
            <a href="pa_4.4.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户行为偏好</div>
            </a>
            <a href="pa_4.5.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>活动预测</div>
            </a>
        </div>

        <!--缩略图表-->
        <div class="fl small-chart-box">
            <div class="small-chart fl" onclick="choose_chart(1)">
                <div class="small-chart-title">性别分布</div>
                <div id="small-1" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(2)">
                <div class="small-chart-title">年龄分布</div>
                <div id="small-2" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(3)">
                <div class="small-chart-title">年龄与到馆行为的关系</div>
                <div id="small-3" class="small-chart-body"></div>
            </div>
        </div>

        <!--详细图表-->
        <div id="big-chart-1" class="big-chart fl">
            <div class="big-chart-title">用户自然属性</div>
            <div id="big-1" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-2" class="big-chart fl">
            <div class="big-chart-title">用户自然属性</div>
            <div id="big-2" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-3" class="big-chart fl">
            <div class="big-chart-title">年龄与到馆行为的关系</div>
            <div id="big-3" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>

        <!--缩略图表-->
        <div class="fl">
            <div class="small-chart fl" onclick="choose_chart(4)">
                <div class="small-chart-title">进馆与未进馆用户自然属性分布对比</div>
                <div id="small-4" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(5)">
                <div class="small-chart-title">借阅与未借阅用户自然属性分布对比</div>
                <div id="small-5" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(6)">
                <div class="small-chart-title">逾期归还书籍的用户自然属性特征</div>
                <div id="small-6" class="small-chart-body"></div>
            </div>
        </div>

        <!--详细图表-->
        <div id="big-chart-4" class="big-chart fl">
            <div class="big-chart-title">进馆与未进馆的用户自然属性分布对比</div>
            <div class="big-chart-body" style="width: 952px;height: 500px;">
                <div class="fl" style="width: 446px;height: 500px;" id="big-4-1"></div>
                <div class="fl" style="width: 504px;height: 500px;" id="big-4-2"></div>
            </div>
        </div>
        <div id="big-chart-5" class="big-chart fl">
            <div class="big-chart-title">借阅与未借阅的用户自然属性分布对比</div>
            <div class="big-chart-body" style="width: 952px;height: 500px;">
                <div class="fl" style="width: 446px;height: 500px;" id="big-5-1"></div>
                <div class="fl" style="width: 504px;height: 500px;" id="big-5-2"></div>
            </div>
        </div>
        <div id="big-chart-6" class="big-chart fl">
            <div class="big-chart-title">逾期归还书籍的用户自然属性特征</div>
            <div class="big-chart-body" style="width: 952px;height: 500px;">
                <div class="fl" style="width: 446px;height: 500px;" id="big-6-1"></div>
                <div class="fl" style="width: 504px;height: 500px;" id="big-6-2"></div>
            </div>
        </div>

        <!--缩略图表-->
        <div class="fl small-chart-box">
            <div class="small-chart fl" onclick="choose_chart(7)">
                <div class="small-chart-title">学历分布</div>
                <div id="small-7" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(8)">
                <div class="small-chart-title">距离与到馆时间关系</div>
                <div id="small-8" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(9)">
                <div class="small-chart-title">距离分布</div>
                <div id="small-9" class="small-chart-body"></div>
            </div>
        </div>

        <!--详细图表-->
        <div id="big-chart-1" class="big-chart fl">
            <div class="big-chart-title">学历分布</div>
            <div id="big-7" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-2" class="big-chart fl">
            <div class="big-chart-title">距离与到馆时间关系</div>
            <div id="big-8" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-3" class="big-chart fl">
            <div class="big-chart-title">距离分布</div>
            <div id="big-9" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
    </div>

</div>
</body>
</html>