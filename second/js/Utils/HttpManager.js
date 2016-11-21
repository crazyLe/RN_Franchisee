'use strict';

export default class HttpManager{
	static async_fetch(url){
		console.log('url',url);
		return new Promise((resolve, reject) => {
		fetch(url,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'KZ-SessionId': '2af658996f39951df64c5d368273e563',
				'KZ-DeviceId': '2BA5DA7D-CDE3-4E02-AE95-2D1B51FC2568',
				'KZ-DeviceType': 'iPhone,10.0',
				'KZ-Token': '2af658996f39951df64c5d368273e563	20001360	2BA5DA7D-CDE3-4E02-AE95-2D1B51FC2568	iPhone,10.0	1479367653	9964dff028eb7ad1d6540537adb446bc',
			},
		})
		.then((response) => {
			return response.json();
		})
		.then((jsonData) => {
			resolve(jsonData);
		})
		.catch((error) => {
			console.warn(error);
			reject(error);
		});
	})
	}
}