import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Title = styled.div`

  width: 100%;
  height: 50px;
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%)
    `
  };
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	
  	width: 150px;
  	margin-left: 15px;
  	
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	  align-items: center;
	  
	}
	
	& > div {
		width: auto;
		heigth: auto;
	}
`


export const Div_TitleText = styled.div`
  
  margin-left: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  
`