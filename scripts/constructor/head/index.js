import React,{Component} from "react";

import {connect} from 'react-redux';


@connect(
    (state)=>({title:state.title})
)


export default class Home extends Component{
    constructor(porps){
        super(porps)
    }
    render(){
        const {title} = this.props;
        return(
            <div className='head'>{title} </div>
        )
    }
}