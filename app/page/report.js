import React from 'react'
import '../style/common-wrap.less'
import '../style/result.less'
import { Link } from 'react-router'
import dnp from '../markdown/DNP3.md'
import s7 from '../markdown/S7comm.md'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'
import marked from 'marked'
import hljs from 'highlight.js'

let title;
let output;

let Report = React.createClass({
    componentWillMount(){
        marked.setOptions({
            tables: true,
            highlight: code => hljs.highlightAuto(code).value,
        });
        if(this.props.params.title === "dnp3"){
            title = "DNP3.0";
            let input = dnp;
            output = marked(input);
        }else if(this.props.params.title === "s7"){
            title = "S7comm";
            let input = s7;
            output = marked(input);
        }
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
                                    <Link to="/report/dnp3" className="list-group-item">
                                        DNP3.0
                                    </Link>
                                    <Link to="/report/s7" className="list-group-item">
                                        S7comm
                                    </Link>
                                </ul>
                            </ul>
                        </div>
                        <div className="col-sm-7" style={{marginTop:"40px",marginBottom:"60px"}}>
                            <h1 className="text-center">{title}</h1>
                            <hr className="divider"/>
                            <div dangerouslySetInnerHTML={{ __html: output }} />
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

export default Report;