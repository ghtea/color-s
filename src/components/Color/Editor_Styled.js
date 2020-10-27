import styled from 'styled-components';
import Immutable from 'immutable';


export const Div_Editor = styled.div
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


export const Div_Editor_A = styled.div
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


export const Div_Editor_A_ChangeMode = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 2px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 90px;
  height: 36px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width: 768px) {
	 
	}
`;


export const Div_Editor_A_ToggleOpacity = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 2px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 90px;
  height: 36px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width: 768px) {
	 
	}
`;




export const Div_Editor_B = styled.div
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

export const Div_Editor_B_Element = styled.div
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
  }
  
  & > div:nth-child(2n+1){
    background-color: #fff;
  }
  & > div:nth-child(2n){
    background-color: #ddd;
  }
  
  & > div:nth-child(1){
    width: 30px;
  }
  & > div:nth-child(2){
    flex-grow: 1; /* the others are 0*/ /* */
  }
  & > div:nth-child(3){
    width: 50px;
  }
  & > div:nth-child(4){
    width: 30px;
  }
  
	@media (min-width: 768px) {
	 
	}
`;




export const Div_Editor_C = styled.div
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


export const Div_Editor_C_UseClipboard = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 2px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 90px;
  height: 36px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width: 768px) {
	 
	}
`;


export const Div_Editor_C_BackForward = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 2px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 90px;
  height: 36px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width: 768px) {
	 
	}
`;