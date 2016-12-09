/**
 * Created by luiscunha on 4/18/16.
 */

import deepFreeze from 'deep-freeze';

const editingStatus = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'EDITING_STATUS':
            if (index == action.row) {
                if (t.id == action.extract_row_id)
                    {
                        var new_sample = Object.assign({}, t)
                        new_sample["editingStatus"] = true
                        return new_sample
                    }
            }
            return t
        default:
            return t
    }

}

const updateStatus = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'SET_STATUS':
            if (index == action.row) {
                if (t.id == action.extract_row_id)
                {
                    var new_sample = Object.assign({}, t)
                    new_sample["editingStatus"] = false
                    new_sample["status"] = action.status
                    return new_sample
                }
            }
            return t
        default:
            return t
    }

}

const myFacility = (state=[], action) => {
    "use strict";
    deepFreeze(state);
    switch (action.type){
        case 'FACILITY_SUCCESS':
            let instruments = ["PacBio", "Ion Torrent", "Illumina"]
            var my_instruments = {}
            var instrument = action.facility.capacity.instruments_operational.split(",")
            instrument.map((inst, index)=>{
                if (instruments.indexOf(inst) > -1) my_instruments[inst]=true
            })
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", flash: "", my_instruments: my_instruments, current_capacity:action.facility.capacity.capacity_total , propagate_month_to_month: action.facility.capacity.propagate_month_to_month, usage_count: action.facility.current_usage, contact: action.facility.contact, name: action.facility.contact.contact_name,
                address:action.facility.contact.shipping_address_street, phone:action.facility.contact.contact_phone,
                email:action.facility.contact.contact_email, institution:action.facility.contact.shipping_address_org,
                city:action.facility.contact.shipping_adddress_city, state:action.facility.contact.shipping_adddress_state, zip:action.facility.contact.shipping_adddress_zip,
                capacity: action.facility.capacity, requesting: false, status:200})
        case 'FACILITY_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching: false, error: action.err.message, usage_count: null, contact: null, capacity: null, requesting: false, status:action.err.status, flash:action.err.statusText})
        case 'FACILITY_REQUEST':
            return Object.assign({}, state, {fetchError: false, fetching: true, error: "", usage_count: null, contact: null, capacity: null, requesting: true, status:200, flash: ""})
        case 'EDITING_FACILITY':
            return Object.assign({}, state, {fetchError: false, fetching: false, status:200, error: "", flash: ""})
        case 'SET_FACILITY':
            return Object.assign({}, state, {fetchError: false, fetching: false, status:200, error: "", flash: ""})
        case 'TOGGLE_PROPAGATION':
              return Object.assign({}, state, {fetchError: false, fetching: false, status:200, error: "", flash: "", propagate_month_to_month: Number(!Boolean(parseInt(state.propagate_month_to_month)))})
        case 'SET_INSTRUMENT':
            var old_instruments = Object.assign({}, state.my_instruments)
            if (old_instruments.hasOwnProperty(action.instrument)){
                old_instruments[action.instrument] = action.checked
            }
            else {
                old_instruments[action.instrument] = action.checked
            }
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", status:200, flash: "", my_instruments: old_instruments})

        case 'SET_CAPACITY':
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", status:200, flash: "", current_capacity: action.value})
        default:
            return state
    }
}

export default myFacility;