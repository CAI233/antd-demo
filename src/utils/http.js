
import axios from 'axios';
import qs from 'qs';
import {host} from './../constants/api'
// const host = HOST

function requestHttp(options) {
    const { url, payload, method = 'GET', showToast = true, autoLogin = true } = options
    const header = {};
    if (method == 'POST') {
      header['content-type'] = 'application/json'
    }
    console.log('进去了')
    return axios({
        url:host+url,
        method,
        data: payload,
        header
    }).then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        console.log(err);
        // const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
        const defaultMsg = '';
        return Promise.reject({ message: defaultMsg, ...err })
    })
  }


export function createAction(options) {
    const { url, payload, method, fetchOptions, cb, type } = options
    return (dispatch) => {
        console.log('dispatch')
        return requestHttp({ url, payload, method, ...fetchOptions }).then((res) => {
            dispatch({ type, payload: cb ? cb(res) : res })
            return res
        })
    }
}