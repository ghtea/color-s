import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import Immutable from 'immutable';

import * as config from '../../../config';

import * as actionsColor from "../../actions/color";
import convertRgbToHsl from './spreadRgb/convertRgbToHsl'



function* spreadRgb(action) {
  
  
  const modelCurrent = yield select( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = yield select( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const colorCurrent = yield select( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  const numberR = colorCurrent.getIn(['rgb', 'r']);
  const numberG = colorCurrent.getIn(['rgb', 'g']);
  const numberB = colorCurrent.getIn(['rgb', 'b']);

	const {numberH, numberS, numberL} = convertRgbToHsl(numberR, numberG, numberB);
	
	yield put( actionsColor.return_REPLACE_COLOR({
    location: [ modelCurrent, 'itemCurrent', 'hsl'],
    replacement: {h: numberH, s: numberS, l: numberL}
	}) );
	
}

export default spreadRgb;

