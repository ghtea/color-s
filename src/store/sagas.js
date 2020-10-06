import { all, fork } from 'redux-saga/effects'

import colorSaga from './sagas/color';
import authSaga from './sagas/auth';

export default function* rootSaga() {
  yield all ([
    fork(colorSaga),
    fork(authSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html