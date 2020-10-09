import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_ColorSolo = styled.div
`
  width: 100%;
  max-width: 500px;
  min-width: 350px;
  height: 520px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: relative;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
  
  
`;



export const Div_ItemCurrent = styled.div
` 
  width: 190px;
  height: 40px;
  
  position: relative;
  
  margin-top: 12px;
`

export const Div_Color = styled.div
` 
  width: 100%;
  height: 100%;
  
  position: absolute;
  z-index: 1;
  
  background-color: ${props=>props.textHsla};
`



export const Div_Behind = styled.div
` 
  width: 100%;
  height: 100%;
  
  position: absolute;
`