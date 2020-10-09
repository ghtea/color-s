import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsColor from "../../../store/actions/color";

import * as config from '../../../config';

//import Card from './BoardCard/Card';
import { 
  Div_Tiles, Div_Tiles_One
} from './Tiles_Styled';


function Tiles({
  lengthOne,
  widthAll,
  heightAll
}) {
  
  const listZero = useMemo(()=>{
    return Array(Math.round(widthAll/lengthOne * heightAll/lengthOne)).fill(0)
  }, []);
  
  
  return (
    
    <Div_Tiles
      widthAll={widthAll}
      heightAll={heightAll}
    >
      
      {listZero.map((element, index)=>(
        <Div_Tiles_One
          key={`block-${index}`}
          
          whether={ (index+1)%2 === 0 }
          colorTrue={`#ccc`}
          colorFalse={`#fff`}
          
          lengthOne={lengthOne}
        />
      ))}
      
    </Div_Tiles>
    
  )
}

export default Tiles;