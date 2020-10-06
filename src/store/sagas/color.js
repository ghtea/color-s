import { call, spawn, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as actionsColor from "../actions/color";
import spreadHsl from './color/spreadHsl';
import spreadRgb from './color/spreadRgb';
import spreadText from './color/spreadText';


export default function* colorSaga() {
    yield takeEvery( actionsColor.SPREAD_HSL, spreadHsl );
    yield takeEvery( actionsColor.SPREAD_RGB, spreadRgb );
    yield takeEvery( actionsColor.SPREAD_TEXT, spreadText);
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


