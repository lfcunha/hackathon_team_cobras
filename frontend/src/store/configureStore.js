/**
 * Created by luiscunha on 3/24/16.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import violations from '../reducers/violations';
import { routerReducer } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router'

const logger = createLogger();
const routermiddleware = routerMiddleware(hashHistory)
const reducer = combineReducers(
    {
        violations,
        routing: routerReducer
    })

var createStoreWithMiddleware;
if (__LOCAL__) {
    createStoreWithMiddleware = applyMiddleware(
        routermiddleware,
        thunkMiddleware,
        logger
    )(createStore);
}
if (__DEV__) {
    createStoreWithMiddleware = applyMiddleware(
        routermiddleware,
        thunkMiddleware,
        logger
    )(createStore);
}
if (__STAG__) {
    createStoreWithMiddleware = applyMiddleware(
        routermiddleware,
        thunkMiddleware,
        logger
    )(createStore);
}
if (__PROD__) {
    createStoreWithMiddleware = applyMiddleware(
        routermiddleware, 
        thunkMiddleware
    )(createStore);
}


export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);

}