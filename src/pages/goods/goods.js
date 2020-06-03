import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import FrontendAuth from './../../FrontendAuth';

import tab5 from './tab5';
import tab6 from './tab6';


export default class goods extends React.Component{
    constructor (props) {
        super(props)
    }
	render(){
		const {match,routes} =this.props;
		return(
			<div className="tab">
			    <div className="top">
					<div className="left"> 
						<Link to={`/left`}>路由3</Link>
						<Link to={`${match.path}/tab4`}>路由4</Link>
						<Link to={`${match.path}/tab5`}>路由5</Link>
						<Link to={`${match.path}/tab6`}>路由6</Link>
						<Link to={`/goodshome`}>路由7</Link>
					</div>   
					<div className="right">
					{/* <Switch>
						{GoodsRoutes.map((route, i) => (
							<FrontendAuth key={i} {...route} />
						))}

					</Switch> */}
					<Switch>
						<Route path={`${match.path}/tab5`} abc={true} component={tab5}></Route>
						<Route path={`${match.path}/tab6`} component={tab6}></Route>
					</Switch>
						
					{/* <Switch>
						<Route path={`/goodshome`} component={goodshome}></Route>
					</Switch> */}
					
					{/* <MergeRoute supPath={match.path} routes={routes}/> */}
					{/* <Route path={`${match.path}/tab5`} component={tab5}></Route>
					<Route path={`${match.path}/tab6`} component={tab6}></Route> */}
					</div>
			    </div>
			</div>
		)
	}
}