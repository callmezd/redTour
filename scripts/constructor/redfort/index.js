import React,{Component} from "react";

import Foot from "../../constructor/foot/";
import Head from "../../constructor/head/";
import Banner from "../../constructor/banner/";
import axios from "axios";
import {connect} from 'react-redux';
import {Link} from "react-router";
import { get_redfort,cgtitle } from "../../actions/index";

@connect(
    (state)=>({
        midList:state.midList,
        topList:state.topList,
        botList:state.botList,
    })
)

export default class Home extends Component{
   
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_redfort("/redfort",dispatch))
    }
    nofind() {
        
    }
    render(){
        const {dispatch,botList,topList,midList} = this.props;
        if(botList.length>0){
            var list=botList.map((item,idx)=>{
                if(item.imageurl){
                    return(
                        <div key={idx} className="botbox">
                            <Link to={"/detail?tid="+item.titleid} 
                                 style={{"color":"white"}} 
                            >
                            <div className="right">
                                <img src={item.imageurl[0]}

                               />
                                
                               
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
            <div className='redfort'>
                <div className="main" >
                    <Banner url="/newbanner"  options={{auto:1500,stopPropagation:true}}/>
                </div>

                <div className='tq'>
                <i className="iconfont icon-dingwei"/>
                    <span>
                          成都 阴转小雨14/18
                    </span>
                </div>

                <div className="top">
                    {
                        topList.map((item,idx)=>{
                            return(
                                <div key={idx} className="topbox">
                                   <Link to={"/detail?tid="+item.titleid}>
                                
                                        <div className="title">
                                                <i className="iconfont icon-you"/>
                                                <h3>
                                                    {item.titletext}
                                                </h3>
                                        </div>
                                    </Link>
                                    
                                
                                    <div className="subinfo">
                                        <span className='source'>{item.source}</span>
                                        <span className='tdate'>{item.date}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <div className="mid">
                    {
                        midList.map((item,idx)=>{
                            return(
                                <Link key={idx} to={item.path} className="midLink"
                                    onClick={()=>dispatch(cgtitle(item.txt))}
                                >
                                    <i className={'iconfont '+item.icon}/>
                                    <span>{item.txt}</span>
                                </Link>
                            )
                    }) 
                    }
                </div>

                <div className="bot">
                {list}
            
                </div>
            </div>

        )
    }
}


