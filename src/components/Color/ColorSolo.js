import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsColor from "../../store/actions/color";

import * as config from '../../config';

//import Card from './BoardCard/Card';
import {
  Div_ColorSolo,
  Div_ItemCurrent
} from './ColorSolo_Styled';


function ColorSolo({
  
}) {
  
  const colorMain = useSelector( state => state.color.getIn(['solo', 'itemCurrent', 'main']), [] );
  
  console.log(colorMain.toJS())
  /*
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  const listCardZero = useMemo( ()=> Array(lengthListCard).fill(0) , [listCard, lengthListCard] );
  console.log(listCard.toJS())
  
  const loadingListQuiz = useSelector( state => state.colorMain.getIn(['loading', 'listQuiz']), [] );
  */
  /*
  const listCardOthers = useMemo(()=>{
    const result = listCard.shift()
    return result;
  }, [listCard]);
  */
  
  const dispatch = useDispatch();
  
  //const [setRoleModifying] = useState('background');
  
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
  
  
  const textHsl = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    
    return `hsl(${h}, ${s}%, ${l}%)`
  }, [colorMain]);
  
  const textHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorMain]);
  
  
  const textRgb = useMemo(()=>{
    const r = colorMain.getIn(['rgb', 'r']);
    const g = colorMain.getIn(['rgb', 'g']);
    const b = colorMain.getIn(['rgb', 'b']);
    
    return `rgb(${r}, ${g}, ${b})`
  }, [colorMain])
  
  const textRgba = useMemo(()=>{
    const r = colorMain.getIn(['rgb', 'r']);
    const g = colorMain.getIn(['rgb', 'g']);
    const b = colorMain.getIn(['rgb', 'b']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }, [colorMain])
  
  
  return (
    
    <Div_ColorSolo>
      
      <Div_ItemCurrent
        colorMain={colorMain}
      > solo </Div_ItemCurrent>
      
    </Div_ColorSolo>
    
  )
}

/*
          (<>
          {!showingReward?
            <CardQuiz
              card={cardFront}
              index={0}
              key={`card-index0`}
            />
            : <CardReward
              />
          }
          {listCardQuizFocusedOthers.map( (element, indexOthers) =>
            (<CardQuiz
              card={element}
              index={indexOthers+1}
              key={`card-index${indexOthers+1}`}
            />)
          )}
          </>)
          : <div> not ready </div>
        }  
*/


export default ColorSolo;