import { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Button, Text, Input, Swiper, SwiperItem, Image, Picker } from '@tarojs/components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions'
import * as Api from '../../servers/servers'

import './index.less'
import search from '../../asset/images/search.png'
import narrow from '../../asset/images/narrow.png'
class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidShow() { }

	componentDidHide() { }

	// 下拉加载
	async onReachBottom() { }

	async onLoad() { }

	onShareAppMessage() {
		return {
			title: 'uu',
			path: '/pages/index/index',
			imageUrl: '',
		}
	}

	render() {
		const { } = this.state
		return (
			<View className='index'>index</View>
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

