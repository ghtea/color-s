import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1596

// (enablePreve) 예 api 에 요청 보내고 결과를 받기전에 사용자가 닫지 않기를 바라는 경우

const usePreventLeave = ()=>{
	
	// 못 닫게/새로고침 막는다
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = "";
	}
	
	// beforeunload 는 window가 닫히기/새로고침 전에 function이 실행되는 걸 허락한다
	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () => window.removeEventListener('beforeunload', listener);
	
	return {enablePrevent, disablePrevent};
}
/*
	usage example
	
	const App = () => {
		const {enablePrevent, disablePrevent} = usePreventLeave();
		return (
			<div className="App" >
				<button onClick={enablePrevent}> Protect </button>
				<button onClick={disablePrevent}> Unprotect </button>
			</div>
		)
	}

*/

export default usePreventLeave;