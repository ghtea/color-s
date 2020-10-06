import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';


import * as actionsAuth from "../actions/auth";

import logIn from './auth/logIn';
import checkLoggedIn from './auth/checkLoggedIn';

export default function* authSaga() {
    
    yield takeEvery( actionsAuth.LOG_IN, logIn );
    
    yield takeEvery( actionsAuth.CHECK_LOGGED_IN, checkLoggedIn );
    
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


