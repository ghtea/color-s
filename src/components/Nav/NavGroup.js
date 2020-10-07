import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import Immutable from 'immutable';


import { NavLink, useLocation, useHistory } from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import { 
	Div_NavGroup, 
	Div_NavItem, 
	Div_NavItemIcon, Div_NavItemTitle
} from './NavGroup_Styled'
import logo from '../../images/favicon_io/android-chrome-192x192.png';



const NavGroup = ({

}) => {
	
	const location = useLocation();
	const history = useHistory();
	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
	//const dispatch = useDispatch();
	
	
	
	
  
  const onClick_NavItem = useCallback(
    (event, destination) => {
      history.push(destination)
    },
    [history]
  );

	return (

		<Div_NavGroup>
			
			<Div_NavItem
				onClick = {(event)=>onClick_NavItem(event, '/color/solo')}
			>
				<Div_NavItemIcon> 
					1 
				</Div_NavItemIcon>
				
				<Div_NavItemTitle> 
					Color Solo 
				</Div_NavItemTitle>
			</Div_NavItem>
			
			
			<Div_NavItem
				onClick = {(event)=>onClick_NavItem(event, '/color/duo')}
			>
				<Div_NavItemIcon> 
					2 
				</Div_NavItemIcon>
				
				<Div_NavItemTitle> 
					Color Duo 
				</Div_NavItemTitle>
			</Div_NavItem>
			
			
			<Div_NavItem
				onClick = {(event)=>onClick_NavItem(event, '/color/series')}
			>
				<Div_NavItemIcon> 
					s 
				</Div_NavItemIcon>
				
				<Div_NavItemTitle> 
					Color Series 
				</Div_NavItemTitle>
			</Div_NavItem>
			
			
			

		</Div_NavGroup>

	)
}


export default NavGroup;




/*

hover windoe   =>  color convertor, adjust    => text on background, logo on background,       => paste, copy smartly


color table                => multiple color-series                         => export as sass string     => save to database

color table   (focus)  =>   color series              =>   white, 10, 20, ..., 100, black               test (text-background)

color assignment  => 특정 항목에 특정 color series (_id가 아닌 그 당시 값) 를 부여   =>  특정 theme 완성


 
button, hover(popup), input, a,   box-shadow  그림자

, nav, social share

, comment, credit card, login, sign up



user profile, 
setting


 404 page



(bonus)
calendar
calculater
music player




*/