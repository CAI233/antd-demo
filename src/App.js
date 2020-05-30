import React,{Component} from 'react';
import {HashRouter, Switch,BrowserRouter,Route} from 'react-router-dom';
// import FrontendAuth from './FrontendAuth';
// import notFound from './pages/notFound'
import MergeRoute from './MergeRoute'
import Routes from './router'
const RouteWithSubRoutes = route => (
  <Route
      path={route.path}
      render={props => (
          // pass the sub-routes down to keep nesting
          // <Route path={path} render={props => <route.component {...withRouter(props)} />}></Route>
          // <route.component {...props} routes={route.routes} /> 
          <route.component {...props} /> 
      )}
  />
);

export default class BasicRouter extends Component {
  render() {
    console.log('app.js====',this.props)
    return (
      //带#号
      // <HashRouter history={BrowserRouter }>
      //     <Switch>
      //         {Routes.map((route, i) => (
      //           <RouteWithSubRoutes key={i} {...route}/>
      //         ))}
      //     </Switch>
      // </HashRouter>
      //不带#号
      <BrowserRouter history={HashRouter }>
          <MergeRoute routes={Routes}/>
          {/* <Switch>
            {Routes.map((route, i) => (
              <FrontendAuth key={i} {...route} />
            ))}
            <Route component={notFound}/> 
          </Switch> */}
      </BrowserRouter>
    );
  }
}
