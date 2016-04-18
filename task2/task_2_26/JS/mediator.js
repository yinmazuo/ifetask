var mediator = function() {

	var subscriber = function(num) {
		console.log(num);
	};
	var unsubscriber = function(num) {

	};

	var publish = function(message) {
		console.log(message);
	};
	var interface = function(info, handler) {
		if (Math.random() * 10 > 7) {
			console.log("failed!");
			return false;
		} else {
			handler(info);
		}
	};

	return {
		interface: interface,
		subscriber: subscriber,
		unsubscriber: unsubscriber,
		publish: publish
	}
}();