import React, {useState, useEffect, useMemo, useCallback } from 'react';
import {  BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as actionsColor from "../../store/actions/color";
import * as actionsStatus from "../../store/actions/status";

import * as config from '../../config';

//import {   } from 'react-color';
// http://casesandberg.github.io/react-color/#api-color
import IconAngle from '../../svgs/basic/IconAngle';
import IconClone from '../../svgs/basic/IconClone';
import IconClipboard from '../../svgs/basic/IconClipboard';

import {
  Div_List, 
  Div_List_A, Div_List_B,
  
  Div_List_A_Recent,
  Div_List_B_Item
  
} from './List_Styled'

import useInput from '../../tools/hooks/useInput';



function List({
  
}) {
  
  const location = useLocation();
  //console.log(location)
  
  //const modelCurrent = useSelector( state => state.status.getIn(['current', 'color', 'model']), [] );
  
  //const colorCurrent = useSelector( state => state.color.getIn([modelCurrent, 'itemCurrent', positionCurrent]), [] );
  
  const dispatch = useDispatch();
  
  
  //const [mode, setMode] = useState('opaque'); // opaque transparent     
  
  useEffect(()=>{
    
    if (location.pathname === '/color/solo') {
      
    }
    else if (location.pathname === '/color/duo') {
      
    }
    else if (location.pathname === '/color/series') {
      
    }
    /*
    dispatch( actionsStatus.return_REPLACE_STATUS({
      location: ['current', 'color'],
      replacement: replacement
    }) )*/
  }, [location])
  
  
  /*
  const onChange_Option = useCallback(
    (event, option) => {
      let replacement = '';
      
      if (option==='mode'){
        if (modeCurrent==='hsl'){
          replacement = 'rgb';
        }
        else {
          replacement = 'hsl';
        }
      }
      else if (option==='opacity'){
        if (isOpacityCurrent===true){
          replacement = false;
        }
        else {
          replacement = true;
        }
      }
        
      dispatch( actionsStatus.return_REPLACE_STATUS({
        location: ['current', 'color', option],
        replacement: replacement
      }) )
      
    },
    [modeCurrent, isOpacityCurrent]
  );
  */
      
  return (
    
    <Div_List>
      
      <Div_List_A>
        <Div_List_A_Recent> recent </Div_List_A_Recent> 
      </Div_List_A>
      
      <Div_List_B>
      
        list
        
      </Div_List_B>
      
    </Div_List>
    
  )
}

//               cssBackground={`linear-gradient(to left, hsla(${listHsla[0]}, 0%, ${listHsla[2]}%, ${listHsla[3]}) 0%, hsla(${listHsla[0]}, 50%, ${listHsla[2]}%, ${listHsla[3]}) 50%, hsla(${listHsla[0]}, 100%, ${listHsla[2]}%, ${listHsla[3]}) 100%)`}



export default List;

/*

  <div>
    <div> rgba </div>
    <div> hsla </div>
  </div>

*/



/*

  <CopyToClipboard 
    text={battletag}
    onCopy={ () => {  
      
      const messageBase = dictCode['tplan02']['message'][language];
      const message = messageBase.replace('BATTLETAG', battletag);
      addDeleteNotification("basic04", language, message, 2000); 
      
    } } >
    
    <DivBattletag> 
      <DivBattletagName> {battletagName} </DivBattletagName>
      <DivBattletagNumber> {battletagNumber} </DivBattletagNumber>
    </DivBattletag>


*/