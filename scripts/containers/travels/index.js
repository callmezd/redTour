


import React,{Component} from "react";



import Foot from "../../constructor/foot/"
import Head from "../../constructor/head/"
import {connect} from 'react-redux';
import {Link} from "react-router";
import {get_youji} from "../../actions/index";

@connect(
    (state)=>({
        youji:state.youji
    })
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_youji("/youji",dispatch))
    }
    render(){
        const {youji} =this.props;
        if(youji.length>0){
            var list=youji.map((item,ind)=>{
                if(item.imageurl)
                return(
                    <div key={ind} className="list">
                         <Link to={"/detail?tid="+item.titleid} >

                        <dt>
                            <img src={item.imageurl[0]}/>
                        </dt>
                            <dd>
                                <h3>{item.titletext}</h3>
                                <span>{item.source}</span>
                                <span>{item.date}</span>
                            </dd>
                        </Link>
                    </div> 
                )

            })
        }
          
        return(
            <div id="travels">
                {list}
            </div>

        )
    }
}