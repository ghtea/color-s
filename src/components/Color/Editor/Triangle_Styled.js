import styled from 'styled-components';
import Immutable from 'immutable';




export const Div_Triangle = styled.div`
  width: ${props=>props.pxSideLong }px;
  height: ${props=>props.pxSideLong * 1/2}px;
  
  transform: ${props=>props.transform };
  
  position: relative;
  overflow: hidden;
  
  /*box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5); for cutted side */

  & > div {
    &::after {
      content: "";
      position: absolute;
      width: ${props=>props.pxSideLong / 1.5}px;
      height: ${props=>props.pxSideLong / 1.5}px;
      background: ${
        props => `hsl(
          ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
          ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
          ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%)
        `
      };
      transform: rotate(45deg); /* Prefixes... */
      top: ${props=>props.pxSideLong * 1/6 }px;
      left: ${(props=>props.pxSideLong * 1 - props.pxSideLong) * 1/3}px;
      
      border-radius: 4px 0 0 0;
      
      /*box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);*/
    }
  }
  
`
