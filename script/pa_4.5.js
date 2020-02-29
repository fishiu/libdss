// 第一个表
$(document).ready(function () {
    // 指定图表的配置项和数据
    var data_book = [
        [0, 3.80364504],
        [1, 3.91442595],
        [2, 3.97714721],
        [3, 4.00954731],
        [4, 4.12024458],
        [5, 4.15950811],
        [6, 4.16830599],
        [7, 4.24317911],
        [8, 4.24295036],
        [9, 4.31484295],
        [10, 4.35127914]
    ];
    function func_book(x) {
        // 0.47443815, 4.88779832, 3.05841794
        return 0.47443815*Math.log(x+4.88779832)+3.05841794
    }
    function genData_book(){
        let data = [];
        for (let i = 0; i <= 10; i += 1) {
            data.push([i, func_book(i)]);
        }
        return data;
    }
    var data_attence = [
        [0,3.43885829],
        [1,4.48132431],
        [2,5.44898979],
        [3,6.28185145],
        [4,6.57554975],
        [5,7.00530388],
        [6,7.15635372],
        [7,7.15219308],
        [8,7.43717418],
        [9,7.57759854],
        [10,7.63807495]
    ]
    function func_attence(x){
        //3.96624972e-03, 1.00663223e+01, 7.49980840e+00
        return 3.96624972e-03*(x-1.00663223e+01)**3+7.49980840e+00
    }
    function genData_attence(){
        let data = []
        for (let i = 0; i <= 10; i += 1) {
            data.push([i, func_attence(i)]);
        }
        return data;
    }
    var data_ebook = [
        [0,5.64127117],
        [1,4.32385139],
        [2,4.47524584],
        [3,5.21607292],
        [4,4.05394288],
        [5,4.80950742],
        [6,5.40102143],
        [7,4.18506952],
        [8,5.79580569],
        [9,5.4017554],
        [10,4.43895739]
    ]
    var option = {
        baseOption:{
            timeline:{
                axisType: "category",
                data: [
                    '图书借阅',
                    '到馆频率',
                    '数字阅读'
                ],
                label:{
                    formatter:function(s) {
                        return s;
                    },
                },
                autoPlay : true,
                playInterval : 4500
            }
        },
        options:[
            {
                title: {
                    text: '系列讲座对用户借阅图书影响效果预测',
                    // subtext: 'By ecStat.regression',
                    // sublink: 'https://github.com/ecomfe/echarts-stat',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    name: '活动编号',
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 13
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitNumber: 10
                },
                yAxis: {
                    name: '平均借阅数/本',
                    min: 3.4,
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 12
                    },
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    name: '真实情况',
                    type: 'scatter',
                    emphasis: {
                        label: {
                            show: false,
                            position: 'left',
                            color: 'blue',
                            fontSize: 16
                        }
                    },
                    data: data_book
                }, {
                    name: '拟合曲线',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: genData_book(),
                    markPoint: {
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            show: true,
                            position: 'center',
                            formatter: "0.47*ln(x+4.89)+3.06",
                            color: '#333',
                            fontSize: 14
                        },
                        data: [{
                            x: "50%",
                            y: "50%"
                        }]
                    }
                }],
                legend: {
                    left: "right",
                    top: '10%',
                    data: ['真实情况', '拟合曲线']
                }
            },
            {
                title: {
                    text: '系列讲座对用户到馆频率影响效果预测',
                    // subtext: 'By ecStat.regression',
                    // sublink: 'https://github.com/ecomfe/echarts-stat',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    name: '活动编号',
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 13
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitNumber: 10
                },
                yAxis: {
                    name: '平均到馆频率',
                    min: 3.0,
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 12
                    },
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    name: '真实情况',
                    type: 'scatter',
                    emphasis: {
                        label: {
                            show: false,
                            position: 'left',
                            color: 'blue',
                            fontSize: 16
                        }
                    },
                    data: data_attence
                }, {
                    name: '拟合曲线',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: genData_attence(),
                    markPoint: {
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            show: true,
                            position: 'center',
                            formatter: "0.004*(x-10.066)^3+7.500",
                            color: '#333',
                            fontSize: 14
                        },
                        data: [{
                            x: "50%",
                            y: "50%"
                        }]
                    }
                }],
                legend: {
                    left: "right",
                    top: '10%',
                    data: ['真实情况', '拟合曲线']
                }
            },
            {
                title: {
                    text: '系列讲座对用户数字阅读影响效果预测',
                    // subtext: 'By ecStat.regression',
                    // sublink: 'https://github.com/ecomfe/echarts-stat',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    name: '活动编号',
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 13
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitNumber: 10
                },
                yAxis: {
                    name: '平均数字阅读频率',
                    min: 3.5,
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 12
                    },
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    name: '真实情况',
                    type: 'scatter',
                    emphasis: {
                        label: {
                            show: false,
                            position: 'left',
                            color: 'blue',
                            fontSize: 16
                        }
                    },
                    data: data_ebook
                },{
                    name: '拟合曲线',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: data_ebook,
                    markPoint: {
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            show: true,
                            position: 'center',
                            formatter: "随机波动",
                            color: '#333',
                            fontSize: 14
                        },
                        data: [{
                            x: "50%",
                            y: "35%"
                        }]
                    }
                }],
                legend: {
                    left: "right",
                    top: '10%',
                    data: ['真实情况','拟合曲线']
                }
            }]
    };
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('big-1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // big-1
    option.options[0].xAxis.name=null;
    option.options[0].yAxis.name=null;
    option.options[1].xAxis.name=null;
    option.options[1].yAxis.name=null;
    option.options[2].xAxis.name=null;
    option.options[2].yAxis.name=null;
    var myChartBig = echarts.init(document.getElementById('small-1'));
    myChartBig.setOption(option);
});

