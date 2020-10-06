import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1599

// 마우스가 페이지 창에서 나갈때 

const useFullscreen = (callback()) => {
	
	// 이름표를 만드는 거라고 생각하기
	const element = useRef();
	
	const runCallback = isFull => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	}
	
	const triggerFull = (callback) => {
		if(element.current){
			if (element.current.requestFullscreen){
				element.current.requestFullScreen();
			} 
			else if (element.current.mozRequestFullScreen){
				element.current.mozRequestFullScreen();
			}
			else if (element.current.webkitRequestFullscreen){
				element.current.webkitRequestFullscreen();
			}
			else if (element.current.msRequestFullscreen){
				element.current.msRequestFullscreen();
			}
			
			runCallback(true);
		}
	};
	
	
	const exitFull = () => {
		document.exitFullscreen();
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		}
		else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCallback(false);
	};
	
	return {element, triggerFull, exitFull};
}

/*
	usage example
	
	const App = () => {
		cosnt onFullS = (isFull) => {
			console.log(isFull ? 'We are full' : 'We are small')
		}
		const {element, triggerFull, exitFull} = useFullscreen();
		return (
		
			<div className="App" style={{height:'100vh'}}>
			
				<div ref={element} >
					<img src="https://dfdsfstysrtsfsdfsdfdfdf.png"/>
					<button onClick={exitFull} Exit fullscreen </button>
				</div>
				
				<button onClick={triggerFull} Make fullscreen </button>
				
			</div>
		)
	}

*/


export default useFullscreen;