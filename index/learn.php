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

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/chart-display.js"></script>

</head>

<body>
<!--页眉，调用header模板-->
<?php include "../templates/header.html" ?>
<!--选择导航栏的高亮项目，编号对应-->
<script>setActiveNav(1);</script>
<script>setActiveNav(2);</script>
<script>setActiveNav(3);</script>

<div class="main">
    <!--主要内容区域-->
    <div class="content clearfix">
        <div class="title">
            <h1><span class="icon-list"></span>了解图书馆现况</h1>
        </div>
        <div class="box-container clearfix">
            <!--第一个盒子-->
            <div class="link-box user fl">
                <h2 class="box-title">了解用户</h2>
                <ul class="link-list">
                    <li><a class="slide" href="../PL_1/pl_1.1.php"><span class="icon-point-right"></span>自然属性</a></li>
                    <li><a class="slide" href="../PL_1/pl_1.2.php"><span class="icon-point-right"></span>社会属性</a></li>
                    <li><a class="slide" href="../PL_1/pl_1.3.php"><span class="icon-point-right"></span>行为描述</a></li>
                    <li><a class="slide" href="../PL_1/pl_1.4.php"><span class="icon-point-right"></span>行为偏好</a></li>
                </ul>
            </div>
            <!--第二个盒子-->
            <div class="link-box resource fl">
                <h2 class="box-title">了解资源</h2>
                <ul class="link-list">
                    <li><a class="slide" href="../PL_2/pl_2.1.php"><span class="icon-point-right"></span>资源概况</a></li>
                    <li><a class="slide" href="../PL_2/pl_2.2.php"><span class="icon-point-right"></span>文献资源</a></li>
                    <li><a class="slide" href="../PL_2/pl_2.3.php"><span class="icon-point-right"></span>电子资源</a></li>
                </ul>
            </div>
            <!--第三个盒子-->
            <div class="link-box activity fl">
                <h2 class="box-title">了解业务</h2>
                <ul class="link-list">
                    <li><a class="slide" href="../PL_3/pl_3.1.php"><span class="icon-point-right"></span>业务概览</a></li>
                </ul>
            </div>
        </div>
    </div>

</div>
</body>
</html>