import * as ApiIp from './ApiIp';
// 登录
console.log(ApiIp.publicIp);
export const GetSeller = `${ApiIp.publicIp}/API/GetSellerList`
export const LOGIN = `${ApiIp.publicIp}/index/captcha`;
