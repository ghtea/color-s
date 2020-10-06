import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1597

// 마우스가 페이지 창에서 나갈때 

const useFadeIn = (duration, delay = 0) => {
	
	if (typeof duration !== "number" || typeof delay !== 'number'){
		return;
	}
	const element = useRef();
	
	useEffect(()=>{
		if (element.current){
			const {current} = element;
			current.style.transition = `opacity `${duration}`s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
		
		
	}, [])
	
	return {
		ref: element,
		style: {
			opacity: 0;
		}
	};
}

/*
	usage example
	
	const App = () => {
		const fadeInH1 = useFadeIn(1, 2);
		
		return (
			<div className="App" >
				<h1 {...fadeInH1} > Hello </h1>
			</div>
		)
	}

*/


export default useFadeIn;