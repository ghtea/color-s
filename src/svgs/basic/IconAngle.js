import React, {useMemo} from 'react';
import styled from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

//import {Div} from '../../styles/DefaultStyles';


const Div_Container = styled.div`
	transform: ${props=>props.transform};
`;


// heart
const Icon = ({
	width, height,
	roleColor, phaseColor,
	transform
}) => {
	
	const usingTheme = useSelector( state => state.theme.get('usingTheme'), [] );
  //const dispatch = useDispatch();
  
  const color = useMemo(() => {
  	
  	return `
	  	hsl(
	      ${usingTheme.getIn(['colorAssignment', roleColor, phaseColor, 0])}, 
	      ${usingTheme.getIn(['colorAssignment', roleColor, phaseColor, 1])}%, 
	      ${usingTheme.getIn(['colorAssignment', roleColor, phaseColor, 2])}%)
	    `
  }, [usingTheme]);
  
  
	return (
		
	<Div_Container 
		style= {{ width: `${width}`, height:`${height}` }} 
		transform={transform} 
	>
		<svg 
			
			className=""
			xmlns="http://www.w3.org/2000/svg" 
			
			width="100%"
			height="100%"
			viewBox="0 0 192 512"
			
			
			fill={ color }
			>
			
			<path 
				d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
			>	</path>
				
		</svg>
	</Div_Container>
	)
}


//

export default Icon;