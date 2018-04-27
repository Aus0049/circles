/**
 * Created by Aus on 2018/3/1.
 */
import React from 'react';
import { hydrate, render } from 'react-dom';
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import { BrowserRouter as Router, } from "react-router-dom"
import {Provider} from "react-redux"

import reducer from "./store/reducers/"
import Routes from "./route"

import '../public/style/index.scss';
import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.min.css';

// createStore
const middleware = [thunk, reduxLogger];

const store = createStore(
    reducer,
    window.__INITIAL_STATE__,
    compose(
        applyMiddleware(...middleware),
    )
);

// 方便调试 留个后门
window.__state__ = store.getState();

// 开发环境下 开启开发工具调试
if (__DEV__) {
    if (window.devToolsExtension) {
        window.devToolsExtension.open()
    }
}

// 配置抽离
require('./config/axios');

// 处理客户端渲染和服务端渲染切换
const currentRender = module.hot ? render : hydrate ;

currentRender(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
