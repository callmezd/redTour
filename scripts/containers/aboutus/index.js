

import React,{Component} from "react";

import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import { message, Button } from 'antd';
import axios from "axios";

import {browserHistory} from "react-router";
import {cgdetail,cgsc,cgflag,initdetail, change,changeflag} from "../../actions"

@connect(
    (state)=>({
        detail:state.detail,
        flag:state.flag,
        xin:state.xin
    })
)


export default class Home extends Component{
    goBack=()=>{
        browserHistory.go(-1);
    }

    render(){
    
        return(
            <div id="aboutme">
               <div className="dhead">
                    <i className="iconfont icon-jiantou" 
                         onClick={this.goBack}
                    / >
               </div>   
                    <div className="main">
                    <div className="logo">
                      <i className="iconfont icon-matafeiyan"/>
                      
                    </div><h3>中国旅游网</h3>
                      <h4>www.redtourism.com.cn</h4>
                      <p>
                        中国红色旅游网由国家旅游局主管，全国红色旅游工作协调小组办公室
                        业务指导，中国旅游报社主办，深圳远见旅游实业发展有限公司合作运
                      </p>
                          <p>市场合作:010-85166417</p>
                          <p>内容合作: 010-85166443</p>
                          <p>版本号: V1.1.3 for Android</p>
                    </div>
               

            </div>

        )
    }
}