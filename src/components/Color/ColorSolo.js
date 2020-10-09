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
  Div_ColorSolo,
  Div_ItemCurrent,
  Div_Color, 
  Div_Behind
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
  
  const textHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorMain]);
  
  
  const listZero = useMemo(()=>{
    return Array(27).fill(0)
  }, []);
  
  
  return (
    
    <Div_ColorSolo>
      
      <Div_ItemCurrent> 
      
        <Div_Color
          textHsla={textHsla}
        />
        <Div_Behind> 
          <Tiles 
            lengthOne={10}
            widthAll={190}
            heightAll={40}
          />
        </Div_Behind>
        
      </Div_ItemCurrent>
      
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