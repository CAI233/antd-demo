import axios from 'axios';
import qs from 'qs';
import * as ApiIp from './ApiIp';
// import * as apiUrl from './ApiUrl';
import {Toast} from 'antd-mobile';

//原文链接：https://blog.csdn.net/qq_26941173/article/details/84940540
/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//https://www.cnblogs.com/snowhite/p/7872503.html

function getDataFromServer(url, configObj = {},bool = false) {
    console.log(configObj)
    let options = {
        url:url,
        method :'GET',
        params : {},
        data : {},
        timeout : 5000
    };
    options = {...options,...configObj};
    axios.interceptors.request.use(function (config) {
        if(bool){
            config.headers['access_token'] = '';
            config.headers['mobile_key'] = '';
            config.headers['sellerNo_key'] = '';
        }
        if(options.method == 'POST'){
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return config
        }, function (error) {
        return Promise.reject(error)
    });
    //用户传入的接口配置参数
    
    // configObj = {...defaultConfig,...configObj};
    /**
     * 返回的Promise对象含有then、catch方法
     */
    // let pro = new Promise(function (resolve, reject) {
    return new Promise(function (resolve, reject) {
        axios(options).then(function (response) {
            if(response){
                if (response.data) {
                    let data = JSON.parse(response.data);
                    if(data.code == 200){
                        resolve(data);
                    }else{
                        Toast.info(data.details ? data.details : '',2,null,true);
                        reject();
                    }
                }else {
                    Toast.info('返回的数据格式有误',2,null,true)
                    resolve(response);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                Toast.info('服务器错误',2,null,true)
                resolve(response);
            }
        }).catch(function (error) {
            Toast.info('网络异常,请稍后重试',2,null,true)
            reject(error);
        })
    })


}

export function get(url, param= {}){
    return getDataFromServer(`${ApiIp.publicIp+url}`,param);
}

export function post(url,param = {}){
    return getDataFromServer(`${ApiIp.publicIp+url}`,{data:qs.stringify(param),method:'POST'});
}

export function wxget(url, param = {}){
    return getDataFromServer(`${ApiIp.publicIp+url}`,param);
}

export function wxpost(url,param = {}){
    return getDataFromServer(`${ApiIp.publicIp+url}`,{data:qs.stringify(param),method:'POST'});
}
