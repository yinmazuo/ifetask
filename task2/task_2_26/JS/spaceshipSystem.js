
var SpaceshipSystem = function(num) {
	this.poi = -1;
	this.deg = 0;
	this.speed = 100;
	this.energy = 100;
	this.newSpaceship = new view.Spaceship();
	this.energySystem = function() {

	};
	this.engineSystem = function() {
		var d = 80 + (num - 1) * 40,
			deg = Math.asin(this.speed / 2 / d),
			arr = [];
		arr.push(num);
		arr.push(deg);
		arr.push(this.energy);	
		this.poi = this.aniQueue.push(arr) - 1;			
		this.ani();		
	};
	this.mediator = function() {

	};
	this.start = function() {
		this.engineSystem();
	};
	this.stop = function() {
		this.aniQueue[this.poi][1] = 0;
	};
	this.destory = function() {
		this.stop();
		this.aniQueue.splice(this.poi, 1);
	};
};

SpaceshipSystem.prototype = {
	constructor: SpaceshipSystem,
	dataArr = [],
	aniQueue: [],
	ani: function() {
		var that = this;
		function draw() {
			view.refresh();
			if (that.aniQueue.length === 0) {return false;}
			var q = that.aniQueue;
			for (var i = 0; i < q.length; i++) {
				that.newSpaceship.draw(q[i][0], that.deg, q[i][2]);
			}	
			requestAnimationFrame(draw);
		}
		requestAnimationFrame(draw);
	}
};


var ss = new SpaceshipSystem(1);
ss.start(); 
setTimeout(function(){
	var s = new SpaceshipSystem(2);
	s.start(); 
}, 1000);
setTimeout(function(){
	var s3 = new SpaceshipSystem(3);
	s3.start(); 
}, 2000);

//var s = new SpaceshipSystem(2);
//s.start(); 
//var s3 = new SpaceshipSystem(3);
//s3.start(); 
//var s4 = new SpaceshipSystem(4);
//s4.start(); 