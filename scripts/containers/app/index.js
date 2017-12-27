


import React,{Component} from "react"
import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {cgtitle} from "../../actions";

import {connect} from "react-redux"

@connect(
    // (state)=>({...state})
)



export default class Wechat extends Component{
    constructor(props){
        super(props)
      
    }
    render(){
        const {dispatch} =this.props;
        
        return (
            <div className='app'>
                <Head/>
                <div className="main">
                    {this.props.children}
                </div>
                <Foot/>
            </div>
        )
    }
    componentDidMount(){
        const {dispatch} =this.props; 
        const {location} = this.props;
        var route = location.pathname.split("/")[1];
        switch(route){
            case "home":
            route = "首页";
            break;
            case "feelings":
            route = "";
            break;
            case "travels":
            route = "游记";
            break;
            case "mine":
            route = "我";
            break; 
            default:
            route="首页";
            break;
        }
        dispatch(cgtitle(route))
        
    }
} 
