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
			viewBox="0 0 512 512"
			
			
			fill={ color }
			>
			
			<path 
				d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"	
			>
			</path>
				
		</svg>
	</Div_Container>
	)
}


//

export default Icon;