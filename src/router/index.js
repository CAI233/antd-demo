
import login from './../pages/login/login';
import home from './../pages/home';
import {goods} from './../pages/goods';


const Routes = [
    {
        path:'/',
        exact:true,
        redirect:'/login',
        component:login
    },
    {
        path:'/login',
        name:'登录',
        component:login,
        meta: {title: '登录页',resquire:false}
    },
    {
        path:'/home',
        name:'首页',
        component:home,
        meta: {title: '首页',resquire:true}
    },
    {
        path:'/goods',
        name:'商品',
        title:'首页',
        component:goods,
        meta: {title: '商品页',resquire:true}
    }
]

export default Routes