$(document).ready(function () {
    var content = `<img src="../image/user_cluster.jpg" width="275px" alt="聚类结果图表" style="display: block;margin: 75px auto;">`;
    $("#small-1").html(content);

    content = `<img src="../image/user_cluster.jpg" width="900px" alt="聚类结果图表" style="display: block;margin: 50px auto;">`;
    $("#big-1").html(content);

    content = `<img src="../image/user_cluster_graph.png" width="275px" alt="聚类结果图表" style="display: block;margin: 60px auto;">`;
    $("#small-2").html(content);

    content = `<img src="../image/user_cluster_graph.png" width="850px" alt="聚类结果图表" style="display: block;margin: 50px auto;">`;
    $("#big-2").html(content);
});

$(document).ready(function () {
// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('small-3'));
    var categories = [
        {
            name: '到馆',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"到馆",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/到馆.png',
            itemSyle: {
                color: 'rgb(194,53,49)'
            }
        }, {
            name: '离馆',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"离馆",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/离馆.png',
            itemSyle: {
                color: 'rgb(47,69,84)'
            }
        }, {
            name: '借书',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"借书",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/借书.png',
            itemSyle: {
                color: 'rgb(96,172,252)'
            }
        }, {
            name: '进入阅览室',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"进入阅览室",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/进入阅览室.png',
            itemSyle: {
                color: 'rgb(145,199,174)'
            }
        }, {
            name: '参与活动',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"参与活动",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/参与活动.png',
            itemSyle: {
                color: 'rgb(91,196,159)'
            }
        }, {
            name: '电子浏览',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"电子阅览",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/电子浏览.png',
            itemSyle: {
                color: 'rgb(214,96,168)'
            }
        }, {
            name: '电子下载',
            // label:{
            //     show:false
            // },
            // label:{
            //     show:true,
            //     formatter:"电子下载",
            //     rotate:20,
            //     position:"top",
            //     distance:5
            // },
            emphasis: {
                label: {
                    show: false
                }
            },
            symbol: 'image://../image/ChartIcon/电子下载.png',
            itemSyle: {
                color: 'rgb(143,131,230)'
            }
        }
    ];
    var data = [];
    for (let i = 0; i <= 6; i += 1) {
        data.push({
            name: categories[i].name,
            icon: categories[i].symbol
        })
    }
    option = {
        // title:{
        //     text:"用户典型行为路径挖掘"
        // },
        tooltip: {
            trigger: 'none',
            show: false
        },
        // legend: {
        //     // selectedMode: 'single',
        //     textStyle:{
        //         fontSize:15
        //     },
        //     orient: 'vertical',
        //     selectedMode:false,
        //     left:10,
        //     top:"15%",
        //     itemGap:30,
        //     data:data
        // },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        // backgroundColor: "#F6F6F6",
        series: [
            {
                type: 'graph',
                // coordinateSystem:null,
                layout: 'none',
                symbolSize: 20,
                // symbolOffset:[20,0],
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },
                categories: categories,
                data: [{
                    name: "0.0",
                    category: 0,
                    x: 400,
                    y: 100
                }, {
                    name: "0.1",
                    category: 3,
                    x: 550,
                    y: 100
                }, {
                    name: '0.2',
                    category: 1,
                    x: 700,
                    y: 100
                }, {
                    name: '1.0',
                    category: 0,
                    x: 400,
                    y: 150
                }, {
                    name: '1.1',
                    category: 4,
                    x: 550,
                    y: 150
                }, {
                    name: '1.2',
                    category: 1,
                    x: 700,
                    y: 150
                }, {
                    name: '2.0',
                    category: 0,
                    x: 400,
                    y: 200
                }, {
                    name: '2.1',
                    category: 3,
                    x: 500,
                    y: 200
                }, {
                    name: '2.2',
                    category: 2,
                    x: 600,
                    y: 200
                }, {
                    name: '2.3',
                    category: 1,
                    x: 700,
                    y: 200
                }, {
                    name: '3.0',
                    category: 0,
                    x: 400,
                    y: 250
                }, {
                    name: '3.1',
                    category: 3,
                    x: 500,
                    y: 250
                }, {
                    name: '3.2',
                    category: 3,
                    x: 600,
                    y: 250
                }, {
                    name: '3.3',
                    category: 1,
                    x: 700,
                    y: 250
                }, {
                    name: '4.0',
                    category: 0,
                    x: 400,
                    y: 300
                }, {
                    name: '4.1',
                    category: 4,
                    x: 500,
                    y: 300
                }, {
                    name: '4.2',
                    category: 3,
                    x: 600,
                    y: 300
                }, {
                    name: '4.3',
                    category: 1,
                    x: 700,
                    y: 300
                }, {
                    name: '5.0',
                    category: 5,
                    x: 400,
                    y: 350
                }, {
                    name: '5.1',
                    category: 5,
                    x: 500,
                    y: 350
                }, {
                    name: '5.2',
                    category: 5,
                    x: 600,
                    y: 350
                }, {
                    name: '5.3',
                    category: 6,
                    x: 700,
                    y: 350
                }, {
                    name: '6.0',
                    category: 0,
                    x: 400,
                    y: 400
                }, {
                    name: '6.1',
                    category: 3,
                    x: 475,
                    y: 400
                }, {
                    name: '6.2',
                    category: 3,
                    x: 550,
                    y: 400
                }, {
                    name: '6.3',
                    category: 2,
                    x: 625,
                    y: 400
                }, {
                    name: '6.4',
                    category: 1,
                    x: 700,
                    y: 400
                }, {
                    name: '7.0',
                    category: 0,
                    x: 400,
                    y: 450
                }, {
                    name: '7.1',
                    category: 3,
                    x: 475,
                    y: 450
                }, {
                    name: '7.2',
                    category: 3,
                    x: 550,
                    y: 450
                }, {
                    name: '7.3',
                    category: 3,
                    x: 625,
                    y: 450
                }, {
                    name: '7.4',
                    category: 1,
                    x: 700,
                    y: 450
                }, {
                    name: '8.0',
                    category: 0,
                    x: 400,
                    y: 500
                }, {
                    name: '8.1',
                    category: 3,
                    x: 475,
                    y: 500
                }, {
                    name: '8.2',
                    category: 5,
                    x: 550,
                    y: 500
                }, {
                    name: '8.3',
                    category: 6,
                    x: 625,
                    y: 500
                }, {
                    name: '8.4',
                    category: 1,
                    x: 700,
                    y: 500
                }],
                links: [{
                    source: 0,
                    target: 1
                }, {
                    source: 1,
                    target: 2
                }, {
                    source: 3,
                    target: 4
                }, {
                    source: 4,
                    target: 5
                }, {
                    source: 6,
                    target: 7
                }, {
                    source: 7,
                    target: 8
                }, {
                    source: 8,
                    target: 9
                }, {
                    source: 10,
                    target: 11
                }, {
                    source: 11,
                    target: 12
                }, {
                    source: 12,
                    target: 13
                }, {
                    source: 14,
                    target: 15
                }, {
                    source: 15,
                    target: 16
                }, {
                    source: 16,
                    target: 17
                }, {
                    source: 18,
                    target: 19
                }, {
                    source: 19,
                    target: 20
                }, {
                    source: 20,
                    target: 21
                }, {
                    source: 22,
                    target: 23
                }, {
                    source: 23,
                    target: 24
                }, {
                    source: 24,
                    target: 25
                }, {
                    source: 25,
                    target: 26
                }, {
                    source: 27,
                    target: 28
                }, {
                    source: 28,
                    target: 29
                }, {
                    source: 29,
                    target: 30
                }, {
                    source: 30,
                    target: 31
                }, {
                    source: 32,
                    target: 33
                }, {
                    source: 33,
                    target: 34
                }, {
                    source: 34,
                    target: 35
                }, {
                    source: 35,
                    target: 36
                }]
            }
        ]
    };
    myChart.setOption(option);

    var myChart = echarts.init(document.getElementById('big-3'));
    option['legend'] = {
        // selectedMode: 'single',
        textStyle: {
            fontSize: 15
        },
        orient: 'vertical',
        selectedMode: false,
        left: 10,
        top: "15%",
        itemGap: 30,
        data: data
    };
    myChart.setOption(option);
});
