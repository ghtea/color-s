import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import ColorOne from "../components/Color/ColorOne"
//import Heroes from "../components/Player/Heroes"

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';








const Korean = ({
  
}) => {
  
  
   return (

    <Switch>
    
      <Route path="/color/one" component={ColorOne} />
      <Route path="/color/duo" component={ColorOne} />
      <Route path="/color/series" component={ColorOne} />
      
    </Switch>
    
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Korean;

