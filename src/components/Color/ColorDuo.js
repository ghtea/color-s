import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsColor from "../../store/actions/color";

import * as config from '../../config';

import Tiles from './_/Tiles';

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
  
  console.log(colorMain.toJS())
  /*
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  
  */
  /*
  const listCardOthers = useMemo(()=>{
    const result = listCard.shift()
    return result;
  }, [listCard]);
  */
  
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    
  }, [])
  
  /*
  const onClick_Move = useCallback(
    (event, movement, indexCardNew) => {
      dispatch(actionsCard.return_CHANGE_CARD_FOCUSED({
        movement, 
        indexCardNew
      }));
    },
    []
  );
  */
  
  const textHsla = useMemo(()=>{
    
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorMain]);
  
  
  return (
    
    <Div_ColorDuo>
      
      <Div_ItemCurrent> 
      
        <Div_Main
          textHsla={textHsla}
        >
          <div> text </div>
          <div> shape </div>
        </Div_Main>
        
        <Div_Sub> 
          <Tiles 
            lengthOne={10}
            widthAll={190}
            heightAll={40}
          />
        </Div_Sub>
        
      </Div_ItemCurrent>
      
    </Div_ColorDuo>
    
  )
}


export default ColorDuo;