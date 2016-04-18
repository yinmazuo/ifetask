
var mask = function() {
	var wrap = $create("div"),
		title = $create("h2"),
		content = $create("p");
	var view = function() {		 
		var	inner = $create("div"),
			confirm = $create("button"),
			cancle = $create("button"),
			btns = $create("div");

		inner.className = "inner";
		wrap.className = "wrap";
		title.innerHTML = "Default Title",
		content.innerHTML = "Default Content",
		confirm.innerHTML = "confirm";
		cancle.innerHTML = "cancle";

		eve.addListener(inner, "click", innerHandler);
		function innerHandler(e) {
			e.stopPropagation();
			if (e.target === confirm || e.target === cancle) {
				close();
			}
		}
		eve.addListener(wrap, "click", close);

		btns.appendChild(confirm);
		btns.appendChild(cancle);
		inner.appendChild(title);
		inner.appendChild(content);
		inner.appendChild(btns);
		wrap.appendChild(inner);
	}();
	function show(t, c) {
		if (arguments.length === 2) {
			title.innerHTML = t;
			content.innerHTML = c;	
		}		
		$("body").appendChild(wrap);
	};
	function close() {
		$("body").removeChild(wrap);
	};
	return {
		show: show,
		close: close
	}
}();

eve.addListener($("#start"), "click", mask.show);
