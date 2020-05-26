import React from 'react';
import ReactDOM from 'react-dom';

// import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configStore from './store'

import Router from './Router';
import './index.css';
import * as serviceWorker from './serviceWorker';
// https://blog.csdn.net/awaw00/article/category/6642917 
//原文链接  react学习 http://huziketang.mangojuice.top/books/react/lesson14
//react学习  https://github.com/minooo/React-Study
//react+redux开发详细步骤 https://www.cnblogs.com/tdtdttd/p/11161735.html
//React+Redux基础 https://www.jianshu.com/p/7ee366bdf276
const store = configStore()
// ReactDOM.render(<Router/>, document.getElementById('root'))
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
</Provider>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
