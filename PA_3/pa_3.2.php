<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>线上资源现状</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pl_2.2.js"></script>

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
        <a href="" class="breadNav-link">购置图书</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">用户对图书的偏好</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <!--下拉选择区-->
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            用户的图书偏好
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多购置图书信息:</div>
            <a href="pa_3.1.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>图书资源现况</div>
            </a>
            <a href="pa_3.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>数字资源情况</div>
            </a>
            <a href="pa_3.4.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>业务情况</div>
            </a>
        </div>

        <!--缩略图表-->
        <div class="fl small-chart-box">
            <div class="small-chart fl" onclick="choose_chart(4)">
                <div class="small-chart-title">出版年份与借阅率关系</div>
                <div id="small-4" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(5)">
                <div class="small-chart-title">价格与借阅率关系</div>
                <div id="small-5" class="small-chart-body"></div>
            </div>
            <div class="small-chart fl" onclick="choose_chart(6)">
                <div class="small-chart-title">类别与借阅率关系</div>
                <div id="small-6" class="small-chart-body"></div>
            </div>
        </div>

        <!--详细图表-->
        <div id="big-chart-4" class="big-chart fl">
            <div class="big-chart-title">出版年份与借阅率关系</div>
            <div id="big-4" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-5" class="big-chart fl">
            <div class="big-chart-title">价格与借阅率关系</div>
            <div id="big-5" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
        <div id="big-chart-6" class="big-chart fl">
            <div class="big-chart-title">类别与借阅率关系</div>
            <div id="big-6" class="big-chart-body" style="width: 952px;height: 500px;"></div>
        </div>
    </div>

</div>
</body>
</html>