import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

import Title from '../components/Nav/Title';
import NavGroup from '../components/Nav/NavGroup';
import Bonus from '../components/Nav/Bonus';

import { Div_Nav} from './Nav_Styled'




const Nav = ({
	
	}) => {
	
	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
  //const dispatch = useDispatch();
	
	
	return (
	
  <Div_Nav>
  	
  	<Title/>
  	<NavGroup/>
  	<Bonus/>
		
	</Div_Nav>
	
	)
}


export default Nav;
