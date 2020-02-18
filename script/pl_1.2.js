// 1.2.1
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.2.1.txt',
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
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4', '#AAFFDA', '#CCFFDD'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            type: 'scroll',
            show: true,
            left: '10px',
            // top: '50px',
            orient: 'horizontal',
            //获取标签数据
            data: dataSet.legend.data,
            itemGap: 20,
            textStyle: {
                fontSize: 10
            }
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '学历分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '学历比例',
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
    var myChart = echarts.init(document.getElementById('small-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-1'));
    myChart.setOption(option);
});

// 1.2.2
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.2.2.txt',
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
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4', '#AAFFDA', '#CCFFDD'],
        grid: {
            left: 68
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['8-12点到馆', '12-18点到馆', '18-22点到馆'],
            left: 5,
            top: 10,
            itemHeight: 10,
            itemWidth: 15,
        },

        calculable: true,
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        yAxis: [
            {
                type: 'category',
                data: ['小于5km', '5-20km', '20-40km', '40-60km', '60-80km', '80-100km', '100+km']
            }
        ],
        series: [{
            name: '8-12点到馆',
            type: 'bar',
            radius: '60%',
            data: [
                {value: 0, name: '小于5km'},
                {value: dataSet.series.data[0].value, name: '5-20km'},
                {value: dataSet.series.data[3].value, name: '20-40km'},
                {value: dataSet.series.data[6].value, name: '40-60km'},
                {value: dataSet.series.data[9].value, name: '60-80km'},
                {value: dataSet.series.data[12].value, name: '80-100km'},
                {value: dataSet.series.data[15].value, name: '100+km'},
            ]
        }, {
            name: '12-18点到馆',
            type: 'bar',
            radius: '60%',
            data: [
                {value: 0, name: '小于5km'},
                {value: dataSet.series.data[1].value, name: '5-20km'},
                {value: dataSet.series.data[4].value, name: '20-40km'},
                {value: dataSet.series.data[7].value, name: '40-60km'},
                {value: dataSet.series.data[10].value, name: '60-80km'},
                {value: dataSet.series.data[13].value, name: '80-100km'},
                {value: dataSet.series.data[16].value, name: '100+km'},
            ]
        }, {
            name: '18-22点到馆',
            type: 'bar',
            radius: '60%',
            data: [
                {value: 0, name: '小于5km'},
                {value: dataSet.series.data[2].value, name: '5-20km'},
                {value: dataSet.series.data[5].value, name: '20-40km'},
                {value: dataSet.series.data[8].value, name: '40-60km'},
                {value: dataSet.series.data[11].value, name: '60-80km'},
                {value: dataSet.series.data[14].value, name: '80-100km'},
                {value: dataSet.series.data[17].value, name: '100+km'},

            ]
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option['toolbox'] = {
        show: true,
        feature: {
            mark: {show: true},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        },
        right: '20px'
    };

    option.xAxis.axisLabel.show = true;
    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(option);

});


//1.2.3
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.2.3.txt',
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
        grid: {
            left: 68
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
            }
        },
        calculable: true,
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        yAxis: [
            {
                type: 'category',
                data: ['小于5km', '5-20km', '20-40km', '40-60km', '60-80km', '80-100km', '100+km']
            }
        ],
        series: [{
            center: [100, 0],
            name: '受教育程度分布',
            type: 'bar',
            // radius: '60%',
            data: [
                {value: dataSet.series.data[0].value, name: '小于5km'},
                {value: dataSet.series.data[1].value, name: '5-20km'},
                {value: dataSet.series.data[2].value, name: '20-40km'},
                {value: dataSet.series.data[3].value, name: '40-60km'},
                {value: dataSet.series.data[4].value, name: '60-80km'},
                {value: dataSet.series.data[5].value, name: '80-100km'},
                {value: dataSet.series.data[6].value, name: '100+km'},
            ],
            barWidth: 10,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-3'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option.xAxis.axisLabel.show = true;
    myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(option);
});
