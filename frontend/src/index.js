/**
 * Created by luiscunha on 3/22/16.
 */
'use strict';

import 'babel-polyfill';
import "./style.css";
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore'
import {addUser} from './actions/userInfo'
import {getFacility} from './actions/myFacility'
import {getExtracts} from './actions/extracts'
import Root from './containers/Root'
import {decodeUserProfile} from './utils/utils'

//var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImF1ZCI6Imh0dHA6XC9cL2V4YW1wbGUub3JnIiwianRpIjoiNGYxZzIzYTEyYWEiLCJpYXQiOjE0NjM5NjYxMjYsIm5iZiI6MTQ2Mzk2NjE4NiwiZXhwIjoxNDYzOTY5NzI2LCJ1aWQiOiJsZmN1bmhhIn0.MDQzZmJkYTZiNDg1YTlmZDcwNjhjMmY5YTgzNjMzNmQ1MzFlZGE4OWEyYzcxOGFkMDQwNjA5MTQ1NjVhZDg0Mw"
//var decoded = jwt_decode(authorization_token);
//console.log(decoded.uid);

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

const user = {
    name: "",
    institution: "",
    street_address: "",
    city: "",
    state_province: "",
    zipcode: "",
    country: "",
    daytime_phone: "",
    email: ""
}

let requests = [{requester: "Luis Cunha", digs: "SINAI", request_number: "1", sample_number: "R1-S1",
    extract_number: "R1_S1_E1", status: "received", results: "link"},
    {requester: "Luis Cunha", digs: "SINAI", request_number: "1", sample_number: "R1-S1",
        extract_number: "R1_S1_E2", status: "received", results: "link"}]

/*
 *  Fetch requests
 *  If user is from digs, fetch Facility information
 */

const store = configureStore({})

var token = decodeUserProfile(authorization_token);

if (token.roles) {
    user.role = token.roles[0]
    store.dispatch(addUser(user))
        .then(store.dispatch(getExtracts()))
        .then(() => {
            render(
                <Root store={store}/>,
                document.getElementById('app')
            )
        })
}
else {
    store.dispatch(addUser(user))
        .then(store.dispatch(getExtracts()))
        .then(() => {
            render(
                <Root store={store}/>,
                document.getElementById('app')
            )
        })


}




