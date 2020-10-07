import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as color from '../actions/color';

import colorDefault from './color/colorDefault';
//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = fromJS({
  
  
  solo: {
    itemCurrent: {
      _id: 'default',
      main: colorDefault
    }
  },
  
  
  duo: {
    itemCurrent: {
      _id: 'default',
      main: colorDefault,
      sub: colorDefault
    },
    listItem: []
  },
  
  series: {
    itemCurrent: {
      _id: 'default',
      
      '00': colorDefault,
      '10': colorDefault,
      '20': colorDefault,
      '30': colorDefault,
      '40': colorDefault,
      
      '50': colorDefault,
      
      '60': colorDefault,
      '70': colorDefault,
      '80': colorDefault,
      '90': colorDefault,
      '100': colorDefault
    },
    listItem: []
  }
  
});





const colorReducer = handleActions({
  
  [color.REPLACE_COLOR]: (state, action) => {
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


export default colorReducer;