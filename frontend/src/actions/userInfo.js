/**
 * Created by luiscunha on 3/28/16.
 */

import {
    ADD_USER_DETAILS, ADD_USER
} from './actionTypes';

const addUserInfo_ = (field, value) => {

    return {
        type: ADD_USER_DETAILS,
        field: field,
        value: value
    }
}

export function addUserInfo(field, value) {
    /*
    return a promise to facilitate testing
    (dispatch(addUserInfo).then(<test>)
     */
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(addUserInfo_(field, value))
            setTimeout(() => resolve(), 10);

        })
    }
}


const addUser_ = (userInfo) => {

    return {
        type: ADD_USER,
        user: userInfo
    }
}

export function addUser(userInfo) {
    /*
     return a promise to facilitate testing
     (dispatch(addUserInfo).then(<test>)
     */
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(addUser_(userInfo))
            setTimeout(() => resolve(), 10);

        })
    }
}


/**
 * Created by luiscunha on 3/28/16.
 */

/*
 return a promise to facilitate testing
 (dispatch(addUserInfo).then(<test>)
 */

/*
export function addUserInfo(field, value) {

    return {
        type: ADD_USER_DETAILS,
        field: field,
        value: value
    }
}

*/


