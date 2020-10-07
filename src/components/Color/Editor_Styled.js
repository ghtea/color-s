import styled from 'styled-components';


export const Div_Controller = styled.div
` 
  width: 350px;
  height: auto;

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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
`

export const Div_ControlEach = styled.div`
  width: 90px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  &>div{
    width: 100%;
    height: 30px;
  }
  
  & > *:nth-child(2){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & > input { width: 50px; }
    & > button { width: 16px; }
  }
  
  
`


export const InputText_ColorElement = styled.input`
  
  height: 24px;
`

export const InputRange_ColorElement = styled.input`
  width: 90px;
  
`