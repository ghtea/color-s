import styled from 'styled-components';


export const Div_BoardHue = styled.div
` 
  width: ${props=>props.width};
  height: ${props=>props.height};
  
  position: relative;
`;




export const Div_Pointer = styled.div
` 
  width: ${props=>props.width};
  height: ${props=>props.height};
  
  border: 2px solid red;
  
  position: absolute;
  left: ${props=>props.left};
  top: 0;
  transform: translateX(-50%);
  
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;
