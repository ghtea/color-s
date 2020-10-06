import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsAuth from "../../store/actions/auth";

import * as config from '../../config';

import useInput from '../../tools/hooks/useInput';


import {
  Div_LogIn,
  Div_Input,
  Div_Button
} from './LogIn_Styled';


function LogIn({
  
}) {
  
  const readyUser = useSelector( state => state.status.getIn(['ready', 'user']), [] );
  
  //const listCardZero = useMemo( ()=> Array(lengthListCard).fill(0) , [listCard, lengthListCard] );
  
  /*
  const listCardOthers = useMemo(()=>{
    const result = listCard.shift()
    return result;
  }, [listCard]);
  */
  const history = useHistory();
  const dispatch = useDispatch();
  
  
  const inputIdentification = useInput(""); // {value, setValue, onChange};
  const inputPassword = useInput(""); // {value, setValue, onChange};
  
  useEffect(()=>{
    if (readyUser){
      history.push(`/`)
    }
  },[readyUser])
  
  
  const onClick_LogIn = useCallback(
    (event) => {
      if (!inputIdentification.value || !inputPassword.value) {
        console.log('enter text')
      }
      else {
        dispatch(actionsAuth.return_LOG_IN({
          identification: inputIdentification.value,
          password: inputPassword.value
        }));
      }
    },
    [inputIdentification, inputPassword]
  );
  
  const onKeyPress_LogIn = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onClick_LogIn(event);
      }
    },
    [inputIdentification, inputPassword]
  );
  
  
  
  return (
    
    <Div_LogIn>
      
      <Div_Input>
        <div> Email or ID </div>
        <input 
          value={inputIdentification.value}
          onChange={inputIdentification.onChange}
          
          placeholder="email or id"  
          onKeyPress={onKeyPress_LogIn}
        />
      </Div_Input>
      
      <Div_Input>
        <div> Password  </div>
        <input 
          value={inputPassword.value}
          onChange={inputPassword.onChange}
          
          placeholder="password" 
          type="password" 
          onKeyPress={onKeyPress_LogIn}
        />
      </Div_Input>
      
      <Div_Button>
        <button onClick={onClick_LogIn} > 
          Log In
        </button>
      </Div_Button>
      
    </Div_LogIn>
    
  )
}

/*

          (<>
          {!showingReward?
            <CardQuiz
              card={cardFront}
              index={0}
              key={`card-index0`}
            />
            : <CardReward
              />
          }
          {listCardQuizFocusedOthers.map( (element, indexOthers) =>
            (<CardQuiz
              card={element}
              index={indexOthers+1}
              key={`card-index${indexOthers+1}`}
            />)
          )}
          </>)
          : <div> not ready </div>
        }  
*/


export default LogIn;