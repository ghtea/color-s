import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../config';

import LogIn from "../components/Auth/LogIn";

import {Div_Auth} from './Auth_Styled'


function Auth({
  
}) {
  
  //const listColorAssignment = useSelector( state => state.colorAssignment.get('listColorAssignment'), [] );
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
  }, [])
  
  /*
  const onClick_ChangeColorAssignment = useCallback(
    (event) => {
      //console.log(listColorAssignment);
      
      dispatch( theme.return_REPLACE_THEME({
        location: ['usingTheme', 'colorAssignment']
        , replacement: listColorAssignment.getIn([0])
      }) )
    },
    [listColorAssignment]
  );
  */
  
  return (
    
    <Div_Auth>
      <Switch>
        <Route path="/auth/log-in" component={LogIn} />
      </Switch>
    </Div_Auth>
    
  )
}


export default Auth;


/*

<Route path="/auth/sign-up"  component={SignUp} />
<Route path="/auth/change-password"  component={ChangePassword} />
<Route path="/auth/forgot-password"  component={ForgotPassword} />

*/