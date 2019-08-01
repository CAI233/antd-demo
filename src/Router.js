import React,{Component} from 'react';
import {HashRouter, Route, Switch,BrowserRouter ,withRouter} from 'react-router-dom';
import {FrontendAuth} from './FrontendAuth';

import Routes from './router/index'

const RouteWithSubRoutes = (route) => (
    // <Route path={route.path} render={props => (
    //     // pass the sub-routes down to keep nesting
    //     <route.component {...withRouter(props)} />
    //     //<route.component {...props} routes={route.Routes}/>
    // )}/>
    <FrontendAuth {...route} />
    // <Route path={route.path} render={props => {
    //     // document.title = route.meta.title ;
    //     // return <route.component {...withRouter(props)} />
    //     return <FrontendAuth config={route} />
    //     // 等价于
    //     //return <route.component {...withRouter(props)} />
    //     }
    // }/>
  )

// const BasicRoute = () => (
    // <HashRouter history={BrowserRouter }>
    //     <Switch>
    //         {/* <Route exact path="/" component={Home}/>
    //         <Route exact path="/detail/:id" component={Detail}/> */}
    //          {Routes.map((route, i) => (
    //                 <RouteWithSubRoutes key={i} {...route}/>
    //           ))}
    //     </Switch>
    // </HashRouter>
// );
class BasicRouter extends Component {
    render() {
      return (
        <HashRouter history={BrowserRouter }>
            <Switch>
                {/* <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:id" component={Detail}/> */}
                {Routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </HashRouter>
      );
    }
  }

export default BasicRouter;