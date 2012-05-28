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