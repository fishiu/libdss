//业务时间分布
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.1.txt',
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


    var option_small = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'axis',
            // formatter: function (params) {
            //     params = params[0];
            //     var date = new Date(params.name);
            //     return  date.getFullYear() + '/' + (date.getMonth() + 1) + ' :  '+ '\n' + params.value[1];
            // },
            axisPointer: {
                animation: false,
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
            // 提示框的位置
            // position: function (pt) {
            //     return [pt[0], '10%'];
            // }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            name: '时间',
            min: new Date(2017, 12, 1),
            minInterval: 3600 * 24 * 1000 * 30,
            maxInterval: 3600 * 24 * 1000 * 31,
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '60%'],
            splitLine: {
                show: false
            },
            name: '活动数',
        },
        legend: {
            data: ['讲座', '展览', '会议', '其他'],
            x: 'right', // 'center' | 'left' | {number},
            y: 40, // 'center' | 'bottom' | {number}

        },
        series: [
            // {
            // name: 'num',
            // type: 'line',
            // showSymbol: false,
            // hoverAnimation: false,
            // data: data
            // },
            {
                name: '讲座',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_1,
            },
            {
                name: '展览',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_2,
            },
            {
                name: '会议',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_3,

            },
            {
                name: '其他',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_4
            }
        ]
    };
    var option_big = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'axis',
            // formatter: function (params) {
            //     params = params[0];
            //     var date = new Date(params.name);
            //     return  date.getFullYear() + '/' + (date.getMonth() + 1) + ' :  '+ '\n' + params.value[1];
            // },
            axisPointer: {
                animation: false,
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
            // 提示框的位置
            // position: function (pt) {
            //     return [pt[0], '10%'];
            // }
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
                magicType: {
                    type: ['bar', 'line', 'stack', 'tiled'],
                    option: {
                        stack: {
                            areaStyle: {normal: {}},
                        },
                        tiled: {
                            areaStyle: {
                                color: 'white',
                            },
                        }
                    }
                }
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            name: '时间',
            min: new Date(2017, 12, 1),
            minInterval: 3600 * 24 * 1000 * 30,
            maxInterval: 3600 * 24 * 1000 * 31,
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '60%'],
            splitLine: {
                show: false
            },
            name: '活动数',
        },
        legend: {
            data: ['讲座', '展览', '会议', '其他'],
            x: 'right', // 'center' | 'left' | {number},
            y: 40, // 'center' | 'bottom' | {number}

        },
        series: [
            // {
            // name: 'num',
            // type: 'line',
            // showSymbol: false,
            // hoverAnimation: false,
            // data: data
            // },
            {
                name: '讲座',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_1,
            },
            {
                name: '展览',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_2,
            },
            {
                name: '会议',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_3,

            },
            {
                name: '其他',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_4
            }
        ]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option_small);

    myChart = echarts.init(document.getElementById('big-1'));
    myChart.setOption(option_big);
});

//业务持续时长分布
$(document).ready(function () {

    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.2.txt',
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
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            top: '50px',
            orient: 'vertical',
            data: ['1', '2', '3', '4'],
            itemGap: 20,
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '单次活动\n持续时长(小时）',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
            }
        },

        series: [{
            name: '业务持续时长分布',
            type: 'pie',
            radius: ['45%', '70%'],
            toolbox: {
                // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
                feature: {
                    saveAsImage: {},
                }
            },

            data: dataSet.data,

            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                    labelLine: {
                        show: false,
                    }//线条颜色
                },//基本样式
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                    textColor: '#000'
                }//鼠标放在各个区域的样式
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    console.log(option);
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(option);
});

//业务资金投入
$(document).ready(function () {

    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.3.txt',
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
        // color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            name: '时间',
            min: new Date(2017, 12, 1),
            minInterval: 3600 * 24 * 1000 * 30,
            maxInterval: 3600 * 24 * 1000 * 31,
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '50%'],
            splitLine: {
                show: false
            },
            name: '活动数',
            axisLabel: {
                show: false
            },
        },
        legend: {
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            x: 'right', // 'center' | 'left' | {number},
            y: 40, // 'center' | 'bottom' | {number}

        },
        series: [
            // {
            // name: 'num',
            // type: 'line',
            // showSymbol: false,
            // hoverAnimation: false,
            // data: data
            // },
            {
                name: '讲座',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_1
            },
            {
                name: '展览',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_2
            },
            {
                name: '会议',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_3
            },
            {
                name: '演出',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_4
            },
            {
                name: '比赛',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_5
            }, {
                name: '论坛',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_6
            }
        ]
    };

    var big_option = {
        // color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
                magicType: {
                    type: ['bar', 'line', 'stack', 'tiled'],
                    option: {
                        stack: {
                            areaStyle: {normal: {}},
                        },
                        tiled: {
                            areaStyle: {
                                color: 'white',
                            }
                        }
                    }
                }
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            name: '时间',
            min: new Date(2017, 12, 1),
            minInterval: 3600 * 24 * 1000 * 30,
            maxInterval: 3600 * 24 * 1000 * 31
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '50%'],
            splitLine: {
                show: false
            },
            name: '活动数',
        },
        legend: {
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            x: 'right', // 'center' | 'left' | {number},
            y: 40, // 'center' | 'bottom' | {number}

        },
        series: [
            // {
            // name: 'num',
            // type: 'line',
            // showSymbol: false,
            // hoverAnimation: false,
            // data: data
            // },
            {
                name: '讲座',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_1
            },
            {
                name: '展览',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_2
            },
            {
                name: '会议',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_3
            },
            {
                name: '演出',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_4
            },
            {
                name: '比赛',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_5
            }, {
                name: '论坛',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: dataSet.data_6
            }
        ]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-3'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(big_option);
});

