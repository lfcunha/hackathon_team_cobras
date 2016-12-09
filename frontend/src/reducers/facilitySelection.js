/**
 * Created by luiscunha on 5/14/16.
 */

import deepFreeze from 'deep-freeze';

export const fseSelection = (state={}, action) => {
    "use strict";

    switch (action.type){
        case 'FSE_REQUEST':
            return Object.assign({}, state, {fetchError: false, fetching:true, })
        case 'FSE_SUCCESS':
            var digs_choice = null
            try {
                digs_choice = action.facilities[1]}
            catch (e) {

            }
            return Object.assign({}, state, {digs: action.facilities, choice: digs_choice, fetchError: false, fetching:false, })
        case 'FSE_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching:false, error:action.err.statusText, flash:action.err.statusText})
        case 'FSE_CHOICE':
            return Object.assign({}, state, {choice: action.fse_choice})
        default:
            return state
    }
}