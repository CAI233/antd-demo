import React,{Component,useEffect, lazy, Suspense} from 'react';
import {HashRouter, Switch,BrowserRouter,Route} from 'react-router-dom';
import FrontendAuth from './FrontendAuth';

import ErrorComponent from './components/error/error'
import Spin from './components/spin/spin'
import Tabbar from './components/tabbar/tabbar'
// const loginPage = lazy( () => import('./pages/login/login'));
// const homePage = lazy( () => import('./pages/home'));
// const goodsPage = lazy( () => import('./pages/goods/goods'));
// const salePage = lazy( () => import('./pages/sale/sale'));
// const notFound = lazy( () => import('./pages/notFound'));
import login from './pages/login/login';
import home from './pages/home';
import goods from './pages/goods/goods';
import sale from './pages/sale/sale';
import notFound from './pages/notFound';

export default class BasicRouter extends Component {
  render() {
    return (
        /* 带#号 */
        /* <HashRouter history={BrowserRouter }>
            <Switch>
                {Routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </HashRouter> */
        /* 不带#号 */
        <BrowserRouter history={HashRouter }>
              <ErrorComponent>
                <Suspense fallback={<Spin />}>
                <Switch>
                  <FrontendAuth exact path="/" isFoot={false} Component={login} />
                  <FrontendAuth path="/login" isFoot={false} Component={login} />
                  <FrontendAuth path="/home" isFoot={true} Component={home} />
                  <FrontendAuth path="/goods" isFoot={false} Component={goods} />
                  <FrontendAuth path="/sale" isFoot={true} Component={sale} />
                  <FrontendAuth path="*" isFoot={false} Component={notFound} />
                  {/* <Route exact path="/" component={login} />
                  <Route path="/login" component={login} />
                  <Route path="/home" component={home} />
                  <Route path="/goods" component={goods} />
                  <Route path="/sale" component={sale} />
                  <Route path="*" component={notFound} /> */}
                </Switch>
                <Tabbar />
                </Suspense>
              </ErrorComponent>
        </BrowserRouter>
        
    );
  }
}
