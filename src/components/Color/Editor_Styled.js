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


export const Div_Editor_Tool = styled.div
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


export const Div_Editor_A_ChangeMode = styled(Div_Editor_Tool)
` 
  border: 0px solid #aaa;
  background-color: #eee;
  
  & > * {
    width: 40%;
  }
  & > *:nth-child(1){
	  ${props => (props.modeCurrent==='hsl') && `
	    background-color: #fff;
	  `}
	}
	& > *:nth-child(2){
	  ${props => (props.modeCurrent==='rgb') && `
	    background-color: #fff;
	  `}
	}
`;


export const Div_Editor_A_ToggleOpacity = styled(Div_Editor_Tool)
` 

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


export const Div_Editor_C_UseClipboard = styled(Div_Editor_Tool)
` 
  
`;


export const Div_Editor_C_BackForward = styled(Div_Editor_Tool)
` 
  & > * {
    width: 40%;
  }
`;