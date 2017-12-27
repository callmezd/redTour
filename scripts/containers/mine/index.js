


import React,{Component} from "react";



import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import { message, Button } from 'antd';
import {changeInfo,change,change2,logout,getme} from "../../actions/index";

@connect(
    (state)=>({
        changeInfo:state.changeInfo,
        url:state.url,
        outshow:state.outshow,
    })
)


export default class Home extends Component{
    componentWillMount(){
        var {dispatch} = this.props;
        if(localStorage.username){
             dispatch(change2(localStorage.username))
        }
    }
    logout=()=>{
        var {dispatch} = this.props;
        message.warning('正在注销',1,()=>{
            dispatch(logout())
        });
    }
    shoucang=()=>{
        var {dispatch} = this.props;
        if(localStorage.username==""){
            message.warning('游客请登录',1,()=>{
                this.props.router.push("/login")
            });
        }else{
          
            this.props.router.push("/my_sc")
        }
    }
    render(){
        const {changeInfo,url,outshow,dispatch} = this.props;
        var list;
            if(localStorage.username!=""){
                list = <b onClick={this.logout}>注销</b>
            }else{
                list=''
            }
        return(
            <div id="mine">
                <div className="top">
                        {list}
                    <div className="userinfo">
                    </div>
                    <Link to={url}>
                        <span>{changeInfo}</span>
                    </Link>
                </div>
                <div className="mid">
                    <div>
                        <i className="iconfont icon-wodeshoucang"  />
                        <span onClick={this.shoucang}>
                                我的收藏
                        </span>    
                    </div>
                    <span className="shu"/>
                    <div>
                        <i className="iconfont icon-xiazai"  />
                        <span>我的下载</span>
                    </div>
                    <span className="shu"/>
                    
                    <div>
                        <i className="iconfont icon-fenxifankuifenxi"  />
                        <span>意见反馈</span>
                    </div>
                </div>

                <div className="bot">
                        <div className="">
                        <Link to="/aboutus">
                        
                            <i className="iconfont icon-guanyuwomen"/>
                            <span >关于我们 </span>
                            <i className="iconfont icon-jiantou"/>
                        </Link>
                        
                        </div>
                        <div className="">
                            <i className="iconfont icon-bangzhuzhongxin"/>
                            <span >帮助中心 </span>
                            <i className="iconfont icon-jiantou"/>
                        </div>
                        <div className="mtop">
                            <i className="iconfont icon-shanchu"/>
                            <span >清除缓存 </span>
                        </div>
                        <div className="">
                            <i className="iconfont icon-gengxin"/>
                            <span >版本更新 </span>
                        </div>
                        <div className="">
                            <i className="iconfont icon-fenxiang"/>
                            <span >分享好友 </span>
                        </div>
                    </div>
                </div>
        )
    }
}