function getAjaxData(url) {
    var dataSet = null;
    $.ajax(url, {
        type: "GET",
        async: false,
        success: function (data) {
            dataSet = data;
            console.log(dataSet);
        },
        error: function () {
            console.log("读取数据失败！");
        }
    });
    return JSON.parse(dataSet);
}

//2.3.1 电子资源数量
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.3.1.txt',
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
        graphic: [
            {
                type: 'group',
                left: 'center',
                bottom: 100,
                children: [
                    {
                        type: 'rect',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        shape: {
                            width: 190,
                            height: 90
                        },
                        style: {
                            fill: '#fff',
                            stroke: '#555',
                            lineWidth: 2,
                            shadowBlur: 8,
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            shadowColor: 'rgba(0,0,0,0.3)'
                        }
                    },
                    {
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#333',
                            text: [
                                '数据库数量： ' + dataSet.db_num + "\n\n电子书数量： " + dataSet.eb_num
                            ].join('\n'),
                            font: '14px Microsoft YaHei'
                        }
                    }
                ]
            }
        ],
    };

    var myChart = echarts.init(document.getElementById('small-1'));
    myChart.setOption(option);
});


//2.3.2 数据库明细
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.3.2.txt',
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
            data: ['数据库'],
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
        color: ['#10ddc2'],
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
                name: '数据库',
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
            }
        ]
    };

    var big_option = {
        // 标题
        // 数据和图形的关联
        legend: {
            data: ['数据库'],
            left: 'right',
            top: '30px'
        },
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                saveAsImage: {},
            }
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
        color: ['#10ddc2'],
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
                name: '数据库',
                type: 'scatter',
                // 是否开启鼠标 hover 的提示动画效果
                hoverAnimation: true,
                symbolSize: 10,
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
            }
        ]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(big_option);
});


//2.3.3 数据库使用频率
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_2.3.3.txt');
    console.log(dataSet);
    var option = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4', '#AAFFDA', '#CCFFDD'],

        tooltip: {
            show: true,
            trigger: 'axis'
        },
        legend: {
            selectedMode: false,
            left: '10%',
            top: 15
        },
        toolbox: {
            show: true,
            right: 100,
            top: 15,
            feature: {
                mark: {show: true},        // 辅助线标志
                magicType: {show: true, type: ['line', 'bar']},    // 动态类型转换（折线柱形互转）
                restore: {show: true},        // 还原
                saveAsImage: {show: true}        // 保存图片
            }
        },

        calculable: true,
        xAxis: {
            name: '使用次数',
            type: 'category',
            data: ['<500','500~999','1000~1499','1500~1999','2000~2499','2500~2999','3000~3499','>=3500']
        },
        yAxis: {
            type: 'value'
        },
        series: {
            name: '数据库使用频率分布（个）',
            type: 'bar',
            barWidth: 25,
            color: '#22BFFF',
            data: dataSet['freqData']
        }
    };

    console.log(option);

    var myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(option);
    var smallOption = option;
    var mySmallChart = echarts.init(document.getElementById('small-3'));

    smallOption.toolbox = null;
    smallOption.series.barWidth = 10;
    smallOption.xAxis.name = null;
    mySmallChart.setOption(smallOption);

});

//2.3.4 发表年份分布
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.3.4.txt',
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

    var big_option = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            //top: '50px',
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

    var small_option = {
        color: ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '1px',
            //top: '50px',
            orient: 'longitudinal',
            //获取标签数据
            data: dataSet.legend.data,
            itemGap: 20,
            textStyle: { //图例文字的样式
                fontSize: 7
            },
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
    var myChart = echarts.init(document.getElementById('small-4'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-4'));
    myChart.setOption(big_option);
});

//2.3.5 成人书与幼儿书的比例
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.3.5.txt',
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
    var myChart = echarts.init(document.getElementById('small-5'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('big-5'));
    myChart.setOption(option);
});

//2.3.6电子资源发表年份与借阅情况的关系
$(document).ready(function () {
    var dataSet;
    $.ajax({
        url: '../json/pl_2.3.6.txt',
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

    var big_option = {
        tooltip: {
            // 当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
            trigger: 'axis',
            // 提示框的位置
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },

        xAxis: [
            {
                type: 'category',
                boundaryGap: false,  // 无间隙
                data: dataSet.legend.data,

            }
        ],

        // toolbox：这是ECharts中的工具栏。内置有导出图片、数据视图、动态类型切换、数据区域缩放、重置五个工具。
        toolbox: {
            // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
            feature: {
                dataZoom: {
                    yAxisIndex: 'none',  // y轴不缩放，Index默认为0
                    moveOnMouseMove: true
                },
                restore: {},
                saveAsImage: {},

                magicType: {
                    type: ['bar', 'line'],

                }
            }
        },

        yAxis: {
            name: '借阅率',
            type: 'value', // 'value' 数值轴，适用于连续数据。
            boundaryGap: [0, '5%'], // 分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，
            triggerEvent: 'true',
            scale: 'false',
            minInterval: 1,
            nameGap: '15',
            fontSize: '10',
            max: '20000'
        },

        dataZoom: [{                 // 内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系
            type: 'inside',
            start: 0,
            end: 100
        }, {
            start: 0,
            end: 100,                  // handleIcon 手柄的 icon 形状，支持路径字符串
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

        series: [
            {
                name: '借阅率',
                type: 'line',
                smooth: true,  // 开启平滑处理。true的平滑程度相当于0.5
                symbol: 'none', // 标记的图形。
                sampling: 'average', //  取过滤点的平均值
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)' //  图形的颜色。
                    }
                },
                areaStyle: {    // 区域填充样式。
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: dataSet.series.data
            }]
    };

    var small_option = {
        tooltip: {
            // 当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
            trigger: 'axis',
            // 提示框的位置
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },

        xAxis: [
            {
                type: 'category',
                boundaryGap: false,  // 无间隙
                data: dataSet.legend.data,

            }
        ],


        yAxis: {
            name: '借阅率',
            type: 'value', // 'value' 数值轴，适用于连续数据。
            boundaryGap: [0, '5%'], // 分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，
            triggerEvent: 'true',
            scale: 'false',
            minInterval: 1,
            nameGap: '15',
            fontSize: '2',
            max: '20000'
        },

        series: [
            {
                name: '借阅率',
                type: 'line',
                smooth: true,  // 开启平滑处理。true的平滑程度相当于0.5
                symbol: 'none', // 标记的图形。
                sampling: 'average', //  取过滤点的平均值
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)' //  图形的颜色。
                    }
                },
                areaStyle: {    // 区域填充样式。
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: dataSet.series.data
            }]
    };


    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-6'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-6'));
    myChart.setOption(big_option);
});
