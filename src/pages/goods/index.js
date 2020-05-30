import React from 'react';

import {Route,Link} from 'react-router-dom';

// import tab4 from './tab4';
import tab5 from './tab5';
import tab6 from './tab6';
 
export class goods extends React.Component{
    constructor (props) {
        super(props)
        console.log(props)
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
					</div>   
					<div className="right">
					<Route path={`${match.path}/tab5`} component={tab5}></Route>
					<Route path={`${match.path}/tab6`} component={tab6}></Route>
					</div>
			    </div>
			</div>
		)
	}
}