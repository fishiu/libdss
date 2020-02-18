// 封装用于通过ajax调用json数据的方法
function getAjaxData(url) {
    var dataSet = null;
    $.ajax(url, {
        type: "GET",
        async: false,
        success: function (data) {
            dataSet = data;
            // console.log(dataSet);
        },
        error: function () {
            console.log("读取数据失败！");
        }
    });
    return JSON.parse(dataSet);
}

var color = ['#0045E8', '#0084FF', '#22BFFF', '#44EFFF', '#66FFFA', '#88FFE4', '#AAFFDA', '#CCFFDD'];
var colorGreen = ['#0A2F51', '#0E4D64', '#137177', '#188977', '#1D9A6C', '#39A96B', '#56B870', '#74C67A', '#99D492', '#BFE1B0', '#DEEDCF'];
// 第一个表
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.1.txt');

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            orient: 'vertical',
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '性别分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '性别比例',
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
            data: dataSet.series.data,
            color: ['#0084FF', '#44EFFF']
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(option);

    option.series[0]['itemStyle']['normal']['label']['show'] = true;
    option.series[0]['itemStyle']['normal']['labelLine']['show'] = true;

    myChart = echarts.init(document.getElementById('big-1'));
    myChart.setOption(option);
});

// 第二个表
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.2.txt');

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
            selectedMode: false,
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 20,
            top: 'middle',
            textStyle: {
                fontSize: 10
            }
        },

        graphic: {
            type: 'text',
            left: '150',
            top: 'center',
            style: {
                text: '年龄分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '年龄分布',
            type: 'pie',
            radius: ['35%', '60%'],
            center: [180, 132],

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
            data: dataSet['series']['ageData']
        }]
    };

    var myChart = echarts.init(document.getElementById('small-2'));
    myChart.setOption(option);


    // big-2
    var optionBig = option;
    optionBig.legend = {
        show: true,
        left: '50px',
        top: 'middle',
        orient: 'vertical',
        data: dataSet.legend.data,
        itemGap: 40
    };

    optionBig.graphic.left = 'center';
    optionBig.graphic.top = 'center';
    optionBig.series[0].center = ['50%', '50%'];

    var myChartBig = echarts.init(document.getElementById('big-2'));
    myChartBig.setOption(optionBig);
});

// 第三个表
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.2.txt');

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
            type: 'category',
            data: dataSet['legend']['data']
        },
        yAxis: {
            type: 'value'
        },
        series: {
            name: '该年龄段人群在馆平均时长',
            type: 'bar',
            barWidth: 25,
            color: '#22BFFF',
            data: dataSet['series']['ageDureData']
        }
    };

    var myChart = echarts.init(document.getElementById('big-3'));
    myChart.setOption(option);

    var smallOption = option;
    var mySmallChart = echarts.init(document.getElementById('small-3'));

    smallOption.toolbox = null;
    smallOption.series.barWidth = 10;
    mySmallChart.setOption(smallOption);

});

// 第四个小表
var optionSmall_4;

$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.4.txt');

    optionSmall_4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            selectedMode: false,
            orient: 'vertical',
            itemGap: 20
        },

        graphic: {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '到馆情况分布',
                textAlign: 'center',
                font: '14px bold',
                fill: '#000',
                width: 30,
                height: 30
            }
        },

        series: [{
            name: '性别比例',
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
            data: dataSet['usualData'],
            color: ['#0084FF', '#44EFFF']
        }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-4'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionSmall_4);

    // option.series[0]['itemStyle']['normal']['label']['show'] = true;
    // option.series[0]['itemStyle']['normal']['labelLine']['show'] = true;

    // myChart = echarts.init(document.getElementById('big-1'));
    // myChart.setOption(option);
});

// 第四个大表1
var optionBig_4_1;
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.4.txt');

    optionBig_4_1 = {
        title: {
            text: '进馆和用户性别的关系',
            textStyle: {
                fontSize: 14
            },
            top: '20px',
            left: '35%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            show: true,
            left: '10px',
            orient: 'vertical',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 40,
            top: 'middle',
            textStyle: {
                fontSize: 12
            }
        },

        series: [
            {
                name: '到馆分布',
                type: 'pie',
                radius: ['25%', '35%'],
                center: ['60%', '50%'],

                data: dataSet['usualData'],
                color: [color[1],colorGreen[2]],

                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            color: '#444444'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },

                labelLine: {
                    normal: {
                        show: false
                    }
                },

                itemStyle: {
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
            },

            {
                name: '性别分布',
                type: 'pie',
                radius: ['40%', '50%'],
                center: ['60%', '50%'],

                data: dataSet['usualGenderData'],
                color: [color[1],color[3],colorGreen[2],colorGreen[4]],

                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            color: '#444444'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                        textColor: '#000'
                    }//鼠标放在各个区域的样式
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function
                    (idx) {
                    return Math.random() * 200;
                }
            }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('big-4-1'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_4_1);
});

