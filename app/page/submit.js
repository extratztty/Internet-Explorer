import React from 'react'
import '../style/submit.less'
import Header from '../components/header'
import Footer from '../components/footer'
import Model from '../components/model'

let Submit = React.createClass({
    getInitialState() {
        return {
            query: "104.17.210.109"
        }
    },
    textChange:function (event) {
        this.setState({query: event.target.value});
        if(event.target.value === ""){
            this.setState({query: "104.17.210.109"});
        }
    },
    submitValue(event){
        if (event.keyCode == "13") {
            this.refs.link.click();
        }
    },
    stopDefault( e ) {
        if ( e && e.preventDefault )
            e.preventDefault();
        else
            window.event.returnValue = false;

        return false;
    },
    // drawbg(){
    //     //定义画布宽高和生成点的个数
    //     const WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
    //     const POINT = Math.floor(WIDTH / 40);
    //     const canvas = document.getElementById('Mycanvas');
    //     canvas.width = WIDTH;
    //     canvas.height = HEIGHT;
    //     const context = canvas.getContext('2d');
    //     context.strokeStyle = 'rgba(0,0,255,0.2)';
    //     context.strokeWidth = 1;
    //     context.fillStyle = 'rgba(0,0,255,0.1)';
    //     let circleArr = [];
    //
    //     //线条：开始xy坐标，结束xy坐标，线条透明度
    //     function Line (x, y, _x, _y, o) {
    //         this.beginX = x;
    //         this.beginY = y;
    //         this.closeX = _x;
    //         this.closeY = _y;
    //         this.o = o;
    //     }
    //     //点：圆心xy坐标，半径，每帧移动xy的距离
    //     function Circle (x, y, r, moveX, moveY) {
    //         this.x = x;
    //         this.y = y;
    //         this.r = r;
    //         this.moveX = moveX;
    //         this.moveY = moveY;
    //     }
    //     //生成max和min之间的随机数
    //     function num (max, _min) {
    //         let min = arguments[1] || 0;
    //         return Math.floor(Math.random()*(max-min+1)+min);
    //     }
    //     // 绘制原点
    //     function drawCricle (cxt, x, y, r, moveX, moveY) {
    //         let circle = new Circle(x, y, r, moveX, moveY);
    //         cxt.beginPath();
    //         cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
    //         cxt.closePath();
    //         cxt.fill();
    //         return circle;
    //     }
    //     //绘制线条
    //     function drawLine (cxt, x, y, _x, _y, o) {
    //         let line = new Line(x, y, _x, _y, o);
    //         cxt.beginPath();
    //         cxt.strokeStyle = 'rgba(0,0,0,'+ o +')';
    //         cxt.moveTo(line.beginX, line.beginY);
    //         cxt.lineTo(line.closeX, line.closeY);
    //         cxt.closePath();
    //         cxt.stroke();
    //
    //     }
    //     //初始化生成原点
    //     function init () {
    //         circleArr = [];
    //         for (let i = 0; i < POINT; i++) {
    //             circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(40, 20, -10)/40, num(10, -10)/40));
    //         }
    //         draw();
    //     }
    //
    //     //每帧绘制
    //     function draw () {
    //         context.clearRect(0,0,canvas.width, canvas.height);
    //         for (let i = 0; i < POINT; i++) {
    //             drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
    //         }
    //         for (let i = 0; i < POINT; i++) {
    //             for (let j = 0; j < POINT; j++) {
    //                 if (i + j < POINT) {
    //                     let A = Math.abs(circleArr[i+j].x - circleArr[i].x),
    //                         B = Math.abs(circleArr[i+j].y - circleArr[i].y);
    //                     let lineLength = Math.sqrt(A*A + B*B);
    //                     let C = 1/lineLength*7-0.009;
    //                     let lineOpacity = C > 0.03 ? 0.03 : C;
    //                     if (lineOpacity > 0) {
    //                         drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     init();
    //     setInterval(function () {
    //         for (let i = 0; i < POINT; i++) {
    //             let cir = circleArr[i];
    //             cir.x += cir.moveX;
    //             cir.y += cir.moveY;
    //             if (cir.x > WIDTH) cir.x = 0;
    //             else if (cir.x < 0) cir.x = WIDTH;
    //             if (cir.y > HEIGHT) cir.y = 0;
    //             else if (cir.y < 0) cir.y = HEIGHT;
    //
    //         }
    //         draw();
    //     }, 16);
    // },
    componentDidMount(){
        // this.drawbg();
    },
    render(){
        return(
            <div>
                <Header bg="default"/>
                {/*<canvas id="Mycanvas"> </canvas>*/}
                <section className="container cd-intro">
                    {/*<div className="logo"> </div>*/}
                    <form className="cd-intro-content">
                        <input placeholder="104.17.210.109" type="text" onChange={this.textChange} onKeyDown={this.submitValue}/>
                        <a href={"#/result/"+this.state.query} ref="link">
                            <div id="search"/>
                        </a>
                    </form>
                    <a className="help" href="#/book">搜索帮助</a>
                    <a className="advance" href="#/advance">高级搜索</a>
                </section>
                <footer className="submit-footer">
                    <div>
                        <span className="h6"><a href="#">联系我们</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#">关于我们</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#">违法举报</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#/book">使用帮助</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#">意见反馈</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#">免责声明</a></span><span>&nbsp;|&nbsp;</span>
                        <span className="h6"><a href="#">隐私政策</a></span>
                        <div className="h6">版权所有&nbsp;&copy;&nbsp;东北大学秦皇岛分校&nbsp;信息安全实验室</div>
                    </div>
                </footer>
                <Model/>
            </div>
        );
    }
});

export default Submit;