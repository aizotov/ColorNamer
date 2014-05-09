This is a small script for naming colors defined in rgb and hex formats.

Each css color has a name associated with it, but these names are rediculous, like "LavenderBlush" and "MidnightBlue". ColorNamer is a script that takes a color represented as a standard hex string or RGB hash and returns a normal name, such as "beige" or "blue". It does this by computing the difference between the input and all of the colors supplied to it this format:

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
		"name": "green"
	},
	...
]

the user can either supply their own dictionary of colors or use the provided one in colors.js

To use the script simply run
ColorNamer.init(colors)						// supplying the color dictionary in JSON format
ColorNamer.nameHex('#0066FF')				// name a color in hex format
ColorNamer.nameRGB({r: 127, b: 201, g:82})	// or as an rgb hash
