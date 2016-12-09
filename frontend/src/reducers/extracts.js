/**
 * Created by luiscunha on 4/18/16.
 */

import deepFreeze from 'deep-freeze';

const editingStatus = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'EDITING_STATUS':
            //if (index == action.row) {
                if (t.id == action.extract_row_id)
                    {
                        var new_sample = Object.assign({}, t)
                        new_sample["editingStatus"] = true
                        new_sample["checked"] = true
                        return new_sample
                    }
            //}
            return t
        default:
            return t
    }
}

const check = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'SET_EXTRACTS_CHECKED':
            //if (index == action.row) {
                if (t.id == action.extract_row_id)  //TODO: FIX this ERROR:  anywhere that checks this after applying filter they are not the same
                {
                    var new_sample = Object.assign({}, t)
                    if (new_sample["checked"] == "undefined") {
                        new_sample["checked"] = false
                    } else {
                        new_sample["checked"] = !new_sample["checked"]
                    }
                    return new_sample
                }
            //}
            return t
        default:
            return t
    }
}

const updateStatus = (t, index, action) => {
    "use strict";
    switch (action.type) {
        case 'SET_STATUS':
            //if (index == action.row) {
                if (t.id == action.extract_row_id)
                {
                    var new_sample = Object.assign({}, t)
                    new_sample["editingStatus"] = false
                    new_sample["status"] = action.status
                    new_sample["checked"] = false
                    return new_sample
                }
            //}
            else {
                if (t.checked == true){
                    var new_sample = Object.assign({}, t)
                    new_sample["status"] = action.status
                    new_sample["checked"] = false
                    return new_sample
                }
            }
            return t
        default:
            return t
    }
}

const buildFilterObject = (_filter, filterName) => {
    "use strict";

    switch (filterName){
        case 'requesters':
            return {'requesters': _filter}
        case 'requestNumbers':
            return {'requestNumbers': _filter}
        case 'statuses':
            return {'statuses': _filter}
        case 'showCompletedRequests':
            return {'showCompletedRequests': _filter.showCompletedRequests.showCompletedRequests}
        default:
            return {}
    }
}

const sortExtracts = (action, extracts, common_columns) => {
    switch (action.type) {
        case 'SORT_EXTRACTS':
            var realNames = {"Requester": "requester", "DIGS Core": "digs", "Request Number": "extract_id", "Sample Number": "extract_id", "Extract Number": "extract_id", "Status": "status"}

            function* values(obj) {
                for (let prop of Object.keys(obj)) // own properties, you might use
                    // for (let prop in obj)
                    yield obj[prop];
            }
            var _extracts = Array.from(values(Object.assign({}, extracts)))
            var sort_asc;
            var _sort_asc;
            var __common_columns = [];
            $.map(common_columns, (v, k) => {
                "use strict";
                var o = Object.assign({}, v);
                if (o.name == action.column_name) {
                    if (o.active == "active") {
                        o.asc = !o.asc
                    }else {
                        o.active = "active"
                    }
                    sort_asc = o.asc
                }
                else {
                    o.active = "inactive"
                }
                __common_columns.push(o)
            })

            if (action.column_name == "Request Number" || action.column_name == "Sample Number" || action.column_name == "Extract Number" ) {
                if (!sort_asc) {
                    _extracts.sort(function (a, b) {
                        if (Number(a[realNames[action.column_name]].split("_")[0].slice(1,1000)) < Number(b[realNames[action.column_name]].split("_")[0].slice(1,1000))) return 1;
                        if (Number(a[realNames[action.column_name]].split("_")[0].slice(1,1000)) > Number(b[realNames[action.column_name]].split("_")[0].slice(1,1000))) return -1;
                        return 0;
                    })
                }
                else {
                    _extracts.sort(function (a, b) {
                        if (Number(a[realNames[action.column_name]].split("_")[0].slice(1,1000)) < Number(b[realNames[action.column_name]].split("_")[0].slice(1,1000))) return -1;
                        if (Number(a[realNames[action.column_name]].split("_")[0].slice(1,1000)) > Number(b[realNames[action.column_name]].split("_")[0].slice(1,1000))) return 1;
                        return 0;
                    })
                }
            }
            else {
                if (!sort_asc) {
                    _extracts.sort(function (a, b) {
                        if (a[realNames[action.column_name]].toLowerCase() < b[realNames[action.column_name]].toLowerCase()) return 1;
                        if (a[realNames[action.column_name]].toLowerCase() > b[realNames[action.column_name]].toLowerCase()) return -1;
                        return 0;
                    })
                }
                else {
                    _extracts.sort(function (a, b) {
                        if (a[realNames[action.column_name]].toLowerCase() < b[realNames[action.column_name]].toLowerCase()) return -1;
                        if (a[realNames[action.column_name]].toLowerCase() > b[realNames[action.column_name]].toLowerCase()) return 1;
                        return 0;
                    })
                }
            }

//           sort_asc?
 //                _extracts.sort((a, b) => a[realNames[action.column_name]] - b[realNames[action.column_name]]):
  //              _extracts.sort((a, b) => b[realNames[action.column_name]] - a[realNames[action.column_name]])

            return {extracts: _extracts, common_columns: __common_columns}

        default:
            return {extracts: extracts, common_columns: common_columns}
    }
}

