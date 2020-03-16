<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图个书服：全国首家图书馆可视化决策支持系统</title>

    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="style/reset.css">
    <link rel="stylesheet" href="style/general.css">
    <link rel="stylesheet" href="style/trans.css">
    <link rel="stylesheet" href="style/index.css">

    <!--Javascript-->
    <script src="script/jquery-3.4.1.js"></script></head>
    <script src="script/chart-display.js"></script>

<body>
<!--导航区-->
<?php include "templates/header.html" ?>
<!--<script>addNavSlide();</script>-->

<div class="main">
    <!--主要内容区域-->
    <div class="content clearfix">
        <div class="welcome-title" style="color: #444444; margin: 10px;letter-spacing: 5px;">欢迎光临图书馆决策支持系统！</div>
        <div class="choose-area">
            <div class="btn-box">
                <div class="choose-title"><span class="icon-happy"></span>请选择…</div>
                <a href="index/learn.php" class="choose-btn">了解现况</a>
                <a href="index/adjust.php" class="choose-btn">服务调整</a>
                <a href="index/refresh.php" class="choose-btn">管理后台</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>