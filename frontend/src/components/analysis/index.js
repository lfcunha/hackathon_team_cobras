/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import analysisView from './analysis'
import Title from '../PageTitle'


import {connect} from 'react-redux'


const Analysis = () => {
    return (
        <div className="wrap" style={{height:500}}>
            <Title title="Analysis"/>
            <AnalysisComponent style={{height:500}}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        violations: state.violations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        /*addSample: (sample) => {
            "use strict";
            dispatch(actions_.addSample(sample))
        },
        removeSample: (idx) => {
            "use strict";
            dispatch(actions_.removeSample(idx))
        },
        toggleSamples: (id) => {
            "use strict";
            dispatch(actions_.toggleSamples(id))
        },*/

    }
}

/*
const AddSampleInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewSample);

const FlashMessages = connect(
    mapStateToProps,
    mapDispatchToProps
)(flashMessages);
*/
const AnalysisComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(analysisView);

export default Analysis