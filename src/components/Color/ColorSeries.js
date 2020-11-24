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
    (event, mode, structure) => {
      
      const size = itemCurrent.getIn(['size']);
      const listColorAll = itemCurrent.getIn(['listColorAll']);
      let result = '';
      
      if (mode === 'hex') {
        let listColorHex = new Array(size).fill('');
        
        for (var iColor=0; iColor < size; iColor++){
          
          const color = listColorAll.getIn([iColor]);
          let hexR = color.getIn(['rgb', 'r']).toString(16);
          if (hexR.length < 2) {
            hexR = "0" + hexR;
          }
          let hexG = color.getIn(['rgb', 'g']).toString(16);
          if (hexG.length < 2) {
            hexG = "0" + hexG;
          }
          let hexB = color.getIn(['rgb', 'b']).toString(16);
          if (hexB.length < 2) {
            hexB = "0" + hexB;
          }
          
          const strHexRGB = `'#${hexR}${hexG}${hexB}'`;
          
          listColorHex[iColor] = strHexRGB;
        }
        
        //console.log(listColorHex);
        
        if (structure==='list'){ 
          result = `[ ${listColorHex.join(', ')} ]`;
        }
        else if (structure==='object'){ 
          result = `{
            '00': '${listColorHex[20]}',
            '05': '${listColorHex[19]}',
            '10': '${listColorHex[18]}',
            '15': '${listColorHex[17]}',
            '20': '${listColorHex[16]}',
            '25': '${listColorHex[15]}',
            '30': '${listColorHex[14]}',
            '35': '${listColorHex[13]}',
            '40': '${listColorHex[12]}',
            '45': '${listColorHex[11]}',
            '50': '${listColorHex[10]}',
            '55': '${listColorHex[9]}',
            '60': '${listColorHex[8]}',
            '65': '${listColorHex[7]}',
            '70': '${listColorHex[6]}',
            '75': '${listColorHex[5]}',
            '80': '${listColorHex[4]}',
            '85': '${listColorHex[3]}',
            '90': '${listColorHex[2]}',
            '95': '${listColorHex[1]}',
            '100': '${listColorHex[0]}'
          }`
        }
        
      }
      else if (mode === 'hsl') {
        let listColorHsl = new Array(size).fill('');
        
        for (var iColor=0; iColor < size; iColor++){
          
          const color = listColorAll.getIn([iColor]);
          
          let hue = (Math.round(color.getIn(['hsl', 'h']))).toString();
          let saturation = (Math.round(color.getIn(['hsl', 's']))).toString() + '%';
          let lightness = (Math.round(color.getIn(['hsl', 'l']))).toString() + '%';
          
          
          const strHsl = `hsl(${hue},${saturation},${lightness})`;
          
          listColorHsl[iColor] = strHsl;
        }
        
        //console.log(listColorHsl);
        
        if (structure==='list'){
          result = `[ ${listColorHsl.join(', ')} ]`;
        }
        else if (structure==='object'){
          result = `{
            '00': '${listColorHsl[20]}',
            '05': '${listColorHsl[19]}',
            '10': '${listColorHsl[18]}',
            '15': '${listColorHsl[17]}',
            '20': '${listColorHsl[16]}',
            '25': '${listColorHsl[15]}',
            '30': '${listColorHsl[14]}',
            '35': '${listColorHsl[13]}',
            '40': '${listColorHsl[12]}',
            '45': '${listColorHsl[11]}',
            '50': '${listColorHsl[10]}',
            '55': '${listColorHsl[9]}',
            '60': '${listColorHsl[8]}',
            '65': '${listColorHsl[7]}',
            '70': '${listColorHsl[6]}',
            '75': '${listColorHsl[5]}',
            '80': '${listColorHsl[4]}',
            '85': '${listColorHsl[3]}',
            '90': '${listColorHsl[2]}',
            '95': '${listColorHsl[1]}',
            '100': '${listColorHsl[0]}'
          }`
        }
      }
      
      
      copyToClipboard( result );
    },
    [itemCurrent]
  );
  
  
  return (
    
    <Div_ColorSeries>
      
      <Div_Main> 
        
        <Div_Main_Left> 
        
          <button
            onClick={event=>onClick_Copy(event, 'hsl', 'list')}
          > copy list </button>
          <button
            onClick={event=>onClick_Copy(event, 'hsl', 'object')}
          > copy obj </button>
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