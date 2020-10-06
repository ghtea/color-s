import React, {useState, useCallback} from 'react';

const useSpotlight = (idReplacement, idExisting, setId) => {
	
	//const [id, setValue] = useState(initialValue);
	const onClick = event => {
		if (idReplacement !== idExisting){
  		setId(idReplacement);
  	}
  	else {
  		setId("");
  	}
	}
	
	const onMouseEnter = event => {
		setId(idReplacement);
	}
	
	const onMouseLeave = event => {
		setId("");
	}	
	
	return {onClick, onMouseEnter, onMouseLeave};
};


export default useSpotlight;