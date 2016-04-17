
var panel = function() {
	var spaceshipNum = 1;

	eve.addListener($(".newSpaceship"), "click", newHandler);

	function newHandler() {		
		
	}

	function createSinglePanel(spaceship, num) {
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
		eve.addListener(btns[0], "click", spaceship.start);

		btns[1].innerHTML = "结束飞行";
		eve.addListener(btns[1], "click", spaceship.stop);
		
		btns[2].innerHTML = "销毁";
		eve.addListener(btns[2], "click", function(){
			spaceship.destory();
			div.parentNode.removeChild(div);
		});

		for (var j = 0; j < 3; j++) {
			div.appendChild(btns[j]);
		}
		
		$("#spaceshipControlPanel").insertBefore(div, $("#spaceshipControlPanel").lastElementChild);
	}

}();


