<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户自然属性</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">
    <link rel="stylesheet" href="../style/trans.css">
    <link rel="stylesheet" href="../style/button.css">
    <link rel="stylesheet" href="../style/refresh.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/refresh.js"></script>
</head>

<body>
<!--页眉，调用header模板-->
<?php include "../templates/header.html" ?>
<!--<script>addNavSlide();</script>-->

<div class="main">
    <!--主要内容区域-->
    <div class="content clearfix">
        <div class="title">
            <h1><span class="icon-cog"></span>手动更新图表数据</h1>
        </div>
        <div class="box-container clearfix">
            <div class="refresh-box clearfix">
                <button class="button refresh-button fl" onclick="refresh(1)">更新用户数据</button>
                <div class="refresh-back fl" id="refresh-back-user"></div>
                <a href="../php/pl_1.1.1.php"></a>
            </div>
            <div class="refresh-box clearfix">
                <button class="button refresh-button fl" onclick="refresh(2)">更新资源数据</button>
                <div class="refresh-back fl" id="refresh-back-resource"></div>
            </div>
            <div class="refresh-box clearfix">
                <button class="button refresh-button fl" onclick="refresh(3)">更新业务数据</button>
                <div class="refresh-back fl" id="refresh-back-activity"></div>
            </div>

            <div class="refresh-box clearfix">
                <button class="button button-red refresh-button fl" onclick="refreshAll()">全部更新</button>
                <div class="refresh-back fl" id="refresh-back-all"></div>
            </div>
        </div>
    </div>

</div>
</body>
</html>