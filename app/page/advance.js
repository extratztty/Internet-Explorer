import React from 'react'
import '../style/common-wrap.less'
import '../style/advance.less'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'

let Advance = React.createClass({
    getInitialState() {
        return {
            "ip": "",
            "host": "",
            "servers": "",
            "powered_by": "",
            "body": "",
            "code": "",
            "protocol": "",
            "scheme": "",
            "country": "",
            "locality": "",
            "province": "",
            "organization": ""
        }
    },
    // temporary
    textChangea:function (event) {
        if(event.target.value !== ""){
            this.setState({ip: "||ip="+event.target.value});
        }else{
            this.setState({ip: event.target.value});
        }
    },
    textChangeb:function (event) {
        if(event.target.value !== ""){
            this.setState({host: "||host="+event.target.value});
        }else{
            this.setState({host: event.target.value});
        }
    },
    textChangec:function (event) {
        if(event.target.value !== ""){
            this.setState({servers: "||servers="+event.target.value});
        }else{
            this.setState({servers: event.target.value});
        }
    },
    textChanged:function (event) {
        if(event.target.value !== ""){
            this.setState({powered_by: "||powered_by="+event.target.value});
        }else{
            this.setState({powered_by: event.target.value});
        }
    },
    textChangee:function (event) {
        if(event.target.value !== ""){
            this.setState({body: "||body="+event.target.value});
        }else{
            this.setState({body: event.target.value});
        }
    },
    textChangef:function (event) {
        if(event.target.value !== ""){
            this.setState({code: "||code="+event.target.value});
        }else{
            this.setState({code: event.target.value});
        }
    },
    textChangeg:function (event) {
        if(event.target.value !== ""){
            this.setState({protocol: "||protocol="+event.target.value});
        }else{
            this.setState({protocol: event.target.value});
        }
    },
    textChangeh:function (event) {
        if(event.target.value !== ""){
            this.setState({scheme: "||scheme="+event.target.value});
        }else{
            this.setState({scheme: event.target.value});
        }
    },
    textChangei:function (event) {
        if(event.target.value !== ""){
            this.setState({country: "||country="+event.target.value});
        }else{
            this.setState({country: event.target.value});
        }
    },
    textChangej:function (event) {
        if(event.target.value !== ""){
            this.setState({locality: "||locality="+event.target.value});
        }else{
            this.setState({locality: event.target.value});
        }
    },
    textChangek:function (event) {
        if(event.target.value !== ""){
            this.setState({province: "||province="+event.target.value});
        }else{
            this.setState({province: event.target.value});
        }
    },
    textChangel:function (event) {
        if(event.target.value !== ""){
            this.setState({organization: "||organization="+event.target.value});
        }else{
            this.setState({organization: event.target.value});
        }
    },

    submitValue(event){
        if (event.keyCode == "13") {
            this.refs.linka.click();
        }
    },
    componentDidMount(){

    },
    render(){
        return(
            <div className="wrap advance-wrap" style={{fontSize:"16px",color:"#333"}}>
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div className="col-sm-9 col-sm-offset-1">
                            <div className="page-header">
                                <h1>高级搜索</h1>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">IP</span>
                                <input type="text" className="form-control" placeholder="ip" onChange={this.textChangea} onKeyDown={this.submitValue}/>
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon2">主机</span>
                                <input type="text" className="form-control" placeholder="host" onChange={this.textChangeb} onKeyDown={this.submitValue}/>
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">服务器</span>
                                <input type="text" className="form-control" placeholder="nginx\Apache\cloudfare\Varnish" onChange={this.textChangec} onKeyDown={this.submitValue}/>
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon4">供应商</span>
                                <input type="text" className="form-control" placeholder="PHP\ASP.NET\PleskLin" onChange={this.textChanged} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon5">Web应用</span>
                                <input type="text" className="form-control" placeholder="wordpress\" onChange={this.textChangee} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon6">返回码</span>
                                <input type="text" className="form-control" placeholder="200\404\403\500" onChange={this.textChangef} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon7">协议</span>
                                <input type="text" className="form-control" placeholder="HTTP/1.*\" onChange={this.textChangeg} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon8">scheme</span>
                                <input type="text" className="form-control" placeholder="http\https" onChange={this.textChangeh} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon9">国家</span>
                                <input type="text" className="form-control" placeholder="US\CN" onChange={this.textChangei} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon10">地区</span>
                                <input type="text" className="form-control" placeholder="SZ" onChange={this.textChangej} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon11">省份</span>
                                <input type="text" className="form-control" placeholder="GD" onChange={this.textChangek} onKeyDown={this.submitValue}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon12">组织</span>
                                <input type="text" className="form-control" placeholder="Huawei" onChange={this.textChangel} onKeyDown={this.submitValue}/>
                            </div>
                            <hr className="divider"/>
                            <a href={"#/result/"+(this.state.ip+this.state.host+this.state.servers+this.state.powered_by+this.state.body+this.state.code+this.state.protocol+this.state.scheme+this.state.country+this.state.locality+this.state.province+this.state.organization).slice(2)}  ref="linka" type="button" className="btn btn-primary btn-lg">提交</a>
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

export default Advance;