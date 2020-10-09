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
  
  & > *:nth-child(2){
    
  }

`






export const Div_InputRange_ColorElement = styled.div
` 
  width: ${props => props.pxWidthBoard}px;
  height: ${props => props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
  position: relative;
  
  
  input[type=range] {
    -webkit-appearance: none;
    
    /*margin: 18px 0; i dont understand */
    width: ${props => props.pxWidthBoard}px;
    
    border: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  
  
  
  
  input[type=range]::-webkit-slider-runnable-track {
    
    width: ${props => props.pxWidthBoard}px;
    height: ${props => props.pxHeightBoard}px;
    cursor: pointer;
    
    background: linear-gradient(to left, #e66465, #9198e5);
    
  }
  input[type=range]::-webkit-slider-thumb {
    
    background: transparent;
    
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    border: ${props => props.pxBorderWidthPointer}px solid red;
    border-radius: 3px;
    
    height: ${props => props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
    width: 10px;
    
    margin-top: -${props => props.pxBorderWidthPointer }px;
    
    cursor: pointer;
    
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    
  }
  
  
  
  
  input[type=range]::-moz-range-track {
    width: ${props => props.pxWidthBoard}px;
    height: ${props => props.pxHeightBoard}px;
    cursor: pointer;
    
    background: linear-gradient(to left, #e66465, #9198e5);
    
  }
  input[type=range]::-moz-range-thumb {
  
    background: transparent;
    
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    border: ${props => props.pxBorderWidthPointer}px solid red;
    border-radius: 3px;
    
    height: ${props => props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
    width: 10px;
    
    margin-top: -${props => props.pxBorderWidthPointer }px;
    
    cursor: pointer;
  }
  
  
  
  
  input[type=range]::-ms-track {
    width: ${props => props.pxWidthBoard}px;
    height: ${props => props.pxHeightBoard}px;
    cursor: pointer;
    
    background: linear-gradient(to left, #e66465, #9198e5);
    color: transparent;
  }
  
  input[type=range]::-ms-fill-lower {
    /*
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    */
  }
  input[type=range]::-ms-fill-upper {
    /*
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    */
  }
  
  input[type=range]::-ms-thumb {
  
    background: transparent;
    
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    border: ${props => props.pxBorderWidthPointer}px solid red;
    border-radius: 3px;
    
    height: ${props => props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
    width: 10px;
    
    margin-top: -${props => props.pxBorderWidthPointer }px;
    
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    /* background: #3071a9; */
  }
  input[type=range]:focus::-ms-fill-upper {
    /* background: #367ebd; */
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
  
  button {
    width: 24px;
    height: 24px;
  }
`

