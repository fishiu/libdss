<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>服务调整</title>
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
<script>setActiveNav(4);</script>

<div class="main">
    <!--主要内容区域-->
    <div class="content clearfix">
        <div class="title">
            <h1><span class="icon-list"></span>服务调整</h1>
        </div>
        <div class="box-container clearfix">
            <!--第一个盒子-->
            <div class="link-box user fl">
                <h2 class="box-title">调整图书分布</h2>
                <ul class="link-list adjust">
                    <li><a class="slide" href="../PA_1/pa_1.1.php"><span class="icon-point-right"></span>图书现况</a></li>
                    <li><a class="slide" href="../PA_1/pa_1.2.php"><span class="icon-point-right"></span>图书相关性</a></li>
                    <li><a class="slide" href="../PA_1/pa_1.3.php"><span class="icon-point-right"></span>用户对图书的偏好</a></li>
                    <li><a class="slide" href="../PA_1/pa_1.4.php"><span class="icon-point-right"></span>用户对空间的偏好</a></li>
                </ul>
            </div>
            <!--第二个盒子-->
            <div class="link-box resource fl">
                <h2 class="box-title">调整线上资源</h2>
                <ul class="link-list adjust">
                    <li><a class="slide" href="../PA_2/pa_2.1.php"><span class="icon-point-right"></span>线上资源现状</a></li>
                    <li><a class="slide" href="../PA_2/pa_2.2.php"><span class="icon-point-right"></span>用户线上行为偏好</a></li>
                    <li><a class="slide" href="../PA_2/pa_2.3.php"><span class="icon-point-right"></span>用户线上资源偏好</a></li>
                    <li><a class="slide" href="../PA_2/pa_2.4.php"><span class="icon-point-right"></span>纸质文献现状</a></li>
                </ul>
            </div>
            <!--第三个盒子-->
            <div class="link-box resource fl">
                <h2 class="box-title">购置图书</h2>
                <ul class="link-list adjust">
                    <li><a class="slide" href="../PA_3/pa_3.1.php"><span class="icon-point-right"></span>图书资源现况</a></li>
                    <li><a class="slide" href="../PA_3/pa_3.2.php"><span class="icon-point-right"></span>用户对图书的偏好</a></li>
                    <li><a class="slide" href="../PA_3/pa_3.3.php"><span class="icon-point-right"></span>数字资源情况</a></li>
                    <li><a class="slide" href="../PA_3/pa_3.4.php"><span class="icon-point-right"></span>业务情况</a></li>
                </ul>
            </div>
            <!--第四个盒子-->
            <div class="link-box resource fl" style="height: 270px;">
                <h2 class="box-title">系列活动调整</h2>
                <ul class="link-list"> <!--adjust-->
                    <li><a class="slide" href="../PA_4/pa_4.1.php"><span class="icon-point-right"></span>活动情况</a></li>
                    <li><a class="slide" href="../PA_4/pa_4.2.php"><span class="icon-point-right"></span>用户情况</a></li>
                    <li><a class="slide" href="../PA_4/pa_4.3.php"><span class="icon-point-right"></span>图书情况</a></li>
                    <li><a class="slide" href="../PA_4/pa_4.4.php"><span class="icon-point-right"></span>用户偏好</a></li>
                    <li><a class="slide" href="../PA_4/pa_4.5.php"><span class="icon-point-right"></span>活动预测</a></li>
                </ul>
            </div>
        </div>
    </div>

</div>
</body>
</html>