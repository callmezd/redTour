



import React,{Component} from "react";
import {browserHistory, Route} from 'react-router';
import { message, Button } from 'antd';
import {connect} from 'react-redux';
import {Link,Router} from "react-router";
import {gologin,change,getme} from "../../actions/index";

@connect(
    (state)=>({
        getme:state.getme
    })
)
export default class Home extends Component{
    goBack=()=>{browserHistory.go(-1);}

    componentWillMount(){
        var {dispatch} = this.props;
        dispatch(getme(localStorage.username,dispatch))
    }
    render(){
        const {getme} =this.props;
        var list;
        if(getme.length<=0){
               list = <div>暂无收藏</div>
        }else{
               list=getme.map((item,ind)=>{
                return <div key={ind}>
                <Link to={"/detail?tid="+item.titleid} >
                    <li>
                       <p> {item.titletext}</p>
                    </li>
                </Link>
                </div>
            })
        }
       return(
           <div className="my_sc">
              <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                      onClick={this.goBack}
                    / >
                    我的收藏
                </div>
                <div className="main">
                  {list}
                </div>
           </div>
       )
    }

}