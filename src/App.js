import React,{Component,useEffect, lazy, Suspense} from 'react';
import {HashRouter, Switch,BrowserRouter,Route,useHistory} from 'react-router-dom';
import FrontendAuth from './FrontendAuth';

import ErrorComponent from './components/error'
import Spin from './components/spin'
// const loginPage = lazy( () => import('./pages/login/login'));
// const homePage = lazy( () => import('./pages/Home'));
// const goodsPage = lazy( () => import('./pages/Goods/Goods'));
// const salePage = lazy( () => import('./pages/sale/sale'));
// const notFound = lazy( () => import('./pages/notFound'));
import Login from './pages/login/login';
import Home from './pages/home';
import Goods from './pages/goods/goods';
import Sale from './pages/sale/sale';
import NotFound from './pages/notFound';

const LoginOutBtn = () => {
  let history=useHistory();
  return <button onClick={()=>{history.push("/login")}}>退出登录</button>
}

const Condition = ({ children }) => {
  console.log('children',children)
  return children
}

const PrivateRoute = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <Route   {...rest} render={() => <Condition children={children} />} />
  );
}

export default class BasicRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('app',this.props)
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
                    {/* <FrontendAuth  exact path="/" isFoot={false} Component={Login}/>
                    <FrontendAuth path="/login" isFoot={false} Component={Login} />
                    <FrontendAuth path="/home" isFoot={true} Component={Home} />
                    <FrontendAuth path="/goods" isFoot={true} Component={Goods} />
                    <FrontendAuth path="/sale" isFoot={false} Component={Sale} />
                    <PrivateRoute path="/team" isFoot={false}>
                      <h2>已经登录 可查看-protected</h2>
                      <LoginOutBtn/>
                    </PrivateRoute>
                    <FrontendAuth path="*" isFoot={false} Component={NotFound} /> */}
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" render={(props) => <Home {...props} isFoot={false} />} />
                    <Route path="/goods" component={Goods} />
                    <Route path="/sale" component={Sale} />
                    <PrivateRoute path="/team" isFoot={false}>
                      <h2>已经登录 可查看-protected</h2>
                      <LoginOutBtn/>
                    </PrivateRoute>
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Suspense>
              </ErrorComponent>
        </BrowserRouter>
        
    );
  }
}
