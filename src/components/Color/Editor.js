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
import BoardHue from './Editor/BoardHue';
// http://casesandberg.github.io/react-color/#api-color

import {
  Div_Editor, 
  
  Div_ControlEntire, Div_ControlEach, 
  
  Div_InputRange_ColorElement,
  Div_InputText_ColorElement,
  Div_Button_ColorElement
} from './Editor_Styled'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../tools/hooks/useInput';



function Editor({
  
}) {
  
  const location = useLocation();
  //console.log(location)
  
  const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const modeCurrent = useSelector( state => state.status.getIn(['current', 'color', 'mode']), [] );
  
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
  
  
  
  
  const listHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorCurrent.getIn(['hsl', 'h']);
    const s = colorCurrent.getIn(['hsl', 's']);
    const l = colorCurrent.getIn(['hsl', 'l']);
    const opacity = colorCurrent.getIn(['opacity']);
    
    return [h, s, l, opacity]
  }, [colorCurrent]);
  
  
  return (
    
    <Div_Editor>
      
      <div>
      
        <Div_ControlEntire> 
          
          <Div_ControlEach> 
            <Div_InputRange_ColorElement
              pxWidthBoard={200}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={'linear-gradient(to left, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'}
            > 
              <input type="range" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'h')} min="0" max="360" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'h')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, -1)}> {'<'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, 1)}> {'>'} </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <Div_InputRange_ColorElement
              pxWidthBoard={200}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 's')} min="0" max="100" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 's')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, -1)}> {'<'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, 1)}> {'>'} </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <Div_InputRange_ColorElement
              pxWidthBoard={200}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, hsla(${listHsla[0]}, ${listHsla[1]}%, 0%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, ${listHsla[1]}%, 50%,  ${listHsla[3]}) 50%, hsla(${listHsla[0]}, ${listHsla[1]}%, 100%, ${listHsla[3]}) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'l')} min="0" max="100" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'l')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, -1)}> {'<'} </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, 1)}> {'>'} </button>
            </Div_Button_ColorElement>
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

//               cssBackground={`linear-gradient(to left, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}



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