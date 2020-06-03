import {SELLER_LIST,SHOW_FOOTER} from './../constants/puplic'
import {API_SELLER_LIST} from './../constants/api'
import { createAction } from './../utils/http'
/**
   * 首页数据
   * @param {*} payload
   */
export const dispatchSeller = payload => createAction({
    url: API_SELLER_LIST,
    type: SELLER_LIST,
    payload
})
export const dispatchIsFooter = bool => ({
    type: SHOW_FOOTER,
    isFoot:bool
})