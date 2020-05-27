/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = 'https://miniapp.you.163.com'
export const hostM = 'HOST_M'
/* eslint-enable */

// pic
export const CDN = 'https://yanxuan.nosdn.127.net'

//login
export const API_SELLER_LIST = `/xhr/index/index.json`

// home
export const API_HOME = `/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `/xhr/search/displayBar.json`
export const API_HOME_PIN = `${hostM}/pin/min/item/recommend.json`
export const API_HOME_RECOMMEND = `/xhr/rcmd/index.json`

// cate
export const API_CATE = `/xhr/list/category.json`
export const API_CATE_SUB = `/xhr/list/subCate.json`
export const API_CATE_SUB_LIST = `/xhr/list/l2Items2.json`

// cart
export const API_CART = `/xhr/promotionCart/getCarts.json`
export const API_CART_NUM = `/xhr/promotionCart/getMiniCartNum.json`
export const API_CART_RECOMMEND = `/xhr/rcmd/cart.json`
export const API_CART_ADD = `/xhr/promotionCart/add.json`
export const API_CART_UPDATE = `/xhr/promotionCart/update.json`
export const API_CART_UPDATE_CHECK = `/xhr/promotionCart/updateCheck.json`

// user
export const API_USER = `/xhr/user/getDetail.json`
export const API_USER_LOGIN = `/xhr/u/mailLogin.json`
export const API_CHECK_LOGIN = `/xhr/u/checkLogin.json`

// item
export const API_ITEM = `/xhr/item/detail.json`
export const API_ITEM_RECOMMEND = `/xhr/rcmd/itemDetail.json`
