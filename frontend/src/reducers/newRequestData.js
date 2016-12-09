/**
 * Created by luiscunha on 4/13/16.
 */


/*
to import in consifureStore.js
import {newRequestData} from '../reducers/jobRequestReviewTable';

but must separate data and rendering and from dpccSamples

 */
const prepageRequestTable = (state, index, action) => {
    "use strict";
    switch (action.type) {
        case 'CREATE_REVIEW_TABLE_STORE':
            return Object.assign({}, state, {
                "sequencing_study_identifier": null,
                "virus_identifier": null,
                "influenza_subtype": null,
                "host_species": null,
                "lab_host":null,
                "passage_history": null,
                "parent_strain_name": null,
                "pathogenicity": null,
                "extract_material": null,
                "volume": null,
                "concentration": null,
                "chimeric": null,
                "coverage": null,
                "sequencing_technology": null,
                "analysis_type": null,
                "raw_requences": null
            })
        default:
            return state
    }
}

const addAttribute = (t, index, action) => {
    "use strict";
    switch (action.type) {

        case "ADD_ATTRIBUTE":
            //console.log("addAttribute", action.column, action.value)
            let col = action.column;
            let val = action.value;

            if (t.id == parseInt(action.id)) {
                if (col === "sequencing_technology" || col === "analysis_type") {
                    var new_t = Object.assign({}, t)
                    try {
                        new_t[col][val] = !new_t[col][val]
                    }
                    catch (err) {
                        new_t[col] = {}
                        new_t[col][val] = true
                    }
                    return new_t
                }
                else {
                    var new_ = {}
                    new_[col] = val
                    return Object.assign({}, t, new_)
                }
            }
        default:
            return t
    }
}

const handleAddAttribute = (state, action) => {
    switch (action.type) {
        case "ADD_ATTRIBUTE":
            var new_samples = state.samples.map( (t, index) => addAttribute(t, index, action))
            return Object.assign({}, state, {samples:new_samples, fetching:false, fetchError: false })
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export const reviewTable = (state=[], action) => {
    "use strict";
    switch (action.type){
        case 'CREATE_REVIEW_TABLE_STORE':
            //iterate over each action.samples, call a new function which will return 0 or more samples.
            //decide how to handle ID. get next id from sql? or keep an internal id here, later generate new id on sql submission
            // if so, then exporting should be getting data from server.
            // This is probably a better option to guarantee there's no inconsistencies in the client/server data
            var id  = 0; //must reset the ID, can't use the one assigned to the dpccSamples
            var sample_id = 1; //keep count of samples
            var new_samples = [];
            for (let sample of action.samples){
                    var key = Object.keys(sample)
                    var s = sample[key].sample
                    for (let sample of s){
                        var adding_extract_for_this_sample = false
                        let numberExtracts = parseInt(sample.number_extracts) || 0;
                        var extractsRange = Array.apply(null, Array(numberExtracts)).map(function (_, i) {return i;});
                        for (let extract of extractsRange){
                            var uuid = guid();
                            var extract_id = "S" + sample_id + "_E" + (extract + 1);//sample.sample_identifier + "_" + extract;
                            var this_sample = Object.assign({}, sample, {"extract_identifier": uuid, "extract_id": extract_id, id: id++})
                            delete this_sample["number_extracts"]
                            new_samples.push(this_sample)
                            adding_extract_for_this_sample = true
                        }
                        adding_extract_for_this_sample? sample_id++: null;
                    }
            }
            return Object.assign({}, state, {samples: new_samples, page:1});
        case "ADD_ATTRIBUTE":
            return handleAddAttribute(state, action)
        case "SET_PAGE":
            return Object.assign({}, state, {page: action.page})
        default:
            return state
    }
}