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

    var myChart = echarts.init(document.getElementById('big-1'));
    myChart.setOption(option);
    var smallOption = option;
    var mySmallChart = echarts.init(document.getElementById('small-1'));

    smallOption.toolbox = null;
    smallOption.series.barWidth = 10;
    smallOption.xAxis.name = null;
    mySmallChart.setOption(smallOption);

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
    var myChart = echarts.init(document.getElementById('small-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(small_option);

    myChart = echarts.init(document.getElementById('big-2'));
    myChart.setOption(big_option);
});
