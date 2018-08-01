import React from 'react'
import '../style/header.less'

let Header = React.createClass({
    getInitialState() {
        return {
            query: "104.17.210.109",
        }
    },
    textChange:function (event) {
        this.setState({query: event.target.value});
    },
    submitValue(event){
        if (event.keyCode == "13") {
            this.refs.link.click();
        }
    },
    render(){
        const headerBg = this.props.bg;
        let Input;
        if(headerBg === "inverse"){
            Input = (
                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" onChange={this.textChange} onKeyDown={this.submitValue}/>
                        <a href={"#/result/"+this.state.query} ref="link"> </a>
                    </div>
                </form>
            )
        }
        return (
            <div>
                <nav className={"navbar navbar-fixed-top navbar-"+headerBg}>
                    <div className="container-fluid">
                        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"> </span>
                                <span className="icon-bar"> </span>
                                <span className="icon-bar"> </span>
                            </button>
                            <a className="navbar-brand" href="#">互联网空间探测系统</a>
                        </div>

                        {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="hvr-sink"><a href="#/statistic">统计总览</a></li>
                                <li className="hvr-sink"><a href="#/situation/">全球态势</a></li>
                                <li className="dropdown hvr-sink">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">工控报告<span className="caret"> </span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#/dnp">DNP3.0</a></li>
                                        <li><a href="#/s7">S7comm</a></li>
                                        <li><a href="#/ethernet">Ethernet/IP</a></li>
                                    </ul>
                                </li>
                                <li className="hvr-sink"><a href="#/introduce/">系统介绍</a></li>
                                <li className="hvr-sink"><a href="#/book/">用户手册</a></li>
                                { Input }
                            </ul>
                            <span className="glyphicon glyphicon-pencil navbar-right hvr-grow-shadow" data-toggle="modal" data-target="#myModal"> </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

export default Header;