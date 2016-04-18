
var contorler = function() {
	var num = 1;
	eve.addListener($(".newSpaceship"), "click", newHandler);
	function newHandler() {		
		createSinglePanel(num);
		mediator.interface(num, mediator.subscriber);
	}
	function createSinglePanel(num) {
		var btns = [],
			div = $create("div"),
			span = $create("span");
		span.innerHTML = num + "号飞船：";
		div.className = "singlePanel";
		div.appendChild(span);

		for (var i = 0; i < 3; i++) {
			btns.push($create("button"));
		}
		btns[0].innerHTML = "开始飞行";
		btns[0].id = "start";	
		btns[1].innerHTML = "结束飞行";
		btns[1].id = "stop";		
		btns[2].innerHTML = "销毁";
		btns[2].id = "destory";
		for (var j = 0; j < 3; j++) {
			eve.addListener(btns[j], "click", send);
			div.appendChild(btns[j]);
		}
		function send(e) {
			var message = {
				id: num,
				commond: e.target.id
			};	
			mediator.interface(message, mediator.publish);
		}
		$("#spaceshipControlPanel").insertBefore(div, $("#spaceshipControlPanel").lastElementChild);
	}

}();


