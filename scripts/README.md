# sizeToBytes.js 
## A simple function that returns the number of bytes in a human readable size

 - Copyright 2012: [Anton Samper Rivaya] (http://aeser.co.uk)
 - sizeToBytes.js by Anton Samper Rivaya is licensed under a Creative Commons Attribution 3.0 Unported License.. 
 
The goal of this script is to provide a fast and lightweight (3kb minified / 1kb gzipped) script to enable [responsive web designs](http://www.alistapart.com/articles/responsive-web-design/) in browsers that don't support CSS3 Media Queries - in particular, Internet Explorer 8 and under. It's written in such a way that it will probably patch support for other non-supporting browsers as well (more information on that soon).

###Syntax:

<pre>
sizeToBytes(int, string);
</pre>

###Arguments:

- `int`		Numeric value for size.
- `string`	Format of numeric value - Allowed formats: 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'

###Returns:

- `int`		The arguments as an integer.
- `NaN`		The format of the number is not recognised.

###Example:

<pre>
sizeToBytes(1, 'KB');	//1024
sizeToBytes(10, 'MB');	//10485760
sizeToBytes(1, 'TB');	//1099511627776
</pre>