import axios from 'axios';
import * as apiUrl from './ApiUrl';
import {Toast} from 'antd-mobile';

//原文链接：https://blog.csdn.net/qq_26941173/article/details/84940540
/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */
function getDataFromServer(url, configObj = {}) {

    //用户传入的接口配置参数
    let defaultConfig = {
        method :'GET',
        params : {},
        data : {},
        timeout : 5000
    } ;

    configObj = {...defaultConfig,...configObj};
    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url: url,
            method: configObj.method,
            params: configObj.params,
            data: configObj.data,
            timeout: configObj.timeout,
            headers: {
                'Content-Type': 'application/json',
                // 'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {

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
//获取渠道
export function getSellerList(configObj){
    return getDataFromServer(apiUrl.GetSeller,configObj);
}

// 登录
export function loginClick(configObj) {
    return getDataFromServer(apiUrl.LOGIN, configObj);
}