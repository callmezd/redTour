import React,{Component} from "react";

import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_video} from "../../actions/index";

@connect(
    (state)=>({
        videodata:state.videodata
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_video("/hot_video",dispatch))
    }

    render(){
        const {dispatch,videodata} = this.props;
        return(

            <div id="hotvideo">


                 <div id="video-container">
                         <video poster="" src="http://www.redtourism.com.cn/hsly//web/site1/info/47/201612/7886/info_video_788.mp4" controls id="video" >
                             <source src="http://www.redtourism.com.cn/hsly//web/site1/info/47/201612/7886/info_video_788.mp4" type="mp4" />
                         </video>
                 </div>
                       
                
            </div>

        )
    }
}