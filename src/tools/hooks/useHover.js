import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1596
const useHover = (onHover)=>{
	if (typeof onHover !== 'function'){
		return;
	}
	const element = useRef();
	useEffect(()=>{
		if (element.current) {
			element.current.addEventListener('mouseenter', onHover);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener('mouseenter', onHover);
			}
		};
	}, []);
	return element;
}
/*
	usage example
	
	

*/