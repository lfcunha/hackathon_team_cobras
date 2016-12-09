/**
 * Created by luiscunha on 6/4/16.
 */


import {
    FACILITY_REQUEST,
    FACILITY_SUCCESS,
    FACILITY_FAILURE,
    EDITING_FACILITY,
    SET_FACILITY,
    SET_MY_FACILITY,
    TOGGLE_PROPAGATION,
    SET_INSTRUMENT,
    SET_CAPACITY,
    DO_NOTHING
} from './actionTypes';
import {API_ENDPOINT} from "../config"
import {checkStatus, parseJSON} from '../utils/utils';
import 'isomorphic-fetch';


const setCapacity = (value) => {
    "use strict";
    return {
        type: SET_CAPACITY,
        value: value,
    }
}


export const setInstrument = (instrument, checked) => {
    "use strict";
    return {
        type: SET_INSTRUMENT,
        instrument: instrument,
        checked: checked

    }
}

export const toggle_propagation_month_to_month = () => {
    //SAVE TO DB
    return {
        type: TOGGLE_PROPAGATION,

    }
}

const getFacilityRequest = () => {
    "use strict";
    return {
        type: FACILITY_REQUEST,

    }
}

const getFacilitySuccess = (facility) => {
    "use strict";
    return {
        type: FACILITY_SUCCESS,
        facility: facility

    }
}

const getFacilityFailure = (err) => {
    "use strict";
    return {
        type: FACILITY_FAILURE,
        err: err
    }
}


export const getFacility = (digs) => {
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
        dispatch(getFacilityRequest()); // show spinner while loading
        return new Promise(function (resolve, reject) {
            //fetch('http://swt.niaidceirs-dev.net/dpccsamples?sample_identifier=' + sample)
            //1136032706272
            var api = API_ENDPOINT()
            fetch(api + "/digs/" + digs, fetchParams)
                .then(checkStatus)
                .then(parseJSON)
                .then(json => {
                    if (json) {
                        if (json.status){
                              dispatch(getFacilitySuccess(json))
                            setTimeout(() => resolve(), 100);
                        }
                        else {
                            dispatch(getFacilityFailure({"status": "error", "statusText": json.statusText}))
                        }
                    }
                })
                .catch(error => {
                    const response = error.response;

                    if (response === undefined) {
                        dispatch(getFacilityFailure(error));
                    } else {
                        parseJSON(response)
                            .then(json => {
                                error.status = response.status;
                                error.statusText = response.statusText;
                                error.message = json.message;

                                dispatch(getFacilityFailure(error));
                            });
                    }
                    resolve()
                });
            //.then(json => console.log(json));
        })
    }

}

export const edit = (extract_row_id, row) => {
    "use strict";

    return {
        type: EDITING_FACILITY,
        extract_row_id: extract_row_id,
        row: row,
    }
}

export const setStatusSuccess = (extract_row_id, row, name, status) => {
    "use strict";

    return {
        type: SET_FACILITY,
        extract_row_id: extract_row_id,
        row: row,
        column_name: name,
        status: status,

    }
}

const setFacilitySelection = (facility) => {
    "use strict";
    return {
        type: SET_MY_FACILITY,
        myFacility: facility

    }
}

export const setMyFacility = (facilitySelection) => {
    var selection = facilitySelection
    return dispatch => {
        dispatch(setFacilitySelection(selection))
        dispatch(getFacility(selection))
    }
}

export const updateMyFacility = (myCurrentFacility, name, params) => {
    if (name != null && name != undefined && name != "") {
        var fetchParams = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'localhost',
                'AuthToken': 'Bearer ' + authorization_token
            }
        }

        fetchParams["body"] = JSON.stringify({
            name: name,
            params: params,
        })
        return dispatch => {
            //dispatch(getExtractsRequest()); // show spinner while loading
                var api = API_ENDPOINT()
                fetch(api + "/digs/" + myCurrentFacility, fetchParams)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then(json => {
                        if (json.status) {
                            switch (name) {
                                case "capacity":
                                    return dispatch(setCapacity(parseInt(params.value)))
                                case "toggle_propagation_month_to_month":
                                    return dispatch(toggle_propagation_month_to_month(parseInt(params.value)))
                                case "instrument":
                                    return dispatch(setInstrument(params.instrument, params.checked))
                                default:
                                    return false
                            }
                            //dispatch(setStatusSuccess(extract_row_id, row, name, status))
                        }
                        else {
                            dispatch(getFacilityFailure({"status": "error", "statusText": json.statusText}))
                        }
                    })
                    .catch(error => {
                        const response = error.response;

                        if (response === undefined) {
                            error.statusText = "Error"
                            dispatch(getFacilityFailure(error));

                        } else {
                            parseJSON(response)
                                .then(json => {
                                    error.status = response.status;
                                    error.statusText = response.statusText;
                                    dispatch(getFacilityFailure(error));

                                });
                        }
                    });
        }
    }
}