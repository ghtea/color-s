import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_NavGroup = styled.div`

  width: 100%;
  height: 36px;
  
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%)
    `
  };
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	width: auto;
	}
	
`


export const Div_NavItem = styled.div`

  width: auto;
  height: 36px;
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  overflow: visible;
  cursor: pointer;
  
  position: relative;
  
  &:nth-child(n+2){ margin-left: 12px; }
  
	
`

export const Div_NavItemIcon = styled.div`
  width: auto;
	heigth: auto;
`

export const Div_NavItemTitle = styled.div`
  width: auto;
	heigth: auto;
  /* display: none; */
  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`




/*
export const Div_NavLink = styled.div`
  height: 40px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:first-child { 
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child { 
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  
  border-collapse: separate; 
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment','basic', '60', 0])}, 
      ${props.theme.getIn(['colorAssignment','basic', '60', 1])}%, 
      ${props.theme.getIn(['colorAssignment','basic', '60', 2])}%)
    `
  };
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment','basic', 'white', 0])}, 
      ${props.theme.getIn(['colorAssignment','basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorAssignment','basic', 'white', 2])}%)
    `
  };
  
  &:hover {
  
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment','basic', '70', 0])}, 
        ${props.theme.getIn(['colorAssignment','basic', '70', 1])}%, 
        ${props.theme.getIn(['colorAssignment','basic', '70', 2])}%)
      `
    };
    background-color: ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment','basic', '10', 0])}, 
        ${props.theme.getIn(['colorAssignment','basic', '10', 1])}%, 
        ${props.theme.getIn(['colorAssignment','basic', '10', 2])}%)
      `
    };
  }
  
`
*/



/*
& > div:nth-child(1) {
    width: 0; 
    height: 0; 
    background-color: transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'colorAssignment','basic', 'white', 0])}, 
        ${props.theme.getIn(['colorScheme', 'colorAssignment','basic', 'white', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'colorAssignment','basic', 'white', 2])}%)
      `
    };
    box-shadow: 0px -6px 6px 6px rgba(0, 0, 0, 0.5); 
    z-index: 401;
  }
*/