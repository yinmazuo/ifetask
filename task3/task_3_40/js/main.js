
var calendar= function() {
	function Calendar(config) {
		this.startDate = config.startDate;
		this.endDate = config.endDate;
		this.wrap = config.wrap;

	}
	Canlendar.prototype = {
		createCanlendar: function() {

		};
		setDate: function() {

		};
		getDate: function() {

		};
	};
	return {
		init: function(config) {
			var newCalendar = new Calendar(config);
			return newCalendar;
		}
	}
};

/*配置格式
 config: {
 	wrap: $("body"),
 	startDate: 2000/01/01,
 	endDate: 2020/12/31,
 	}
*/