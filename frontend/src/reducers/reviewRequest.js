/**
 * Created by luiscunha on 4/18/16.
 */

import deepFreeze from 'deep-freeze';

const reviewRequest = (state=[], action) => {
    "use strict";
    deepFreeze(state);
    switch (action.type){
        case 'SHIP_AND_SAVE_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching: false, status:action.err.status, flash:action.err.statusText})
        case "SAVE_REQUEST_ID":
            return Object.assign({}, state, {fetchError: false, fetching: false, request_id: action.request_id})
        default:
            return state
    }
}

export default reviewRequest;