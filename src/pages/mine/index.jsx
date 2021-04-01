import { Component } from 'react'
import { View, Button, Text, Input, Swiper, SwiperItem, Image, Picker, OfficialAccount } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions'
import * as Api from '../../servers/servers'
import './index.less'
import iconInfo from '../../asset/images/iconInfo.png'
import iconFeedBack from '../../asset/images/iconFeedBack.png'
import iconLogOut from '../../asset/images/iconLogOut.png'
import narrowRight from '../../asset/images/narrowRight.png'
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

	// 授权用户信息
	onGetUserInfo = (e) => {
		console.log(e.detail.errMsg, '--e.detail.errMsg--')
		if (e.detail.errMsg == 'getUserInfo:fail auth deny') return; // 拒绝授权用户信息
		if (e.detail.errMsg == 'getUserInfo:ok') { // 允许授权用户信息
			console.log(e.detail, '--detail--')
		}
	}

	// 退出登录
	loginOut = async () => {
		let { code, data, message } = await Api.loginOut()
		if (code != 1) return Taro.showToast({ title: message, icon: 'none', duration: 2000 });
		Taro.removeStorageSync('token')
		Taro.navigateTo({ url: '/pages/login/index' })
	}

	render() {
		const { } = this.state
		return (
			<View className='index'>mine</View >
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

