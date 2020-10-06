import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import Immutable from 'immutable';

import * as config from '../../../config';

import * as color from "../../actions/color";
import convertRgbToHsl from './spreadRgb/convertRgbToHsl'



function* spreadRgb(action) {
  
  const whichModifying = action.payload.whichModifying;
  const roleModifying = action.payload.roleModifying;
  const colorModifying =  yield select( (state) => state.color.getIn([whichModifying, roleModifying]) ); 
  
  const numberR = colorModifying.getIn(['rgb', 'r']);
  const numberG = colorModifying.getIn(['rgb', 'g']);
  const numberB = colorModifying.getIn(['rgb', 'b']);

	const {numberH, numberS, numberL} = convertRgbToHsl(numberR, numberG, numberB);
	
	yield put( color.return_REPLACE_COLOR({
    location: [whichModifying, roleModifying, 'hsl'],
    replacement: {h: numberH, s: numberS, l: numberL}
	}) );
	
}

export default spreadRgb;

