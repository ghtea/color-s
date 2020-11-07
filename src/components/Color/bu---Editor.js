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
  
  Div_Options, 
  
  Div_ControlEntire, Div_ControlEach, 
  
  Div_InputRange_ColorElement,
  Div_InputText_ColorElement,
  Div_Button_ColorElement,
  
  Div_Tools
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
    
    <Div_Editor>
      
      <Div_Options>
        
        <button 
          onClick={(event)=>onChange_Option(event, 'mode')}
        > HSL vs RGB
        </button>
        
        <button 
          onClick={(event)=>onChange_Option(event, 'opacity')}
        > Opacity
        </button>
        
      </Div_Options>
      
      
      <div>
        
        
        { modeCurrent !== "rgb"  && (
        <Div_ControlEntire> 
          <div> HSL </div>
          
          <Div_ControlEach> 
            <div> H </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'}
            > 
              <input type="range" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event, 'hsl', 'h')} min="0" max="360" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['hsl', 'h'])} onChange={(event)=>onChange_ColorElement(event,'hsl', 'h')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, -1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'h', 360, 0, 1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <div> S </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
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
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, -1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/> 
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 's', 100, 0, 1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <div> L </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
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
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, -1)}>
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'hsl', 'l', 100, 0, 1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
        </Div_ControlEntire>
        )}
        
        
        
        { modeCurrent === "rgb" && (
        <Div_ControlEntire> 
          <div> RGB </div>
          
          <Div_ControlEach> 
            <div> R </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, rgba(0, ${listRgba[1]}, ${listRgba[2]}, ${listRgba[3]}) 0%, rgba(128, ${listRgba[1]}, ${listRgba[2]}, ${listRgba[3]}) 50%, rgba(255, ${listRgba[1]}, ${listRgba[2]}, ${listRgba[3]}) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'r')} min="0" max="255" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['rgb', 'r'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'r')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'r', 255, 0, -1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'r', 255, 0, 1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <div> G </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, rgba(${listRgba[0]}, 0, ${listRgba[2]}, ${listRgba[3]}) 0%, rgba(${listRgba[0]}, 128, ${listRgba[2]}, ${listRgba[3]}) 50%, rgba(${listRgba[0]}, 255, ${listRgba[2]}, ${listRgba[3]}) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'g')} min="0" max="255" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['rgb', 'g'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'g')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'g', 255, 0, -1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'g', 255, 0, 1)}>
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
          
          <Div_ControlEach> 
            <div> B </div>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, rgba(${listRgba[0]}, ${listRgba[1]}, 0, ${listRgba[3]}) 0%, rgba(${listRgba[0]}, ${listRgba[1]}, 128,  ${listRgba[3]}) 50%, rgba(${listRgba[0]}, ${listRgba[1]}, 255, ${listRgba[3]}) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event, 'rgb', 'b')} min="0" max="255" /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['rgb', 'b'])} onChange={(event)=>onChange_ColorElement(event,'rgb', 'b')} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'b', 255, 0, -1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'rgb', 'b', 255, 0, 1)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
        </Div_ControlEntire>
        )}
        
        
      { isOpacityCurrent && (
      <Div_ControlEntire>
        <div> Opacity </div>
        
        <Div_ControlEach> 
          <div/>
            <Div_InputRange_ColorElement
              pxWidthBoard={180}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              
              cssBackground={`linear-gradient(to right, hsla(${listHsla[0]}, ${listHsla[1]}%, ${listHsla[2]}%, 0) 0%, hsla(${listHsla[0]}, ${listHsla[1]}%, ${listHsla[2]}%,  0.5) 50%, hsla(${listHsla[0]}, ${listHsla[1]}%, ${listHsla[2]}%, 1) 100%)`}
            > 
              <input type="range" value={colorCurrent.getIn(['opacity'])} onChange={(event)=>onChange_ColorElement(event, 'opacity', undefined)} min="0" max="1" step='.05' /> 
            </Div_InputRange_ColorElement>
            
            <Div_InputText_ColorElement> 
              <input type="text" value={colorCurrent.getIn(['opacity'])} onChange={(event)=>onChange_ColorElement(event,'opacity', undefined)} /> 
            </Div_InputText_ColorElement>
            
            <Div_Button_ColorElement>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'opacity', '', 1, 0, -0.05)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(0deg)`}/>
              </button>
              <button onClick={(event)=>onClick_AdjustColorElement(event, 'opacity', '', 1, 0, 0.05)}> 
                <IconAngle width={'20px'} height={'20px'} roleColor={'basic'} phaseColor={'50'} transform={`rotateZ(180deg)`}/>
              </button>
            </Div_Button_ColorElement>
          </Div_ControlEach>
          
        </Div_ControlEntire>
        )}
        
      </div>
      
      
      <Div_Tools>
        
        <button 
          
        > <IconClone width={'24px'} height={'24px'} roleColor={'basic'} phaseColor={'50'}/>
          <div> Copy </div>
        </button>
        
        <button 
          onClick={onClick_Paste}
        > <IconClipboard width={'27px'} height={'27px'} roleColor={'basic'} phaseColor={'50'}/>
          <div> Paste </div>
        </button>
        
      </Div_Tools>
      
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