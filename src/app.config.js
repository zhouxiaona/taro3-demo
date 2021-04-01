export default {
	pages: [
		'pages/index/index',
		'pages/collection/index',
		'pages/mine/index',
		'pages/login/index',
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#ffffff',
		navigationBarTitleText: '',
		navigationBarTextStyle: 'black',
		enablePullDownRefresh: false
	},
	tabBar: {
		color: "#54565D",
		selectedColor: "#54565D",
		backgroundColor: "#ffffff",
		borderStyle: "white",
		list: [
			{
				pagePath: "pages/index/index",
				text: "学校",
				iconPath: "./asset/images/school.png",
				selectedIconPath: "./asset/images/school_focus.png"
			},
			{
				pagePath: "pages/collection/index",
				text: "收藏",
				iconPath: "./asset/images/collection.png",
				selectedIconPath: "./asset/images/collection_focus.png"
			},
			{
				pagePath: "pages/mine/index",
				text: "我的",
				iconPath: "./asset/images/mine.png",
				selectedIconPath: "./asset/images/mine_focus.png"
			},
		]
	},
}
