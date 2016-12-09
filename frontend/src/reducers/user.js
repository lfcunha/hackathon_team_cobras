/**
 * Created by luiscunha on 4/18/16.
 */

import deepFreeze from 'deep-freeze';

const user = (state=[], action) => {
    "use strict";
    deepFreeze(state);
    switch (action.type){
        case 'ADD_USER_DETAILS':
            var detail = {}
            detail[action.field] = action.value
            return Object.assign({}, state, detail)
        case 'ADD_USER':
            var detail = {}
              return Object.assign({}, state, action.user)
        case 'SET_MY_FACILITY':
            return Object.assign({}, state, {myCurrentFacility: action.myFacility})
        default:
            return state
    }
}

export default user;