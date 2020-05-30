import React from 'react';
import ReactDOM from 'react-dom';

// import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configStore from './store'

import BasicRouter from './app.js';
import './index.css';
import * as serviceWorker from './serviceWorker';
//解决跨域 https://blog.csdn.net/weixin_44415625/article/details/87607924
// https://blog.csdn.net/awaw00/article/category/6642917 
//原文链接  react学习 http://huziketang.mangojuice.top/books/react/lesson14
//react学习  https://github.com/minooo/React-Study
//react+redux开发详细步骤 https://www.cnblogs.com/tdtdttd/p/11161735.html
//React+Redux基础 https://www.jianshu.com/p/7ee366bdf276
//react-redux的使用采用@connect修饰器 https://blog.csdn.net/qq_38474685/article/details/81388205?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.nonecase
//React Router 使用教程 阮一峰 http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
//嵌套子路由 https://www.jianshu.com/p/e05ed8b6e76e
const store = configStore()
// ReactDOM.render(<Router/>, document.getElementById('root'))
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <BasicRouter/>
    </BrowserRouter>
</Provider>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
