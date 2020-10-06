import React, {useState} from 'react';

// https://nomadcoders.co/react-hooks-introduction/lectures/1592

const useTabs = (initialTab, allTabs) => {
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex
	};
};

export default useTabs;



/*

사용 예

const { currnetItem, changeItem } = useTabs(0, content);


... onClick = {()=>changeItem(2)}


*/