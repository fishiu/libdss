<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户行为偏好</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>


    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pl_1.3.js"></script>
</head>

<body>
<!--页眉，调用header模板-->
<?php include "../templates/header.html" ?>
<!--选择导航栏的高亮项目，编号对应-->
<script>setActiveNav(1);</script>

<div class="main">
    <!--面包屑导航-->
    <div class="breadNav">
        <a href="../index/learn.php" class="breadNav-link">了解现况</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">用户</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">用户行为偏好</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <!--下拉选择区-->
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            用户行为偏好
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多用户情况:</div>
            <a href="pl_1.1.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户自然属性</div>
            </a>
            <a href="pl_1.2.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户社会属性</div>
            </a>
            <a href="pl_1.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>用户行为描述</div>
            </a>
        </div>
        <div class="text-content"><i class="icon-happy"></i> 待建模开发...</div>
    </div>

</div>
</body>
</html>
