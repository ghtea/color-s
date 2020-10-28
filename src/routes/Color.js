import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import ColorSolo from '../components/Color/ColorSolo';
import ColorDuo from '../components/Color/ColorDuo';
import ColorSeries from '../components/Color/ColorSeries';
//import Heroes from "../components/Player/Heroes"


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
    
    <Switch>
    
      <Route path="/color/solo" component={ColorSolo} />
      <Route path="/color/duo" component={ColorDuo} />
      <Route path="/color/series" component={ColorSeries} />
      
    </Switch>
    
  </Div_Color>
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Color;

