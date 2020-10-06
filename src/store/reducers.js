import {combineReducers} from 'redux';

import statusReducer from './reducers/status';
import authReducer from './reducers/auth';
import colorReducer from './reducers/color';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  status: statusReducer,
  auth: authReducer,
  color: colorReducer,
  theme: themeReducer
});



export default rootReducer;