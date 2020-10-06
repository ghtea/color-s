import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';
import Cookies from 'js-cookie';

import * as config from '../../../config';

import * as actionsStatus from "../../actions/status";
import * as actionsAuth from "../../actions/auth";
//import * as actionsTheme from "../../actions/theme";



const requestCheck = () => {
    
    return axios.get(`${config.URL_BACK}/auth/check`,  { withCredentials: true,  credentials: 'include'} );
};


function* checkLoggedIn() {
        
        yield put( actionsStatus.return_REPLACE_STATUS({
            location: ['ready', 'user'],
            replacement: false
        }) );
        
        yield put( actionsStatus.return_REPLACE_STATUS({
            location: ['loading', 'user'],
            replacement: true
        }) );
    
    
    const logged = Cookies.get('logged');   // https://www.npmjs.com/package/js-cookie
    console.log(logged)
    
    
    if(logged!=='yes') {
        
        console.log("no logged user");
        
        yield put( actionsAuth.return_REPLACE_AUTH({
            location: ['user'],
            replacement: {}
        }) );
        
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['ready', 'user'],
                replacement: false
            }) );
            
            yield put( actionsStatus.return_REPLACE_STATUS({
                location: ['loading', 'user'],
                replacement: false
            }) );
    }
  
    else { // if there is token
    
        try {
            
            console.log("logged user");
            
            const { data } = yield call( requestCheck );
            console.log(data);
    
            yield put( actionsAuth.return_REPLACE_AUTH({
                location: ['user'],
                replacement: data
            }) );
            
                yield put( actionsStatus.return_REPLACE_STATUS({
                    location: ['ready', 'user'],
                    replacement: true
                }) );
                
                yield put( actionsStatus.return_REPLACE_STATUS({
                    location: ['loading', 'user'],
                    replacement: false
                }) );
            
        } 
        catch (error) { // token 정보가 잘못되었었으면 여기로 이동
            
            console.log('failed check');
            Cookies.remove('logged', { path: '/' });
            
            //window.location.href = '/auth/log-in';
            
                yield put( actionsStatus.return_REPLACE_STATUS({
                    location: ['ready', 'user'],
                    replacement: false
                }) );
                
                yield put( actionsStatus.return_REPLACE_STATUS({
                    location: ['loading', 'user'],
                    replacement: false
                }) );
        }
        
        
    }
       
}

export default checkLoggedIn;
