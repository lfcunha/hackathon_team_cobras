/**
 * Created by luiscunha on 3/22/16.
 */
'use strict';

import 'babel-polyfill';
import "./style.css";
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore'
import {getViolations} from './actions/violations'
import Root from './containers/Root'
//import {decodeUserProfile} from './utils/utils'


if (__LOCAL__) {
    var a = require("./assets/css/bootstrap.min.css")
    var b = require("./assets/js/bootstrap-3.3.6")
}
if (__DEV__) {
    var a = require("./assets/css/bootstrap.min.css")
    var b = require("./assets/js/bootstrap-3.3.6")
}

if (__STAG__) {

}

const store = configureStore({})

//var token = decodeUserProfile(authorization_token);

store.dispatch(getViolations())
    .then(() => {
        render(
            <Root store={store}/>,
            document.getElementById('app')
        )
    })

/*
if (token.roles) {
    user.role = token.roles[0]
    store.dispatch(addUser(user))
        .then(store.dispatch(getViolations()))
        .then(() => {
            render(
                <Root store={store}/>,
                document.getElementById('app')
            )
        })
}
else {
    store.dispatch(addUser(user))
        .then(store.dispatch(getViolations()))
        .then(() => {
            render(
                <Root store={store}/>,
                document.getElementById('app')
            )
        })
}
*/



