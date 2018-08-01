import React from 'react'
import Submit from './page/submit'
import { Router, IndexRoute, Route, hashHistory, Redirect } from 'react-router'
import Result from "./page/result"
import Detail from "./page/detail"
import Statistic from './page/statistic'
import Situation from './page/situation'
import Advance from './page/advance'
import Report from './page/report'
import Dnp from './page/dnp'
import S7 from './page/s7'
import Ethernet from './page/ethernetip'
import Introduce from './page/introduce'
import Book from "./page/userBook"
import NotFoundPage from './page/notFound'

let App = React.createClass({
    render(){
        return(
            <div>
                { React.cloneElement(this.props.children, this.state) }
            </div>

        );
    }
});
let Root = React.createClass({
    render(){
        return(
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Submit}> </IndexRoute>
                        <Route path="/result/:query" component={Result}> </Route>
                        <Route path="/detail/:query/:id" component={Detail}> </Route>
                        <Route path="/advance" component={Advance}> </Route>
                        <Route path="/statistic" component={Statistic}> </Route>
                        <Route path="/situation" component={Situation}> </Route>
                        <Route path="/dnp" component={Dnp}> </Route>
                        <Route path="/s7" component={S7}> </Route>
                        <Route path="/ethernet" component={Ethernet}> </Route>
                        <Route path="/report" component={Report}> </Route>
                        <Route path="/introduce" component={Introduce}> </Route>
                        <Route path="/book" component={Book}> </Route>
                        <Route path='/404' component={NotFoundPage} />
                        <Redirect from='*' to='/404' />
                    </Route>
                </Router>
            );
    }
});

export default Root;