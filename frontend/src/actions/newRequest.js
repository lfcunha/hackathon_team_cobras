/**
 * Created by luiscunha on 3/30/16.
 */

import {
    ADD_SAMPLE,
    REMOVE_SAMPLE,
    DPCCSAMPLES_FAILURE,
    DPCCSAMPLES_REQUEST,
    CREATE_REVIEW_TABLE_STORE,
    ADD_ATTRIBUTE,
    ADD_EXTRACT,
    TOGGLE_SAMPLES,
    RESET_JOBS_LIST,
    SET_PAGE,
    SET_EXPORT_COUNT
} from './actionTypes';
import {API_ENDPOINT} from "../config"
import {checkStatus, parseJSON} from '../utils/utils';
import 'isomorphic-fetch';
import { push } from 'react-router-redux';

var test_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9zd3QuY29tIiwiYXVkIjoiaHR0cDpcL1wvc3d0Lm9yZyIsImp0aSI6IjRmMWcyM2ExMmFhIiwiaWF0IjoxNDY1NDMyNjUzLCJuYmYiOjE0NjU0MzI3MTMsImV4cCI6MTQ2NTQ3NTg1MywidWlkIjoibXRzaW5haXZhbmJha2VsY29yZXRlc3Q0Iiwicm9sZXMiOltudWxsXSwiZGlncyI6Ik10U2luYWktdmFuIEJha2VsIENvcmUifQ.Mjk2MzFjMWVlMjUxZjliNTRmYTI0M2UxN2E2ODAzMzFlMWNiNmM4YmYxNWI5MTYxODBmYjZlMzQxMmFmMjk0NQ"

var test_authorization_token = test_token
let nextSampleId = 0;


export const setPage = (page) => {
    "use strict";
    return {
        type: SET_PAGE,
        page: page
    }
}

export const setExportCount = () => {
    "use strict";
    var count = 0;
    try {
        $.each($("input[name=extract_count]"), function (v, k) {
            count += Number($(k).val())
        })
    }
    catch(err){
        //ignore.
    }
    return {
        type: SET_EXPORT_COUNT,
        count: count
    }
}

export const toggleSamples = (id) => {
    "use strict";

    return {
        type: TOGGLE_SAMPLES,
        id: id
    }
}

export const addAttribute = (id, column, value) => {
    "use strict";

    return {
        type: ADD_ATTRIBUTE,
        id: id,
        column: column,
        value: value
    }
}

export const addExtract = (id, column, value) => {
    "use strict";

    return {
        type: ADD_EXTRACT,
        id: id,
        column: column,
        value: value
    }
}

function expandStoreWithReviewTableColumns(samples) {
    "use strict";
    return {
        type: CREATE_REVIEW_TABLE_STORE,
        samples: samples
    }

}

export const ReviewTable = (samples) => {

    return dispatch => {
        dispatch(expandStoreWithReviewTableColumns(samples));
        dispatch(push('/newRequestData'));
    }
}

export function resetJobsList(){
    "use strict";
    return {
        type: RESET_JOBS_LIST,
    }
}

function dpccSamplesRequest(sample) {
    return {
        type: DPCCSAMPLES_REQUEST,
        sample: sample
    };
}

export function dpccSamplesSuccess(sampleID, payload) {
     var _id = nextSampleId++

    payload[sampleID]["id"] = _id;
    return {
        type: ADD_SAMPLE,
        id: _id,
        sampleID: sampleID,
        dpccSamples: payload

        //type: DPCCSAMPLES_SUCCESS,
        //page,
        //repos: payload.items,
        //totalCount: payload.total_count,
    };
}

function dpccSamplesFailure(sample, err) {
    return {
        type: DPCCSAMPLES_FAILURE,
        id: sample,
        err: err
    };
}

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

/*
additionally can add authorization token to the object's body:
 body: JSON.stringify({
 'client_id': '(API KEY)',
 'client_secret': '(API SECRET)',
 'grant_type': 'client_credentials'
 }
 */

export const addSample = (sample) => {

    if (sample != null && sample != undefined && sample != "") {
        return dispatch => {
            dispatch(dpccSamplesRequest(sample)); // show spinner while loading

            //fetch('http://swt.niaidceirs-dev.net/dpccsamples?sample_identifier=' + sample)
            //1136032706272
            var api = API_ENDPOINT()
            fetch(api + "/dpccsample/" + sample, fetchParams)
                .then(checkStatus)
                .then(parseJSON)
                .then(json => {
                    if (!json.status) {
                        var error = {};
                        error.statusText = json.statusText;
                        dispatch(dpccSamplesFailure(sample, error));
                    }
                    else {
                        if (json.sample.length > 0) {
                            var s = {}
                            s[sample]=json
                            dispatch(dpccSamplesSuccess(sample, s))
                        }
                        else {
                            dispatch(dpccSamplesSuccess(sample, json))
                        }
                    }
                })
                .catch(error => {
                    const response = error.response;
                    if (response === undefined) {
                        error = {}
                        error.statusText = "undefined response";
                        dispatch(dpccSamplesFailure(sample, error));
                    } else {
                        parseJSON(response)
                            .then(json => {
                                error.status = response.status;
                                error.statusText = response.statusText;
                                error.message = json.message;
                                dispatch(dpccSamplesFailure(sample, error));
                            });
                    }
                });
            //.then(json => console.log(json));
        }
    }
}

export const removeSample = (id) => {
    return {
        type: REMOVE_SAMPLE,
        index: id
    }
}
