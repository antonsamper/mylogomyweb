var bytesToSize = (function () {

	'use strict';

	var base = 1024,
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	return function (bytes, precision) {

		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(base)), 10);

		return (bytes / Math.pow(base, i)).toFixed(precision || 0) + sizes[i];
	};

}());


//Example Calls
bytesToSize(1024, 2);  //1.00KB
bytesToSize(10485760); //10MB
bytesToSize(1099511627776);  //1TB