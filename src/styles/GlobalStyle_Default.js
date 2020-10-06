import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


const GlobalStyle_Default = createGlobalStyle`
  
  body {
    font-family: 'Noto Sans KR', 'Noto Sans JP', sans-serif;
    font-size: 16px;
    
    background-color: ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%)
      `
    };
    
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 2])}%)
      `
    };
    
  }
  
  div {
    width: 100%; /* is good for */
    height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    flex-shrink: 0;
    flex-grow: 0;
    
    box-sizing: border-box;
    
  }
  
  
  
  
  a {
    text-decoration: none;
  }
  
  
  
  img {
    object-fit: cover;
  }
  
  
  
  
  button {
    
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
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 2])}%)
      `
    };
    
    
    width: auto;
    height: 2.4rem;
    
    font-size: 1rem;
    
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    
    
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    flex-shrink: 0;
    flex-grow: 0;
      
    
    
    /* working, https://webisfree.com/2019-02-08/[css]-outline%EC%9D%84-%EB%91%A5%EA%B8%80%EA%B2%8C-%ED%91%9C%ED%98%84%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80-radius */
    
    border-radius: 0.5rem;
    border: 0;
    /*border: 2px solid transparent;*/
    
    &:focus, &:active {
     outline: none;
     /*border: 2px solid ${props => props.theme.color_weak};*/
    }
    
    
    cursor: pointer;
  
    box-sizing: border-box;
      
  }
  
  
  input {
    width: 100%;
    height: 2.4rem;
    
    
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
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 2])}%)
      `
    };
    
    
    font-size: 1rem;
    
    
    
    box-sizing: border-box;
    
    &::placeholder {
      color: ${
        props => `hsl(
          ${props.theme.getIn(['colorAssignment', 'basic', '50', 0])}, 
          ${props.theme.getIn(['colorAssignment', 'basic', '50', 1])}%, 
          ${props.theme.getIn(['colorAssignment', 'basic', '50', 2])}%)
        `
      };
    }
    
    border-radius: 4px;
    border: 2px solid ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '50', 2])}%)
      `
    };
      
    &:focus, &:active {
     outline: none;
     border: 2px solid ${
      props => `hsl(
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorAssignment', 'basic', '70', 2])}%)
      `
      };
    }
    
  }
`

export default GlobalStyle_Default;