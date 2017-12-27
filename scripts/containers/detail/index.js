

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
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(cgdetail("/newdetail?tid="+this.props.location.query.tid,dispatch))
        var tid=this.props.location.query.tid;
        var name = localStorage.username;
        var data={
            tid,name
        }
        if(localStorage.username){
            dispatch(initdetail(data,dispatch))
        }
    }
    sc=()=>{
        const {dispatch,flag} = this.props;
        if(localStorage.username!=""){
            if(!flag){

                var tid=this.props.location.query.tid;
                var name = localStorage.username;
                var data={
                    tid,name
                }
                axios.post("/user",data)
                    .then(res=>{
                        return res.data;
                    }).then(()=>{
                        message.success('收藏成功',1)
                        dispatch(changeflag(dispatch))
                    }
                )   
            }else{
                    var tid=this.props.location.query.tid;
                    var name = localStorage.username;
                    var data={
                        tid,name
                    }
                    axios.post("/update",data)
                    .then(res=>{
                        return res.data;
                    }).then(()=>{
                        message.warning('取消收藏',1)
                        dispatch(changeflag(dispatch))
                    }
                )       
            }

        }else{
            message.warning('游客请登录',1,()=>{
                this.props.router.push("/login")
            });
        }
    }
    render(){
        const  {detail,flag} = this.props;
        if(detail.length>0){
            var list=detail.map((item,ind)=>{
                var str = item.content;
                var str1 = item.titletext;
                    if(this.refs.one){
                        this.refs.one.innerHTML=str;
                    }
                    if(this.refs.title){
                        this.refs.title.innerHTML=str1;
                    }
            })
        }
        return(
            <div id="detail">
               <div className="dhead">
                    <i className="iconfont icon-jiantou" 
                         onClick={this.goBack}
                    / >
               </div>   
                    <div className="main">
                        <h3 ref="title"></h3>
                        <div ref="one"></div>
                    </div>
                <div className="dfoot"> 
                    <div className='right'>
                        <i className={flag?"iconfont icon-20151209tubiaolianxizhuanhuan22":"iconfont icon-xin1"}
                            onClick={this.sc}
                        /> 
                        <i className="iconfont icon-pinglun"/ >
                        <i className="iconfont icon-zitidaxiao"/ >
                    </div>
                    
                </div>

            </div>

        )
    }
}