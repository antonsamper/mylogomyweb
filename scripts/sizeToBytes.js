var sizeToBytes = (function () {

	'use strict';

	var sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	return function (amount, format) {
		return amount * Math.pow(1024, sizes.indexOf(format) + 1);
	};

}());


//Example Calls
sizeToBytes(10,'MB'); //10485760
sizeToBytes(1,'KB');  //1024
sizeToBytes(1,'TB');  //1099511627776