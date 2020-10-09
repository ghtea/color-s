/*
import React, {useState, useEffect, useMemo, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as actionsColor from "../../../../store/actions/color";
import * as actionsStatus from "../../../../store/actions/status";

import * as config from '../../../../config';


import {Div_Pointer } from './Pointer_Styled';
*/

import React from 'react';

// react-color force me to have Pointer component , so it is for that requirement but does nothing

const PointerNone = ({ 
  
}) => {
  
  return (
    <div/>
  )
}

export default PointerNone



/*

  const styles = reactCSS({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
      },
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)',
      },
    },
  }, { vertical: direction === 'vertical' })


*/