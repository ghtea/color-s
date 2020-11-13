import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_EditorCs = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: calc(100% - 10px);
  min-width: 310px;
  max-width: 390px;
  height: auto;
  font-size: 1rem;
  border-radius: 5px;
  
  position: static;
  
  margin-top: 5px;
  margin-bottom: 0px;
  margin-left: 5px;
  margin-right: 5px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width: 768px) {
	 
	}
`;


export const Div_EditorCs_A = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: #fff;
  
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 10px 10px 0px 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  
  @media (min-width: 768px) {
	 
	}
`;


export const Div_EditorCs_Tool = styled.div
` 
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-around;   align-items: center;
  
  box-sizing: border-box;
  border: 2px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 110px;
  height: 36px;
  font-size: 1rem;
  border-radius: 10px;
  
  position: static;
  
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  
  
`;


export const Div_EditorCs_A_ChangeSize = styled(Div_EditorCs_Tool)
` 
  & > *:nth-child(1){
    width: calc(100% - 30px);
  }
  & > *:nth-child(2){
    width: 30px;
  }
`;





export const Div_EditorCs_B = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 100%;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  
  @media (min-width: 768px) {
	 
	}
`;

export const Div_EditorCs_B_Element = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: strecth;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  &:nth-child(n+2){
    margin-top: 5px;
  }
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  & > div {
    width: auto;
    height: 100%;
    
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
  }
  
  & > div:nth-child(2n+1){
    background-color: #fff;
  }
  & > div:nth-child(2n){
    background-color: #ddd;
  }
  
  
  
  /* H */ 
  & > div:nth-child(1){
    width: 30px;
  }
  
  /* range input */ 
  & > div:nth-child(2){
    flex-grow: 1; /* the others are 0*/ /* */
  }
  
  /* text input */ 
  & > div:nth-child(3){
    width: 50px;
    & > input {
      font-size: 1rem;
      width: 40px;
      height: 24px;
    }
  }
  
  /* buttons */ 
  & > div:nth-child(4){
    width: 30px;
    & > * {
      font-size: 0.9rem;
    }
  }
  
	@media (min-width: 768px) {
	 
	}
`;



// https://github.com/darlanrod/input-range-scss/blob/master/_inputrange.scss
// https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
export const Div_EditorCs_B_Element_InputRange = styled.div
` 
  ${props => `
    width: ${props.stringWidthEntire};
    height: ${props.pxHeightBoard + props.pxBorderWidthPointer * 2}px;
  `}
  position: relative;
  
  
  /* basic */
  & > input[type=range] {
    -webkit-appearance: none;
    border: none;
    ${props=>`
      width: calc(100% - ${props.pxBorderWidthPointer * 2}px);
      height: ${props.pxHeightBoard}px;
    `}
    background: transparent;
  }
  & > input[type=range]:focus {
    outline: none;
  }
  
  
  /* chrome */
  & > input[type=range]::-webkit-slider-runnable-track {
    ${props=>`
      width: calc(100% - ${props.pxBorderWidthPointer * 2}px);
      height: ${props.pxHeightBoard}px;
      
      border-radius: ${props.pxBorderRadiusBoard}px;
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  & > input[type=range]::-webkit-slider-thumb {
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
  & > input[type=range]:focus::-webkit-slider-runnable-track {
    /*background: #367ebd;*/
  }
  
  
  
  /* Firefox */
  & > input[type=range]::-moz-range-track {
    ${props=>`
      width: calc(100% - ${props.pxBorderWidthPointer * 2}px);
      height: ${props.pxHeightBoard}px;
      border-radius: ${props.pxBorderRadiusBoard}px;
      
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  & > input[type=range]::-moz-range-thumb {
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
  & > input[type=range]::-ms-track {
    ${props=>`
      width: calc(100% - ${props.pxBorderWidthPointer * 2}px);
      height: ${props.pxHeightBoard}px;
      
      border-radius: ${props.pxBorderRadiusBoard}px;
      cursor: pointer;
      
      background: ${props.cssBackground};
    `}
  }
  & > input[type=range]::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }
  & > input[type=range]::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }
  
  & > input[type=range]:focus::-ms-fill-lower {
    /*background: #3071a9; */
  }
  & > input[type=range]:focus::-ms-fill-upper {
    /*background: #367ebd; */
  }
  
  & > input[type=range]::-ms-thumb {
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
// width: calc(100% - ${(props.pxWidthPointer + props.pxBorderWidthPointer * 2)}px);



export const Div_EditorCs_C = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: #ddd;
  
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border-radius: 0 0 10px 10px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  
  @media (min-width: 768px) {
	 
	}
`;


export const Div_EditorCs_C_MakeSeries = styled(Div_EditorCs_Tool)
` 
  
`;
