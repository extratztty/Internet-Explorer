import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/chart/map/MapSeries'
import 'echarts/map/js/world'
import '../style/common-wrap.less'
import '../style/situation.less'
import {SITUATION_OPTIONS} from '../config/statistic'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'


let Situation = React.createClass({
    componentDidMount(){
        const myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(SITUATION_OPTIONS);
    },

    render(){
        return(
            <div className="situation-wrap wrap">
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <h1 className="text-center">443端口全球态势</h1>
                        <hr className="divider"/>
                        <div id="main" style={{width: "900px",height:"450px",margin:"20px 0 75px -450px",left:"50%",position:"relative"}}> </div>
                    </div>
                </div>
                <Footer/>
                <Totop/>
                <Model/>
            </div>
        );
    }
});

export default Situation;