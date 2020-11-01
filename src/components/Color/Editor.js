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

import Triangle from './Editor/Triangle';

import {
  Div_Editor, 
  Div_Editor_A, Div_Editor_B, Div_Editor_C,
  
  Div_Editor_A_ChangeMode, Div_Editor_A_ToggleOpacity,
  Div_Editor_B_Element,
  Div_Editor_C_UseClipboard, Div_Editor_C_BackForward
} from './Editor_Styled'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import useInput from '../../tools/hooks/useInput';



function Editor({
  modelCurrent
}) {
  
  const location = useLocation();
  //console.log(location)
  
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', modelCurrent, 'position']), [] );
  const modeCurrent = useSelector( state => state.status.getIn(['current', 'color', modelCurrent, 'mode']), [] );
  //console.log(modeCurrent)
  
  // const isOpacityCurrent = useSelector( state => state.status.getIn(['current', 'color', 'opacity']), [] );
  
  const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  
  
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
      /*
      else if (option==='opacity'){
        if (isOpacityCurrent===true){
          replacement = false;
        }
        else {
          replacement = true;
        }
      }
      */
      
      dispatch( actionsStatus.return_REPLACE_STATUS({
        location: ['current', 'color', modelCurrent, option],
        replacement: replacement
      }) )
      
    },
    [modeCurrent]
  );
  
  
  const onChange_ColorElement = useCallback(
    (event, mode, element) => {
      if (mode==='hsl'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
        dispatch( actionsColor.return_SPREAD_HSL({
          location: [modelCurrent, 'itemCurrent', positionCurrent]
        }) );
      }
      else if (mode==='rgb'){
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: [modelCurrent, 'itemCurrent', positionCurrent, mode, element],
          replacement: Math.round(event.target.value)
        }) )
        dispatch( actionsColor.return_SPREAD_RGB({
          location: [modelCurrent, 'itemCurrent', positionCurrent]
        }) );
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
        
        dispatch( actionsColor.return_SPREAD_HSL({
          location: [modelCurrent, 'itemCurrent', positionCurrent]
        }) );
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
        dispatch( actionsColor.return_SPREAD_RGB({
          location: [modelCurrent, 'itemCurrent', positionCurrent]
        }) );
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
    
    <Div_Editor>
      
      <Div_Editor_A>
      
        <Div_Editor_A_ChangeMode
          onClick={(event)=>onChange_Option(event, 'mode')}
          modeCurrent={modeCurrent}
        > 
          <div> HSL </div> 
          <div> RGB </div> 
        </Div_Editor_A_ChangeMode>
        
      </Div_Editor_A>
      
      
      <Div_Editor_B>
      { (modeCurrent === 'hsl') && (
      <>
        <Div_Editor_B_Element> 
          <div> H </div>
          <div> <input type="range" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'h')} min="0" max="360" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'h')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
        
        <Div_Editor_B_Element> 
          <div> S </div>
          <div> <input type="range" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 's')} min="0" max="100" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['hsl', 's'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 's')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
        
        <Div_Editor_B_Element> 
          <div> L </div>
          <div> <input type="range" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'l')} min="0" max="100" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['hsl', 'l'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'l')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
      </>
      ) }
      
      { (modeCurrent === 'rgb') && (
      <>
        <Div_Editor_B_Element> 
          <div> R </div>
          <div> <input type="range" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'r')} min="0" max="255" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'r')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
        
        <Div_Editor_B_Element> 
          <div> G </div>
          <div> <input type="range" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'g')} min="0" max="255" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'g')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
        
        <Div_Editor_B_Element> 
          <div> B </div>
          <div> <input type="range" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'b')} min="0" max="255" />  </div>
          <div> <input type="text" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'b')} /> </div>
          <div> <div>up</div> <div>down</div> </div>
        </Div_Editor_B_Element>
      </>
      ) }
      
      </Div_Editor_B>
      
      
      <Div_Editor_C>
        <Div_Editor_C_UseClipboard> from clipboard </Div_Editor_C_UseClipboard> 
        <Div_Editor_C_BackForward> 
          <div> {`<-`} </div> 
          <div> {`->`} </div>  
        </Div_Editor_C_BackForward>
      </Div_Editor_C>
      
    </Div_Editor>
    
  )
}

//               cssBackground={`linear-gradient(to left, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}



export default Editor;



/*

        <Div_Editor_A_ToggleOpacity
          onClick={(event)=>onChange_Option(event, 'opacity')}
          isOpacityCurrent={isOpacityCurrent}
        > {isOpacityCurrent ? 'opacity: on' : 'opacity: off'} </Div_Editor_A_ToggleOpacity> 
        
        
        
      { (isOpacityCurrent === true) &&
        <Div_Editor_B_Element> 
          <div> a </div>
          <div> <input type="range" value={colorCurrent.getIn(['opacity'])} onChange={(event)=>onChange_ColorElement(event, 'opacity', undefined)} min="0" max="1" step='.05' /> </div>
          <div> input </div>
          <div> arrows </div>
        </Div_Editor_B_Element>
      }
*/


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