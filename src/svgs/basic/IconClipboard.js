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
			viewBox="0 0 384 512"
			
			
			fill={ color }
			>
			
			<path 
d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"	
			>
			</path>			
		</svg>
	</Div_Container>
	)
}


//

export default Icon;