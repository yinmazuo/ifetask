
window.onload = function () {
	var wrap = document.getElementById("wrap"),
		init = document.getElementById("random"),
		sort = document.getElementById("sort"),
		listArr = [], rand = [];


	init.onclick = function () {
		random(40);
		initElements(40);
	};

	sort.onclick = function (){
		qSort(listArr);
	};





	function initElements(num) {
		var height = rand;
		for (var i = 0; i < num; i++) {
			var element = document.createElement("div");
			element.style.height = height[i] + "px";
			bgc(element, "#00ff00");
			wrap.appendChild(element);
			listArr.push(element);
		}	
	}

	function random(num) {
		for (var i = 0; i < num; i++) {	
			rand.push(Math.floor(Math.random() * 290 + 10));
		}
	}


	function qSort(list) {		
		var lesser = [],
			greater = [],
			pivot = list[0],
			timer;

		if (list.length == 0) {
			return [];
		}

		sort();
		function sort() {	
			timer = setTimeout(function(){
				var head = list.shift();
				bgc(head, "#ff0000");

				if (parseInt(head.style.height) < parseInt(pivot.style.height)) {
					var newEle = head;
					wrap.removeChild(head);
					bgc(newEle, "#00ff00");
					wrap.insertBefore(newEle, pivot);
					lesser.push(head);
				} else {
					greater.push(head);
				}
				
				if (list.length > 0) {
					setTimeout(sort, 100);				
				} else {
					qSort(greater);
				}
			}, 100);
		}

		return qSort(lesser).concat(pivot, qSort(greater));
	
	}


	function bgc(ele, color) {
		ele.style.backgroundColor = color;
	}







};


