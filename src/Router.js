import React,{Component} from 'react';
import {HashRouter, Switch,BrowserRouter} from 'react-router-dom';
import {FrontendAuth} from './FrontendAuth';

import Routes from './router/index'

const RouteWithSubRoutes = (route) => (
    <FrontendAuth {...route} />
  )
class BasicRouter extends Component {
    render() {
      return (
        //带#号
        // <HashRouter history={BrowserRouter }>
        //     <Switch>
        //         {Routes.map((route, i) => (
        //                 <RouteWithSubRoutes key={i} {...route}/>
        //         ))}
        //     </Switch>
        // </HashRouter>
        //不带#号
        <BrowserRouter history={HashRouter }>
            <Switch>
                {Routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </BrowserRouter>
      );
    }
  }

export default BasicRouter;