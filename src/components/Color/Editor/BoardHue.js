import React, {useState, useEffect, useMemo, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as actionsColor from "../../../store/actions/color";
import * as actionsStatus from "../../../store/actions/status";

import * as config from '../../../config';

//import {   } from 'react-color';
import { CustomPicker, HuePicker } from 'react-color';
//import { Saturation } from 'react-color/lib/components/common';

import PointerNone from './Board/PointerNone'; 
// http://casesandberg.github.io/react-color/#api-color

import {
  Div_BoardHue, 
  Div_Pointer
} from './BoardHue_Styled';


// https://github.com/casesandberg/react-color/blob/master/src/components/hue/Hue.js
function BoardHue( {
  pxWidth,
  pxHeight
} ) {
  
  const dispatch = useDispatch();
  
  const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  //const modeCurrent = useSelector( state => state.status.getIn(['current', 'color', 'mode']), [] );
  
  //const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  const numberHueCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent, 'hsl', 'h']), [] );
  
  
  /*
  const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const modeCurrent = useSelector( state => state.status.getIn(['current', 'color', 'mode']), [] );
  
  const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  
  
  */
  
  
  
  const onChange_Hue = useCallback(
    (color, event) => {
      
      const numberHueNew = color.oldHue;
      console.log(numberHueNew);
      /*
        console.log(color)
        {
          hex: "#ff0016",
          hsl: {h: 354.75, s: 1, l: 0.5, a: 1},
          hsv: {h: 354.75, s: 1, v: 1, a: 1},
          oldHue: 354.75,
          rgb: {r: 255, g: 0, b: 22, a: 1},
          source: undefined
        }
      */
      
      dispatch( actionsColor.return_REPLACE_COLOR({
        location: [modelCurrent, 'itemCurrent', positionCurrent, 'hsl', 'h'],
        replacement: Math.round(numberHueNew * 10)/10
      }) )
      dispatch( actionsColor.return_SPREAD_HSL( ) );
    },
    [modelCurrent, positionCurrent]
  );
  
  //console.log(props)
  
  return (
    
    <Div_BoardHue
      width={`${pxWidth}px`}
      height={`${pxHeight}px`}
    >
      
      <HuePicker
        width={`${pxWidth}px`}
        height={`${pxHeight}px`}
        direction={'horizontal'}
        pointer={PointerNone}
        
        onChange={onChange_Hue}
      />
      
      <Div_Pointer 
      
        width={`10px`}
        height={`${pxHeight}px`}
        
        left={ `${numberHueCurrent / 360 * pxWidth}px` }
      />
      
    </Div_BoardHue>
    
  )
}


// http://casesandberg.github.io/react-color/#api-color
export default BoardHue;


/*
  
      <Div_Pointer
        pxWidth={pxWidth}
        pxHeight={pxHeight}
        
        numberHueCurrent={numberHueCurrent}
      >
        <Div_Pointer_Up />
        <Div_Pointer_Down />
      </Div_Pointer>
*/

/*

  <Saturation 
        {...props}
        onChange={onChange_ColorElement}
        pointer={ Pointer }
      />
*/



/*

  <CopyToClipboard 
    text={battletag}
    onCopy={ () => {  
      
      const messageBase = dictCode['tplan02']['message'][language];
      const message = messageBase.replace('BATTLETAG', battletag);
      addDeleteNotification("basic04", language, message, 2000); 
      
    } } >
    
    <DivBattletag> 
      <DivBattletagName> {battletagName} </DivBattletagName>
      <DivBattletagNumber> {battletagNumber} </DivBattletagNumber>
    </DivBattletag>


*/