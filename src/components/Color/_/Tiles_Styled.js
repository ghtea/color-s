import styled from 'styled-components';
import Immutable from 'immutable';



export const Div_Tiles = styled.div
` 
  width: ${props =>props.widthAll}px;
  height: ${props =>props.heightAll}px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const Div_Tiles_One = styled.div
` 
  width: ${props =>props.lengthOne}px;
  height: ${props =>props.lengthOne}px;
  
  background-color: ${props =>{
    if (props.whether === true){
      return props.colorTrue
    }
    else{
      return props.colorFalse
    }
  } };
  
`