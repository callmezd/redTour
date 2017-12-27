var initState = {
    footList:[
        {path:'/home',txt:"首页",icon:"icon-shouye"}
        ,{path:'/feelings',txt:"舆情",icon:"icon-liwu"}
        ,{path:'/travels',txt:"游记",icon:"icon-youji"}
        ,{path:'/mine',txt:"我的",icon:"icon-wo-copy"}
    ],
    midList:[
        {path:'/jd',txt:"景点",icon:"icon-zhongguo"}
        ,{path:'/way',txt:"线路",icon:"icon-map"}
        ,{path:'/food',txt:"美食",icon:"icon-cha"}
        ,{path:'/stay',txt:"住宿",icon:"icon-jiudian"}
    ],
    topList:[],
    botList:[],
    videodata:[],
    youji:[],
    feelings:[],
    meitu:[],
    bannerdata:[],
    detail:{},
    r_info:"",
    l_info:{},
    changeInfo:"立即登录",
    url:"/login",
    outshow:false,
    flag:false,
    xin:{},
    getme:[],
    jd:[],
    way:[],
    food:[],
    stay:[]

}
export default (state=initState,action)=>{
    switch(action.type){
        
        case "cgtitle":
        state.title = action.title;
        return Object.assign({},state);
        break;


        case "change":
        state.changeInfo = action.name;
        localStorage.username=action.name;
        state.url ="";
        return Object.assign({},state);
        break;

        case "change2":
        state.changeInfo = action.name;
        state.url ="";
        return Object.assign({},state);
        break;

        case "logOut":
        state.changeInfo = "立即登录";
        state.url ="/login";
        state.l_info={};
        localStorage.username="";
        return Object.assign({},state);
        break;

        //景区
        case "jd":
        state.jd=action.json;
        return Object.assign({},state);

        
        //改变i
        case "changeflag":
        state.flag = !state.flag;
        return Object.assign({},state);
        break;

        case "bannerdata":
        state.bannerdata = action.json;
        return Object.assign({},state);
        break;
        
        case "v_data":
        state.videodata = action.json;
        return Object.assign({},state);
        break;

        case "detail":
        state.detail = action.json;
        return Object.assign({},state);
        break;

        case "youji":
        state.youji = action.json;
        return Object.assign({},state);
        break;

        case "food":
        state.food = action.json;
        return Object.assign({},state);
        break;

        

        case "stay":
        state.stay = action.json;
        return Object.assign({},state);
        break;


        case "meitu":
        state.meitu = action.json;
        return Object.assign({},state);
        break;
        
        case "r_info":
        state.r_info=action.json;
        return Object.assign({},state);
        break;
        
        case "l_info":
        state.l_info=action.json;
        return Object.assign({},state);
        break;

        case "cg_rinfo":
        state.r_info="3";
        return Object.assign({},state);
        break;

        case "cg_linfo":
        state.l_info={};
        return Object.assign({},state);
     

        case "feelings":
        state.feelings = action.json;
        return Object.assign({},state);
        break;
        
        case "way":
        state.way = action.json;
        return Object.assign({},state);
        break;
        //获取个人所有收藏
        case "getme":
        state.getme=action.json;
        return Object.assign({},state);
        break;

        case "initdetail":
        if(action.json===1){
            state.flag=true
        }
        if(action.json===0){
            state.flag=false
        }
        return Object.assign({},state);
        break;
        case "rdata":
        var arr1=[];
        var arr2=[];
        action.json.map((item,ind)=>{
            if(item.imageurl==""){
                arr1.push(item);
            }else{
                arr2.push(item);
            }
        })
        state.topList=arr1;
        state.botList=arr2;
        return Object.assign({},state);
        break;


        default:
        return Object.assign({},state);
        break;
    }
}