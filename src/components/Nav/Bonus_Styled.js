import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Bonus = styled.div`

  width: 100%;
  height: 36px;
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%)
    `
  };
  
  & a {
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%)
      `
    };
  }
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	width: 150px;
  	margin-right: 15px;
	}
	
	& > div {
		width: auto;
		heigth: auto;
		
	}
	
	
`

