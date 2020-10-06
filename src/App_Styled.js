import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_Content = styled.div
`
  
  opacity: ${props=> (props.visibilityReaction === "visible")? "0.3" : "1.0"  };
  
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
  
  
`;