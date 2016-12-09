/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import JobStatus from './jobStatus'
import {connect} from 'react-redux'
import FlashMessage from '../FlashMessage/flashMessage'
import * as actions_ from '../../actions/extracts'

const HomePageComponent = (props) => {
    return (
        <div>
            <JobStatus {...props} />
            <FlashMessage {...props}/>
        </div>
    )
}

var handleInput = function (props, e) {
    var name = e.target.name
    if (name === "selectStatus") {
        name = "status"
        var value = e.target.value;
        if (!value) {
            value = $(".form-control").val()
        }
        var index = props.row
        props.setStatus(e.target.id, index, name, value, props.allExtracts)
    }
}

const mapStateToProps = (state) => {

    return {
        extracts: state.extracts.extracts,
        requesters: state.extracts.requesters,
        requestNumbers: state.extracts.requestNumbers,
        statuses: state.extracts.statuses,
        showCompletedRequests: state.extracts.showCompletedRequests,
        searchFilter: state.extracts.searchFilter,
        core: state.extracts.core,
        common_columns: state.extracts.common_columns,
        fetchError: state.extracts.fetchError,
        requesting: state.extracts.requesting,
        flashMessage: state.extracts.flash || state.myFacility.flash,
        status: state.extracts.status,
        fetching: state.extracts.fetching,
        page:state.extracts.page
    }
}

function selectPage(e){
    "use strict";
    //setPage(e.target.value)
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirectBack: () => {
            "use strict";
            dispatch(goBack())
        },
        redirectHome: () => {
            "use strict";
            dispatch(push('/'))
        },
        edit: (extract_row_id, row) => {
            "use strict";
            dispatch(actions_.edit(extract_row_id, row))
        },
        check: (extract_row_id, row) => {
            "use strict";
            dispatch(actions_.check(extract_row_id, row))
        },
        handleInput: (props, e) => {
            return handleInput(props, e)
        },
        setStatus: (id, index, column, value, extracts) => {
            "use strict";
            dispatch(actions_.setStatus(id, index, column, value, extracts))
        },
        selectPage: (e) => {
            "use strict";
            dispatch(actions_.setPage(e.selected + 1))
        },
        filterExtracts: (filterName, value, e, checked) => {
            "use strict";
            dispatch(actions_.filterExtracts(filterName, value, checked))

        },
        doSearch: (e) => {
            if (e.keyCode == 13) {
                "use strict";
                let v = $("#Search").val()
                dispatch(actions_.filterBySearch(v))
            }
        },
        doSearchClick: (e) => {
                "use strict";
                let v = $("#Search").val()
                dispatch(actions_.filterBySearch(v))
        },
        sort: (column_name) => {
            dispatch(actions_._sort(column_name))
        }
    }
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);


export default HomePage