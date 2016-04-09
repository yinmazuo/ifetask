/*
*事件工具
*/
var eve = (function (){
	var myeve = {
		addListener: null,
		removeListener: null
	};

	if (window.addEventListener) {
		myeve.addListener = function (element, type, handler) {
			element.addEventListener(type, handler, false);
		};
		myeve.removeListener = function (element, type, handler) {
			element.removeEventListener(type, handler, false);
		};
	} else if (document.attachEvent) {
		myeve.addListener = function (element, type, handler) {
			element.attachEvent("on" + type, handler);
		};
		myeve.removeListener = function (element, type, handler) {
			element.detachEvent("on" + type, handler);
		};
	} else {
		myeve.addListener = function (element, type, handler) {
			element["on" + type] = handler;
		};
		myeve.removeListener = function (element, type, handler) {
			if (handler instanceof Function) {element["on" + type] = null;}			
		};		
	}	
	return myeve;	
})();
/*
*选择器
*/
function $(selector) {
	return document.querySelector(selector);
}
function create(ele) {
	return document.createElement(ele);
}

function FormConf(name, label, type, pattern, rules, success, fail) {
	this.name = name;//表单名
	this.label = label;//表单标签
	this.type = type;//表单类型
	this.pattern = pattern;
	this.rules = rules;//填写规则
	this.success = success;//填写正确提示文本
	this.fail = fail;//填写错误提示文本
	this.validator = validator;
}

function validator(input) {
	eve.addListener(input, "focus", focusHandler);
	eve.addListener(input, "blur", blurHandler);
	function focusHandler(e) {
		tooltip(e.target, this.rules, "#00f");
	}
	function blurHandler(e) {
		if (e.target.value === "") {
			e.target.style.borderColor = "#f00";
			tooltip(e.target, "不能为空！", "#f00");
			e.target.dataset.status = false;
			return ;
		}
		if (this.pattern.test(e.target.value)) {
			e.target.style.borderColor = "#0f0";
			tooltip(e.target, this.success, "#0f0");
			e.target.dataset.status = true;
		} else {
			e.target.style.borderColor = "#f00";
			tooltip(e.target, this.fail, "#f00");
			e.targetdataset.status = false;
		}			
	}
}
function tooltip(input, text, color) {
	var span;
	if (input.parentNode.getElementsByTagName("span").length > 0) {
		span.innerHTML = text;
		span.style.color = color;		
	} else {
		span = create("span");
		span.innerHTML = text;
		span.style.color = color;
		input.parentNode.appendChild(span);
	}	
}



function conf() {
	var username = new FormConf(
		"username",
		"名称", 
		"text", 
		/^.{4,16}$/, 
		"必填，长度为4~16个字符", 
		"格式正确", 
		"格式错误");
	var confObj = {
		"username": username
	};
	return confObj;
}

function createForm(obj) {	
	var wrap = create("div"),
		label = create("label"),
		input = create("input");
	label.for = obj.name;
	label.innerHTML = obj.label + ":";
	input.id = obj.name;
	input.dataset.status = false;
	input.className = "input";
	input.type = obj.type;
	obj.validator(input);
	wrap.appendChild(label);
	wrap.appendChild(input);
	wrap.appendChild(create("br"));
}

function submit() {
	var submit = create("input");
	submit.type = "submit";
	eve.addListener(submit, "click", submitHandler);
	function submitHandler(e) {
		var inputs = submit.parentNode.getElementsByClassName("input"),
			status = true;
		for (var i = 0, length = inputs.length; i < length; i++) {
			inputs[i].blur();
			if (inputs[i].dataset.status === false) {status = false;}
		}
		if (status === false) {
			e.preventDefault();
			window.alert("输入有误！");
		} else {
			window.alert("提交成功！");
		}
	}
	return submit;
}

function initForm(wrap, arr, url) {
	var link = create("link");
	link.type = "text/css";
	link.href = url;
	document.head.appendChild(link);
	var confObj = conf();

	for (var i = 0, length = arr.length; i < length; i++) {
		for (var key in confObj) {
			if (key == arr[i]) {
				wrap.appendChild(createForm(confObj[key]));
			}
		}		
	}
	wrap.appendChild(submit());	
}
initForm($("#form1"), ["username"], "css1.css");// password, confirmPsw, email, mobile
