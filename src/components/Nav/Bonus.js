import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../../config';


import { NavLink } from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import { Div_Bonus } from './Bonus_Styled'



const Bonus = ({
	
	}) => {
	
	const readyUser = useSelector( state => state.basic.getIn(['ready', 'user']), [] );
	const user = useSelector( state => state.auth.getIn(['user']), [] );
  //const dispatch = useDispatch();
	
	
	return (
	
  <Div_Bonus>
  	{readyUser &&
  		<div> {user.getIn(['_id'])} </div>
  	}
  	{!readyUser &&
  		<div> <a href={`${config.URL_FRONT}/auth/log-in`} > Log In </a> </div>
  	}
		
	</Div_Bonus>
	
	)
}


export default Bonus;
