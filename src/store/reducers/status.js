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
      model: 'solo',   // solo, duo, series
      position: 'main',   //  main, sub, 00, 10, 20, ..., 100
      mode: 'hsl', // 'rgb'
      opacity: false 
    }
    
  },
  
  showing: {
    
    color:{
      editor: true
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