import { Component } from 'react'
import { View, Button, Text, Input, Swiper, SwiperItem, Image, Picker } from '@tarojs/components'
import Taro from "@tarojs/taro";
import * as Api from '../../servers/servers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions'
import './index.less'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	async componentDidShow() { }

	componentDidHide() { }

	onLoad() {
		Taro.hideShareMenu()
	}

	// 下拉加载
	async onReachBottom() { }

	// 获取手机号
	// onGetPhoneNumber = async (e) => {
	// 	console.log(e, '---e---')
	// 	console.log(e.detail.errMsg)
	// 	console.log(e.detail.iv)
	// 	console.log(e.detail.encryptedData)
	// 	if (e.detail.iv && e.detail.encryptedData) { // 手机号授权成功
	// 		let { data: { code, data, message } } = await Api.analysisPhone(e.detail.encryptedData, e.detail.iv)
	// 		if (code != 1) return Taro.showToast({ title: message, icon: 'none', duration: 2000 });
	// 		Taro.setStorageSync('authPhone', data)
	// 		setTimeout(() => {
	// 			Taro.navigateTo({ url: '/pages/login/index' })
	// 		})
	// 	} else { // 手机号授权失败
	// 		Taro.setStorageSync('authPhone', '')
	// 		setTimeout(() => {
	// 			Taro.navigateTo({ url: '/pages/login/index' })
	// 		})
	// 	}
	// }

	render() {
		const { } = this.state
		return (
			<View className='index'>collection</View>
		)
	}
}
const mapStateToProps = state => ({
	reduxData: state.reduxData
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);

