import React from 'react';
import {Link,withRouter,Route} from 'react-router-dom';

class sale extends React.Component{
    constructor (props) {
        super(props);
    }
	render(){
		const {match,routes} =this.props;
		return(
			<div className="tab">
			    <div className="top">
					<div className="left"> 
						<Link to={`/sale/sale1`}>路由sale1</Link>
						<Link to={`/sale/sale2`}>路由sale2</Link>
					</div>   
					<div className="right">
					
					</div>
			    </div>
			</div>
		)
	}
}
export default sale;