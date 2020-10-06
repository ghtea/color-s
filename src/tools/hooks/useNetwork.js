import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1597

// 마우스가 페이지 창에서 나갈때 

const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine);
	
	// state의 값을 navigator 의 값으로 바꾼다
	const handleChange = () => {
		if (typeof onChange === 'function'){
			onChange(navigator.onLine);
		}
		setState(navigator.onLine);
	};
	
	useEffect(()=>{
		window.addEventListener('online', handleChange);
		window.addEventListener('offline', handleChange);
		return () => {
			window.removeEventListener('online', handleChange);
			window.removeEventListener('offline', handleChange);
		}
	}, [])
	
	return status;
}

/*
	usage example
	
	const App = () => {
		const handleNetworkChange = (online) => {
			console.log(online?"became online" : "became offline")
		}
		const onLine = useNetwork(handleNetworkChange);
		return (
			<div className="App" >
				<h1 > {onLine? "Online" : "Offline"} </h1>
			</div>
		)
	}

*/


export default useFadeIn;