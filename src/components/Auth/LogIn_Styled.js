import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_LogIn = styled.div
`
  width: 100%;
  max-width: 500px;
  min-width: 350px;
  height: 520px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
  
  
  & > *:nth-child(n+2){
    margin-top: 20px;
  }
  
`;


export const Div_Input = styled.div`
  width: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  & > div {
    width: auto;
    height: 20px;
  }
  
  & > input {
    width: 240px;
    
  }
  
  
`

export const Div_Button = styled.div`
  width: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  & > div {
    width: auto;
    height: 20px;
  }
  
  & > button {
    width: 240px;
    
  }
  
  
`
