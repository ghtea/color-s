import React, {useState, useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as color from "../../../store/actions/color";


import * as config from '../../../config';



import {Div_Editor, Div_ControlEntire, Div_ControlEach, InputText_ColorElement, InputRange_ColorElement} from './Editor_Styled'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../../tools/hooks/useInput';



function Editor({
  whichModifying,
  roleModifying
}) {
  
  const colorModifying = useSelector( state => state.color.getIn([whichModifying]), [] );
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
  }, [])
  
  const onChange_ColorElement = useCallback(
    (event, which, role, mode, element) => {
      if (mode==='hsl'){
        dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
        dispatch( color.return_SPREAD_HSL({whichModifying: which, roleModifying: role}) );
      }
      else if (mode==='rgb'){
        dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: Math.round(event.target.value)
        }) )
        dispatch( color.return_SPREAD_RGB({whichModifying: which, roleModifying: role}) );
      }
    },
    []
  );
  
  
  const onClick_AdjustColorElement = useCallback(
    (event, which, role, mode, element, max, min, unit) => {
      if (mode==='hsl'){
        const existing = colorModifying.getIn([role, mode, element]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: replacement
        }) )
        dispatch( color.return_SPREAD_HSL({whichModifying: which, roleModifying: role}) );
      }
      else if (mode==='rgb'){
        const existing = colorModifying.getIn([role, mode, element]);
        let replacement = existing + unit;
        if (replacement > max){ replacement = max } 
        if (replacement < min){ replacement = min } 
        dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: replacement
        }) )
        dispatch( color.return_SPREAD_RGB({whichModifying: which, roleModifying: role}) );
      }
    },
    [colorModifying]
  );
  
  
  
  const onClick_Paste = useCallback(
    
    (event) => {
      //console.log(listColorScheme);
      navigator.clipboard.readText()
        .then(text => {
          console.log('Pasted content: ', text);
          
          dispatch( color.return_SPREAD_TEXT(({text, whichModifying, roleModifying})) )
          
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
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 'h')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 'h', 360, 0, -1)}> {'<'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 'h', 360, 0, 1)}> {'>'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 'h')} min="0" max="360" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> s </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 's')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 's', 100, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 's', 100, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 's')}  min="0" max="100" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> l </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 'l')} />  
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 'l', 100, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'hsl', 'l', 100, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'hsl', 'l')}  min="0" max="100" /> </div>
          </Div_ControlEach>
          
        </Div_ControlEntire>
        
        
        
        <Div_ControlEntire> 
          <Div_ControlEach> 
            <div> red </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'r')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'r', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'r', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'r')} min="0" max="255" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> green </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'g')} /> 
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'g', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'g', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'g')}  min="0" max="255" /> </div>
          </Div_ControlEach>
          
          <Div_ControlEach> 
            <div> blue </div> 
            <div> 
              <InputText_ColorElement type="text" value={colorModifying.getIn([Editor'rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'b')} />  
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'b', 255, 0, -1)}> {'-'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, whichModifying, Editor'rgb', 'b', 255, 0, 1)}> {'+'} </button>
            </div>
            <div> <InputRange_ColorElement type="range" value={colorModifying.getIn([Editor'rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, whichModifying, Editor'rgb', 'b')}  min="0" max="255" /> </div>
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