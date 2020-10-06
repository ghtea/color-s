import createSagaMiddleware, { END } from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import logger from 'redux-logger';


import rootReducer from './store/reducers';
const saga = createSagaMiddleware();



export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(saga, logger),
        )
    );

    store.runSaga = saga.run;
    store.close = () => store.dispatch(END);

    return store;
}


// https://kamang-it.tistory.com/entry/React13reduxsaga%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
// https://redux-saga.js.org/