<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>资源概况</title>
    <!--liveReload插件-->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

    <!--样式表-->
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/general.css">

    <!--Javascript-->
    <script src="../script/jquery-3.4.1.js"></script>
    <script src="../script/echarts.js"></script>
    <script src="../script/chart-display.js"></script>
    <script src="../script/pl_1.1.js"></script>

</head>

<body>
<!--页眉，调用header模板-->
<?php include "../templates/header.html" ?>
<!--选择导航栏的高亮项目，编号对应-->
<script>setActiveNav(2);</script>

<div class="main">
    <!--面包屑导航-->
    <div class="breadNav">
        <a href="../index/learn.php" class="breadNav-link">了解现况</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">资源</a>
        <span class="breadNav-divide">&gt;&gt;</span>
        <a href="" class="breadNav-link">资源概况</a>
    </div>

    <!--主要内容区域-->
    <div class="content clearfix">
        <div class="main-title" onclick="drop()">
            <span class="icon-pie-chart"></span>
            资源概况
            <i class="icon-plus-circle fr"></i>
        </div>
        <div class="drop-content invisible">
            <div class="intro">了解更多用户情况:</div>
            <a href="pl_2.2.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>文献资源</div>
            </a>
            <a href="pl_2.3.php" class="fl">
                <div class="drop-item"><span class="icon-pie-chart"></span>电子资源</div>
            </a>
        </div>

        <div class="text-content">
            <img src="https://tva1.sinaimg.cn/large/006tNbRwly1gahzszxkt1j318f0u07wi.jpg" class="fl">
            <div class="text fl">
            北京大学图书馆是中国最早的现代新型图书馆之一，被国务院批准为首批国家重点古籍保护单位，已发展成为资源丰富、现代化、
            综合性、开放式的研究型图书馆。目前共有馆藏纸质图书2204万余册，购买各类数据库20余个，电子化图书9000余本。图书馆始终坚持“读者第一，
            服务至上”的理念宗旨，持续不断地完善图书馆的功能和资源建设，力图为读者提供最优质的服务！
            </div>
        </div>
    </div>

</div>
</body>
</html>
