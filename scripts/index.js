

var app = document.getElementById('app');

import Layout from "./containers"; //路由

import '../styles/index.scss';
import '../libs/flexible';


import React from 'react';

import {render} from 'react-dom';

import store from './store';

import {Provider} from 'react-redux';

var hotRender = ()=>{
    render(
        <Provider store={store}>
            <Layout/>
        </Provider>,
        app
    )
}

hotRender()