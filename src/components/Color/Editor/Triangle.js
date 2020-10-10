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
  Div_Triangle
} from './Triangle_Styled';


function Triangle({
  pxSideLong,
  transform
}) {
  
  
  return (
    
    <Div_Triangle 
      pxSideLong={pxSideLong}
      transform={transform}
    >
      <div/>
    </Div_Triangle>
    
  )
}

export default Triangle;