import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1597

// 마우스가 페이지 창에서 나갈때 

const useBeforeLeave = (onBefore) => {
	if (typeof onBefore !=='function'){
		return;
	}
	const handle = (event) => {
		//console.log('leaving');
		const {clientY} = event;
		// 마우스가 위로 벗어날때만 실행 (선택)
		// 마우스가 테두리에 가까워 졌을 때 실행하게 나중에 설정도 가능
		if (clientY <= 0){
			onBefore();
		}
	}
	useEffect(()=> {
		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener('mouseleave', handle);
	},[]);
}

/*
	usage example
	
	const App = () => {
		const begForLife = ()=> console.log('Pls dont leave');
		useBeforeLeave(begForLife);
		
		return (
			<div className="App" >
				<button onClick={enablePrevent}> Protect </button>
				<button onClick={disablePrevent}> Unprotect </button>
			</div>
		)
	}

*/


export default useBeforeLeave;