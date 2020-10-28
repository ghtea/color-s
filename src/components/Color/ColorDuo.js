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
      
      <Div_Main> 
        
        <Div_Main_Left> 
          <button> copy </button>
          <button> save </button>
          <button> list </button>
        </Div_Main_Left>
        
        <Div_Main_Middle> 
          <Div_Color>
            <div />
            <div />
          </Div_Color>
          <Div_Example>
            <div> texttttt texttttt </div>
          </Div_Example>
        </Div_Main_Middle>
        
        <Div_Main_Right> 
          <button> icon </button>
          <button> A+ </button>
          <button> auto </button>
        </Div_Main_Right>
      
      </Div_Main>
      
      <Div_Container>
        <Editor />
        <List />
      </Div_Container>
      
    </Div_ColorDuo>
    
  )
}


export default ColorDuo;