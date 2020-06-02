import React,{ useEffect, lazy, Suspense } from 'react'
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
// import FrontendAuth from './FrontendAuth'

// import { connect } from 'react-redux'

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

// React Lazy + Suspense代码拆分,性能提升( 完成笔记 )
// 0. 目的: 
    // a) ReactLazy: 代码拆分成块,只加载所需的代码,不加载多余的代码,使我们的程序初试加载使更加迅速
    // b) Suspense: 精确抓取组件错误,同时给ReactLazy擦屁股,因为使用ReactLazy会出现错误
    // c) 适合大型项目
// 1. 使用:
// a) ReactLazy:
    // 0. 要与路由组件配合
    // 1. 被Lazy处理过的组件，要嵌套在Suspense组件内, 否则将出错
    // 2. 模型: const HomePage = lazy( () => import('./pages/homepage/homepage.component') );
// b) Suspense:
    // 0. 模型: <Suspense fallback={<Spinner />} > 嵌套路由标签，渲染被lazy加工过的组件 </Suspense>
class MergeRoute extends React.Component{
    constructor (props) {
        super(props)
    }
    handEnter(){
        console.log('进去了')
    }
    render(){
        console.log(this.props)
        // 关于路由render属性的功能( 完成笔记 )
        // 0. 用法: <Route exact path render={()=> <自定义标签 />} >
        // 1. 有render属性则不能有component属性
        // 2. 必需要有exact属性
        // 关于路由Redirect的使用,重定向指定页面( 完成笔记 )
        // 0. 导入Redirect: import { Switch,Route,Link,Redirect } from 'react-router-dom';
        // 1. 使用方式<Redirect to='路由位置'>,直要被渲染将直接跳转指定路由位置
        // 2. 实列( 当用户登陆后,则将无法访问注册/登陆页面 ):
        return (
            
            <div className="merge-container">
                <Switch>
                {
                    //下面的Route是通过懒加载加载进来的，所以渲染页面的时候可能会有延迟，但使用了Suspense之后，可优化交互。
                    //在<Route />外面使用Suspense标签，并在fallback中声明Route加载完成前做的事，即可优化整个页面的交互
                    //fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。
                }
                    <ErrorComponent>
                        <Suspense fallback={<Spin />}>
                            <Route exact path='/' component={login} onEnter={() => this.handEnter()} ></Route>
                            <Route path='/login' component={login} />
                            <Route path='/home' component={home} />
                            <Route path='/goods' component={goods} />
                            <Route path='/sale' component={sale} />
                            {/* <Route  component={notFound}/> */}
                        </Suspense>
                    </ErrorComponent>
                </Switch>
                <Tabbar />
            </div>
        )
    }
}
export default MergeRoute;