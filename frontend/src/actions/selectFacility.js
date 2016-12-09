/**
 * Created by luiscunha on 5/14/16.
 */

import {
    FSE_REQUEST,
    FSE_FAILURE,
    FSE_SUCCESS,
    FSE_CHOICE,
    CONFIRM_FSE_CHOICE
} from './actionTypes';
import {checkStatus, parseJSON} from '../utils/utils';
import {API_ENDPOINT} from "../config";
import { push } from 'react-router-redux';

export function confirmFseChoice() {
    return {
        type: CONFIRM_FSE_CHOICE,
    };
}

export function fseChoice(choice) {
    return {
        type: FSE_CHOICE,
        fse_choice: choice
    };
}

function fseRequest() {
    return {
        type: FSE_REQUEST
    };
}

function fseFailure_(err) {
    return {
        type: FSE_FAILURE,
        err: err
    };
}

function addFacilitiesResponseToStore(payload) {
    return {
        type: FSE_SUCCESS,
        facilities: payload
    };
}

function fseFailure(err) {
    return dispatch => {
        dispatch(fseFailure_(err));
        //dispatch(push('/selectFacility'));
    }
}

function fseSuccess(payload) {
    return dispatch => {dispatch(addFacilitiesResponseToStore(payload));
    dispatch(push('/selectFacility'));
}
    }

var fetchParams = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'localhost'
    }
}

export const selectFacility = (zipcode, _samples) => {
    var samples = _samples || {};

    var analysis_type = []
    var sequencing_tech = [];

    Object.keys(samples).forEach(function (key) {
        let obj = samples[key];
        Object.keys(obj.analysis_type).forEach(function (key) {
            let obj1 = obj.analysis_type[key];
            if (obj1){
                analysis_type.push(key)}
        });
        Object.keys(obj.sequencing_technology).forEach(function (key) {
            let obj1 = obj.sequencing_technology[key];
            if (obj1){
                if (key === "No Preference"){
                sequencing_tech.push("Illumina")
                sequencing_tech.push("PacBio")
                sequencing_tech.push("Ion Torrent")
                }else{
                    sequencing_tech.push(key)
                }
            }
        });
    });

    var my_analysis_type = Array.from(new Set(analysis_type))
    var my_sequencing_tech = Array.from(new Set(sequencing_tech))

    var params = {
        "zipcode": zipcode,
        "number_extracts": Object.keys(samples).length,
        "analysis_type": my_analysis_type,
        "sequencing_tech": my_sequencing_tech
    }

    if (params != null && params != undefined && params != "") {
        return dispatch => {
            dispatch(fseRequest());  // show spinner while loading

            fetchParams["body"] = JSON.stringify(params)
            var api = API_ENDPOINT()
            var fse_url = api + "/fse"

            fetch(fse_url, fetchParams)
                .then(checkStatus)
                .then(parseJSON)
                .then(json => {
                    if (json.error_code == 0){
                    dispatch(fseSuccess(json.result))
                    }else {
                        var error = {};
                        error.statusText = "failed to select facility"
                        dispatch(fseFailure(error));
                    }

                })
                .catch(error => {
                    console.log(error)
                    const response = error.response;
                    if (response === undefined) {
                        error = {}
                        error.statusText = "No response!";
                        dispatch(fseFailure(error));
                    } else {
                        parseJSON(response)
                            .then(json => {
                                error.status = response.status;
                                error.statusText = response.statusText;
                                error.message = json.message;
                                dispatch(fseFailure(error));
                            });
                    }
                });
        }
    }
}