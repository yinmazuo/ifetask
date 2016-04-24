
var calendar= function() {
	function Calendar(config) {
		this.startDate = config.startDate;
		this.endDate = config.endDate;
		this.wrap = config.wrap;
		this.currYear = null;
		this.currMonth = null;
		this.currDate = null;
	}
	Calendar.prototype = {
		createCanlendarFrame: function() {		
			var that = this,
				frame = $create("div"),
				fhead = $create("div"),
				fbody = $create("div"),
				startDate = new Date(this.startDate),
				endDate = new Date(this.endDate),
				currDate = new Date(Date.now());
			this.year = currDate.getFullYear();
			this.month = currDate.getMonth();
			this.date = currDate.getDate();				
			frame.className = "calendar";
			fhead.className = "calendarHead";
			fbody.className = "calendarBody";		
			(function() {
				var start = startDate.getFullYear(),
					end = endDate.getFullYear(),
					years = [],
					months = ["January", "February", "March", "April", "May", "June", "July", "August",
							"September", "October", "November", "December"];
				var s = start;
				while (end >= s) {
					years.push(s);
					++s;
				}
				fhead.innerHTML = "<span class='prev btn'></span><div class='selectDate'>" + 
									"<select class='js-month'>" + createFragment(months, "option") + "</select>" + 
									"<select class='js-year'>" + createFragment(years, "option") + "</select>" + 
									"</div><span class='next btn'></span>";
				fhead.querySelector(".js-month").selectedIndex = that.month;
				fhead.querySelector(".js-year").selectedIndex = (that.year - start);
				frame.appendChild(fhead);				
			})();
			(function() {
				var daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
					days = new Array(42);
				fbody.innerHTML = "<ul class='daysOfWeek'>" + createFragment(daysOfWeek, "li") + "</ul>" + 
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

			eve.addListener(fhead.querySelector(".selectDate"), "click", handler);
			eve.addListener(fhead.querySelector(".prev"), "click", handler);
			eve.addListener(fhead.querySelector(".next"), "click", handler);
			function handler(event) {
				var e = event || window.event,
					target = e.target || e.srcElement;
				switch (target.className) {
					case "js-month":
						that.month = target.selectedIndex;						
						break;
					case "js-year":
						that.year = target.selectedIndex + startDate.getFullYear();
						break;
					case "prev btn":
						btnHandler("prev");
						break;
					case "next btn":
						btnHandler("next");
						break;
					default:
						break;
				}
				that.changeDate();
			}		
			function btnHandler(d) {	
				if (d === "prev") {
					if (that.year === startDate.getFullYear() && that.month === 0){
						return false;
					}
					--that.month 
				}
				if (d === "next") {
					if ((that.year === endDate.getFullYear() && that.month === 11)) {
						return false;
					}
					++that.month;
				}
				if (that.month < 0) {
					that.month = 11;
					--that.year;
				}
				if (that.month > 11) {
					that.month = 0;
					++that.year;
				}
				fhead.querySelector(".js-month").selectedIndex = that.month;
				fhead.querySelector(".js-year").selectedIndex = that.year - startDate.getFullYear();
			}				
		},
		changeDate: function() {
			var	firstDay = new Date(this.year + "/" + (this.month + 1) + "/" + "01").getDay(),
				dateArr = [];
			for (var i = 1 - firstDay, count = 42 - firstDay; i <= count; i++) {
				var newDate = new Date(this.year + "/" + (this.month + 1));
				dateArr.push(new Date(newDate.setDate(i)));
			}
			
			var lis = $(".calendar .days").querySelectorAll("li");
			for (var j = 0, length = lis.length; j < length; j++) {
				if (lis[j].classList.contains("currMonth")) {
					lis[j].classList.remove("currMonth");
				}
				if (dateArr[j].getFullYear() === this.year && dateArr[j].getMonth() === this.month) {
					lis[j].className = "currMonth";
				}
				lis[j].innerHTML = dateArr[j].getDate();
			}
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
			newCalendar.changeDate();
			return {
				setDate: newCalendar._setDate,
				getDate: newCalendar._getDate
			}
		}
	}
}();


var calendar1 = calendar.init( {
 	wrap: $(".wrap"),
 	startDate: "2000/01/01",
 	endDate: "2020/12/31",
 	});

/*配置格式
 config: {
 	wrap: $("body"),
 	startDate: "2000/01/01",
 	endDate: "2020/12/31",
 	}
*/