/* eslint-disable import/prefer-default-export */
import Taro from "@tarojs/taro";
import HTTPREQUEST from "./http"
import store from '../store/index'

// 取消点赞
export const cancelCommend = (commentId) => {
	return HTTPREQUEST.post('/index/cancelCommend', { commentId })
}

// configLink.json
export const getJsonData = () => {
	return HTTPREQUEST.get('/configLink.json', {})
}




