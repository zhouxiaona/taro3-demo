import { Component } from 'react'
import Taro from "@tarojs/taro";
import { Provider } from 'react-redux'
import * as Api from './servers/servers'
import store from './store'
import './app.less'

class App extends Component {
	// 对应 onLaunch
	async onLaunch(options) {
		console.log(options, '--onLaunch--options--')
		this.update();
	}

	// 对应 onShow
	componentDidShow() { }

	// 对应 onHide
	componentDidHide() { }

	// 程序要打开的页面不存在时触发
	onPageNotFound(Object) { }

	update = () => {
		if (process.env.TARO_ENV === 'weapp') {
			const updateManager = Taro.getUpdateManager();
			Taro.getUpdateManager().onUpdateReady(function () {
				Taro.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function (res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
		}
	}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render() {
		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		)
	}
}

export default App
