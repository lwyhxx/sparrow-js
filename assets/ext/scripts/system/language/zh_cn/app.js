lang = {
	message: {
		delete: "APP删除后将无法恢复，您确认要删除吗?",
		deleteFile: "确定后此APP将被彻底删除，您确认要继续本次操作吗？",
		update: "APP更新成功",
		noSelectRecord: "请选择APP",
		enable: "您确认启用该APP吗？",
		disable: "您确认禁用该APP吗?",
		error: "网络繁忙，请稍侯再试。",
		resourceName: "资源版块",
		accessDenied:"访问被拒绝",
		setPrivilegeSuccessMessage : "恭喜：组[{0}]权限设置成功!"
	},
	command:{
        return:"返回",
		save:"提交",
		add:"新建",
		enable:"启用",
		disable:"禁用",
		delete:"删除"
	}
};
var appInfo = {
	txtAppName : {
<<<<<<< HEAD
		ctrlId : 'txtAppName',
=======
>>>>>>> b755504f88dab632ac1f59c5ca0bce317930ccdf
		errorCtrlId : 'errorAppName',
		prompt : '请输入20位以下APP名称',
		nullError : 'APP名称为必添项。',
		minLength : 1,
		maxLength : 20,
		lengthError : 'APP名称长度不得多于20。'
	},

	txtAppCode : {
<<<<<<< HEAD
		ctrlId : 'txtAppCode',
=======
>>>>>>> b755504f88dab632ac1f59c5ca0bce317930ccdf
		errorCtrlId : 'errorAppCode',
		prompt : '请输入20位以下APP编码',
		nullError : 'APP编码为必添项。',
		minLength : 1,
		maxLength : 20,
		lengthError : 'APP名称长度不得多于20。'
	},
	txtAppSort : {
<<<<<<< HEAD
		ctrlId : 'txtAppSort',
=======
>>>>>>> b755504f88dab632ac1f59c5ca0bce317930ccdf
		errorCtrlId : 'errorAppSort',
		prompt : '请输入20位以下APP编码',
		nullError : 'APP编码为必添项。',
		digitalError:'排序号，请输入0-999之间的数字',
		minValue : 0,
		maxValue : 999,
		defaultValue : 0
	},
	txtState : {
		errorCtrlId : 'errorState',
		prompt : '请输入状态码0：无效 1有效',
		options :[1, 0]
	},
	txtRemark : {
		errorCtrlId : 'errorRemark',
		prompt : '请输入该组的描述信息',
		lengthError : '描述信息不得超过500个字符。',
		spanTxtCount : 'spanTxtCount',
		allowNull : true
	}
};
