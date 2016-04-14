
var scene = function () {
	var universe = $("#universe");

	if (universe.getContext === null) {return false;}
	
	var context = universe.getContext("2d");
	universe.width = 800;
	universe.height = 600;

	context.fillStyle = "#000";
	context.rect(0, 0, universe.width, universe.height);
	context.fill();

	context.translate(400, 300);

	context.beginPath();
	context.arc(0, 0, 50, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = "#00f";
	context.fill();
	context.closePath();

	var spaceship = function (num, speed, power) {
		var x = 0,
			y = - 80 - (num - 1) * 40,
			r = 10,
			info = num + "号-" + power + "%";

		context.fillStyle = "#00f";

		context.beginPath();
		context.rotate(speed);	

		context.moveTo(x - 20, y);
		context.arc(x - 20, y, r, Math.PI/2, - Math.PI/2, false);

		context.moveTo(x + 20, y);
		context.arc(x + 20, y, r,  - Math.PI/2, Math.PI/2, false);
		
		context.moveTo(x - 20, y - 10);
		context.lineTo(x + 20, y - 10);
		context.lineTo(x + 20, y + 10);
		context.lineTo(x - 20, y + 10);
		context.lineTo(x - 20, y - 10);

		context.fill();

		context.fillStyle = "#fff";
		context.font = "12px Times Roman";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(info, x, y);

		context.closePath();
	};

	var clear = function(num) {
		y = - 80 - (num - 1) * 40;
		context.fillStyle = "#000";
		context.clearRect(- 30, y - 10, 60, 20);
		context.fillRect(- 31, y - 11 , 62, 22);
	};

	return {
		spaceship: spaceship,
		clear: clear
	}

}();


