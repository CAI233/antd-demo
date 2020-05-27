
import axios from 'axios';
// import qs from 'qs';

function requestHttp(options) {
    const { url, payload, method = 'GET', showToast = true, autoLogin = true } = options
    const header = {};
    if (method == 'POST') {
      header['content-type'] = 'application/json'
    }
    console.log(url)
    return axios({
        url:'/api'+url,
        method,
        data: payload,
        header
    }).then((res) => {
        const { code, data } = res.data;
        if(code == 200){
            return data
        }
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