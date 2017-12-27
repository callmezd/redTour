


import React,{Component} from "react";



import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_food} from "../../actions/index";
import {browserHistory} from "react-router"

@connect(
    (state)=>({
        food:state.food
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_food("/food",dispatch))
    }
    goBack=()=>{
        browserHistory.go(-1);
    }  
    render(){
        const {food} =this.props;
        if(food.length>0){
            var list=food.map((item,ind)=>{
                return(
                    <div key={ind} className="list">
                        <dt>
                            <img src={item.imageurl}/>
                        </dt>
                            <dd>
                                <h3>{item.titletext}</h3>
                                <p><i className="iconfont icon-dingwei"/>{item.position}</p>
                                <p className="foodinfo">{item.introduce}</p>
                            </dd>
                    </div> 
                )

            })
        }
          
        return(
            <div id="food">
                    
                <div className="top"> 
                    <i className="iconfont icon-jiantou" 
                                onClick={this.goBack}
                            / >
                    美食
                </div>
                <div className="main">
                    {list}
                </div>
            </div>

        )
    }
}