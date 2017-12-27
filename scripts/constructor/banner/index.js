

import React,{Component} from "react"
import axios from "axios";

import ReactSwipe from "react-swipe"; 

import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_banner} from "../../actions/index";
import {cg_detail} from "../../actions/index";


@connect(
    (state)=>({
        bannerdata:state.bannerdata
    })
)

export default class Banner extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_banner("/newbanner",dispatch))
        
    }

    render(){
        const {bannerdata} = this.props;
        const slide = bannerdata.map((item,i)=>{
            if(bannerdata.length>0){
                    if(item.imageurl.length>0){
                        return (
                            <div className="slide" key={i}>
                                <Link to={"/detail?tid="+item.titleid} >
                                    <img className="img" src={item.imageurl[0]}  data-tid={item.titleid}/>
                                </Link>
                            </div>
                        )
                    }
            }
        })
    
        const {options} =this.props;
        return (
            <div style={{width:"100%"}}>
                <ReactSwipe key={slide.length}   swipeOptions={options}>
                      {slide}                     
                </ReactSwipe>
            </div>
        )
    }
} 

