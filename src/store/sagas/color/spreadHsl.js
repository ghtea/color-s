import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import Immutable from 'immutable';

import * as config from '../../../config';

import * as color from "../../actions/color";
import convertHslToRgb from './spreadHsl/convertHslToRgb'



function* spreadHsl(action) {
   
  const whichModifying = action.payload.whichModifying;
  const roleModifying = action.payload.roleModifying;
  const colorModifying =  yield select( (state) => state.color.getIn([whichModifying, roleModifying]) ); 
  
  const numberH = colorModifying.getIn(['hsl', 'h']);
  const numberS = colorModifying.getIn(['hsl', 's']);
  const numberL = colorModifying.getIn(['hsl', 'l']);
	
	const {numberR, numberG, numberB} = convertHslToRgb(numberH, numberS, numberL);
	
	yield put( color.return_REPLACE_COLOR({
    location: [whichModifying, roleModifying, 'rgb'],
    replacement: {r: numberR, g: numberG, b: numberB}
	}) );
	
}

export default spreadHsl;

