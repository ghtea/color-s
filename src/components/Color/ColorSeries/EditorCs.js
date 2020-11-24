import React, {useState, useEffect, useMemo, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS} from 'immutable';

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
  
  Div_EditorCs_A_ChangeSize,
  Div_EditorCs_B_Element, Div_EditorCs_B_Element_InputRange, 
  Div_EditorCs_C_MakeSeries
} from './EditorCs_Styled'

import calculateSeries from './calculateSeries';
import convertHslToRgb from '../../../store/sagas/color/spreadHsl/convertHslToRgb';

import useInput from '../../../tools/hooks/useInput';



function EditorCs({
  modelCurrent
}) {
  
  const location = useLocation();
  //console.log(location)
  
  
  const color = useSelector( state => state.color, [] );
  
  const itemCurrent = useSelector( state => state.color.getIn(['series', 'itemCurrent']), [] );
  const size = useSelector( state => state.color.getIn(['series', 'itemCurrent', 'size']), [] );
  const [sizeNew, setSizeNew] = useState(21);
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
    dispatch( actionsStatus.return_REPLACE_STATUS({
      location: ['current', 'color', 'model'],
      replacement: 'series'
    }) )
    
    dispatch( actionsColor.return_REPLACE_COLOR({
      location: ['series', 'itemCurrent', 'white', 'hsl', 'l'],
      replacement: 100
    }) )
     
  }, [])
  

  const onChange_Size = useCallback(
    (event) => {
      
      setSizeNew(event.target.value);
      
    },
    []
  );
  
  
  const onChange_StartEnd = useCallback(
    (event, which, element) => {
      
      if (which==='both'){
        
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: ['series', 'itemCurrent', 'start', 'hsl', element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: ['series', 'itemCurrent', 'end', 'hsl', element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
      
      }
      else {
        dispatch( actionsColor.return_REPLACE_COLOR({
          location: ['series', 'itemCurrent', which, 'hsl', element],
          replacement: Math.round(event.target.value * 10)/10
        }) )
      }
      
      
      console.log(color.toJS())
    },
    [size]
  );
  
  
  const onClick_AdjustColorElement = useCallback(
    (event, which, element, max, min, unit) => {
      
      let replacement = itemCurrent.getIn([which, 'hsl', element]) + unit;
      if (replacement > max){ replacement = max } 
      if (replacement < min){ replacement = min } 
      
      dispatch( actionsColor.return_REPLACE_COLOR({
        location: ['series', 'itemCurrent', which, 'hsl', element],
        replacement: replacement
      }) )
      
    },
    [itemCurrent]
  );
  
  
  
  const onClick_MakeSeries  = useCallback(
    async (event, sizeNew) => {
      console.log(itemCurrent.toJS())
      //const colorWhite = itemCurrent.getIn(['white']);
      const listHslStart = [itemCurrent.getIn(['start', 'hsl', 'h']), itemCurrent.getIn(['start', 'hsl', 's']), itemCurrent.getIn(['start', 'hsl', 'l'])];
      const listHslEnd = [itemCurrent.getIn(['end', 'hsl', 'h']), itemCurrent.getIn(['end', 'hsl', 's']), itemCurrent.getIn(['end', 'hsl', 'l'])];
      
      const listColorHslAll = await calculateSeries(listHslStart, listHslEnd, sizeNew);
      
      const listColorAll = []
      for (var iColor = 0; iColor < sizeNew; iColor++) {   // 'start'와 'end' 제외
        
        const objRgb = convertHslToRgb(...listColorHslAll[iColor]); // {numberR, numberG, numberB}
        
        const color = {

        	hsl: {
        		h: listColorHslAll[iColor][0],
        		s: listColorHslAll[iColor][1],
        		l: listColorHslAll[iColor][2]
        	},
        	
        	rgb: {
        		r: objRgb['numberR'],
        		g: objRgb['numberG'],
        		b: objRgb['numberB']
        	},
        	
        	opacity: 1
        };
        
        listColorAll.push(color);
        
      }
      
      dispatch( actionsColor.return_REPLACE_COLOR({
        location: ['series', 'itemCurrent', 'listColorAll'],
        replacement: listColorAll
      }) );
        
      dispatch( actionsColor.return_REPLACE_COLOR({
        location: ['series', 'itemCurrent', 'size'],
        replacement: sizeNew
      }) );
      
      console.log(itemCurrent.toJS())
      
    },
    [itemCurrent, size]
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
      
        <Div_EditorCs_A_ChangeSize> 
          <div> <input type="range" value={sizeNew} onChange={(event)=>onChange_Size(event)} min="2" max="21" step="1" />  </div>
          <div> {sizeNew} </div>
        </Div_EditorCs_A_ChangeSize>
        
      </Div_EditorCs_A>
      
      
      <Div_EditorCs_B>
      
        <Div_EditorCs_B_Element> 
          <div> H </div>
          
          <div>
            <Div_EditorCs_B_Element_InputRange
              stringWidthEntire={'100%'}
              pxHeightBoard={24}
              pxBorderRadiusBoard={4}
              
              pxWidthPointer={16}
              pxBorderWidthPointer={3}
              cssBackground={'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'}
            > <input type="range" value={itemCurrent.getIn(['start', 'hsl', 'h'])} onChange={(event)=>onChange_StartEnd(event, 'both', 'h')} min="0" max="360" />  
            </Div_EditorCs_B_Element_InputRange>
          </div>
          
          <div> <input type="text" value={itemCurrent.getIn(['start', 'hsl', 'h'])} onChange={(event)=>onChange_StartEnd(event, 'both', 'h')} /> </div>
          <div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 'h', 360, 0, 1) }>up</div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 'h', 360, 0, -1) }>down</div> 
          </div>
        </Div_EditorCs_B_Element>
        
        <Div_EditorCs_B_Element> 
          <div> S </div>
          <div> <input type="range" value={itemCurrent.getIn(['start', 'hsl', 's'])} onChange={(event)=>onChange_StartEnd(event, 'start', 's')} min="0" max="100" />  </div>
          <div> <input type="text" value={itemCurrent.getIn(['start', 'hsl', 's'])} onChange={(event)=>onChange_StartEnd(event, 'start', 's')} /> </div>
          <div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 's', 100, 0, 1) }>up</div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 's', 100, 0, -1) }>down</div> 
          </div>
        </Div_EditorCs_B_Element>
        
        <Div_EditorCs_B_Element> 
          <div> L </div>
          <div> <input type="range" value={itemCurrent.getIn(['start', 'hsl', 'l'])} onChange={(event)=>onChange_StartEnd(event, 'start', 'l')} min="0" max="100" />  </div>
          <div> <input type="text" value={itemCurrent.getIn(['start', 'hsl', 'l'])} onChange={(event)=>onChange_StartEnd(event, 'start', 'l')} /> </div>
          <div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 'l', 100, 0, 1) }>up</div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'start', 'l', 100, 0, -1) }>down</div> 
          </div>
        </Div_EditorCs_B_Element>
      
      </Div_EditorCs_B>
      
      <Div_EditorCs_B>
        
        <Div_EditorCs_B_Element> 
          <div> S </div>
          <div> <input type="range" value={itemCurrent.getIn(['end', 'hsl', 's'])} onChange={(event)=>onChange_StartEnd(event, 'end', 's')} min="0" max="100" />  </div>
          <div> <input type="text" value={itemCurrent.getIn(['end', 'hsl', 's'])} onChange={(event)=>onChange_StartEnd(event, 'end', 's')} /> </div>
          <div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'end', 's', 100, 0, 1) }>up</div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'end', 's', 100, 0, -1) }>down</div> 
          </div>
        </Div_EditorCs_B_Element>
        
        <Div_EditorCs_B_Element> 
          <div> L </div>
          <div> <input type="range" value={itemCurrent.getIn(['end', 'hsl', 'l'])} onChange={(event)=>onChange_StartEnd(event, 'end', 'l')} min="0" max="100" />  </div>
          <div> <input type="text" value={itemCurrent.getIn(['end', 'hsl', 'l'])} onChange={(event)=>onChange_StartEnd(event, 'end', 'l')} /> </div>
          <div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'end', 'l', 100, 0, 1) }>up</div> 
            <div onClick={event=>onClick_AdjustColorElement(event, 'end', 'l', 100, 0, -1) }>down</div> 
          </div>
        </Div_EditorCs_B_Element>
      
      </Div_EditorCs_B>
      
      
      <Div_EditorCs_C>
        <Div_EditorCs_C_MakeSeries
          onClick={(event)=>onClick_MakeSeries(event, sizeNew)}
        > 
          <div> Make Series </div>  
        </Div_EditorCs_C_MakeSeries>
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