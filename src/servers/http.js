import Taro from '@tarojs/taro'
import interceptors from './interceptors'

/**
 * 请求拦截配置
 */
interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

/**
 * 接口域名配置
 * development: 本地开发
 * production: 线上域名
 */
let baseUrlConfig = {
	"development": 'https://xxx',
	"production": 'https://xxx',
}
console.log(process.env.NODE_ENV, '--process.env.NODE_ENV--')
const baseUrl = baseUrlConfig[process.env.NODE_ENV]

class httpRequest {
	baseOptions(params, method = "GET") {
		Taro.showLoading({ title: '加载中...' })
		let { url, data } = params;
		let contentType = params.contentType || "application/json";
		const option = {
			url: baseUrl + url,
			data: data,
			method: method,
			header: {
				'content-type': contentType,
				'school_library_token': Taro.getStorageSync('token')
			},
		};
		return Taro.request(option);
	}

	get(url, data = "") {
		let option = { url, data };
		return this.baseOptions(option);
	}

	post(url, data, contentType = 'application/x-www-form-urlencoded') {
		let params = { url, data, contentType };
		return this.baseOptions(params, "POST");
	}

	put(url, data = "") {
		let option = { url, data };
		return this.baseOptions(option, "PUT");
	}

	delete(url, data = "") {
		let option = { url, data };
		return this.baseOptions(option, "DELETE");
	}
}
export default new httpRequest()
