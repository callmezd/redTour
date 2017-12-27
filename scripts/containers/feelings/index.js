import React,{Component} from "react";
import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_feelings} from "../../actions/index";

@connect(
    (state)=>({
        feelings:state.feelings
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_feelings("/feelings",dispatch))
    }
    render(){
        const {feelings} =this.props;
        if(feelings.length>0){
            var list=feelings.map((item,idx)=>{
                if(item.imageurl){
                    return(
                        <div key={idx} className="botbox">
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
            <div id="feelings">
                {list}
            </div>

        )
    }
}