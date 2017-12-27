

import axios from "axios";
// axios.defaults.baseURL = "http://120.78.188.22:8000";
axios.defaults.baseURL = "http://localhost:8000";
export function get_banner(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"bannerdata",json})
        })
}

export function cgtitle(title){
    return {
        type:"cgtitle",
        title
    }
}


export function get_redfort(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"rdata",json})
        })
}

export function get_jd(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"jd",json})
        })
}

export function get_video(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"v_data",json})
        })
}

export function get_youji(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"youji",json})
        })
}

export function get_food(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"food",json})
        })
}

export function get_stay(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"stay",json})
        })
}

export function get_feelings(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"feelings",json})
        })
}

export function get_way(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"way",json})
        })
}




export function get_meitu(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"meitu",json})
        })
}


export function cgdetail(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"detail",json})
        })
}

export function goregister(data,dispatch){
    return axios.post("/register",data)
    .then(res=>{
        return res.data;
    }).then(json=>{
        return dispatch({type:"r_info",json})
    })
   
}
export function gologin(data,dispatch){
    return axios.post("/login",data)
    .then(res=>{
        return res.data;
    }).then(json=>{
        return dispatch({type:"l_info",json})
    })
   
}
export function change(name){
    return {
        type:"change",
        name
    }
}
export function change2(name){
    return {
        type:"change2",
        name
    }
}

export function logout(){
    return {
        type:"logOut"
    }
}

export function changeflag(){
    return {
        type:"changeflag"
    }
}

export function initdetail(data,dispatch){
    return axios.get("/user",{params:data})
    .then(res=>{
        return res.data;
    }).then((json)=>{
        return dispatch({type:"initdetail",json})
        }
    )
}


//获取个人收藏
export function getme(data,dispatch){
    return axios.get("/getme",{params:{data}})
    .then(res=>{
        return res.data;
    }).then((json)=>{
        return dispatch({type:"getme",json})
        }
    )
}

export function cg_rinfo(){
    return{
        type:"cg_rinfo"
    }
}

export function cg_linfo(){
    return{
        type:"cg_linfo"
    }
}