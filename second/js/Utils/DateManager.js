
import {Alert} from 'react-native'
export default class DateManager {
	static getTimeStamp(){
		let timestamp = Date.parse(new Date());
		timestamp = timestamp / 1000;
		return timestamp;
	}
	static timeStamp2Date(timestamp){
		let newDate = new Date();
		newDate.setTime(timestamp * 1000);
		return newDate;
	}
	static dateToDateStr(date){
		Alert.alert(date.format('yyyy-MM-dd'));
	}
}

Date.prototype.format = function(format){ 
var o = { 
	"M+" : this.getMonth()+1, //month 
	"d+" : this.getDate(), //day 
	"h+" : this.getHours(), //hour 
	"m+" : this.getMinutes(), //minute 
	"s+" : this.getSeconds(), //second 
	"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
	"S" : this.getMilliseconds() //millisecond 
} 
 
if(/(y+)/.test(format)) { 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
} 
 
for(var k in o) { 
if(new RegExp("("+ k +")").test(format)) { 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
} 
} 
return format; 
}