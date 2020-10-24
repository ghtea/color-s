import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Editor = styled.div
` 
  width: 350px;
  height: auto;
  
  position: absolute;
  top: 120px;
  z-index: 100;
  
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%)
    `
  };
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '70', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '70', 1])}%, 
      ${props.theme.getIn(['colorAssignmentr', 'basic', '70', 2])}%)
    `
  };
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  border-radius: 20px;
  
  
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;



export const Div_Options = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  & > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & > div:nth-child(2) {
      margin-top: 3px;
    }
  }
  
`




export const Div_ControlEntire = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  &:nth-child(n+2){
    margin-top: 20px;
  }
  
  & > div:first-child{
    width: auto;
  }
`


export const Div_ControlEach = styled.div`
  width: 100%;
  height: 40px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  &>div{
    width: auto;
    height: auto;
  }
  
  & > div:first-child{
    width: 10px;
    margin-left: 10px;
  }
  & > div:last-child{
    margin-right: 10px;
  }

`







// https://github.com/darlanrod/input-range-scss/blob/master/_inputrange.scss
// https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
export const Div_InputRange_ColorElement = styled.div
` 
  width: ${props => props.pxWidthBoard +  (props.pxWidthPointer + props.pxBorderWidthPointer * 2)}px;
  height: ${props => props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
  position: relative;
  
  
  /* basic */
  input[type=range] {
    -webkit-appearance: none;
    border: none;
    ${props=>`
      width: ${props.pxWidthBoard}px;
    `}
    background: transparent;
  }
  input[type=range]:focus {
    outline: none;
  }
  
  
  /* chrome */
  input[type=range]::-webkit-slider-runnable-track {
    ${props=>`
      width: ${props.pxWidthBoard}px;
      height: ${props.pxHeightBoard}px;
      
      border-radius: ${props.pxBorderRadiusBoard}px;
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /*margin-top: -14px;*/
    ${props=>`
      width: ${props.pxWidthPointer}px;
      height: ${props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
      
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.3);
      background-color: transparent;
      
      border: ${props.pxBorderWidthPointer}px solid #ffffff;
      border-radius: 3px;
      box-sizing: border-box;
      
      margin-top: -${props.pxBorderWidthPointer}px;   /* important! */
    `}
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    /*background: #367ebd;*/
  }
  
  
  
  /* Firefox */
  input[type=range]::-moz-range-track {
    ${props=>`
      width: ${props.pxWidthBoard}px;
      height: ${props.pxHeightBoard}px;
      border-radius: ${props.pxBorderRadiusBoard}px;
      
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  input[type=range]::-moz-range-thumb {
    ${props=>`
      
      width: ${props.pxWidthPointer}px;
      height: ${props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
      
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.3);
      background-color: transparent;
      
      border: ${props.pxBorderWidthPointer}px solid #ffffff;
      border-radius: 3px;
      box-sizing: border-box;
    `}
  }
  
  
  /* Edge */
  input[type=range]::-ms-track {
    ${props=>`
      width: ${props.pxWidthBoard}px;
      height: ${props.pxHeightBoard}px;
      
      border-radius: ${props.pxBorderRadiusBoard}px;
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  input[type=range]::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }
  input[type=range]::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }
  
  input[type=range]:focus::-ms-fill-lower {
    /*background: #3071a9; */
  }
  input[type=range]:focus::-ms-fill-upper {
    /*background: #367ebd; */
  }
  
  input[type=range]::-ms-thumb {
    ${props=>`
      
      width: ${props.pxWidthPointer}px;
      height: ${props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
      
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.3);
      background-color: transparent;
      
      border: ${props.pxBorderWidthPointer}px solid #ffffff;
      border-radius: 3px;
      box-sizing: border-box;
    `}
    
  }
  
  
`





export const Div_InputText_ColorElement = styled.div`

  width: auto;
  
  input {
    width: 50px;
    height: 24px;
  }
`


export const Div_Button_ColorElement = styled.div`

  width: auto;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  button {
    width: 24px;
    height: 24px;
    
    border: ${
      props => `2px solid hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 2])}%)
      `
    };
  }
`

export const Div_Tools = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  & > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & > div:nth-child(2) {
      margin-top: 3px;
    }
  }
  
`
