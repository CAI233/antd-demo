//获取当前的URL中的地址，同时携带端口号,不携带http://
let projectAddrass = window.location.host;
let projectAddrassNoPort = window.location.hostname;
//返回当前的URL协议,既http协议还是https协议
let protocol = document.location.protocol;
//封装请求接口的地址,如果服务器中套了一层性项目名称，需要在这里面添加上,需要留意，例如: /zzxl/
export const interfaceIp = `${protocol}//${projectAddrass}/`;
console.log('protocol===='+protocol);
console.log('projectAddrass===='+projectAddrass);
//LOGO图片的请求地址
export const logoImgAddress = `${protocol}//${projectAddrassNoPort}`;
//对外提供的服务地址
// 同一域名下这样写
// export const publicIp = process.env.NODE_ENV === 'development' ? '' : interfaceIp;
// export const logoImgIp = process.env.NODE_ENV === 'development' ? '' : logoImgAddress;

//不一域名下
export const publicIp = process.env.NODE_ENV === 'development' ? '' : '';

export const logoImgIp = process.env.NODE_ENV === 'development' ? '' : '';
