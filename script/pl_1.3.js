// 1.3.1
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.1.txt',
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
            show: true,
            left: '10px',
            // top: '50px',
            orient: 'vertical',
            //获取标签数据
            data: dataSet.legend.data,
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '活动类型',
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

//1.3.2
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.2.txt',
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
            left: 50
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
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['讲座', '展览', '演出',  '比赛', '论坛', '会议'],
                axisLabel: {
                    fontSize: 9
                }
            }
        ],
        series: [{
            name: '各类活动举行频次',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 15,
            color: '#22BFFF'
        }]
    };

    var big_option = {
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['讲座', '展览', '演出', '会议', '比赛', '论坛',]
            }
        ],
        series: [{
            name: '各类活动举行频次',
            type: 'bar',
            radius: '60%',
            data: [
                {value: dataSet.series.data[0].value, name: '讲座'},
                {value: dataSet.series.data[1].value, name: '展览'},
                {value: dataSet.series.data[2].value, name: '演出'},
                {value: dataSet.series.data[3].value, name: '会议'},
                {value: dataSet.series.data[4].value, name: '比赛'},
                {value: dataSet.series.data[5].value, name: '论坛'},
            ],
            barWidth: 40,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(big_option);
});

//1.3.3
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.3.txt',
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

    var small_option = {
        color: ['#0045E8', '#0084FF'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            // top: '50px',
            orient: 'vertical',
            // //获取标签数据
            // data: dataSet.legend.data,
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '用户借还书\n\n周期分布',
                textAlign: 'center',
                font: '10px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '借还书周期',
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

    var big_option = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4', '#AAFFDA', '#CCFFDD'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            // top: '50px',
            orient: 'vertical',
            //获取标签数据
            // data: dataSet.legend.data,
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '用户借还书周期分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '借还书周期',
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
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(big_option);
});

//1.3.4
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.4.txt',
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
    var small_option = {
        grid: {
            left: 50
        },
        legend: {
            data: ['用户到馆频率']
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    fontSize: 6
                },
                data: ['2018年1月', '2018年2月', '2018年3月', '2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月', '2018年11月', '2018年12月']
            }
        ],
        series: [{
            name: '用户到馆频率',
            type: 'bar',
            radius: '60%',
            data: dataSet['series']['data'],
            barWidth: 7,
            color: '#22BFFF'
        }]
    };

    var big_option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['用户到馆频率']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
            }
        },
        calculable: true,
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['2018年1月', '2018年2月', '2018年3月', '2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月', '2018年11月', '2018年12月']
            }
        ],
        series: [{
            name: '用户到馆频率',
            type: 'bar',
            radius: '60%',
            data: dataSet['series']['data'],
            barWidth: 15,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-4'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-4'));
    myChart.setOption(big_option);
});

//1.3.5
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.5.txt',
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
    var small_option = {
        grid: {
            left: 50
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    fontSize: 6
                },
                data: ['2018年1月', '2018年2月', '2018年3月', '2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月', '2018年11月', '2018年12月']
            }
        ],
        series: [{
            name: '用户借阅频次时间分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 7,
            color: '#22BFFF'
        }]
    };

    var big_option = {
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['2018年1月', '2018年2月', '2018年3月', '2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月', '2018年11月', '2018年12月']
            }
        ],
        series: [{
            name: '用户借阅频次时间分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 15,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-5'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-5'));
    myChart.setOption(big_option);
});

//1.3.6
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.6.txt',
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
    var small_option = {
        grid: {
            left: 50
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
                mark: {show: true}
            }
        },
        calculable: true,
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['小于5次', '5-10次', '11-15次', '16-20次', '21-25次', '26-30次', '31-35次', '大于35次'],
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        series: [{
            name: '用户借阅频次分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 15,
            color: '#22BFFF'
        }]
    };

    var big_option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true}
            }
        },
        calculable: true,
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['小于5次', '5-10次', '11-15次', '16-20次', '21-25次', '26-30次', '31-35次', '大于35次'],
            }
        ],
        series: [{
            name: '用户借阅频次分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 40,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-6'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-6'));
    myChart.setOption(big_option);
});

//1.3.7
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.7.txt',
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
    var small_option = {
        grid: {
            left: 50
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
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['讲座', '展览', '演出', '比赛', '论坛', '会议'],
                axisLabel: {
                    fontSize: 9
                }
            }
        ],
        series: [{
            name: '各类活动参与频次',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 15,
            color: '#22BFFF'
        }]
    };

    var big_option = {
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['讲座', '展览', '演出', '会议', '比赛', '论坛',]
            }
        ],
        series: [{
            name: '各类活动参与频次',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 40,
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-7'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-7'));
    myChart.setOption(big_option);
});

// 1.3.8
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_1.3.8.txt',
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
    var small_option = {
        grid: {
            left: 50
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
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['小于1小时', '1-2小时', '2-3小时', '3-4小时', '4-5小时', '5-6小时', '6-7小时', '7-8小时', '8小时以上'],
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        series: [{
            name: '用户在馆时间分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: 15,
            color: '#22BFFF'
        }]
    };
    var big_option = {
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
        yAxis: [
            {
                type: 'value'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['小于1小时', '1-2小时', '2-3小时', '3-4小时', '4-5小时', '5-6小时', '6-7小时', '7-8小时', '8小时以上'],
            }
        ],
        series: [{
            name: '用户在馆时间分布',
            type: 'bar',
            radius: '60%',
            data: dataSet.series.data,
            barWidth: '60%',
            color: '#22BFFF'
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-8'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-8'));
    myChart.setOption(big_option);
});
