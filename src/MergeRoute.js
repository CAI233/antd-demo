import React from 'react'
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import FrontendAuth from './FrontendAuth'
import notFound from './pages/notFound'
import { connect } from 'react-redux'

// import Tabbar from './components/tabbar'

class MergeRoute extends React.Component{
    constructor(props) {
        super()
    }

    componentWillMount() {
        // let { history: { replace }, authorization, location } = this.props
        // if (authorization) replace('./login')
        // if (location.pathname === '/') replace('./login')
        console.log('MergeRoute.js===',this.props);
    }

    render(){
        const {routes,supPath} = this.props;
        return (
            <Switch>
                {routes.map((item, i) => <FrontendAuth key={i} {...item} />)}
                {supPath ? '' : <Route component={notFound}/>}
            </Switch>
        )
    }
}
export default MergeRoute;