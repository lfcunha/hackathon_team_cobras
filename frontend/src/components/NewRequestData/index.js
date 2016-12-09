/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import RequestDataTransposedTable from './requestDataTransposedTable'
import {connect} from 'react-redux'
import * as actions_ from '../../actions/newRequest'
import { push, goBack, goForward } from 'react-router-redux';
import Title from "../PageTitle"

const NewRequestDataTable = (props) => {
    return (
        <div>
            <Title title="Sample Data"/>
            <NewRequestData {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.reviewTable,
        columns: ["sample_identifier", "extract_id", "sequencing_study_identifier", "submission_id", "submission_type",
            "submitter_name",
            "submission_date",
            "project_identifier",
            "center_name",
            "virus_identifier",
            "strain_name",
            "influenza_subtype",
            "host_species",
            "lab_host",
            "passage_history",
            "pathogenicity",
            "extract_material",
            "volume",
            "concentration",
            "concentration_determined_by",
            "sequencing_technology",
            "analysis_type",
            "raw_sequences",
            "comments"
        ]
    }
}

var handleInput = function (props, e) {
    if (e.target.name === "sequencing_technology") {
    }
    var value = e.target.value;
    if (!value) {
        value = $(".form-control").val()
    }
    var name = e.target.name
    if (name.indexOf("raw_sequences") > -1) {
        name = name.split("-")[0]
    }
    props.addAttribute(e.target.id, name, value)
}

function selectPage(setPage, e){
    "use strict";
    setPage(e.target.value)
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirectToRequesterInformation: (d) => {
            "use strict";
            dispatch(push('/requesterInformation'))
        },
        redirectBack: () => {
            "use strict";
            dispatch(goBack())
        },
        addAttribute: (id, column, value) => {
            "use strict";
            dispatch(actions_.addAttribute(id, column, value))
        },
        handleInput: (props, e) => {
            return handleInput(props, e)
        },
        selectPage: (e) => {
            "use strict";
            dispatch(actions_.setPage(e.selected + 1))
        }
    }
}

const NewRequestData = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestDataTransposedTable);

export default NewRequestDataTable