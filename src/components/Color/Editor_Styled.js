import styled from 'styled-components';


export const Div_Editor = styled.div
` 
  width: 350px;
  height: auto;
  
  position: absolute;
  top: 90px;
  z-index: 100;
  
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
    `
  };
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 2])}%)
    `
  };
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  border-radius: 20px;
`;



export const Div_ControlEntire = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
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
    width: 60px;
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
  }
`

