import React from 'react'
import '../style/common-wrap.less'
import '../style/result.less'
import ethernetip from '../markdown/EthernetIP.md'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'
import marked from 'marked'
import hljs from 'highlight.js'

let Ethernet = React.createClass({
    getInitialState() {
        return {
            output: null
        }
    },
    componentDidMount(){
        marked.setOptions({
            tables: true,
            highlight: code => hljs.highlightAuto(code).value,
        });
        this.setState({
            output:marked(ethernetip)
        });
    },
    render(){
        return(
            <div className="wrap" style={{fontSize:"16px",color:"#333"}}>
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div className="col-md-3 box-left" style={{marginTop:"80px"}}>
                            <ul className="nav nav-pills nav-stacked">
                                <ul className="list-group">
                                    <a href="#" className="list-group-item active">
                                        <strong>工控报告</strong>
                                    </a>
                                    <a href="#/dnp" className="list-group-item">
                                        DNP3.0
                                    </a>
                                    <a href="#/s7" className="list-group-item">
                                        S7comm
                                    </a>
                                    <a href="#/ethernet" className="list-group-item">
                                        Ethernet/IP
                                    </a>
                                </ul>
                            </ul>
                        </div>
                        <div className="col-sm-7" style={{marginTop:"40px",marginBottom:"60px"}}>
                            <h1 className="text-center">Ethernet/IP</h1>
                            <hr className="divider"/>
                            <div dangerouslySetInnerHTML={{ __html: this.state.output }} style={{color:"#444"}}/>
                        </div>
                    </div>
                </div>
                <Footer/>
                <Totop/>
                <Model/>
            </div>
        );
    }
});

export default Ethernet;