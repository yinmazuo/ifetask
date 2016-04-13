
var panel = function() {
	var spaceshipNum = 1;

	eve.addListener($(".newSpaceship"), "click", newHandler);

	function newHandler() {
		var speed = 1, power = 100;

		createSinglePanel(spaceshipNum);
		scene.spaceship(spaceshipNum, speed, power);
	}

	function createSinglePanel(num) {
		var btns = [],
			div = $create("div"),
			span = $create("span");
		span.innerHTML = num + "号飞船："
		div.className = "singlePanel";
		div.appendChild(span);

		for (var i = 0; i < 3; i++) {
			btns.push($create("button"));
		}
		btns[0].innerHTML = "开始飞行";
		btns[1].innerHTML = "结束飞行";
		btns[2].innerHTML = "销毁";

		for (var j = 0; j < 3; j++) {
			div.appendChild(btns[j]);
		}
		
		$("#spaceshipControlPanel").insertBefore(div, $("#spaceshipControlPanel").lastElementChild);
	}

}();


