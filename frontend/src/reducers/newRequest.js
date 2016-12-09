/**
 * Created by luiscunha on 3/24/16.
 */

import {Map} from 'immutable';
import deepFreeze from 'deep-freeze';

function setState(state, newState) {
    return state.merge(newState);
}

const dpccSampleFlash = (state, action) => {
    "use strict";
    switch (action.type){
        case 'SET_STATE':
            return state
        default:
            return state
    }
}


//Object.assign({}, state, state.samples.map( (t, index) => prepageRequestTable(t, index, action)))

const handleRemoveSample= (state, action) => {
    switch (action.type) {
        case "REMOVE_SAMPLE":
            var new_samples = [...state.samples.slice(0, action.index), ...state.samples.slice(action.index + 1)];
            return Object.assign({}, state, {samples:new_samples, fetching: false, fetchError:false})
    }
}


const addAttribute = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case "ADD_EXTRACT":
            var id = action.id;
            var _id = Object.keys(t)[0]
            var new_sample = Object.assign({}, t)
            new_sample[_id].sample.map(function(s, index){
                if (s.sample_id === action.id){
                    new_sample[_id].sample[index][action.column] = action.value
                }
            })
            if (new_sample[_id]["sample_id"] == action.id){
                new_sample[_id][column] = action.value
            }
            return Object.assign({}, new_sample)
        default:
            return t
    }
}

const handleAddAttribute = (state, action) => {
    switch (action.type) {
        case "ADD_EXTRACT":
            var new_samples = state.samples.map( (t, index) => addAttribute(t, index, action))
            return Object.assign({}, state, {samples:new_samples, fetching:false, fetchError: false })
    }
}


const dpccSample = (state, action) => {
    "use strict";
    switch (action.type) {
        case 'ADD_SAMPLE':
            //return Object.assign({}, action.dpccSamples.sample, {
            return Object.assign({}, action.dpccSamples, {
                id: action.id
            })
        default:
            return [state];
    }
}

const toggleSample = (t, index, action) => {
    "use strict";
    switch (action.type) {

        case "TOGGLE_SAMPLES":
            var id = action.id;
            var _id = Object.keys(t)[0]
            var new_sample = Object.assign({}, t)
               if (_id == action.id){
                   new_sample[_id]["display"] = !new_sample[_id]["display"]
            }
            return new_sample
        default:
            return t
    }
}

const toggleSamples = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SAMPLES":
            var new_samples = state.samples.map( (t, index) => toggleSample(t, index, action))
            return Object.assign({}, state, {samples:new_samples, fetching:false, fetchError: false })
    }
}


export const dpccSamples = (state={samples:[]}, action) => {
    "use strict";

    switch (action.type){
        case 'SET_STATE':
            return setState(state, action.state);
        case 'ADD_SAMPLE':
            return Object.assign({total_number_extracts:0}, state, {fetchError: false, fetching: false, error: "",
                samples:[...state.samples, dpccSample(undefined, action)]})
        case 'DPCCSAMPLES_REQUEST':
            return Object.assign({}, state, {fetchError: false, fetching:true, error: ""})
        case 'DPCCSAMPLES_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching:false, error:action.err.statusText, flash:action.err.statusText})
        case 'REMOVE_SAMPLE':
            return handleRemoveSample(state, action);
        /*case "ADD_ATTRIBUTE":
            return handleAddAttribute(state, action)*/
        case "ADD_EXTRACT":
            return handleAddAttribute(state, action)
        case "TOGGLE_SAMPLES":
            return toggleSamples(state, action)
        case "RESET_JOBS_LIST":
            return Object.assign({}, state, {samples: []})
        case "SET_EXPORT_COUNT":
            var extractsCount = false;
            if (action.count > 0) extractsCount = true
            return Object.assign({}, state, {extractsCount: extractsCount})
        default:
            return state
    }
}

/*
export const newRequestData = (state=[], action) => {
    "use strict";
    switch (action.type){
        case 'CREATE_REVIEW_TABLE_STORE':
            deepFreeze(state)
            //iterate over each action.samples, call a new function which will return 0 or more samples.
            //decide how to handle ID. get next id from sql? or keep an internal id here, later generate new id on sql submission
            // if so, then exporting should be getting data from server.
            // This is probably a better option to guarantee there's no inconsistencies in the client/server data
            return Object.assign({}, state, {samples: action.samples}); //state.map( (t, index) => prepageRequestTable(t, index, action))
        default:
            return state
    }
}*/
