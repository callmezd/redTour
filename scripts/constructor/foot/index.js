import React,{Component} from "react";

import {Link} from "react-router";


import {connect} from 'react-redux';

import {cgtitle} from "../../actions";


@connect(
    (state)=>({footList:state.footList})
)


export default class Foot  extends Component{
    static defaultProps={
    }
    render(){
        const {dispatch} = this.props;
        return (
            <div className="foot">
                {
                this.props.footList.map((item,idx)=>{
                        return(
                            <Link key={idx} to={item.path} className="footlink"
                                onClick={()=>dispatch(cgtitle(item.txt))}
                            >
                            <i className={'iconfont '+item.icon}/>
                            <span>{item.txt}</span>
                            </Link>
                        )
                })        
                }
            </div>
        )
    }
}