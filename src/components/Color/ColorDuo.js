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

import IconHeart from '../../svgs/basic/IconHeart';

import {
  Div_ColorDuo,
  Div_ItemCurrent,
  Div_Main, 
  Div_Sub
} from './ColorDuo_Styled';


function ColorDuo({
  
}) {
  
  const colorMain = useSelector( state => state.color.getIn(['duo', 'itemCurrent', 'main']), [] );
  const colorSub = useSelector( state => state.color.getIn(['duo', 'itemCurrent', 'sub']), [] );
  
  
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    
  }, [])
  
  
  
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
      
      <Div_ItemCurrent> 
      
        <Div_Main
          textHslaMain={textHslaMain}
        >
          <div onClick={(event)=>onClick_Chage_PositionCurrent(event, 'main')}> text </div>
          <div onClick={(event)=>onClick_Chage_PositionCurrent(event, 'main')}> <IconHeart width={'30px'} height={'30px'} filled={true} textHsla={textHslaMain} /> </div>
        </Div_Main>
        
        <Div_Sub
          textHslaSub={textHslaSub}
        > 
          <div onClick={(event)=>onClick_Chage_PositionCurrent(event, 'sub')} />
          <Tiles 
            lengthOne={10}
            widthAll={190}
            heightAll={80}
          />
        </Div_Sub>
        
      </Div_ItemCurrent>
      
    </Div_ColorDuo>
    
  )
}


export default ColorDuo;