import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import Immutable from 'immutable';

import * as config from '../../../config';

import * as actionsColor from "../../actions/color";
import convertHslToRgb from './spreadHsl/convertHslToRgb'



function* spreadHsl(action) {
  
  
  const modelCurrent = yield select( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = yield select( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const colorCurrent = yield select( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  const numberH = colorCurrent.getIn(['hsl', 'h']);
  const numberS = colorCurrent.getIn(['hsl', 's']);
  const numberL = colorCurrent.getIn(['hsl', 'l']);
	
	const {numberR, numberG, numberB} = convertHslToRgb(numberH, numberS, numberL);
	
	yield put( actionsColor.return_REPLACE_COLOR({
    location: [ modelCurrent, 'itemCurrent', 'rgb' ],
    replacement: {r: numberR, g: numberG, b: numberB}
	}) );
	
}

export default spreadHsl;

