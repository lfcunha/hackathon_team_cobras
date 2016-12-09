/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import dpccSampleTable from './sample'
import AddNewSample from './addSample'
import flashMessages from './flashMessage'
import Title from '../PageTitle'
import * as actions_ from '../../actions/newRequest'
import {connect} from 'react-redux'


const NewRequestTable = () => {
    return (
        <div>
            <Title title="Surveillance Samples"/>
            <AddSampleInput />
            <SampleTable />
            <FlashMessages />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        dpccSamples: state.dpccSamples,
        headers: [
            "Remove", "Sample ID", "Submission Type", "Submission ID", "Submitted By", "Submission Date", "Project Identifier", "Contributing Institution", "# Extracts"
        ],
        extractsCount: state.dpccSamples.extractsCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addSample: (sample) => {
            "use strict";
            dispatch(actions_.addSample(sample))
        },
        removeSample: (idx) => {
            "use strict";
            dispatch(actions_.removeSample(idx))
        },
        handleTextFieldChange: (ownprops, e) => {
            /* support pressing enter to add input (dpcc sample ID*/
            if (e.keyCode == 13) {
                //props.onTodoClick(e.target.value)
                //$("#addSampleID").val('')
                ownprops.addSample(e.target.value)
                //$("#addSampleID").attr('placeholder', 'SampleID')
                e.target.value = ""
                }
        },
        handleTextFieldChangeButton: (ownprops) => {
            /* support clicking button to add input (dpcc sample ID*/
            let v = $("#addSampleID").val()
            ownprops.addSample(v)
        },
        redirectToReviewTable: (ownProps) => {
            "use strict";
            dispatch(actions_.ReviewTable(ownProps))

        },
        handleExtractCount: (sampleID, e) => {
            /* support pressing enter to add input (dpcc sample ID*/
            dispatch(actions_.setExportCount())
            dispatch(actions_.addExtract(sampleID, "number_extracts", e.target.value))

                //props.onTodoClick(e.target.value)
                //$("#addSampleID").val('')
                //ownprops.addSample(e.target.value)
                //$("#addSampleID").attr('placeholder', 'SampleID')
                //e.target.value = ""
        },
        toggleSamples: (id) => {
            "use strict";
            dispatch(actions_.toggleSamples(id))
        },
        resetJobList: () => {
            "use strict";
            dispatch(actions_.resetJobsList())

        },
        setExportCount: () => {
            "use strict";
            dispatch(actions_.setExportCount())
        }
    }
}

const AddSampleInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewSample);

const FlashMessages = connect(
    mapStateToProps,
    mapDispatchToProps
)(flashMessages);

const SampleTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(dpccSampleTable);

export default NewRequestTable