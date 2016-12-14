/**
 * Created by luiscunha on 6/4/16.
 */


import {
    ADD_VIOLATION_REQUEST,
    ADD_VIOLATION_SUCCESS,
    ADD_VIOLATION_FAILURE,
} from './actionTypes';
import {API_ENDPOINT} from "../config"
import {checkStatus, parseJSON} from '../utils/utils';
import 'isomorphic-fetch';


const getViolationsRequest = () => {
    "use strict";
    return {
        type: ADD_VIOLATION_REQUEST,

    }
}

const getViolationsSuccess = (extracts) => {
    "use strict";
    return {
        type: ADD_VIOLATION_SUCCESS,
        extracts: extracts

    }
}

const getViolationsFailure = (err) => {
    "use strict";
    return {
        type: ADD_VIOLATION_FAILURE,
        err: err
    }
}

export const getViolations = () => {
    "use strict";
    var fetchParams = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': 'localhost',
            'AuthToken': 'Bearer ' + authorization_token
        }
    }


    return dispatch => {
        dispatch(getViolationsRequest()); // show spinner while loading
        return new Promise(function (resolve, reject) {
            var api = API_ENDPOINT()
            fetch(api + "/violations/", fetchParams)
                .then(checkStatus)
                .then(parseJSON)
                .then(json => {
                    if (json) {
                        if (json.status) {
                            dispatch(getViolationsSuccess(json))
                            setTimeout(() => resolve(), 100);
                        }
                        else {
                            var error = {};
                            error.statusText = json.statusText
                            dispatch(getViolationsFailure(error));
                        }
                    }

                })
                .catch(error => {
                    const response = error.response;
                    console.log("No Extracts", error)
                    if (response === undefined) {
                        dispatch(getViolationsFailure(error));
                    } else {
                        parseJSON(response)
                            .then(json => {
                                error.status = response.status;
                                error.statusText = response.statusText;
                                dispatch(getViolationsFailure(error));
                            });
                    }
                    resolve()
                });

            //.then(json => console.log(json));

        })
    }

}