import tab5 from './tab5';
import tab6 from './tab6';

const GoodsRoutes = [
    {
        path:"/goods/tab5",
        component:tab5,
        meta: {title: '销售1',resquire:true,isFoot:true}
    },
    {
        path:"/goods/tab6",
        component:tab6,
        meta: {title: '销售2',resquire:true,isFoot:false}
    }
];
export default GoodsRoutes