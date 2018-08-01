import React from 'react'
import '../style/footer.less'

let Footer = React.createClass({
    render(){
        return(
            <footer className="footers">
                <div className="container footer-top">
                    <div className="row">
                        <div className="col-md-5 about">
                            <div className="h4"><span>联系我们</span></div>
                            <div className="h5">地址：河北省秦皇岛市经济技术开发区泰山路143号</div>
                            <div className="h5" style={{marginLeft:"40px"}}>东北大学秦皇岛分校 综合楼 1310</div>
                            <div className="h5">邮编：066004</div>
                        </div>
                        <div className="col-md-4 alink">
                            <div className="h4"><span>相关链接</span></div>
                            <div className="row link-en">
                                <span className="col-xs-3"><a href="https://www.shodan.io/">Shodan</a></span>
                                <span className="col-xs-3"><a href="https://censys.io">censys</a></span>
                                <span className="col-xs-3"><a href="https://fofa.so">Fofa</a></span>
                            </div>
                            <div className="row">
                                <span className="col-xs-3"><a href="https://www.zoomeye.org">钟馗之眼</a></span>
                                <span className="col-xs-3"><a href="https://www.oshadan.com">傻蛋</a></span>
                                <span className="col-xs-3"><a href="http://www.ditecting.com">谛听</a></span>
                            </div>
                        </div>
                        <div className="col-md-3 alink">
                            <div className="h4"><span>工控报告</span></div>
                            <div className="row link-en">
                                <span className="col-xs-5"><a href="#/dnp">DNP3.0</a></span>
                                <span className="col-xs-5"><a href="#/ethernet">EthernetIP</a></span>
                            </div>
                            <div className="row">
                                <span className="col-xs-5"><a href="#/s7">S7comm</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"><div className="container"><span>版权所有&nbsp;&copy;&nbsp;东北大学秦皇岛分校&nbsp;信息安全实验室</span></div></div>
            </footer>
        );
    }
});

export default Footer;