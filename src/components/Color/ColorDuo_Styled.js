import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_ColorDuo = styled.div
`
  width: 100%;
  max-width: 500px;
  min-width: 350px;
  height: auto;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  position: relative;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
  
  
`;


export const Div_TopLeft = styled.div
` 
  width: 60px;
  height: 80px;
  
`

export const Div_TopRight = styled.div
` 
  width: 60px;
  height: 80px;
  
`

export const Div_ItemCurrent = styled.div
` 
  width: 190px;
  height: 80px;
  
  position: relative;
  
  margin-top: 12px;
`

export const Div_Main = styled.div
` 
  width: 100%;
  height: 100%;
  
  color: ${props=>props.textHslaMain};
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  z-index: 1;
  
  & > div {
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`



export const Div_Sub = styled.div
` 
  width: 100%;
  height: 100%;
  
  position: absolute;
  
  & > div:nth-child(1){
    background-color: ${props=>props.textHslaSub};
    width: 100%;
    height: 100%;
    position: absolute;
  }
`