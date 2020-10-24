import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import ColorSolo from '../components/Color/ColorSolo';
import ColorDuo from '../components/Color/ColorDuo';
//import Heroes from "../components/Player/Heroes"

import Editor from '../components/Color/Editor';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';



import {
  Div_Color,
  Button_EditColor, Button_More
} from './Color_Styled'





const Color = ({
  
}) => {
  
  
   return (
  
  <Div_Color>
    
    <div> 
      
      <Editor />
      
    </div>
    
    <Switch>
    
      <Route path="/color/solo" component={ColorSolo} />
      <Route path="/color/duo" component={ColorDuo} />
      <Route path="/color/series" component={ColorSolo} />
      
    </Switch>
    
  </Div_Color>
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Color;

