import React, {useState, useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as actionsColor from "../../store/actions/color";
import * as actionsStatus from "../../store/actions/status";

import * as config from '../../config';



import {Div_Editor, Div_ControlEntire, Div_ControlEach, InputText_ColorElement, InputRange_ColorElement} from './Editor_Styled'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../tools/hooks/useInput';



function Editor({
  
}) {
  
  const location = useLocation();
  //console.log(location)
  
  const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const modeCurrent = useSelector( state => state.status.getIn(['color', 'mode']), [] );
  
  const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
    let replacement = '';
    
    if (location.pathname === '/color/solo') {
      replacement = 'main'
    }
    else if (location.pathname === '/color/duo') {
      replacement = 'main'
    }
    else if (location.pathname === '/color/series') {
      replacement = '50'
    }
    
    dispatch( actionsStatus.return_REPLACE_STATUS({
      location: ['current', 'color', 'position'],
      replacement: replacement
    }) )
  }, [location])
  
  
  const onChange_ColorElement = useCallback(
    (event, mode, element) => {
      if (mode==='hsl'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', mode, element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
        dispatch( actionsColor.return_SPREAD_HSL( ) );
      }
      else if (mode==='rgb'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', mode, element],
          replacement: Math.round(event.target.value)
        }) )
        dispatch( actionsColor.return_SPREAD_RGB( ) );
      }
    },
    []
  );
  
  
  const onClick_AdjustColorElement = useCallback(
    (event, mode, element, max, min, unit) => {
      if (mode==='hsl'){
        const existing = colorCurrent.getIn([mode, element]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', mode, element],
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
          location: [modelCurrent, 'itemCurrent', mode, element],
          replacement: replacement
        }) )
        dispatch( actionsColor.return_SPREAD_RGB( ) );
      }
    },
    [colorCurrent]
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
  
  
  return (
    
    <Div_Editor>
      
      <div>
      
        <Div_ControlEntire> 
        
          <Div_ControlEach> 
            <div> hue </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'h')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, -1)}> {'<'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, 1)}> {'>'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'h')} min="0" max="360" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> s </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 's')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 's')}  min="0" max="100" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> l </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'l')} />  
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'l')}  min="0" max="100" /> </div>
          </Div_ControlEach>
          
        </Div_ControlEntire>
        
        
        
        <Div_ControlEntire> 
          <Div_ControlEach> 
            <div> red </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'r')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'r', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'r', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'r')} min="0" max="255" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> green </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'g')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'g', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'g', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'g')}  min="0" max="255" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> blue </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'b')} />  
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'b', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'b', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'b')}  min="0" max="255" /> </div>
          </Div_ControlEach>
        </Div_ControlEntire>
        
      </div>
      
      <div>
        
        <button 
          onClick={onClick_Paste}
        > click to paste 
        </button>
        
        <div> examples</div>
        
      </div>
      
    </Div_Editor>
    
  )
}




export default Editor;

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