import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1595
// 
const useSpotlight = (onClick)=>{
	if (typeof onClick !== 'function'){
		return;
	}
	const element = useRef();
	useEffect(()=>{
		if (element.current) {
			element.current.addEventListener('click', onClick);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener('click', onClick);
			}
		};
	}, []);
	return element;
}
/*
	usage example
	
	// sayHello 를 가진 useClick 이 mount 되었을 때, click 이벤트를 추가
	// 불필요하게 여러번 재추가 하는게 아니라, 한번만 추가!
	
	const App = () => {
		const sayHello = () => console.log("say hello");
		const title = useClick(sayHello);
		
		return ...
			<button ref={title}>
	}

*/