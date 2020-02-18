<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户线上行为偏好</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pl_2.3.js"></script>

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
        <a href="" class="breadNav-link">调整线上资源</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">用户线上行为偏好</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <!--下拉选择区-->
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            线上行为偏好
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多线上资源信息:</div>
            <a href="pa_2.1.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>线上资源现况</div>
            </a>
            <a href="pa_2.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户线上资源偏好</div>
            </a>
            <a href="pa_2.4.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>纸质文献现状</div>
            </a>
        </div>

        <div class="text-content"><i class="icon-happy"></i> 用户线上行为相关数据缺乏...</div>
    </div>

</div>
</body>
</html>