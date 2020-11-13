import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import getContrast from 'get-contrast';
import acColors from "ac-colors";
import colorlab from 'colorlab';
import calculateSeries from './ColorSeries/calculateSeries';
import copyToClipboard from 'copy-to-clipboard';

import * as actionsColor from "../../store/actions/color";

import * as config from '../../config';

import Tiles from './_/Tiles';
import EditorCs from './ColorSeries/EditorCs';
import List from './List';

import {
  Div_ColorSeries,
  
  Div_Main,
  Div_Main_Left, Div_Main_Middle, Div_Main_Right,
  
  Div_ContainerColor, Div_Color,
  
  Div_Container
} from './ColorSeries_Styled';



function ColorSeries({
  
}) {
  
  const itemCurrent = useSelector( state => state.color.getIn(['series', 'itemCurrent']), [] );
  const size = useSelector( state => state.color.getIn(['series', 'itemCurrent', 'size']), [] );
  //const positionCurrent = useSelector( state => state.status.getIn(['current', 'color', 'position']), [] );
  
  //console.log(colorMain.toJS())
  /*
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  
  */
  
  const listIndex = useMemo(()=>{
    let result = []
    for (var index=0; index < size; index++){
      result.push(index);
    }
    return result;
  }, [ size ] );
  
  
  const dispatch = useDispatch();
  
  
  
  /*
  
  // very useful library
  // https://gka.github.io/chroma.js/
  
  
  
  // great tutorials !!!
  // https://uxplanet.org/designing-systematic-colors-b5d2605b15c
  // https://refactoringui.com/previews/building-your-color-palette/
  
  
  // calcuate js libary
  // https://github.com/signalwerk/colorlab
  
  // convert colors
  // https://github.com/Qix-/color-convert
  // https://github.com/vinaypillai/ac-colors
  
  // calculate contrast
  // https://github.com/johno/get-contrast
  
  final all 
  1. convert hsl to lab   <- libaray 'ac-colors'
  2. calculate difference fo [color, white] and [color, black]   <- library 'colorlab'
  3. decide stage (10, 20, ..., 100)
  
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
  
  const returnTextHsla  = useCallback(
    (index) => {
      const h = itemCurrent.getIn(['listColorAll', index, 'hsl', 'h']);
      const s = itemCurrent.getIn(['listColorAll', index, 'hsl', 's']);
      const l = itemCurrent.getIn(['listColorAll', index, 'hsl', 'l']);
      //const opacity = itemCurrent.getIn([position, 'opacity']);
      const opacity = 1;
      return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
    },
    [itemCurrent]
  );
  
  
  const onClick_Copy = useCallback(
    () => {
      
      const size = itemCurrent.getIn(['size']);
      const listColorAll = itemCurrent.getIn(['listColorAll']);
      
      let listColorHex = new Array(size).fill('');
      
      for (var iColor=0; iColor < size; iColor++){
        
        const color = listColorAll.getIn([iColor]);
        const hexR = color.getIn(['rgb', 'r']).toString(16);
        const hexG = color.getIn(['rgb', 'g']).toString(16);
        const hexB = color.getIn(['rgb', 'b']).toString(16);
        
        const hexRGB = `#${hexR}${hexG}${hexB}`;
        
        listColorHex[iColor] = hexRGB;
      }
      
      console.log(listColorHex);
      const result = `[ ${listColorHex.join(', ')} ]`;
      
      copyToClipboard( result );
    },
    [itemCurrent]
  );
  
  
  return (
    
    <Div_ColorSeries>
      
      <Div_Main> 
        
        <Div_Main_Left> 
        
          <button
            onClick={event=>onClick_Copy(event)}
          > copy </button>
          <button> save </button>
          <button> list </button>
        </Div_Main_Left>
        
        <Div_Main_Middle> 
          <Div_ContainerColor>
          {listIndex.map( (index, i)=>{
              return (
                <Div_Color
                  key={`Color-${index}`}
                  index={index}
                  size={size}
                  textHsla={returnTextHsla(index)}
                />
              )
            })}
          </Div_ContainerColor>
        </Div_Main_Middle>
        
        <Div_Main_Right> 
          
        </Div_Main_Right>
      
      </Div_Main>
      
      <Div_Container>
        <EditorCs 
          modelCurrent={'series'}
        />
        <List />
      </Div_Container>
      
    </Div_ColorSeries>
    
  )
}


export default ColorSeries;