

import React,{Component} from "react";

import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import { message, Button } from 'antd';
import axios from "axios";

import {browserHistory} from "react-router";
import {get_jd} from "../../actions"

@connect(
    (state)=>({
        jd:state.jd
    })
)


export default class Home extends Component{
    goBack=()=>{
        browserHistory.go(-1);
    }

    componentWillMount(){
        var {dispatch} = this.props;
        dispatch(get_jd("/jd",dispatch))
    }
    render(){
        var {dispatch,jd} = this.props;
        if(jd){
            var list=jd.map((item,ind)=>{
               return(

                <li key={ind} className="list">
                        <dt>
                            <img src={item.imageurl}/>
                        </dt>
                        <dd>
                             <h3>{item.titletext}</h3>
                            <span>{item.position}</span>
                         </dd>
                </li>
               )
            })
        }
        return(
            <div id="jd">
               <div className="dhead">
                    <i className="iconfont icon-jiantou" 
                         onClick={this.goBack}
                    / >
               </div>  
               <div className="main">
                   {list}
               </div> 
            </div>

        )
    }
}