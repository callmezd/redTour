


import React,{Component} from "react";
import {browserHistory, Route} from 'react-router';
import { message, Button } from 'antd';
import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import {goregister,cg_rinfo} from "../../actions/index";

@connect(
    (state)=>({
        r_info:state.r_info
    })
)


export default class Home extends Component{
    constructor(porps){
        super(porps)
    }
    goBack=()=>{
        browserHistory.go(-1);
    }
    
    register=()=>{
        if(this.refs.tel.value.length!=11){
            message.warning('手机号不正确',1,()=>{
            });
        }else if(this.refs.pss1.value!=this.refs.pss2.value){
            message.warning('两次密码不一致',1);
        }else{
            var data={
                username:this.refs.tel.value,
                password:this.refs.pss1.value,
            }
            var _this=this;            
            message.info('正在注册',1,()=>{
                const {dispatch} = _this.props;
                dispatch(goregister(data,dispatch))
            });
        }
    }


    componentDidUpdate(){
        const {r_info}=this.props;
        var _this=this;
        if(r_info=="1"){
            message.success('注册成功',1,()=>{
                _this.props.router.push("/login")
                const {dispatch} = _this.props;
                dispatch(cg_rinfo())
            });
        }
        if(r_info=="0"){
            message.info('用户名已存在换一个吧',1,()=>{
                const {dispatch} = _this.props;
                dispatch(cg_rinfo())
            });
            
            
        }
    }
    render(){
        return(
            <div id="register">
                <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                                onClick={this.goBack}
                            / >
                    注册
                </div>

                <div className="rform">
                    <label>
                        <span>手机号</span>
                        <input type="text" ref="tel" placeholder="请输入手机号"/>
                    </label>

                    <label>
                        <span>密码</span>
                        <input type="text" ref="pss1" placeholder="密码"/>
                    </label>

                    <label>
                        <span>确认密码</span>
                        <input type="text" ref="pss2" placeholder="确认密码"/>
                    </label>
                </div>

                <div className="btn">
                    <button onClick={this.register}>
                            注册
                    </button>
                </div>
            </div>
        )
    }

}