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
import Editor from './Editor';
import List from './List';

import {
  Div_ColorSeries,
  
  Div_Main,
  Div_Main_Left, Div_Main_Middle, Div_Main_Right,
  
  Div_ContainerColor, Div_Color_Main, Div_Color_Others,
  
  Div_Container
} from './ColorSeries_Styled';


function ColorSeries({
  
}) {
  
  const colorMain = useSelector( state => state.color.getIn(['series', 'itemCurrent', '50']), [] );
  const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  //console.log(colorMain.toJS())
  /*
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  
  */
  
  const listPosition = useMemo(()=>{
    return (['00', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']);
  }, []);
  
  
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    
  }, [])
  
  /*
  
  // very useful library
  // https://gka.github.io/chroma.js/
  
  // distance calculation method
  // http://www2.ece.rochester.edu/~gsharma/ciede2000/ciede2000noteCRNA.pdf
  
  const onClick_Create = useCallback(
    (event, movement, indexCardNew) => {
      dispatch(actionsCard.return_CHANGE_CARD_FOCUSED({
        movement, 
        indexCardNew
      }));
    },
    []
  );
  */
  
  const textHslaMain = useMemo(()=>{
    
    const h = colorMain.getIn(['hsl', 'h']);
    const s = colorMain.getIn(['hsl', 's']);
    const l = colorMain.getIn(['hsl', 'l']);
    const opacity = colorMain.getIn(['opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [colorMain]);
  
  
  return (
    
    <Div_ColorSeries>
      
      <Div_Main> 
        
        <Div_Main_Left> 
          <button> copy </button>
          <button> save </button>
          <button> list </button>
        </Div_Main_Left>
        
        <Div_Main_Middle> 
          <Div_ContainerColor>
          {listPosition.map( (element, index)=>{
            //console.log(`hi I'm ${element}`)
            if (element ==='50'){
              return (
                <Div_Color_Main
                  key={`Color-${index}`}
                  postion={element}
                  index={index}
                  textHslaMain={textHslaMain}
                />
              )
            }
            else {
              return (
                <Div_Color_Others
                  key={`Color-${index}`}
                  postion={element}
                  index={index}
                />
              )
            }
          })}
            
          </Div_ContainerColor>
          
        </Div_Main_Middle>
        
        <Div_Main_Right> 
          <div> magic </div>
          <button> A </button>
          <button> B </button>
          <button> C </button>
          <button> D </button>
        </Div_Main_Right>
      
      </Div_Main>
      
      <Div_Container>
        <Editor />
        <List />
      </Div_Container>
      
    </Div_ColorSeries>
    
  )
}


export default ColorSeries;