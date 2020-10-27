import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_ColorDuo = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: auto;
  
  & > div:nth-child(n+2){
    margin-top: 20px;
  }
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
`;



export const Div_Main = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px dashed #aaa;  /* border: 2px dashed #aaa; */
  background-color: #fff;
  
  width: calc(100% - 10px);
  min-width: 310px;  /* margin left, right: 5 * 2  320 - 10 = 310 */
  max-width: 390px;  /* margin left, right: 5 * 2  400 - 10 = 390 */
  height: 160px;
  font-size: 17px;
  border-radius: 10px;
  
  margin-top: 5px;
  margin-bottom: 0px;
  margin-left: 5px;
  margin-right: 5px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
	
`;


export const Div_Main_Left = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px dashed #aaa;  /* border: 2px dashed #aaa; */
  background-color: #ddd;
  
  width: 50px;
  height: 100%;
  font-size: 17px;
  border-radius: 0px;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
	
	& > button {
	  display: flex;
    flex-direction: column;   /* row */
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: no-wrap;
    
    box-sizing: border-box;
    border: 2px solid #333;  /* border: 2px dashed #aaa; */
    background-color: none;
    
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 50%;
    
    position: static;
    
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
	}
	
`;


export const Div_Main_Right = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px dashed #aaa;  /* border: 2px dashed #aaa; */
  background-color: #ddd;
  
  width: 50px;
  height: 100%;
  font-size: 17px;
  border-radius: 0px;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
	
	& > button {
	  display: flex;
    flex-direction: column;   /* row */
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: no-wrap;
    
    box-sizing: border-box;
    border: 2px solid #333;  /* border: 2px dashed #aaa; */
    background-color: none;
    
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 50%;
    
    position: static;
    
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
	}
	
`;


export const Div_Main_Middle = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px dashed #aaa;  /* border: 2px dashed #aaa; */
  background-color: #fff;
  
  width: calc(100% - 100px);  /*  210 ~ 290  */
  height: 100%;
  font-size: 17px;
  border-radius: 0px;
  
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
	
`;



export const Div_Color = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 60px;
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
	
	& > div {
	  width: 45%;
	  height: 40px;
	  background-color: blue;
	}
`;

export const Div_Example = styled.div
` 
  display: flex;
  flex-direction: row;   /* row */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: no-wrap;
  
  box-sizing: border-box;
  border: 0px solid #aaa;  /* border: 2px dashed #aaa; */
  background-color: none;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 80px;
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
	
	& > div {
	  width: 100%;
	  height: 100%;
	  background-color: orange;
	}
`;





export const Div_Container = styled.div
` 
  display: flex;
  flex-direction: column;   /* row */
  justify-content: space-evenly;
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
  
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	 
	}
	
`;