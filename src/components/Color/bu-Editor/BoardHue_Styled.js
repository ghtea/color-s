import styled from 'styled-components';


export const Div_BoardHue = styled.div
` 
  width: ${props=>props.width};
  height: ${props=>props.height};
  
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;




export const Div_Pointer = styled.div
` 
  width: ${props=>props.width};
  height: ${props=>props.height};
  
  border: 4px solid white;
  box-sizing: content-box;
  border-radius: 4px;
  
  position: absolute;
  left: ${props=>props.left};
  top: 50%;
  transform: translate(-50%, -50%);
  
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
`;
