import React from 'react'
import '../style/common-wrap.less'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'

let Introduce = React.createClass({
    render(){
        return(
            <div className="introduce-wrap wrap">
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div className="col-sm-9 col-sm-offset-1" style={{marginBottom:"50px"}}>
                            <div className="page-header">
                                <h1>系统介绍</h1>
                            </div>
                            <div className="well" style={{padding:"35px 50px 10px 40px"}}>
                                <p className="lead" style={{fontSize:"18px"}}>实时互联网空间安全监测系统由东北大学信息安全实验室开发完成，是一款针对网络空间的搜索引擎，收录了连接互联网的设备、网站及其使用的服务、工业控制系统设备等信息。是一个帮助信息安全从业人员发现、监视和分析可从Internet访问的设备的平台。我们会定期探查每个公共IP地址和流行域名，生成测试结果。目前国内只有少数几款类似的系统。研究人员可以通过网络空间监测系统方便地了解组件的普及率及漏洞的危害范围等信息。</p>
                                <p className="lead" style={{fontSize:"18px"}}>该系统是一款 “黑客友好” 的搜索引擎，但它并不会主动对网络设备、网站发起攻击，收录的数据也仅用于安全研究。网络空间探测系统更像是互联网空间的一张航海图。</p>
                            </div>
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

export default Introduce;