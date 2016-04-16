
var SpaceshipSystem = function(num) {
	var run;
	this.speed = 160;
	this.deg = 0;
	this.energy = 100;
	this.newSpaceship = new view.Spaceship();
	this.energySystem = function() {

	};
	this.engineSystem = function() {
		var that = this;

		run = setTimeout(function() {		
			var d = 80 + (num - 1) * 40;
				that.deg += Math.asin(that.speed / 2 / d);
				energy = that.energy;
				
			view.refresh();
			that.newSpaceship.draw(num, that.deg, energy);
			that.engineSystem();	
		}, 20);
	};
	this.mediator = function() {

	};
	this.start = function() {
		this.engineSystem();
	};
	this.stop = function() {
		clearTimeout(run);
	};
	this.destory = function() {
		this.stop();
		this.newSpaceship = null;
	};
};


var ss = new SpaceshipSystem(1);
ss.start(); 
var s = new SpaceshipSystem(2);
//s.start(); 