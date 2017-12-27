import React,{Component} from "react";



import Foot from "../../constructor/foot/";
import Head from "../../constructor/head/";
import Banner from "../../constructor/banner/";
import "../../../libs/swiper-3.3.1.min";
import Redfort from "../../constructor/redfort/";
import Scenery from "../../constructor/scenery/";
import Hotvideo from "../../constructor/hotvideo/";

export default class Home extends Component{
    constructor(porps){
        super(porps)
        this.state={
            swiperIndex:0
        }
    }
    static defaultProps={
        nav:[
            {path:"",txt:"红色要塞"},
            {path:"",txt:"景区美图"}
        ]
    }
    changeIndex=(idx)=>{
        this.mySwiper.slideTo(idx);
    }
    render(){
        const {nav} = this.props;
        const {swiperIndex} = this.state
        return(
            <div id="home">
                <div className="nav">
                   {
                       nav.map((item,index)=>{
                            return(
                                <div id="nav" key={index} onClick={()=>this.changeIndex(index)} className={swiperIndex==index?"active":""}>
                                    {item.txt}
                                </div>
                            )
                       })
                   }
                </div>
                <div className="swiper-container" id="swipe">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide mt-2 slide1" >
                            <Redfort
                                url="/redfort"
                            />
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <Scenery/>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const {swiperIndex} = this.state;
        var that = this;
        const {...nav} = this.props;
        var newarr=[]
        this.props.nav.map((item,ind)=>{
            newarr.push(item.txt)
        })
        setTimeout(()=>{
            that.mySwiper = new Swiper("#swipe",{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                resistanceRatio:0,
                calculateHeight:true,
                initialSlide:0,
                paginationClickable: true,
                autoHeight:true,
                observer:true,
                observeParents:true,
                onSlideChangeEnd(swiper){
                    that.setState({
                        swiperIndex:swiper.activeIndex
                    })
                }    
            });
        },500)
    }
}