const extracts = (state=[], action) => {
    "use strict";
    deepFreeze(state);

    switch (action.type){
        case 'ADD_EXTRACT_SUCCESS':
            var extracts = action.extracts.extracts;
            var statuses = {"Requested": false, "Shipped": false, "Received": false, "Accepted": false, "Declined": false, "In progress": false};
            return Object.assign({}, state, {
                fetchError: false,
                fetching: false, error: "",
                extracts: extracts,
                core: action.extracts.core,
                role: action.extracts.role,
                requesting: false, status:200,
                flash: "",
                page: 1,
                requesters: action.extracts.requesters,
                requestNumbers: action.extracts.requestNumbers,
                statuses: statuses,
                showCompletedRequests: true,
                searchFilter: "",
                common_columns: [{name:"Requester", asc: true, active:"active"}, {name: "DIGS Core", asc: true, active:"inactive"},
                    {name: "Request Number", asc: true, active:"inactive"}, {name:"Sample Number", asc: true, active:"inactive"},
                    {name: "Extract Number", asc: true, active:"inactive"}, {name: "Status", asc: true, active:"inactive"}],
            })
        case 'ADD_EXTRACT_FAILURE':
            return Object.assign({}, state, {fetchError: true, fetching: false, error: "", extracts: [], requesting: false, status:action.err.status, flash:action.err.statusText})
        case 'ADD_EXTRACT_REQUEST':
            return Object.assign({}, state, {fetchError: false, fetching: true, error: "", extracts: [], requesting: true, status:200, flash: ""})
        case 'EDITING_STATUS':
            var newExtracts = state.extracts.map( (t, index) => editingStatus(t, index, action))
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", extracts: newExtracts,requesting: false, status:200,flash: ""})
        case 'SET_EXTRACTS_CHECKED':
            var newExtracts = state.extracts.map( (t, index) => check(t, index, action))
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", extracts: newExtracts, requesting: false, status:200,flash: ""})
        case 'SET_STATUS':
            var newExtracts = state.extracts.map( (t, index) => updateStatus(t, index, action))
            return Object.assign({}, state, {fetchError: false, fetching: false, error: "", extracts: newExtracts,requesting: false, status:200,flash: ""})
        case "SET_PAGE":
            return Object.assign({}, state, {page: action.page})
        case "SET_FILTER_SEARCH":
            return Object.assign({}, state, {searchFilter: action.value})
        case "SET_FILTER_EXTRACTS":
            var _filter = Object.assign({}, state[action.filterName]);
            _filter[action.value] = action.checked
            let filterObject = buildFilterObject(_filter, action.filterName)
            return Object.assign({}, state, filterObject)
        case "SORT_EXTRACTS":
            return Object.assign({}, state, sortExtracts(action, state.extracts, state.common_columns))
        default:
            return state
    }
}

export default extracts;