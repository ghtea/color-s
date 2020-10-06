import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1597

// 마우스가 페이지 창에서 나갈때 

const useScroll = () => {
	const [state, setState] = useState({
		x: 0,
		y: 0
	});
	
	onScroll = () => {
		//console.log(`y: ${window.scrollY}, x: ${window.scrollX}`);
		setState({
			x: window.scrollX,
			y: window.scrollY
		})
	}
	
	useEffect(()=>{
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	},[])
	
	return state;
}

/*
	usage example
	
	const App = () => {
		const {y} = useScroll();
		return (
			<div className="App" style={{height:'100vh'}}>
				<h1 style={{ 
					position: 'fixed';
					color: y > 100 ? "red" : "blue";
				}} </h1>
			</div>
		)
	}

*/


export default useScroll;