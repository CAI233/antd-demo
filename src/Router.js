import React,{Component} from 'react';
import {HashRouter, Switch,BrowserRouter,Route} from 'react-router-dom';
import {FrontendAuth} from './FrontendAuth';

import Routes from './router/index'

const RouteWithSubRoutes = route => (
  <Route
      path={route.path}
      render={props => (
          // pass the sub-routes down to keep nesting
          // <Route path={path} render={props => <route.component {...withRouter(props)} />}></Route>
          <route.component {...props} routes={route.routes} />
      )}
  />
);

class BasicRouter extends Component {
    render() {
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
            <Switch>
                {Routes.map((route, i) => (
                  // <FrontendAuth key={i} {...route} />
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </BrowserRouter>
      );
    }
  }

export default BasicRouter;