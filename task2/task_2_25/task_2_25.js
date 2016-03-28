window.onload = function () {
	var checkedNodeParent;

	$("#root").onclick = function (e) {
		if (this.getElementsByClassName("tooltips").length > 0) {
			var checkedNode = checkedNodeParent.getElementsByClassName("tooltips")[0];
			checkedNodeParent.removeChild(checkedNode);
		}
		if (e.target.tagName == "SPAN") {
			checkedNodeParent = e.target.parentNode;		
			e.target.parentNode.appendChild(tooltips());
		}



 	};

};


var nodeArr = [];

function preOrder(node) {
	if (node.firstElementChild) {
		nodeArr.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.nextSiblingElement);
	}
}

function addChildNode(node) {
	var ul, li, name = prompt("请输入节点名：");
	if (name == "") {alert("节点名不能为空！");}
	ul = document.createElement("ul");
	li = document.createElement("li");
	li.innerHTML = name;
	ul.appendChild(li);

	if (node.parentNode.getElementsByTagName("ul")) {
		node.parentNode.getElementsByTagName("ul")[0].appendChild(li);
	} else {
		node.parentNode.appendChild(ul);
	}
}

function removeNode() {

}

function fold() {

}

function spread() {

}

function tooltips() {
	var tooltips = $("#tool > .tooltips").cloneNode(true);
	return tooltips;
}

function $(selector) {
	return document.querySelector(selector);
}


