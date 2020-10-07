import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as status from '../actions/status';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = fromJS({
  
  loading: {
    user: false
    
  },
  
  ready: {
    user: false
  },
  
  current: {
    color: {
      model: 'one',
      mode: 'editing' // edit, more, 
    }
  }
  
});





const statusReducer = handleActions({
  
  
  [status.REPLACE_STATUS]: (state, action) => {
    //console.log('hiiii');
    
    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
    
  },
  
  
}, stateInitial);


export default statusReducer;