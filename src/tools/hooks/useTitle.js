import React, {useState, useEffect} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1594

// html의 title 은 state 로 관리 못하니, useEffect 로 state 변화, 변화된 값을 인지하고 함수를 실행시킨다(유도한다) 
const useTitle = (titleInitial) => {
	const [title, setTitle] = useState(titleInitial);
	const updateTitle = () ={
		const htmlTitle = document.querySelector('title');
	};
	useEffect(updateTitle, [title]);
	return setTitle;
}


// usage exmaple

/*

	const updateTitle = useTitle('loading...');
	setTimeout(()=> updateTitle('Home'), 5000);

*/

export default useTitle;