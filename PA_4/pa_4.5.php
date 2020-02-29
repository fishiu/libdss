<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>活动预测</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts-4.6.0.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pa_4.5.js"></script>

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
        <a href="" class="breadNav-link">活动预测</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <!--下拉选择区-->
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            活动预测
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多购置图书信息:</div>
            <a href="pa_4.1.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>活动情况</div>
            </a>
            <a href="pa_4.2.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户情况</div>
            </a>
            <a href="pa_4.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>图书情况</div>
            </a>
            <a href="pa_4.4.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户行为偏好</div>
            </a>
        </div>

        <!--缩略图表-->
        <div class="fl small-chart-box">
            <div class="small-chart fl" onclick="choose_chart(1)">
                <div class="small-chart-title">系列活动影响预测</div>
                <div id="small-1" class="small-chart-body"></div>
            </div>
        </div>

        <!--详细图表-->
        <div id="big-chart-1" class="big-chart fl">
            <div class="big-chart-title">系列活动影响预测</div>
            <div id="big-1" class="big-chart-body" style="width: 952px;height: 600px;"></div>
        </div>
    </div>

</div>
</body>
</html>