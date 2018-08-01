import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
import '../style/common-wrap.less'
import '../style/result.less'
import {MUSIC_LIST} from '../config/musiclist'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'


let Result = React.createClass({
    getInitialState(){
        return {
            List: {},
        }
    },
    componentDidMount(){
        const re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        const req = /^(\w+:[\w.]+)$/;
        const rea = /^\w+=[\w.]+(\|\|\w+=[\w.]+)*$/;
        const reads = /^\w+=[\w.]+(\|\w+=[\w.]+)+$/;
        if(re.test(this.props.params.query)){
            $.post("http://localhost:3010/search",{ip:this.props.params.query}, function(result) {
                this.setState({
                    List:result
                });
            }.bind(this));
        }
        else if(req.test(this.props.params.query)) {
            const strq = this.props.params.query.split(":");
            $.post("http://localhost:3010/searchByType",{type:strq[0],value:strq[1]}, function(result) {
                this.setState({
                    List:result
                });

            }.bind(this));
            // $.ajax({
            //     type: "POST",
            //     url: "http://localhost:3010/searchByType/",
            //     data: "ip=1",
            //     dataType: "json",
            //     async: false,
            //     success: function(data){
            //         if($.isEmptyObject(data)){
            //             this.setState({
            //                 List: [{"total":0}]
            //             })
            //         }
            //     },
            //     error: function (jqXHR, textStatus, errorThrown) {
            //         // alert(this.props.params.query.splice(":")[0]);
            //         // alert(this.props.params.query.splice(":")[1]);
            //         alert(errorThrown);
            //         location.replace("/");
            //     }
            // });
        }
        else if(rea.test(this.props.params.query)){
            const stra = this.props.params.query.split("||");
            let ipv="",hostv="",serversv="",powered_byv="",bodyv="",codev="",protocolv="",schemev="",countryv="",localityv="",provincev="",organizationv="";
            stra.forEach((value,index)=>{
                alert(value);
                if(value.split("=")[0]==="ip"){
                    ipv = value.split("=")[1];
                }else {ipv+=""}
                if(value.split("=")[0]==="host"){
                    hostv = value.split("=")[1];
                }else {hostv+=""}
                if(value.split("=")[0]==="servers"){
                    serversv = value.split("=")[1];
                }else {serversv+=""}
                if(value.split("=")[0]==="powered_by"){
                    powered_byv = value.split("=")[1];
                }else {powered_byv+=""}
                if(value.split("=")[0]==="body"){
                    bodyv = value.split("=")[1];
                }else {bodyv+=""}
                if(value.split("=")[0]==="code"){
                    codev = value.split("=")[1];
                }else {codev+=""}
                if(value.split("=")[0]==="protocol"){
                    protocolv = value.split("=")[1];
                }else {protocolv+=""}
                if(value.split("=")[0]==="scheme"){
                    schemev = value.split("=")[1];
                }else {schemev+=""}
                if(value.split("=")[0]==="country"){
                    countryv = value.split("=")[1];
                }else {countryv+=""}
                if(value.split("=")[0]==="locality"){
                    localityv = value.split("=")[1];
                }else {localityv+=""}
                if(value.split("=")[0]==="province"){
                    provincev = value.split("=")[1];
                }else {provincev+=""}
                if(value.split("=")[0]==="organization"){
                    organizationv = value.split("=")[1];
                }else {organizationv+=""}
            });
            $.post("http://localhost:3010/advance",{ip:ipv,host:hostv,servers:serversv,powered_by: powered_byv,body:bodyv,code:codev,protocol:protocolv,scheme:schemev,country:countryv,locality:localityv,province:provincev,organization:organizationv}, function(result) {
                this.setState({
                    List:result
                });
            }.bind(this));
        }
        else if(reads.test(this.props.params.query)){
            $.post("http://localhost:3010/ads",{rules:this.props.params.query}, function(result) {
                this.setState({
                    List:result
                });
            }.bind(this));
        }
        else {
            alert("格式错误!");
            location.replace("/");
        }
    },

    render(){
        let COUNT = 0;
        if(!$.isEmptyObject(this.state.List)){
            if(this.state.List["total"]){
                COUNT = this.state.List["total"];
            }
        }
        let i = 0;
        let panalList;
        if(!$.isEmptyObject(this.state.List)){
            if(this.state.List["total"]) {
                panalList = this.state.List["hits"].map((id) => {
                    let obj = id["_source"];
                    return (
                        <Link to={"/detail/"+ this.props.params.query + "/" + i++}>
                            <div className="alert alert-dismissible" role="alert">
                                <div className="panel panel-primary hvr-grow-shadow">
                                    <div className="panel-heading">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h3>{obj["ip"]}</h3>
                                    </div>
                                    <div className="panel-body">
                                        <ul>
                                            <li className="row">
                                                <span className="col-md-2 col-md-offset-1">host</span>
                                                <p className="col-md-9">{obj["data"]["http"]["response"]["request"]["url"]["host"]}</p>
                                            </li>
                                            <li className="row">
                                                <span className="col-md-2 col-md-offset-1">timestamp</span>
                                                <p className="col-md-9">{obj["timestamp"]}</p>
                                            </li>
                                            <li className="row">
                                                <span className="col-md-2 col-md-offset-1">status</span>
                                                <p className="col-md-9">{obj["data"]["http"]["response"]["status_line"]}</p>
                                            </li>
                                            <li className="row">
                                                <span className="col-md-2 col-md-offset-1">protocol</span>
                                                <p className="col-md-9">{obj["data"]["http"]["response"]["protocol"]["name"]}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                });
            }
            else {
                panalList = (
                    <h4 style={{marginLeft:"30px"}}>无搜索结果</h4>
                )
            }
        } else {
            panalList = (
                <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut"> </div>
                    </div>
                </div>
            )
        }

        return(
            <div className="result-wrap wrap">
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <section className="col-md-3 box-left">
                            <ul className="nav nav-pills nav-stacked">
                                <ul className="list-group">
                                    <a href="#" className="list-group-item active">
                                        <strong>地区</strong>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>1242050</span>
                                        中国<small>CN</small>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>5577374</span>
                                        美国<small>US</small>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>642312</span>
                                        英国<small>UK</small>
                                    </a>
                                </ul>
                                <ul className="list-group">
                                    <a href="#" className="list-group-item active">
                                        <strong>web服务</strong>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>5964476</span>
                                        AkamaiGHost
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>4159905</span>
                                        Apache
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span>1510995</span>
                                        nginx
                                    </a>
                                </ul>
                            </ul>
                        </section>
                        <section className="col-md-8 box-right">
                            <p className="result-message">
                                <ol className="breadcrumb">
                                    <li className="search-result"><span className="glyphicon glyphicon-search"> </span> 搜索结果</li>
                                    <li><span> {this.props.params.query} </span></li>
                                    <li>共找到 <span> {COUNT} </span> 条结果</li>
                                </ol>
                            </p>
                            { panalList }
                        </section>
                    </div>
                </div>
                <Footer/>
                <Totop/>
                <Model/>
            </div>
        );
    }
});

export default Result;