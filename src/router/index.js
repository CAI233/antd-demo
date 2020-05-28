import login from './../pages/login/login';
import home from './../pages/home';
import {goods} from './../pages/goods';
import tab6 from './../pages/goods/tab6';
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
                path:'/goods/goods1',
                name:'goods1',
                title:'商品页面1',
                component:tab6,
                meta: {title: '商品页面1',resquire:true,isFoot:true},
            }
        ]
    }
]

export default Routes