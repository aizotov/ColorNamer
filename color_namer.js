(function(){
	var _colors;

	function init(color_array){
		_colors = color_array;
	}

	// takes a hex string
	function nameHex(hex_str){
		return nameColor(hexToR(hex_str), hexToG(hex_str), hexToB(hex_str));
	}

	// takes a JSON represetnation of RGB
	function nameRGB(input){
		return nameColor(input.r, input.g, input.b);
	}

	function nameColor(input_r,input_g,input_b){
		var name;
		var min_dist = 99999;
		var curr_diff;
		var input_rgb = {"r":input_r, "g":input_g, "b":input_b};
		jQuery.each(_colors, function(idx, val){
			curr_diff = getDifference(input_rgb, val.rgb);
			if(curr_diff < min_dist){
				min_dist = curr_diff;
				name = val.name;
			}
		});

		if(input_r === input_g && input_r === input_b){
			name="gray";
		}

		return name;
	}

	function getDifference(input, a_color){
		var rdiff = Math.abs(input.r - a_color.r);
		var gdiff = Math.abs(input.g - a_color.g);
		var bdiff = Math.abs(input.b - a_color.b);
		return rdiff + gdiff + bdiff;
	}

	function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
	function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

	window.ColorNamer = {
		init: init,
		nameRGB: nameRGB,
		nameHex: nameHex
	}
})();
