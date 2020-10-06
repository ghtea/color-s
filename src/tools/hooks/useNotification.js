import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1599

// 브라우저 내장 알림 사용

const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}
	const fireNotif = () => {
		if (Notification.permission !== 'granted'){
			Notification.requestPermission().then(permission => {
				if (permission === 'grant'){
					new Notification(title, options)
				}
				else {
					return;
				}
			})
		}
		else {
			new Notification(title, options)
		}
	}
	return fireNotif;
}
/*
	usage example
	
	const App = () => {
		cosnt triggerNotif = useNotification(
			"Can I steal your kimchi?",
			{
				body: "details"
			}
			);
		return (
		
			<div className="App" style={{height:'100vh'}}>
				<div onClick={triggerNotification}> Hello </div>
			</div>
		)
	}

*/


export default useNotification;