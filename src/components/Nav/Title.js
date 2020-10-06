import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';


import { NavLink, useHistory } from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import { Div_Title, Div_TitleText } from './Title_Styled';
import IconHatWizard from '../../svgs/basic/IconHatWizard';
//import logo from '../../images/favicon_io/android-chrome-192x192.png';



const Title = ({
	
	}) => {
	
	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
  //const dispatch = useDispatch();
  const history = useHistory();
  
	const onClick_Title = useCallback(
    (event, destination) => {
      history.push(destination)
    },
    [history]
  );
	
	return (
	
  <Div_Title
  	onClick={(event)=>onClick_Title(event, '/')}
  >
  	
  	<Div_TitleText> Card of Quiz </Div_TitleText>
		
	</Div_Title>
	
	)
}


export default Title;

// <div> <IconHatWizard width={'30px'} height={'30px'} roleColor={'basic'} phaseColor={'70'} /> </div>