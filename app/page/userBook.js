import React from 'react'
import '../style/common-wrap.less'
import '../style/useBook.less'
import Header from '../components/header'
import Model from '../components/model'
import Totop from '../components/totop'
import Footer from '../components/footer'

let Book = React.createClass({
    render(){
        return(
            <div className="userbook-wrap wrap">
                <Header bg="inverse"/>
                <div className="container center-box">
                    <div className="row white-box">
                        <div className="col-sm-8 col-sm-offset-1">
                            <div className="page-header">
                                <h1>用户手册</h1>
                            </div>
                            <div style={{color:"#333",marginTop:"40px"}}>
                                <h3>根据IP进行查询</h3>
                                <p><span className="glyphicon glyphicon-triangle-right"> </span> 直接输入需要查询的IP</p>
                                <h3>根据类型进行查询</h3>
                                <p><span className="glyphicon glyphicon-triangle-right"> </span> 按照<code><strong>类型 : 值</strong></code>的格式输入进行查询</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如：<code>timestamp : 2017-11-21T02:30:28-05:00</code></p>
                                {/*<p>可用类型包括<code>ip</code>，<code>timestamp</code>，<code>status_code</code>，<code>protocol</code>，<code>scheme</code>……</p>*/}
                                <h3>高级搜索</h3>
                                <p><span className="glyphicon glyphicon-triangle-right"> </span> 可以在输入框按照<code><strong>类型 = 值 || 类型 = 值 || ...</strong></code>的格式输入</p>
                                <p><span className="glyphicon glyphicon-triangle-right"> </span> 进入高级搜索页面在相应输入框根据提示输入相应内容进行查询</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级搜索的搜索选项:</p>
                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td>IP</td>
                                        <td>查询目标的IP地址</td>
                                    </tr>
                                    <tr>
                                        <td>host</td>
                                        <td>主机</td>
                                    </tr>
                                    <tr>
                                        <td>servers</td>
                                        <td>服务器 eg. nginx\Apache\cloudfare\Varnish</td>
                                    </tr>
                                    <tr>
                                        <td>powered_by</td>
                                        <td>供应商 eg. PHP\ASP.NET\PleskLin</td>
                                    </tr>
                                    <tr>
                                        <td>body</td>
                                        <td>Web应用 eg. wordpress\</td>
                                    </tr>
                                    <tr>
                                        <td>code</td>
                                        <td>返回码 eg. 200\404\403\500</td>
                                    </tr>
                                    <tr>
                                        <td>protocol</td>
                                        <td>协议 eg. HTTP/1.*\</td>
                                    </tr>
                                    <tr>
                                        <td>scheme</td>
                                        <td>eg. http\https</td>
                                    </tr>
                                    <tr>
                                        <td>country</td>
                                        <td>国家或者地区代码 eg. US\CN</td>
                                    </tr>
                                    <tr>
                                        <td>locality</td>
                                        <td>地区 eg. SZ</td>
                                    </tr>
                                    <tr>
                                        <td>province</td>
                                        <td>省份 eg. GD</td>
                                    </tr>
                                    <tr>
                                        <td>organization</td>
                                        <td>组织 eg. Huawei</td>
                                    </tr>
                                    </tbody>
                                </table>
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

export default Book;