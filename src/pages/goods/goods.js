import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Contain from './../../components/contain'
import Tab5 from './tab5';
import Tab6 from './tab6';

class Goods extends React.Component{
    constructor (props) {
        super(props)
	}

	render(){
		const {match,isFoot} =this.props;
		return(
			<Contain patch={match.path}>
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
						<Route path={`${match.path}/tab5`} render={(props) => <Tab5 {...props} />}></Route>
						<Route path={`${match.path}/tab6`} render={(props) => <Tab6 {...props}/>}></Route>
					</Switch>
					</div>
			    </div>
			</Contain>
		)
	}
}
export default Goods