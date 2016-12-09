/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react';


const handleFlashMessage = (_sample, idx) => {
    "use strict";
    let {sample_identifier, submitter_name, project_identifier} = _sample;
    var _idx = idx;

    var o = Object.keys(_sample)[0]
    var sample = _sample[o]

    if (!sample.authorized) {
        return (<div key={_idx} className="alert alert-danger">
            <strong>Error:</strong> Sample "{o}" cannot be added. You do not have permission to access the
            sample's project {sample.project_identifier}. Please contact the PI ({sample.PI}) if you would like access
            granted.
        </div>)
    }
    else if (sample.new_sample) {
        return (
            <div key={_idx} className="alert alert-warning">
                <strong>Warning:</strong> Sample "{o}" does not exist in the DPCC database. If you intend
                to create a new sample, ignore this message.
            </div>)
    }
    else if (sample.previously_sequenced != undefined){
        if (sample.previously_sequenced) {
            return (
                <div key={_idx} className="alert alert-info">
                    <strong>Info:</strong> A viral isolate of "{o}" was previously sequenced
                </div>)
        }
    }
}

const flashMessages = (props) => {
    "use strict";
    var divStyle = {
        //background: "#eee",
        padding: "20px",
        margin: "20px",
        fontSize: 14
    };

    var data = props.dpccSamples.samples; //getData(props);
    if (!(data instanceof Array && data.length > 0)) {
        data = Array();
    }
    return (
        <div style={divStyle}>
            {props.dpccSamples.fetchError &&
                <div className="alert alert-danger">
                    <strong>Error: {props.dpccSamples.flash.toString()}. Please try again. If the problem persists, please contact the DPCC!<br/></strong>
                </div>
            }
            {data.map(function (sample, idx) {
                return (
                    handleFlashMessage(sample, idx)
                )
            })}
        </div>
    )
}


export default flashMessages
