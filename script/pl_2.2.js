// 1
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.1.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        color: ['#22BFFF'],
        grid: {
            x: 50
        },
        legend: {
            data: ['该类书籍的数量']
        },
        xAxis: {
            data: dataSet['legend']['data'],
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: '该类书籍的数量',
            type: 'bar',
            data: dataSet['series']['data'],
            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option['toolbox'] = {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    };
    option['grid']['x'] = 100;
    myChart = echarts.init(document.getElementById('big-1'));
    myChart.setOption(option);
});

// 2
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.2.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            // top: '50px',
            orient: 'longitudinal',
            //获取标签数据
            data: dataSet.legend.data,
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '成人书与幼儿书',
                textAlign: 'center',
                font: '12px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '成人书与幼儿书比例',
            type: 'pie',
            radius: ['35%', '60%'],

            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                    labelLine: {
                        show: false
                    }//线条颜色
                },//基本样式
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                    textColor: '#000'
                }//鼠标放在各个区域的样式
            },
            data: dataSet.series.data
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(option);
});

// 3
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.3.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            //top: '50px',
            orient: 'horizontal',
            //获取标签数据
            data: dataSet.legend.data,
            itemGap: 10,
            itemHeight: 10,
            itemWidth: 15,
            textStyle: {
                fontSize: 10
            }
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '出版年份分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '出版分布',
            type: 'pie',
            radius: ['35%', '60%'],

            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                    labelLine: {
                        show: false
                    }//线条颜色
                },//基本样式
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                    textColor: '#000'
                }//鼠标放在各个区域的样式
            },
            data: dataSet.series.data
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-3'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(option);
});

// 4 出版年份与借阅量的关系
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.4.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        color: ['#22BFFF'],
        grid: {
            x: 50
        },
        legend: {
            data: ['此出版年份书籍的平均借阅率']
        },
        xAxis: {
            data: dataSet['legend']['data'],
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: '此出版年份书籍的平均借阅率',
            type: 'bar',
            barWidth: '50%',
            data: dataSet['series']['data'],
            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };


    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-4'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option['toolbox'] = {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['bar', 'line']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    };
    option['grid']['x'] = 100;
    myChart = echarts.init(document.getElementById('big-4'));
    myChart.setOption(option);
});

// 5 出版年份与借阅量的关系
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.5.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        color: ['#22BFFF'],
        grid: {
            x: 50
        },
        legend: {
            data: ['该价格书籍的平均借阅率']
        },
        xAxis: {
            data: dataSet['legend']['data'],
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: '该价格书籍的平均借阅率',
            type: 'bar',
            barWidth: '50%',
            data: dataSet['series']['data'],
            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };


    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-5'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option['toolbox'] = {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['bar', 'line']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    };
    option['grid']['x'] = 100;

    myChart = echarts.init(document.getElementById('big-5'));
    myChart.setOption(option);
});

// 6 出版年份与借阅量的关系
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.2.6.txt',
        type: "get",
        async: false,
        success: function (data) {
            dataSet = JSON.parse(data);
            console.log(dataSet)
        },
        error: function () {
            console.log("读取数据失败！")
        }
    });

    var option = {
        color: ['#22BFFF'],
        grid: {
            x: 50
        },
        legend: {
            data: ['该类书的借阅率']
        },
        xAxis: {
            data: dataSet['legend']['data'],
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: '该类书的借阅率',
            type: 'bar',
            data: dataSet['series']['data'],
            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };


    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-6'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option['toolbox'] = {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['bar', 'line']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    };
    option['grid']['x'] = 100;

    myChart = echarts.init(document.getElementById('big-6'));
    myChart.setOption(option);
});
