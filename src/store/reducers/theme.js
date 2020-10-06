import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

//import * as card from '../actions/card';
import * as theme from '../actions/theme';


import defaultUsingTheme from './theme/defaultUsingTheme'
// import {CALL_DATA, CALL_DATA_SUCCESS, CALL_DATA_FAIL} from '../actions/theme'







const stateInitial = Map({
  usingTheme: fromJS(defaultUsingTheme)
});




const themeReducer = handleActions({
    
    

  [theme.REPLACE_THEME]: (state, action) => {
    console.log('reducer')
    const location = action['payload']['location'] || [];
    console.log(action.payload.replacement)
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
    
    
  }
  
}, stateInitial);


export default themeReducer;