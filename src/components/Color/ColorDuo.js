import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsColor from "../../store/actions/color";
import * as actionsStatus from "../../store/actions/status";

import * as config from '../../config';

import Tiles from './_/Tiles';
import Editor from './Editor';
import List from './List';

import IconHeart from '../../svgs/basic/IconHeart';

import {
  Div_ColorDuo,
  Div_Main,
  Div_Main_Left, Div_Main_Middle, Div_Main_Right,
  
  Div_Color, Div_Example,
  
  Div_Container
} from './ColorDuo_Styled';


function ColorDuo({
  
}) {
  
  const colorMain = useSelector( state => state.color.getIn(['duo', 'itemCurrent', 'main']), [] );
  const colorSub = useSelector( state => state.color.getIn(['duo', 'itemCurrent', 'sub']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  const ratioContrast = useSelector( state => state.color.getIn(['duo', 'contrast', 'ratio']), [] );
  
  const dispatch = useDispatch();
  
  const calculateLuminanace = useCallback(
    (color) => {
      
      const r = color.getIn(['rgb', 'r']);
      const g = color.getIn(['rgb', 'g']);
      const b = color.getIn(['rgb', 'b']);
      
      var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      
    }, []
  );
  
  
  
  // calculate score automatically
  // https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
  // score  standard    https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
  useEffect(()=>{
    
    const luminanceMain = calculateLuminanace(colorMain);
    const luminanceSub = calculateLuminanace(colorSub);
    
    const ratioRaw = luminanceMain > luminanceSub 
      ? ((luminanceSub + 0.05) / (luminanceMain + 0.05))
      : ((luminanceMain + 0.05) / (luminanceSub + 0.05));
      
    dispatch(actionsColor.return_REPLACE_COLOR({
      location: ['duo', 'contrast', 'ratio'],
      replacement: Math.round(ratioRaw * 1000)/1000
    }));

  }, [colorMain, colorSub])
  
  
  const textHslaMain = useMemo(()=>{
    
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorMain]);
  
  
  const textHslaSub = useMemo(()=>{
    
    const h = colorSub.getIn(['hsl', 'h']);
    const s = colorSub.getIn(['hsl', 's']);
    const l = colorSub.getIn(['hsl', 'l']);
    const opacity = colorSub.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorSub]);
  
  
  
  const onClick_Chage_PositionCurrent = useCallback(
    (event, positionNew) => {
      dispatch(actionsStatus.return_REPLACE_STATUS({
        location: ['current', 'color', 'position'],
        replacement: positionNew
      }));
    },
    []
  );
  
  
  
  
  
  return (
    
    <Div_ColorDuo>
      
      <Div_Main> 
        
        <Div_Main_Left> 
          <button> copy </button>
          <button> save </button>
          <button> list </button>
        </Div_Main_Left>
        
        <Div_Main_Middle> 
        
          <Div_Color 
            textHslaMain={textHslaMain}
            textHslaSub={textHslaSub}
            positionCurrent={positionCurrent}
          >
            <div onClick={(event)=>onClick_Chage_PositionCurrent(event, 'main')}/>
            <div onClick={(event)=>onClick_Chage_PositionCurrent(event, 'sub')}/>
          </Div_Color>
          
          <Div_Example
            textHslaMain={textHslaMain}
            textHslaSub={textHslaSub}
          >
            <div> texttttt texttttt </div>
          </Div_Example>
          
        </Div_Main_Middle>
        
        <Div_Main_Right> 
          <button> icon </button>
          <button> {ratioContrast} </button>
          <button> auto </button>
        </Div_Main_Right>
      
      </Div_Main>
      
      <Div_Container>
        <Editor 
          modelCurrent={'duo'}  
        />
        <List />
      </Div_Container>
      
    </Div_ColorDuo>
    
  )
}


export default ColorDuo;