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
// http://casesandberg.github.io/react-color/#api-color
import IconAngle from '../../../svgs/basic/IconAngle';
import IconClone from '../../../svgs/basic/IconClone';
import IconClipboard from '../../../svgs/basic/IconClipboard';

import Triangle from '../Editor/Triangle';

import {
  Div_EditorCs, 
  Div_EditorCs_A, Div_EditorCs_B, Div_EditorCs_C,
  
  Div_EditorCs_A_ChangeMode, Div_EditorCs_A_ToggleOpacity,
  Div_EditorCs_B_Element,
  Div_EditorCs_C_UseClipboard, Div_EditorCs_C_BackForward
} from './EditorCs_Styled'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../../tools/hooks/useInput';



function EditorCs({
  modelCurrent
}) {
  
  const location = useLocation();
  //console.log(location)
  
  
  const hueCurrent = useSelector( state => state.color.getIn(['series', 'itemCurrent', 'hue']), [] );
  const itemCurrent = useSelector( state => state.color.getIn(['series', 'itemCurrent']), [] );
  
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
    dispatch( actionsStatus.return_REPLACE_STATUS({
      location: ['current', 'color', 'model'],
      replacement: 'series'
    }) )
     
  }, [location])
  

  
  const onChange_Hue = useCallback(
    (event) => {
      
      dispatch( actionsColor.return_REPLACE_COLOR({
        location: ['series', 'itemCurrent', 'hue'],
        replacement: Math.round(event.target.value * 10)/10
      }) )
        
    },
    []
  );
  
  
  const onClick_AdjustColorElement = useCallback(
    (event, mode, element, max, min, unit) => {
      
      if (mode==='hsl'){
        
        let replacement = hueCurrent + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: ['series', 'itemCurrent', 'hue'],
          replacement: replacement
        }) )
        
      }
      
    },
    [hueCurrent]
  );
  
  
  
  /*
  const listHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorCurrent.getIn(['hsl', 'h']);
    const s = colorCurrent.getIn(['hsl', 's']);
    const l = colorCurrent.getIn(['hsl', 'l']);
    const opacity = colorCurrent.getIn(['opacity']);
    
    return [h, s, l, opacity]
  }, [itemCurrent]);
  */
  
  return (
    
    <Div_EditorCs>
      
      <Div_EditorCs_A>
      
      </Div_EditorCs_A>
      
      
      <Div_EditorCs_B>
      
        <Div_EditorCs_B_Element> 
          <div> H </div>
          <div> <input type="range" value={hueCurrent} onChange={(event)=>onChange_Hue(event)} min="0" max="360" />  </div>
          <div> <input type="text" value={hueCurrent} onChange={(event)=>onChange_Hue(event)} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_EditorCs_B_Element>
      
      
      </Div_EditorCs_B>
      
      
      <Div_EditorCs_C>
        <Div_EditorCs_C_BackForward> 
          <div> {`<-`} </div> 
          <div> {`->`} </div>  
        </Div_EditorCs_C_BackForward>
      </Div_EditorCs_C>
      
    </Div_EditorCs>
    
  )
}

//               cssBackground={`linear-gradient(to left, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}



export default EditorCs;

/*

  <div>
    <div> rgba </div>
    <div> hsla </div>
  </div>

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