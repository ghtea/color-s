import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import Immutable from 'immutable';

import * as config from '../../../config';

import * as color from "../../actions/color";

import convertRgbToHsl from './spreadRgb/convertRgbToHsl'
import convertHslToRgb from './spreadHsl/convertHslToRgb'



function* spreadText(action) {
  
  const text = action.payload.text;
  const whichModifying = action.payload.whichModifying;
  const roleModifying = action.payload.roleModifying;
  console.log(text);
  /*
  const numberR = colorConverting.getIn(['rgb', 'r']);
  const numberG = colorConverting.getIn(['rgb', 'g']);
  const numberB = colorConverting.getIn(['rgb', 'b']);
  */
  
  
  const regexHsl = /hsl\(([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|1[0-9][0-9](?:.\d+)?|2[0-9][0-9](?:.\d+)?|3[0-5][0-9](?:.\d+)?|360),(?:\s|)([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|100)%,(?:\s|)([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|100)%\)/;  // https://regexr.com/3ln2f
  const regexHsla = /hsla\(([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|1[0-9][0-9](?:.\d+)?|2[0-9][0-9](?:.\d+)?|3[0-5][0-9](?:.\d+)?|360),(?:\s|)([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|100)%,(?:\s|)([0-9](?:.\d+)?|[1-9][0-9](?:.\d+)?|100)%,(?:\s|)(0?\.\d*|0|1|1.0)\)/;
  const regexRgb = /rgb\(([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(?:\s|)([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(?:\s|)([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)/;   // https://regexr.com/39p9t
  const regexRgba = /rgba\(([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(?:\s|)([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(?:\s|)([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(?:\s|)(0?\.\d*|0|1|1.0)\)/; // https://regexr.com/38l13
  
  const regexHex6 = /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/ // https://regexr.com/3ag5b
  const regexHex3 = /^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/;
  
  
  
  // https://javascript.info/regexp-groups
  
  
  if (regexHsl.test(text)){
    console.log('hsl')
    const result = text.match(regexHsl);
    const numberH = Math.round(parseFloat(result[1])*10)/10;
    const numberS = Math.round(parseFloat(result[2])*10)/10;
    const numberL = Math.round(parseFloat(result[3])*10)/10;
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'hsl'],
      replacement: {h: numberH, s: numberS, l: numberL}
  	}) );
  	yield put(color.return_SPREAD_HSL({whichModifying, roleModifying})); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: 1
  	}) );
  }
  else if (regexHsla.test(text)){
    console.log('hsla')
    const result = text.match(regexHsla);
    const numberH = Math.round(parseFloat(result[1])*10)/10;
    const numberS = Math.round(parseFloat(result[2])*10)/10;
    const numberL = Math.round(parseFloat(result[3])*10)/10;
    const numberA = Math.round(parseFloat(result[4])*100)/100;
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'hsl'],
      replacement: {h: numberH, s: numberS, l: numberL}
  	}) );
  	yield put(color.return_SPREAD_HSL({whichModifying, roleModifying})); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: numberA
  	}) );
  }
  else if (regexRgb.test(text)){
    console.log('rgb')
    const result = text.match(regexRgb);
    const numberR = parseInt(result[1]);
    const numberG = parseInt(result[2]);
    const numberB = parseInt(result[3]);
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'rgb'],
      replacement: {r: numberR, g: numberG, b: numberB}
  	}) );
  	yield put( color.return_SPREAD_RGB({whichModifying, roleModifying}) ); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: 1
  	}) );
  }
  else if (regexRgba.test(text)){
    console.log('rgba')
    const result = text.match(regexRgba);
    const numberR = parseInt(result[1]);
    const numberG = parseInt(result[2]);
    const numberB = parseInt(result[3]);
    const numberA = parseFloat(result[4]);
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'rgb'],
      replacement: {r: numberR, g: numberG, b: numberB}
  	}) );
  	yield put( color.return_SPREAD_RGB({whichModifying, roleModifying}) ); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: numberA
  	}) );
  }
  else if (regexHex6.test(text)){
    console.log('hex6')
    const result = text.match(regexHex6);
    const numberR = parseInt(result[1], 16);
    const numberG = parseInt(result[2], 16);
    const numberB = parseInt(result[3], 16);
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying,  'rgb'],
      replacement: {r: numberR, g: numberG, b: numberB}
  	}) );
  	yield put( color.return_SPREAD_RGB({whichModifying, roleModifying}) ); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: 1
  	}) );
  }
  else if (regexHex3.test(text)){
    console.log('hex3')
    const result = text.match(regexHex3);
    const numberR = parseInt(`${result[1]}${result[1]}`, 16);
    const numberG = parseInt(`${result[2]}${result[2]}`, 16);
    const numberB = parseInt(`${result[3]}${result[3]}`, 16);
    
    yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'rgb'],
      replacement: {r: numberR, g: numberG, b: numberB}
  	}) );
  	yield put( color.return_SPREAD_RGB({whichModifying, roleModifying}) ); 
  	yield put( color.return_REPLACE_COLOR({
      location: [whichModifying, roleModifying, 'opacity'],
      replacement: 1
  	}) );
  }
  
  /*
	const {numberH, numberS, numberL} = convertRgbToHsl(numberR, numberG, numberB);
	
	yield put( color.return_REPLACE_COLOR({
    location: ['colorConverting', 'hsl'],
    replacement: {h: numberH, s: numberS, l: numberL}
	}) );
	*/
}

export default spreadText;
