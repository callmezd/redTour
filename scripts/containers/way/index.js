import React,{Component} from "react";
import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_way} from "../../actions/index";
import {browserHistory} from "react-router"
@connect(
    (state)=>({
        way:state.way
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_way("/way",dispatch))
    }
    goBack=()=>{
        browserHistory.go(-1);
    }  
    render(){
        const {way} =this.props;
        if(way.length>0){
            var list=way.map((item,idx)=>{
                if(item.imageurl){
                    return(
                        <div key={idx} className="box">
                             <Link to={"/detail?tid="+item.titleid} >

                            <div className="right">
                                <img src={item.imageurl[0]}/ >
                            </div>
                            <div className="left">
                            
                                <div className="title">
                                    <h3>
                                        {item.titletext}
                                    </h3>
                                </div>
                                    <div className="subinfo">
                                        <span className='source'>{item.source}</span>
                                        <span className='tdate'>{item.date}</span>
                                    </div>
                            </div>
                            </Link>      
                        </div>
                    )
                }
               
            })
        }
  
        return(
            <div id="way">
                <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                                onClick={this.goBack}
                            / >
                    线路
                </div>
                <div className="main">
                    {list}
                </div>
            </div>

        )
    }
}