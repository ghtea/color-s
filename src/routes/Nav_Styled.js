import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Nav = styled.div`

  width: 100%;
	min-width: 360px;
  
  border-bottom: 1px solid ${
  	props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'main', '70', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'main', '70', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'main', '70', 2])}%)
    `
  };
  
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'main', '60', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'main', '60', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'main', '60', 2])}%)
    `
  };
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '20', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '20', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', '20', 2])}%)
    `
  };
  
  z-index: 500; 
  
  
  height: auto;
  
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  
  position: relative;
  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	
  	height: 60px;
  	&~.Div_Content {
  	  margin-top: 60px !important;
  	}
	  
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
  
	  position: fixed;
	  top: 0px;
	  left:0px;
	  
	}
	
`

