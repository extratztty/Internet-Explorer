import React from 'react'
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import '../style/statistic.less'
import {STATISTIC_OPTIONS} from '../config/statistic'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'

let Statistic = React.createClass({
    webContainerBuild(){
        var dom = document.getElementById("statistic-webContainer");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        app.title = '';

        var webContainerJson = STATISTIC_OPTIONS.webServer;


        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 100;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.08;
        ctx.font = '50px Microsoft Yahei';
        ctx.translate(50, 50);
        ctx.rotate(-Math.PI / 4);

        var option = {
            backgroundColor: {
                type: 'pattern',
                image: canvas,
                repeat: 'repeat'
            },
            tooltip: {},
            grid: [{
                top: 50,
                width: '80%',
                bottom: 0,
                left: 50,
                containLabel: true
            }],
            xAxis: [{
                type: 'value',
                name:'数量',
                nameTextStyle: {
                    fontSize:15
                },
                max: webContainerJson.all,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        // fontSize:15
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                name:'服务器名称',
                nameTextStyle: {
                    // fontSize:15
                },


                data: Object.keys(webContainerJson.charts),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize:15
                    }
                },
                splitLine: {
                    show: false
                },

            }],
            series: [{

                type: 'bar',
                stack: 'chart',
                z: 3,
                itemStyle:{
                    normal:{
                        color:'#337ab7',

                    }
                },
                label: {
                    normal: {
                        position: 'right',
                        show: true,
                        "textStyle": {
                            "fontSize": 15
                        }
                    }
                },
                data: Object.keys(webContainerJson.charts).map(function (key) {
                    return webContainerJson.charts[key];
                })
            }, {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                    normal: {
                        color: '#eee',

                    }
                },
                data: Object.keys(webContainerJson.charts).map(function (key) {
                    return webContainerJson.all - webContainerJson.charts[key];
                })
            }
            // , {
            //     type: 'pie',
            //     radius: [0, '50%'],
            //     center: ['75%', '50%'],
            //     itemStyles:{
            //         normal: {
            //             color: '#c23531',
            //             shadowBlur: 200,
            //             shadowColor: 'rgba(0, 0, 0, 0.5)'
            //         }
            //     },
            //     data: Object.keys(webCpieJson).map(function (key) {
            //         return {
            //             name: key.replace('.js', ''),
            //             value: webCpieJson[key]
            //         }
            //     })
            // }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    countryContainerBuild(){
        var dom = document.getElementById("statistic-countryContainer");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        app.title = '';

        var webContainerJson = STATISTIC_OPTIONS.country;


        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 100;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.08;
        ctx.font = '20px Microsoft Yahei';
        ctx.translate(50, 50);
        ctx.rotate(-Math.PI / 4);

        var option = {
            backgroundColor: {
                type: 'pattern',
                image: canvas,
                repeat: 'repeat'
            },
            tooltip: {},
            grid: [{
                top: 50,
                width: '80%',
                bottom: 0,
                left: 50,
                containLabel: true
            }],
            xAxis: [{
                type: 'value',

                max: webContainerJson.all,
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                name:'server',
                data: Object.keys(webContainerJson.charts),
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                type: 'bar',
                stack: 'chart',
                z: 3,
                itemStyle:{
                    normal:{
                        color:'#337ab7'
                    }
                },
                label: {
                    normal: {
                        position: 'right',
                        show: true
                    }
                },
                data: Object.keys(webContainerJson.charts).map(function (key) {
                    return webContainerJson.charts[key];
                })
            }, {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                },
                data: Object.keys(webContainerJson.charts).map(function (key) {
                    return webContainerJson.all - webContainerJson.charts[key];
                })
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    componentDidMount(){
        this.webContainerBuild();
        this.countryContainerBuild();
    },

    render(){
        return(
            <div className="statistic-wrap wrap">
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div style={{height:"500px",marginBottom:"150px"}}>
                            <h1 className="text-center">Web服务</h1>
                            <hr className="divider"/>
                            <div id="statistic-webContainer" style={{height:"100%"}}> </div>
                        </div>
                        <div style={{height:"500px",marginBottom:"150px"}}>
                            <hr className="divider"/>
                            <h1 className="text-center">地区</h1>
                            <hr className="divider"/>
                            <div id="statistic-countryContainer" style={{height:"100%"}}> </div>
                        </div>
                        {/*<div style={{height:"400px",marginBottom:"150px"}}>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<h1 className="text-center">设备</h1>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<div id="statistic-webContainer" style={{height:"100%"}}> </div>*/}
                        {/*</div>*/}
                        {/*<div style={{height:"400px",marginBottom:"150px"}}>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<h1 className="text-center">Web框架</h1>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<div id="statistic-webContainer" style={{height:"100%"}}> </div>*/}
                        {/*</div>*/}
                        {/*<div style={{height:"400px",marginBottom:"150px"}}>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<h1 className="text-center">端口</h1>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<div id="statistic-webContainer" style={{height:"100%"}}> </div>*/}
                        {/*</div>*/}
                        {/*<div style={{height:"400px",marginBottom:"150px"}}>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<h1 className="text-center">组件</h1>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<div id="statistic-webContainer" style={{height:"100%"}}> </div>*/}
                        {/*</div>*/}
                        {/*<div style={{height:"400px",marginBottom:"150px"}}>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<h1 className="text-center">服务</h1>*/}
                            {/*<hr className="divider"/>*/}
                            {/*<div id="statistic-webContainer" style={{height:"100%"}}> </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>
                <Totop/>
                <Model/>
            </div>
        );
    }
});

export default Statistic;