
// import notFound from './../pages/notFound'
// import login from './../pages/login/login';
// import home from './../pages/home';
// import goods from './../pages/goods/goods';
// import sale from './../pages/sale/sale';

// export const Routes = () => (
//     <Switch>
//         <Route path='/' exact component={login}/>
//         <Route path='/login' component={login}/>
//         <Route path='/home' component={home}/>
//         <Route path='/goods' component={goods}/>
//         <Route path='/sale' component={sale}/>
//         <Route component={notFound}/> 
//     </Switch>    
// )
// import asyncComponent from './../components/asyncComponent'
import login from './../pages/login/login';
import home from './../pages/home';
import goods from './../pages/goods/goods';
import goodshome from './../pages/goods/goodshome';
import sale from './../pages/sale/sale';
import tab5 from './../pages/goods/tab5';
import tab6 from './../pages/goods/tab6';

// import sale1 from './../pages/sale/sale1';
// import sale2 from './../pages/sale/sale2';
const Routes = [
    {
        path:'/',
        exact:true,
        redirect:'/login',
        component:login
    },
    {
        path:'/login',
        name:'login',
        component:login,
        meta: {title: '登录',resquire:false}
    },
    {
        path:'/home',
        name:'home',
        component:home,
        meta: {title: '首页',resquire:true,isFoot:true}
    },
    {
        path:'/goods',
        name:'goods',
        component:goods,
        meta: {title: '商品',resquire:true,isFoot:true},
        routes:[
            {
                path:"/goods/tab5",
                component:tab5,
                meta: {title: '销售1',resquire:false,isFoot:false}
            },
            {
                path:"/goods/tab6",
                component:tab6,
                meta: {title: '销售2',resquire:true,isFoot:true}
            }
        ]
    },
    {
        path:'/goodshome',
        name:'goodshome',
        component:goodshome,
        meta: {title: 'goodshome',resquire:true,isFoot:true}
    },
    {
        path:'/sale',
        name:'sale',
        component:sale,
        meta: {title: '销售',resquire:true,isFoot:true},
        routes:[
            // {
            //     path:"/sale1",
            //     component:sale1,
            //     meta: {title: '销售1',resquire:true,isFoot:true}
            // },
            // {
            //     path:"/sale2",
            //     component:sale2,
            //     meta: {title: '销售2',resquire:true,isFoot:false}
            // }
        ]
    }
]
export default Routes