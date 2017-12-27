


import React,{Component} from "react";



import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_stay} from "../../actions/index";
import {browserHistory} from "react-router"

@connect(
    (state)=>({
        stay:state.stay
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_stay("/stay",dispatch))
    }
    goBack=()=>{
        browserHistory.go(-1);
    }  
    render(){
        const {stay} =this.props;
        if(stay.length>0){
            var list=stay.map((item,ind)=>{
                return(
                    <div key={ind} className="list">
                        <dt>
                            <img src={item.imageurl}/>
                        </dt>
                            <dd>
                                <h3>{item.titletext}</h3>
                                <p className="stayinfo"><i className="iconfont icon-dingwei" />{item.position}</p>
                                <p className="foodinfo">{item.introduce}</p>
                            </dd>
                    </div> 
                )

            })
        }
          
        return(
            <div id="stay">
                    
                <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                                onClick={this.goBack}
                            / >
                    住宿
                </div>
                <div className="main">
                    {list}
                </div>
            </div>

        )
    }
}