import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_ColorSolo = styled.div
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
  
  
`;



export const Div_ItemCurrent = styled.div
` 
  height: 100%;
  background-color: ${props =>
    `hsla(
      ${props.colorMain.getIn(['hsl', 'h'])}, 
      ${props.colorMain.getIn(['hsl', 's'])}%, 
      ${props.colorMain.getIn(['hsl', 'l'])}%,
      ${props.colorMain.getIn(['opacity'])}
      )
    `
  };
`