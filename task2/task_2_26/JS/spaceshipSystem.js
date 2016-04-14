
var spaceshipSystem = function() {
	var num,
		speed,
		power = 100,
		run,
		consumption = 3,
		charge = 1;

	var powerSystem = function() {
		power -= consumption;
		if (power < 0) {
			power = 0;
		}
		if (power == 0) {
			speed = 0;
			clearInterval(run);
		}					
	};

	var engineSystem = function(num) {
		run = setInterval(function(){
			scene.clear(num);			
			powerSystem();						
			scene.spaceship(num, speed, power);
		}, 100);		
	};

	function Spaceship(){	
		this.build = build;
		this.start = start;
		this.stop = stop;
		this.destory = destory;
	}

	function build(n) {
		num = n;
		scene.spaceship(num, 0, 100);
	}
	function start() {
		speed = 1/20;
		engineSystem(num);
	}
	function stop() {
		speed = 0;
		clearInterval(run);
	}
	function destory() {
		this.stop();
		scene.clear(num);
	}
	
	return {
		Spaceship: Spaceship
	}
}();