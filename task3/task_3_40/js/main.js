
var calendar= function() {
	function Calendar(config) {
		this.startDate = config.startDate;
		this.endDate = config.endDate;
		this.wrap = config.wrap;
	}
	Calendar.prototype = {
		createCanlendarFrame: function() {		
			var that = this,
				frame = $create("div"),
				fhead = $create("div"),
				fbody = $create("div"),
				startDate = new Date(this.startDate),
				endDate = new Date(this.endDate);			
			frame.className = "calendar";
			fhead.className = "calendarHead";
			fbody.className = "calendarBody";			
			(function() {
				var start = startDate.getFullYear(),
					end = endDate.getFullYear(),
					years = [],
					months = ["January", "February", "March", "April", "May", "June", "July", "August",
							"September", "October", "November", "December"];
				while (end >= start) {
					years.push(start);
					++start;
				}
				fhead.innerHTML = "<span class='prev btn'></span><div class='selectDate'>" + 
									"<select class='js-month'>" + createFragment(months, "option") + "</select>" + 
									"<select class='js-year'>" + createFragment(years, "option") + "</select>" + 
									"</div><span class='next btn'></span>";
				frame.appendChild(fhead);				
			})();
			(function() {
				var daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
					days = new Array(42);
				fbody.innerHTML = "<ul className='daysOfWeek'>" + createFragment(daysOfWeek, "li") + "</ul>" + 
								"<ul class='days'>" + createFragment(days, "li") + "</ul>";
				frame.appendChild(fbody);	
			})();
			function createFragment(arr, ele) {
				var fragment = "";
				for (var i = 0, count = arr.length; i < count; i++) {
					if (arr[i] === undefined) {arr[i] = "";}
					fragment += "<" + ele + ">" + arr[i] + "</" + ele + ">";
				}
				return fragment;
			}
			this.wrap.appendChild(frame);
		},
		changeDate: function() {

		},
		_setDate: function() {

		},
		_getDate: function() {

		}
	};
	return {
		init: function(config) {
			var newCalendar = new Calendar(config);
			newCalendar.createCanlendarFrame();
			return {
				setDate: newCalendar._setDate,
				getDate: newCalendar._getDate
			}
		}
	}
}();


var calendar1 = calendar.init( {
 	wrap: $(".wrap"),
 	startDate: "2000-01-01",
 	endDate: "2020-12-31",
 	});








/*配置格式
 config: {
 	wrap: $("body"),
 	startDate: "2000-01-01",
 	endDate: "2020-12-31",
 	}
*/