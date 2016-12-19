/**
 * Created by luiscunha on 4/18/16.
 */

import deepFreeze from 'deep-freeze';

const editingStatus = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'EDITING_STATUS':
                if (t.id == action.extract_row_id)
                    {
                        var new_sample = Object.assign({}, t)
                        new_sample["editingStatus"] = true
                        new_sample["checked"] = true
                        return new_sample
                    }
            return t
        default:
            return t
    }
}


const violation = (state = {}, action) => {
    "use strict";
    switch (action.type) {
        case 'ADD_VIOLATION_SUCCESS':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_VIOLATION':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const violations = (state=[], action) => {
    "use strict";
    deepFreeze(state);

    switch (action.type){
        case 'ADD_VIOLATION_SUCCESS':
            return Object.assign({}, state, {violations: action.violations, fetchError: true, fetching: false, error: ""})
            //return [...state, violation(undefined, action)]
            Object.assign({}, state, {fetchError: true, fetching: false, error: "", flash:action.err.statusText})
        case 'ADD_VIOLATION_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching: false, error: "", flash:action.err.statusText})
        case 'ADD_VIOLATION_REQUEST':
            return Object.assign({}, state, {fetchError: false, fetching: true, error: "", violations: [], requesting: true, status:200, flash: ""})
        case 'TOGGLE_VIOLATION':
            return state.map(t =>
                violation(t, action)
            )
        default:
            return state
    }
}

export default violations;