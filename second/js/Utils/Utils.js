'use strict';

const Dimensions = require('Dimensions');
const windows = Dimensions.get('window');

export default class WindowScreen {
    static screenWidth(){
		return windows.width;
	}
	static screenHeight(){
		return windows.height;
	}
	static screenScale(){
		return windows.scale;
	}
	static fontScale(){
		return windows.fontScale;
	}
}