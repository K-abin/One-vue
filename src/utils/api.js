import axios from "axios";
import {Message} from "element-ui";

axios.interceptors.response.use(success=>{
    if (success.status && success.status == 200 && success.data.status == 500){
        Message.error({message:success.data.msg})
        return;
    }
    return success.data;
},error =>{
    if (error.response.status == 504||error.response.status == 404){
        Message.error({message:'服务器挂了'})
    }else if (error.response.status == 403){
        Message.error({message:'权限不足，请登录'})
    }else {
        if (error.response.data.msg){
            Message.error({message: error.response.data.msg})
        }else {
            Message.error({Message:'未知错误'})
        }
    }
    return;
})
export const  postKeyValueRequest=(url,param)=>{
    return axios({
        method: 'post',
        url: url,
        data: param,
        transformRequest:[function (data){
            let ret = '';
                for(let i in data){
                    ret+=encodeURIComponent(i)+`=`+encodeURIComponent(data[i]+`&`)
                }
                console.log(ret);
            return ret;

        }],
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    });
}

export const postRequest=(url,param)=>{
    return axios({
        method: 'post',
        url: 'url',
        data: param
    })
}

export const putRequest=(url,param)=>{
    return axios({
        method: 'put',
        url: 'url',
        data: param
    })
}

export const getRequest=(url,param)=>{
    return axios({
        method: 'get',
        url: 'url',
        data: param
    })
}

export const delRequest=(url,param)=>{
    return axios({
        method: 'delete',
        url: 'url',
        data: param
    })
}
