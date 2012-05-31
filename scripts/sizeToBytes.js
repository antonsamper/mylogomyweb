var sizeToBytes = (function () {

	'use strict';

	var bytesIn = {
		'KB': 1024,
		'MB': 1048576,
		'GB': 1073741824,
		'TB': 1099511627776
	};

	return function (amount, format) {

		if (bytesIn[format]) {

			return amount * bytesIn[format];

		}

		return amount * bytesIn.KB;

	};

}());


//Example Calls
sizeToBytes(10,'MB'); //10485760
sizeToBytes(1,'KB');  //1024
sizeToBytes(1,'TB');  //1099511627776