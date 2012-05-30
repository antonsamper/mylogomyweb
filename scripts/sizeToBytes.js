function sizeToBytes(size, format) {

	"use strict";
	
	var KBYTES_IN_BYTES   = 1024,
	    MEGABYTE_IN_BYTES = 1048576,
	    GIGABYTE_IN_BYTES = 1073741824,
	    TERABYTE_IN_BYTES = 1099511627776;

	switch (format) {
	case 'MB':
		return size * MEGABYTE_IN_BYTES;
	case 'GB':
		return size * GIGABYTE_IN_BYTES;
	case 'TB':
		return size * TERABYTE_IN_BYTES;
	default:
		return size * KBYTES_IN_BYTES;
	}

}

//Example Calls
sizeToBytes(10,'MB'); //10485760
sizeToBytes(1,'KB');  //1024
sizeToBytes(1,'TB');  //1099511627776