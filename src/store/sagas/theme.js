import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';


import * as actionsTheme from "../actions/theme";


export default function* themeSaga() {
    //yield takeEvery( actionsTheme.ADJUST_NEW_PALETTE_TO_THEME, adjustNewPaletteToTheme );
    
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


