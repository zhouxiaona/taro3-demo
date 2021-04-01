import Taro from "@tarojs/taro"
import * as Api from './servers'
import { getCurrentPageUrl } from '../utils'
import { HTTP_STATUS } from './config'

const customInterceptor = (chain) => {
	const requestParams = chain.requestParams
	return chain.proceed(requestParams).then(async res => {
		// 只要请求成功，不管返回什么状态码，都走这个回调
		if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
			return Promise.reject("请求资源不存在")

		} else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
			return Promise.reject("服务端出现了问题")

		} else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
			return Promise.reject("没有权限访问");

		} else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
			return Promise.reject("需要鉴权")

		} else if (res.statusCode === HTTP_STATUS.SUCCESS) {
			/**
			 * token失效过期重新Taro.login()获取新的code换取token值存入缓存,继续之前的请求流程
			 */
			Taro.hideLoading()
			if (res.data.code == 0) {
				console.log(getCurrentPageUrl(), '--getCurrentPageUrl()--')
				Taro.removeStorageSync('token')
				await Api.authLogin()
				if (getCurrentPageUrl().includes('login')) {
					Taro.navigateBack()
				} else {
					Taro.reLaunch({ url: `/${getCurrentPageUrl()}` })
				}
			} else {
				return res.data
			}
		}
	})
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]
export default interceptors
