import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import Cookies from 'js-cookie';

import * as config from '../../../config';

import * as actionsStatus from "../../actions/status";
import * as actionsAuth from "../../actions/auth";
//import * as actionsTheme from "../../actions/theme";



const requestLogIn = (bodyReq) => {
    
    /*
    let bodyReq = {
        identification, 
        password
    }
    */  
    return axios.post(`${config.URL_BACK}/auth/log-in`, bodyReq, {withCredentials: true, credentials: 'include'});
};


function* logIn(action) {
    try {
        
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['ready', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['loading', 'user'],
                replacement: true
            }) );
        
        
        const bodyReq = {
            identification: action.payload.identification, 
            password: action.payload.password
        };
        
        const { data } = yield call( requestLogIn, bodyReq );
        //console.log(data);
        
        // main
        yield put( actionsAuth.return_REPLACE_AUTH({
            location: ['user'],
            replacement: data
        }) );
    
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['loading', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['ready', 'user'],
                replacement: true
            }) );
        

        Cookies.set('logged', 'yes', { expires: 7, path: '/' });    
        // go to home
        
        
    } catch (error) {
        
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['loading', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['ready', 'user'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('LOG_IN has been failed');
        
        // clear inputs
    }
}

export default logIn;