// 第四个大表2
var optionBig_4_2;
$(document).ready(function () {
    var dataSet;
    dataSet = getAjaxData('../json/pl_1.1.4.txt');
    console.log(dataSet)

    optionBig_4_2 = {
        title: {
            text: '进馆和用户年龄的关系',
            textStyle: {
                fontSize: 14
            },
            top: '20px',
            left: '35%'
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        legend: {
            type: 'scroll',
            show: true,
            left: '10px',
            orient: 'vertical',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 34,
            top: '60px',
            bottom: '20px',
            textStyle: {
                fontSize: 12
            }
        },

        series: [
            {
                name: '到馆分布',
                type: 'pie',
                radius: ['25%', '35%'],
                center: ['60%', '50%'],
                color: [color[1], colorGreen[2]],

                data: dataSet['usualData'],

                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            color: '#444444'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                itemStyle: {
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
            },
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '50%'],
                center: ['60%', '50%'],
                color: color.slice(0, 8).concat(colorGreen.slice(1, 9)),

                data: dataSet['usualAgeData'],

                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            color: '#444444'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                        textColor: '#000'
                    }//鼠标放在各个区域的样式
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function
                    (idx) {
                    return Math.random() * 200;
                }
            }]
    };

    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('big-4-2'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_4_2);
});

//5
$(document).ready(function () {
    var dataSet = getAjaxData('../json/pl_1.1.5.txt');
    console.log(dataSet)
    var optionSmall_5 = optionSmall_4;
    optionSmall_5.graphic.style.text = '借书情况分布';
    optionSmall_5.series[0].data = dataSet['lendData'];
    optionSmall_5.series[0].name = '借书情况';
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-5'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionSmall_5);

    var optionBig_5_1 = optionBig_4_1;
    optionBig_5_1.title.text = '借书和用户性别的关系';
    optionBig_5_1.series[0].name = '借书分布';
    optionBig_5_1.series[1].name = '性别分布';
    optionBig_5_1.series[0].data = dataSet['lendData'];
    optionBig_5_1.series[1].data = dataSet['lendGenderData'];
    //初始化echarts实例
    myChart = echarts.init(document.getElementById('big-5-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_5_1);

    var optionBig_5_2 = optionBig_4_2;
    optionBig_5_2.title.text = '借书和用户年龄的关系';
    optionBig_5_2.series[0].name = '借书分布';
    optionBig_5_2.series[1].name = '年龄分布';
    optionBig_5_2.series[0].data = dataSet['lendData'];
    optionBig_5_2.series[1].data = dataSet['lendAgeData'];
    //初始化echarts实例
    myChart = echarts.init(document.getElementById('big-5-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_5_2);
});


//6
$(document).ready(function () {
    var dataSet = getAjaxData('../json/pl_1.1.6.txt');
    console.log(dataSet);
    var optionSmall_6 = optionSmall_4;
    optionSmall_6.graphic.style.text = '逾期情况分布';
    optionSmall_6.series[0].data = dataSet['ontimeData'];
    optionSmall_6.series[0].name = '逾期情况';
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-6'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionSmall_6);

    var optionBig_6_1 = optionBig_4_1;
    optionBig_6_1.title.text = '逾期和用户性别的关系';
    optionBig_6_1.series[0].name = '逾期分布';
    optionBig_6_1.series[1].name = '性别分布';
    optionBig_6_1.series[0].data = dataSet['ontimeData'];
    optionBig_6_1.series[1].data = dataSet['ontimeGenderData'];
    //初始化echarts实例
    myChart = echarts.init(document.getElementById('big-6-1'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_6_1);

    var optionBig_6_2 = optionBig_4_2;
    optionBig_6_2.title.text = '逾期和用户年龄的关系';
    optionBig_6_2.series[0].name = '逾期分布';
    optionBig_6_2.series[1].name = '年龄分布';
    optionBig_6_2.series[0].data = dataSet['ontimeData'];
    optionBig_6_2.series[1].data = dataSet['ontimeAgeData'];
    //初始化echarts实例
    myChart = echarts.init(document.getElementById('big-6-2'));
    //使用制定的配置项和数据显示图表
    myChart.setOption(optionBig_6_2);
});