//业务资金投入占比
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.4.txt',
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
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            top: '50px',
            orient: 'vertical',
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            itemGap: 20,
        },

        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
            }
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '业务资金投入占比',
                textAlign: 'center',
                font: '12px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '业务资金投入占比',
            type: 'pie',
            radius: ['35%', '60%'],

            data: dataSet.data,

            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                    labelLine: {
                        show: false,
                    }//线条颜色
                },//基本样式
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                    textColor: '#000'
                }//鼠标放在各个区域的样式
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    console.log(option);
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-4'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-4'));
    myChart.setOption(option);

});


//业务资金投入占比(无时间调节)
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.5.txt',
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
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
            }
        },
        legend: {
            show: true,
            left: '10px',
            top: '50px',
            orient: 'vertical',
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            itemGap: 20,
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '业务种类分布',
                textAlign: 'center',
                font: '12px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        // center:["1%", "1%"],

        series: [{
            name: '业务种类分布',
            type: 'pie',
            radius: ['35%', '60%'],

            data: dataSet.data,

            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                    labelLine: {
                        show: false,
                    }//线条颜色
                },//基本样式
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                    textColor: '#000'
                }//鼠标放在各个区域的样式
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };

    console.log(option);
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-5'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-5'));
    myChart.setOption(option);
});

//业务到访情况
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_3.1.6.txt',
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
        // 标题
        // 数据和图形的关联
        legend: {
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            left: 'right',
            top: '1px'
        },

        grid: {
            left: 2,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        // X轴的数据
        xAxis: {
            type: 'time',
            // 标签和数据点都会在两个刻度之间的带(band)中间
            boundaryGap: false,
            // 线的样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(204,204,204,0.30)',
                    type: 'solid',
                }
            },
            // X轴字体样式
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333',
                    type: 'solid',
                }
            }
        },
        // 圆点的颜色
        color: ['#A0C53E', '#10ddc2', '#3490de', '#ffd460', '#ea5455', '#2d4059'],
        // Y轴的数据
        yAxis: {
            type: 'value',
            boundaryGap: false,
            // 控制网线
            // Y轴的颜色和字体宽度
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(204,204,204,0.30)',
                    type: 'solid'
                }
            },
            // 字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333333'
                }
            },
        },
        // 数据系列，一个图表可能包含多个系列，每一个系列可能包含多个数据
        series: [
            {
                name: '讲座',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: true,
                symbolSize: 4,
                data: dataSet.data_1,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '展览',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                symbolSize: 4,
                data: dataSet.data_2,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '会议',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_3,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '演出',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_4,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '比赛',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_5,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '论坛',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                symbolSize: 4,
                data: dataSet.data_6,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            }
        ]
    };

    var big_option = {
        // 标题
        // 数据和图形的关联
        legend: {
            data: ['讲座', '展览', '会议', '演出', '比赛', '论坛'],
            left: 'right',
            top: '30px'
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                dataZoom: {
                    yAxisIndex: 'none',  // y轴不缩放，Index默认为0
                    moveOnMouseMove: true
                },
                restore: {},
                saveAsImage: {},
            }
        },
        dataZoom: [{                 // 内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,                  // handleIcon 手柄的 icon 形状，支持路径字符串
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',        //  控制手柄的尺寸，可以是像素大小，也可以是相对于 dataZoom 组件宽度的百分比，默认跟 dataZoom 宽度相同。
            handleStyle: {
                color: 'pink',
                shadowBlur: 3,      // shadowBlur图片阴影模糊值，shadowColor阴影的颜色
                shadowColor: 'red',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        grid: {
            left: 2,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        // X轴的数据
        xAxis: {
            type: 'time',
            // 标签和数据点都会在两个刻度之间的带(band)中间
            boundaryGap: false,
            // 线的样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(204,204,204,0.30)',
                    type: 'solid',
                }
            },
            // X轴字体样式
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333',
                    type: 'solid',
                }
            }
        },
        // 圆点的颜色
        color: ['#A0C53E', '#10ddc2', '#3490de', '#ffd460', '#ea5455', '#2d4059'],
        // Y轴的数据
        yAxis: {
            type: 'value',
            boundaryGap: false,
            // 控制网线
            // Y轴的颜色和字体宽度
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(204,204,204,0.30)',
                    type: 'solid'
                }
            },
            // 字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333333'
                }
            },
        },
        // 数据系列，一个图表可能包含多个系列，每一个系列可能包含多个数据
        series: [
            {
                name: '讲座',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: true,
                symbolSize: 4,
                data: dataSet.data_1,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '展览',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                symbolSize: 4,
                data: dataSet.data_2,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '会议',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_3,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '演出',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_4,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '比赛',
                type: 'scatter',
                symbolSize: 4,
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                data: dataSet.data_5,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            },
            {
                name: '论坛',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: false,
                symbolSize: 4,
                data: dataSet.data_6,
                animationDelay: function (idx) {
                    return idx * 5;
                },
                // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                emphasis: {
                    itemStyle: {
                        borderColor: 'rgba(116,96,238,0.30)',
                        borderWidth: 8,
                        areaStyle: {color: '#7460ee'}
                    }
                }
            }
        ]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-6'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-6'));
    myChart.setOption(big_option);
});

