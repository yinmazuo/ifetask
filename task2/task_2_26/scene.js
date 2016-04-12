

var universe = $("#universe");
if (universe.getContext) {
	var context = universe.getContext("2d");
} 
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

var newSpace = function (i) {
	var x = 0,
		y = - 80 - (i - 1) * 40,
		r = 10,
		name = "1号-100%";

	context.fillStyle = "#00f";
	context.beginPath();

	context.rotate(1);

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
	context.fillText(name, x, y);

	context.closePath();
}(1);