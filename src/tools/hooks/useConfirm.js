import React, {useState, useEffect, useRef} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1596

// confirm 이 brower 특수 함수다

const useConfirm = (message = "", onOk, onCancel)=>{
	if (!onOk || typeof onOk !== 'function'){
		return;
	}
	// 헷갈림 주의
	if (onCancel && typeof onCancel !== 'function'){
		return;
	}
	const confirmAction = () => {
		if(confirm(message)){  
			// confirm 이 진행되고, yes 를 누르면 아래를 실행
			onOk();
		}
		else {
			onCancel();
		}
	};
	return confirmAction;
}
/*
	usage example
	
	const App = () => {
		const ok = ()=> console.log("Deleting the world");
		const cancel = () => console.log("Aborted")
		
		const confirmDelete = useConfirm("Are you sure", ok, cancel);
		
		...<button onClick={confirmDelete}
	}

*/

export default useConfirm;