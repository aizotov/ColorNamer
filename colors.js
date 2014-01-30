jQuery(document).ready(function() {
	jQuery('#go_button').click(function(){
		var input_string = jQuery('#hex_input').val();

		var input_valid = isValidInput(input_string);
		if (!input_valid){
			jQuery('#color_output').text('thats not even a color...');
			jQuery('#color_sample').css('background-color', 'white');
			return;
		}

		input_r = hexToR(input_string);
		input_g = hexToG(input_string);
		input_b = hexToB(input_string);

		var name;
		var min_dist = 99999;
		var curr_diff;
		var input_rgb = {"r":input_r, "g":input_g, "b":input_b};
		jQuery.each(colors, function(idx, val){
			curr_diff = getDifference(input_rgb, val.rgb);
			if(curr_diff < min_dist){
				min_dist = curr_diff;
				name = val.name;
			}
		});

		if(input_r === input_g && input_r === input_b)
			name="gray";

		if(name){
			var color_in_rgb = 'rgb('+input_r+','+input_g+','+input_b+')';
			jQuery('#color_output').text(name + '!');
			jQuery('#color_sample').css('background-color', color_in_rgb);
		}
		else{
			jQuery('#color_output').text('I don\'t know this one :(');
			jQuery('#color_sample').css('background-color', 'white');
		}
	});
});

function isValidInput(input_string){
	if(input_string.length != 7)
		return false;
	if(input_string[0] != '#')
		return false;

	for (var i = 1, len = input_string.length; i < len; i++) {
		var le_char = input_string[i];
		le_char = le_char.toLowerCase();
		var is_num = parseInt(le_char);
		if(is_num === false){
			if(le_char > 'f' || le_char < 'a')
				return false;
		}
	}

	return true;
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

var colors = 
[
	{
		"rgb": {
			"r":255,
			"g":0,
			"b":0
		},
		"name": "red"
	},
	{
		"rgb": {
			"r":0,
			"g":255,
			"b":0
		},
		"name": "green"	// lime
	},
	{
		"rgb": {
			"r":0,
			"g":0,
			"b":255
		},
		"name": "blue"
	},
	{
		"rgb": {
			"r":0,
			"g":0,
			"b":128
		},
		"name": "blue"	// navy
	},
	{
		"rgb": {
			"r":16,
			"g":41,
			"b":71
		},
		"name": "dark blue"	// blue zodiac
	},
	{
		"rgb": {
			"r":173,
			"g":216,
			"b":230
		},
		"name": "light blue"
	},
	{
		"rgb": {
			"r":224,
			"g":255,
			"b":255
		},
		"name": "light blue"	// light cyan
	},
	{
		"rgb": {
			"r":65,
			"g":105,
			"b":255
		},
		"name": "blue"		// another blue
	},
	{
		"rgb": {
			"r":255,
			"g":255,
			"b":0
		},
		"name": "yellow"
	},
	{
		"rgb": {
			"r":0,
			"g":255,
			"b":255
		},
		"name": "aqua"
	},
	{
		"rgb": {
			"r":0,
			"g":0,
			"b":0
		},
		"name": "black"
	},
	{
		"rgb": {
			"r":255,
			"g":0,
			"b":255
		},
		"name": "pink"	//fuchsia
	},
	{
		"rgb": {
			"r":255,
			"g":105,
			"b":180
		},
		"name": "pink"	//hot pink
	},
	{
		"rgb": {
			"r":128,
			"g":128,
			"b":128
		},
		"name": "gray"
	},
	{
		"rgb": {
			"r":90,
			"g":90,
			"b":103
		},
		"name": "gray"	// mid gray
	},
	{
		"rgb": {
			"r":0,
			"g":128,
			"b":0
		},
		"name": "green"
	},
	{
		"rgb": {
			"r":46,
			"g":139,
			"b":87
		},
		"name": "green"		// sea green		
	},
	{
		"rgb": {
			"r":144,
			"g":238,
			"b":144
		},
		"name": "light green"
	},
	{
		"rgb": {
			"r":128,
			"g":0,
			"b":0
		},
		"name": "maroon"
	},
	{
		"rgb": {
			"r":139,
			"g":69,
			"b":19
		},
		"name": "brown"
	},
	{
		"rgb": {
			"r":205,
			"g":133,
			"b":63
		},
		"name": "brown"		// also a brown
	},
	{
		"rgb": {
			"r":255,
			"g":255,
			"b":255
		},
		"name": "white"
	},
	{
		"rgb": {
			"r":245,
			"g":245,
			"b":220
		},
		"name": "beige"
	},
	{
		"rgb": {
			"r":244,
			"g":164,
			"b":96
		},
		"name": "beige"		// sandy brown
	},
	{
		"rgb": {
			"r":128,
			"g":0,
			"b":128
		},
		"name": "purple"
	},
	{
		"rgb": {
			"r":147,
			"g":112,
			"b":219
		},
		"name": "purple"		// medium purple
	},
	{
		"rgb": {
			"r":250,
			"g":128,
			"b":114
		},
		"name": "salmon"
	},
	{
		"rgb": {
			"r":255,
			"g":165,
			"b":0
		},
		"name": "orange"
	},
	{
		"rgb": {
			"r":255,
			"g":140,
			"b":0
		},
		"name": "orange"	// dark orange
	},
	{
		"rgb": {
			"r":128,
			"g":128,
			"b":0
		},
		"name": "olive"
	}
]
