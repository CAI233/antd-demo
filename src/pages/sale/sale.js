import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';

import Contain from './../../components/contain'

import sale1 from './sale1';
import sale2 from './sale2';

class Sale extends React.Component{
    constructor (props) {
        super(props);
    }
	render(){
		const {match,routes} =this.props;
		return(
			<Contain patch={match.path}>
			    <div className="container">
					<div className="left"> 
						<Link to={`/sale/sale4`}>路由sale1</Link>
						<Link to={`/sale/sale5`}>路由sale2</Link>
					</div>   
					<div className="right">
						<Switch>
						<Route 
								exact 
								path={`${match.path}`} 
								component={sale1}
							/>            
							<Route 
								path={`${match.path}/:tabName`} 
								component={sale2}
							/>     
						</Switch>
					</div>
			    </div>
			</Contain>
		)
	}
}
export default Sale;