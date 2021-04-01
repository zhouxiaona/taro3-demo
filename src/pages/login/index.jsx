import { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Button, Text, Input, Swiper, SwiperItem, Image, Picker } from '@tarojs/components'
import * as Api from '../../servers/servers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions'
import { hidePhone } from '../../utils/index'
import './index.less'
import phoneIcon from '../../asset/images/phone.png'
import getCode from '../../asset/images/getCode.png'
import narrow from '../../asset/images/narrow.png'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidShow() { }

	componentDidHide() { }

	onReachBottom() { }

	async onLoad() {
		Taro.hideShareMenu()
	}

	render() {
		const { } = this.state
		return (
			<View className='index'>login</View>
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

