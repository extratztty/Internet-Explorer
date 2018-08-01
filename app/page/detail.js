import React from 'react'
import '../style/common-wrap.less'
import '../style/detail.less'
import $ from 'jquery'
import {MUSIC_LIST} from '../config/musiclist'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'


let Detail = React.createClass({
    getInitialState(){
        return {
            List: {},
            country: "",
            province:"",
            city: "",
            loc: ""
        }
    },
    componentDidMount(){
        // var re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;

        // if(re.test(this.props.params.query)){
        //     $.post("http://172.16.76.244/search",{ip:this.props.params.query}, function(result) {
        //         this.setState({
        //             List:result
        //         });
        //     }.bind(this));
        //     // $.ajax({
        //     //     type: "POST",
        //     //     url: "http://localhost:3010/search",
        //     //     data: "ip="+this.props.params.query,
        //     //     dataType: "json",
        //     //     async: false,
        //     //     success: function(data){
        //     //         if($.isEmptyObject(data)){
        //     //             this.setState({
        //     //                 List: [{"total":0}]
        //     //             })
        //     //         }
        //     //     },
        //     //     error: function (jqXHR, textStatus, errorThrown) {
        //     //         alert(errorThrown);
        //     //         location.replace("/");
        //     //     }
        //     // });
        // }
        // else {
        //     alert("格式错误!");
        //     location.replace("/");
        // }

        $.post("https://api.map.baidu.com/location/ip",
            {
                ip:this.state.List["hits"][this.props.params.id]["_source"]["ip"],
                ak:"eFwPYjY93xnMpHKMjh7KXqwLyVzlZyKo",
                coor:"bd09ll"
            },
            function(data,status){
                let that = this;
                if(data["status"]===0 && status==="success"){
                    let map = new BMap.Map("Bcont");          // 创建地图实例
                    let point = new BMap.Point(data["content"]["point"]["x"], data["content"]["point"]["y"]);  // 创建点坐标
                    map.centerAndZoom(point, 15);
                    map.enableScrollWheelZoom(true);
                    $('#mapwrap').css({
                        boxShadow:"0 0 1px #777",marginLeft:"30px",padding:"0"
                    });
                    this.setState({
                        province:data["content"]["address_detail"]["province"],
                        city:data["content"]["address_detail"]["city"],
                        loc:data["content"]["point"]["x"].substr(0,8)+" , "+data["content"]["point"]["y"].substr(0,7)
                    })
                }
                else{
                    $.get("https://ipinfo.io/"+ this.state.List["hits"][this.props.params.id]["_source"]["ip"]+"/geo", function(response) {
                        let str = response["loc"].split(",");
                        let map = new BMap.Map("Bcont");          // 创建地图实例
                        let point = new BMap.Point(str[1], str[0]);  // 创建点坐标
                        map.centerAndZoom(point, 15);
                        map.enableScrollWheelZoom(true);
                        $('#mapwrap').css({
                            boxShadow:"0 0 1px #777",marginLeft:"30px",padding:"0"
                        });
                        that.setState({
                            country:response["country"],
                            province:response["region"],
                            city:response["city"],
                            loc:str[1]+","+str[0]
                        })
                    }, "jsonp");
                }
            }.bind(this),"jsonp");
    },
    render(){
        let id = this.props.params.id;
        let detail;
        if(!$.isEmptyObject(this.state.List)){
            let source = this.state.List["hits"][id]["_source"];
            let response = source["data"]["http"]["response"];
            let expires,server,set_cookie,cf_ray,x_frame_options,transfer_encoding;
            if(response["headers"].hasOwnProperty("expires")){expires="\nexpires:"+response["headers"]["expires"]}else {expires=""}
            if(response["headers"].hasOwnProperty("server")){server="\nserver:"+response["headers"]["server"]}else {server=""}
            if(response["headers"].hasOwnProperty("set_cookie")){set_cookie="\nset_cookie:"+response["headers"]["set_cookie"]}else {set_cookie=""}
            if(response["headers"]["unknown"].hasOwnProperty(1)){cf_ray="\ncf_ray:"+response["headers"]["unknown"][1]["value"]}else{cf_ray=""}
            if(response["headers"].hasOwnProperty("x_frame_options")){x_frame_options="\nx_frame_options:"+response["headers"]["x_frame_options"]}else {x_frame_options=""}
            if(response.hasOwnProperty("transfer_encoding")){transfer_encoding="\ntransfer_encoding:"+response["transfer_encoding"]}else {transfer_encoding=""}
            detail = (
                <div className="container white-box" style={{padding:"0 80px"}}>
                    <div className="page-header">
                        <h1>{source["ip"]}</h1>
                        <a href={"#/result/"+this.props.params.query} className="btn btn-primary btn-md active" role="button">返回</a>
                    </div>
                    <h3 id="h3"><strong>基本信息</strong></h3>
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-striped">
                                <tbody>
                                <tr>
                                    <td>IP 地址</td>
                                    <td>{source["ip"]}</td>
                                </tr>
                                <tr>
                                    <td>时间戳</td>
                                    <td><span className="label label-primary">{source["timestamp"]}</span></td>
                                </tr>
                                <tr>
                                    <td>协议</td>
                                    <td><span className="label label-primary">{source["data"]["http"]["response"]["protocol"]["name"]}</span></td>
                                </tr>
                                <tr>
                                    <td>国家</td>
                                    <td>{this.state.country}</td>
                                </tr>
                                <tr>
                                    <td>省份</td>
                                    <td>{this.state.province}</td>
                                </tr>
                                <tr>
                                    <td>城市</td>
                                    <td>{this.state.city}</td>
                                </tr>
                                <tr>
                                    <td>经纬度</td>
                                    <td>{this.state.loc}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-5" id="mapwrap">
                            <div id="Bcont"> </div>
                        </div>
                    </div>
                    <h3 style={{margin:"30px 0 0 30px"}}>响应</h3>
                    <hr/>
                    <pre className="well" style={{margin:"0 20% 50px 10px",height:"300px"}}>
                        {response["protocol"]["name"]+" "+
                        response["status_line"]+"\ncache_control:"+
                        response["headers"]["cache_control"]+"\ncontent_type:"+
                        response["headers"]["content_type"]+expires+server+set_cookie+ "\ndata:"+
                        response["headers"]["unknown"][0]["value"]+cf_ray+x_frame_options+"\n\n"+
                        response["body"]+"\n\nbody_sha256:"+
                        response["body_sha256"]+"\ncontent_length:"+
                        response["content_length"]+transfer_encoding}
                    </pre>
                    <h3 style={{margin:"30px 0 0 30px"}}>请求</h3>
                    <hr/>
                    <pre className="well" style={{margin:"0 20% 50px 10px"}}>
                        {"url:"+response["request"]["url"]["scheme"]+"://"+
                        response["request"]["url"]["host"]+
                        response["request"]["url"]["path"]+"\nmethod:"+
                        response["request"]["method"]+"\nuser_agent:"+
                        response["request"]["headers"]["unknown"][0]["value"]+"\nhost:"+
                        response["request"]["host"]}
                    </pre>
                </div>
            )
        } else {
            detail = (
                <div className="pswp__preloader__icn" style={{margin:"150px 0 300px 150px"}}>
                    <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut"> </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Header bg="inverse"/>
                <div className="detail-wrap wrap">
                    <div className="container center-box">
                        {detail}
                    </div>
                </div>
                <Footer/>
                <Totop/>
                <Model/>
            </div>
        );
    }
});

export default Detail;