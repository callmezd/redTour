



import React,{Component} from "react";
import {browserHistory, Route} from 'react-router';
import { message, Button } from 'antd';
import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import {gologin,change,cg_linfo} from "../../actions/index";

import axios from "axios";
// axios.defaults.baseURL = "http://120.78.188.22:8000";
axios.defaults.baseURL = "http://localhost:8000";
    
@connect(
    (state)=>({
        l_info:state.l_info
    })
)
export default class Home extends Component{
    constructor(porps){
        super(porps)
    }
    goBack=()=>{
        browserHistory.go(-1);
    }
    login=()=>{
        var data={
            username:this.refs.tel.value,
            password:this.refs.pss.value,
        }
        const {dispatch} = this.props;
        // dispatch(gologin(data,dispatch))
        axios.post("/login",data)
        .then(res=>{
            return res.data;
        }).then(json=>{
            console.log(json)
            
            if(json.status=="1"){
                message.success('登录成功正在跳转',1,()=>{
                    this.props.router.push("/mine")
                });
                dispatch(change(json.username))
                
            }
            if(json.status=="0"){
                message.warning('用户名或密码不正确',1);
            }
            
        })
        
    }
    componentDidUpdate(){
        const {l_info,dispatch}=this.props;
        if(l_info.status=='1'){
            dispatch(change(l_info.username))
            var that=this;
            message.success('登录成功正在跳转',1,()=>{
                this.props.router.push("/mine")
                dispatch(cg_linfo())
            });
        }
        if(l_info.status=="0"){
            
            message.warning('用户名或密码不正确',1,()=>{
                dispatch(cg_linfo())
            });
        }
    }
    render(){

        return(
            <div id="login">
                <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                                onClick={this.goBack}
                            / >
                    登录
                </div>
                <div className="rform">
                    <label>
                        <span>手机号</span>
                        <input type="text" ref="tel" placeholder="请输入手机号"/>
                    </label>
                    <label>
                        <span>密码</span>
                        <input type="text" ref="pss" placeholder="请输入密码"/>
                    </label>
                </div>

                <div className="btn">
                    <button onClick={this.login}>
                        登录
                    </button>
                </div>

                <div className="other">
                    <div className="info">
                        <span></span>
                        <p>其他登录方式</p>
                        <span></span>
                    </div>

                    <div className="loginway">
                        <dl>
                            <dt>
                                <i className="iconfont icon-qq"/>
                            </dt>
                            <dd>QQ</dd>
                        </dl>
                        <dl>
                            <dt>
                                <i className="iconfont icon-weibo"/>
                            </dt>
                            <dd>新浪微博</dd>
                        </dl>
                    </div>

                    <div className="toreg">
                        <p>还没有账号？ 
                            <Link to="/register">
                                免费注册
                            </Link>
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}