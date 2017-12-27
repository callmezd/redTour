
import React,{Component} from "react";

import {render} from  "react-dom";
import axios from "axios";



var app =document.getElementById("app");


import{
    browserHistory,
    hashHistory,
    Router,
    Route,
    IndexRedirect,
    Redirect
} from "react-router";

import Home from "./home/";
import Feelings from "./feelings/";
import Travels from "./travels/";
import Mine from "./mine/";
import Login from "./login/";
import Register from "./register/";
import Detail from "./detail/";
import App from "./app/";
import My_sc from "./my_sc/";
import Aboutus from "./aboutus/";
import Jd from "./jd/";
import Way from "./way/";
import Food from "./food/";
import Stay from "./stay/";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export default class Layout extends Component{
    render(){
        return (
                <ReactCSSTransitionGroup
                transitionLeaveTimeout = {3000}
                transitionEnterTimeout = {3000}
                transitionName = {
                    {
                        enter: 'bounce',
                        leave: 'leave',
                    }
                }
                >
                    <Router history={hashHistory}>
                    <Redirect from="/b" to="/" />
                        <Route path="/" component={App}>
                            <IndexRedirect to="/home" />
                            <Route path="/home" component={Home}>
                            </Route>  
            
                            <Route path="/Feelings" component={Feelings}>
                            </Route>
            
                            <Route path="/travels" component={Travels}>
                            </Route>
            
                            <Route path="/mine" component={Mine}>
                            </Route>
                        </Route>
                            <Route path="/jd" component={Jd}/>
                            <Route path="/detail(/:tid)" component={Detail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/my_sc" component={My_sc}/>
                            <Route path="/aboutus" component={Aboutus}/>
                            <Route path="/way" component={Way}/>
                            <Route path="/food" component={Food}/>
                            <Route path="/stay" component={Stay}/>
                    </Router>

                     </ReactCSSTransitionGroup>
                )
    }
}