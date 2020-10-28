import React, {useState, useEffect, useMemo, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as actionsColor from "../../store/actions/color";
import * as actionsStatus from "../../store/actions/status";

import * as config from '../../config';

//import {   } from 'react-color';
// http://casesandberg.github.io/react-color/#api-color
import IconAngle from '../../svgs/basic/IconAngle';
import IconClone from '../../svgs/basic/IconClone';
import IconClipboard from '../../svgs/basic/IconClipboard';

import {
  Div_List, 
  Div_List_A, Div_List_B,
  
  Div_List_A_Recent,
  Div_List_B_Item
  
} from './List_Styled'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../tools/hooks/useInput';



function List({
  
}) {
  
  const location = useLocation();
  //console.log(location)
  
  const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const modeCurrent = useSelector( state => state.status.getIn(['current', 'color', 'mode']), [] );
  const isOpacityCurrent = useSelector( state => state.status.getIn(['current', 'color', 'opacity']), [] );
  
  const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
    let replacement = {
      model: 'solo',
      position: 'main'
    };
    
    if (location.pathname === '/color/solo') {
      replacement = {
        model: 'solo',
        position: 'main'
      }
    }
    else if (location.pathname === '/color/duo') {
      replacement = {
        model: 'duo',
        position: 'main'
      }
    }
    else if (location.pathname === '/color/series') {
      replacement = {
        model: 'series',
        position: '50'
      }
    }
    
    dispatch( actionsStatus.return_REPLACE_STATUS({
      location: ['current', 'color'],
      replacement: replacement
    }) )
  }, [location])
  
  
  
  const onChange_Option = useCallback(
    (event, option) => {
      let replacement = '';
      
      if (option==='mode'){
        if (modeCurrent==='hsl'){
          replacement = 'rgb';
        }
        else {
          replacement = 'hsl';
        }
      }
      else if (option==='opacity'){
        if (isOpacityCurrent===true){
          replacement = false;
        }
        else {
          replacement = true;
        }
      }
        
      dispatch( actionsStatus.return_REPLACE_STATUS({
        location: ['current', 'color', option],
        replacement: replacement
      }) )
      
    },
    [modeCurrent, isOpacityCurrent]
  );
  
  
  const onChange_ColorElement = useCallback(
    (event, mode, element) => {
      if (mode==='hsl'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
        dispatch( actionsColor.return_SPREAD_HSL( ) );
      }
      else if (mode==='rgb'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: Math.round(event.target.value)
        }) )
        dispatch( actionsColor.return_SPREAD_RGB( ) );
      }
      else if (mode==='opacity'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode],
          replacement: Math.round(event.target.value * 100)/100
        }) )
      }
    },
    [modelCurrent, positionCurrent]
  );
  
  
  const onClick_AdjustColorElement = useCallback(
    (event, mode, element, max, min, unit) => {
      if (mode==='hsl'){
        const existing = colorCurrent.getIn([mode, element]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: replacement
        }) )
        
        dispatch( actionsColor.return_SPREAD_HSL( ) );
      }
      else if (mode==='rgb'){
        const existing = colorCurrent.getIn([mode, element]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: replacement
        }) )
        dispatch( actionsColor.return_SPREAD_RGB( ) );
      }
      else if (mode==='opacity'){
        const existing = colorCurrent.getIn([mode]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode],
          replacement: Math.round(replacement * 100)/100
        }) )
      }
    },
    [colorCurrent, modelCurrent, positionCurrent]
  );
  
  
  
  const onClick_Paste = useCallback(
    
    (event) => {
      //console.log(listColorScheme);
      navigator.clipboard.readText()
        .then(text => {
          console.log('Pasted content: ', text);
          
          dispatch( actionsColor.return_SPREAD_TEXT({text}) )
          
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
      
    },
    []
  );
  
  
  
  
  const listHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorCurrent.getIn(['hsl', 'h']);
    const s = colorCurrent.getIn(['hsl', 's']);
    const l = colorCurrent.getIn(['hsl', 'l']);
    const opacity = colorCurrent.getIn(['opacity']);
    
    return [h, s, l, opacity]
  }, [colorCurrent]);
  
  
  const listRgba = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const r = colorCurrent.getIn(['rgb', 'r']);
    const g = colorCurrent.getIn(['rgb', 'g']);
    const b = colorCurrent.getIn(['rgb', 'b']);
    const opacity = colorCurrent.getIn(['opacity']);
    
    return [r, g, b, opacity]
  }, [colorCurrent]);
  
  // <Triangle pxSideLong={40} transform={`translateY(-${ 10 + 40*0.5}px)`} />
      
      
  return (
    
    <Div_List>
      
      <Div_List_A>
        <Div_List_A_Recent> recent </Div_List_A_Recent> 
      </Div_List_A>
      
      <Div_List_B>
      
        list
        
      </Div_List_B>
      
    </Div_List>
    
  )
}

//               cssBackground={`linear-gradient(to left, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}



export default List;

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