import React from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom';

import { connect } from 'react-redux'

// import Tabbar from './components/tabbar'

const mapStateToProps = (state, ownProps) => {
   return { token: state.puplic.token}
}

@connect(mapStateToProps)
class FrontendAuth extends React.Component{
    constructor(props) {
        super()
    }
    render(){
        const routeProps = this.props;
        const {meta,location,path,token} = routeProps;
        if(token){
            let isResquire,title,isFoot ;
            if(path != '/' && path != '/login'){//校验是否为首页
                isResquire = meta.resquire;
                title = meta.title;
                isFoot = meta.isFoot;
                if(!token || token==''){
                    return <Redirect to='/' />
                }
            }else{
                title = '登录';
            }
            console.log('routeProps===',routeProps)
            window.document.title = title;
            if(routeProps.exact){
                return <div className="container">
                    <Route exact path={path} render={props => (<routeProps.component {...props} routes={routeProps.routes} />)}/>
                    {/* {isFoot ? <Tabbar path={path}  /> : ''} */}
                </div>
            }else{
                return <div className="container">
                    <Route path={path} render={props => (<routeProps.component {...props} routes={routeProps.routes} />)}/>
                    {/* {isFoot ? <Tabbar path={path}  /> : ''} */}
                </div>
            }
        }else{
            return <Redirect to='/' />
        }
        
        // return <Route path={path} render={props => <routeProps.component {...props} routes={routeProps.routes}  />}></Route>

    //     return <Route
    //     path={path}
    //     render={props => {
    //         console.log(props)
    //         // console.log(route)
    //         return <this.props.component {...props} routes={this.props.routes} />
    //     }}
    // />
        // const routeTo = <Route path={path} render={props => <route.component {...withRouter(props)} />}></Route>
 
        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
        // const targetRouterConfig = config.find((v:any) => v.path === pathname);
        // if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
        //     const { component } = targetRouterConfig;
        //     return <Route exact path={pathname} component={component} />
        // }

        // if(isLogin){
        //     // 如果是登陆状态，想要跳转到登陆，重定向到主页
        //     if(pathname === '/login'){
        //         return <Redirect to='/' />
        //     }else{
        //         // 如果路由合法，就跳转到相应的路由
        //         if(targetRouterConfig){
        //             return <Route path={pathname} component={targetRouterConfig.component} />
        //         }else{
        //             // 如果路由不合法，重定向到 404 页面
        //             return <Redirect to='/404' />
        //         }
        //     }
        // }else{
        //     // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
        //     if(targetRouterConfig && targetRouterConfig.auth){
        //         return <Redirect to='/login' />
        //     }else{
        //         // 非登陆状态下，路由不合法时，重定向至 404
        //         return <Redirect to='/404' />
        //     }
        // }
    }
}
export default withRouter(FrontendAuth)
// export default withRouter(FrontendAuth)