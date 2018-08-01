import React from 'react'
import '../style/common-wrap.less'
import '../style/notFound.less'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'

let NotFoundPage = React.createClass({
    render(){
        return(
            <div className="wrap" style={{fontSize:"16px",color:"#333"}}>
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div className="notfoud-container">
                            <div className="img-404">
                            </div>
                            <p className="notfound-p">哎呀迷路了...</p>
                            <div className="notfound-reason">
                                <p>可能的原因：</p>
                                <ul>
                                    <li>原来的页面不存在了</li>
                                    <li>我们的服务器被外星人劫持了</li>
                                </ul>
                            </div>
                            <div className="notfound-btn-container">
                                <a className="notfound-btn" href="#">返回首页</a>
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

export default NotFoundPage;