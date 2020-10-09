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
  width: 240px;
  height: 20px;
  position: relative;
  
  
  /* basic, reset */
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  
  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
  
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
    
  
  
  /* pointer */
  
  /* Special styling for WebKit/Blink */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    
    height: 36px;
    width: 10px;
    
    position: relative;
    top: 15px;
    transform: translate(-50%, -50%);
    
    border: 4px solid white;
    box-sizing: content-box;
    border-radius: 4px;
    
    cursor: pointer;
    
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    
    /* margin-top: -14px;  You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }
  
  /* All the same stuff for Firefox */
  input[type=range]::-moz-range-thumb {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    
    height: 36px;
    width: 10px;
    
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    
    border: 4px solid white;
    box-sizing: content-box;
    border-radius: 4px;
    
    cursor: pointer;
  }
  
  /* All the same stuff for IE */
  input[type=range]::-ms-thumb {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    
    height: 36px;
    width: 10px;
    
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    
    border: 4px solid white;
    box-sizing: content-box;
    border-radius: 4px;
    
    cursor: pointer;
  }
  
  
  
  
  
  
  
  
  /* track */
  input {
    width: 250px;
  }
  
  
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    
    background: linear-gradient(to left, #e66465, #9198e5);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: linear-gradient(to left, #e66465, #9198e5);
  }
  
  
  
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    
    background: linear-gradient(to left, #e66465, #9198e5);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  
  
  
  input[type=range]::-ms-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  
  input[type=range]::-ms-fill-lower {
    background: linear-gradient(to left, #e66465, #9198e5);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    
  }
  input[type=range]:focus::-ms-fill-lower {
    background: linear-gradient(to left, #e66465, #9198e5);
  }
  input[type=range]::-ms-fill-upper {
    background: linear-gradient(to left, #e66465, #9198e5);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    
  }
  input[type=range]:focus::-ms-fill-upper {
    background: linear-gradient(to left, #e66465, #9198e5);
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

