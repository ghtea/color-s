import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Color = styled.div
`
  width: 350px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: relative;
`;


export const Button_Main = styled.button
`
  width: 50px;
  height: 50px;
  
  border-radius: 50%;
  
  position: absolute;
  z-index: 200;
`


export const Button_EditColor = styled(Button_Main)
`
  left: 5px;
  top: 5px;
`

export const Button_More = styled(Button_Main)
`
  right: 5px;
  top: 5px;
`