import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import FrontendAuth from './../../FrontendAuth';

import Tab5 from './tab5';
import tab6 from './tab6';


export default class goods extends React.Component{
    constructor (props) {
        super(props)
    }
	render(){
		const {match,routes} =this.props;
		return(
			<div className="container">
			    <div className="top">
					<div className="left"> 
						<Link to={`/left`}>路由3</Link>
						<Link to={`${match.path}/tab4`}>路由4</Link>
						<Link to={`${match.path}/tab5`}>路由5</Link>
						<Link to={`${match.path}/tab6`}>路由6</Link>
						<Link to={`/goodshome`}>路由7</Link>
					</div>   
					<div className="right">
					<Switch>
						{/* <Route path={`${match.path}/tab5`} abc={true} component={Tab5}></Route> */}
						<Route path={`${match.path}/tab5`} abc={true} render={(props) => <Tab5 {...props} isFoot={false} />}></Route>
						<Route path={`${match.path}/tab6`} component={tab6}></Route>
					</Switch>
					</div>
			    </div>
			</div>
		)
	}
}