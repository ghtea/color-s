import React, {useMemo} from 'react';
import styled from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

//import {Div} from '../../styles/DefaultStyles';


const Div_Container = styled.div`
	
`;


// 
const Icon = ({width, height, roleColor='basic', phaseColor='70' }) => {
	
	const usingTheme = useSelector( state => state.theme.get('usingTheme'), [] );
  //const dispatch = useDispatch();
  
  const color = useMemo(() => {
  	
  	return `
	  	hsl(
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 0])}, 
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 1])}%, 
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 2])}%)
	    `
  }, [usingTheme]);
  
  
	return (
		
	<Div_Container style= {{ width: `${width}`, height:`${height}` }} >
		<svg 
			
			className=""
			xmlns="http://www.w3.org/2000/svg" 
			
			
			width="100%"
			height="100%"
			viewBox="0 0 512 512"
			
			fill={ color }
			>
			
			<path 
				d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z">
			</path>
				
		</svg>
	</Div_Container>
	)
}

export default Icon;