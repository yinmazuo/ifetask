

/*
*表单配置
*/
var formConf = {
	name: {
		label: "名称",//表单标签
		type: "text",//表单类型
		validator：function () {

					},
		pattern: /^.{4,16}$/,//匹配模式——4-16位所有字符
		rules: "必填，长度为4~16个字符",//填写规则
		success: "格式正确",//填写正确提示文本
		fail: "格式错误",//填写错误提示文本
		status: false//当前输入框填写状态，默认填写错误
	},
	password: {
		label: "密码",//表单标签
		type: "password",//表单类型
		validator：function () {

					},
		pattern: /^[a-zA-Z]\w{5,17}$/,
		rules: "以字母开头，长度为6~18个字符",
		success: "密码可用",
		fail: "密码不可用",
		status: false
	},
	confirmPsw: {
		label: "确认密码",//表单标签
		type: "password",//表单类型
		validator：function () {

					},
		pattern: / /,
		rules: "再次输入密码",
		success: "密码输入一致",
		fail: "密码输入不一致",
		status: false
	},
	email: {
		label: "邮箱",//表单标签
		type: "text",//表单类型
		validator：function () {

					},
		pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		rules: "输入电子邮箱地址",
		success: "邮箱格式正确",
		fail: "邮箱格式错误",
		status: false
	},
	mobile: {
		label: "手机",//表单标签
		type: "text",//表单类型
		validator：function () {

					},
		pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
		rules: "输入手机号码",
		success: "手机格式正确",
		fail: "手机格式不正确",
		status: false
	},
};