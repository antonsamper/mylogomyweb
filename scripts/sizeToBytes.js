function sizeToBytes(size, format) {

	"use strict";

	switch (format) {
	case 'MB':
		return size * 1048576;
	case 'GB':
		return size * 1073741824;
	case 'TB':
		return size * 1099511627776;
	default:
		return size * 1024;
	}

}

//Example Calls
sizeToBytes(10,'MB'); //10485760
sizeToBytes(1,'KB');  //1024
sizeToBytes(1,'TB');  //1099511627776