/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {toTitleCase} from "../../utils/utils"


const RequestedSamplesTable = (props) => {
    "use strict";
    // TODO: remove || ...
    if (__DEV__) {
        var samples = props.samples || [{
                "sample_identifier": "a",
                "sample_id": "57656fc50144c",
                "new_sample": true,
                "extract_identifier": "2b24dcdb-ab78-fe7d-e8f1-188d4570c305",
                "extract_id": "S1_E1",
                "id": 0,
                "sequencing_study_identifier": "a",
                "project_identifier": "a",
                "center_name": "a",
                "virus_identifier": "a",
                "strain_name": "a",
                "influenza_subtype": "H1N1",
                "host_species": "a",
                "lab_host": "a",
                "passage_history": "E1",
                "pathogenicity": "HPAI",
                "volume": "1",
                "concentration": "1",
                "extract_material": "DNA",
                "sequencing_technology": {"Illumina": true},
                "concentration_determined_by": "Qbit",
                "analysis_type": {"Annotation": true},
                "raw_sequences": "1",
                "comments": "cccc"
            }]
    }
    else {
        var samples = props.samples
    }

    const styles = {
        button: {
            margin: 15
        },
        tableStyle: {
            border: "solid",
            borderWidth: "2px",
            fontSize: 14

        },
        tdStyle: {
            fontSize: "1em",
            width: 100 + "%"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            fontSize: "1em",
            borderColor: "#f00",
            marginTop:50
        }

    }
    var columns = props.columns;
    var data = [];
    return (
        <div id="Manifesto" style={styles.divStyle}>
            <table id="ManifestoTable" className="table table-hover table-bordered table-striped" style={styles.tableStyle}>
                <colgroup>
                    <col width="14.2%"/>
                        <col width="14.2%"/>
                            <col width="14.2%"/>
                                <col width="14.2%"/>
                    <col width="14.2%"/>
                    <col width="14.2%"/>
                    <col width="14.2%"/>
                </colgroup>

                <thead>
                <tr>
                    {columns.map(function (column, idx) {
                        let column_name = toTitleCase(column.split("_").join(" "))
                        return <th className="text-nowrap" key={idx} style={{width:"350 !important"}}>{column_name}</th>
                    })}
                </tr>
                </thead>

                <tbody style={styles.tdStyle}>
                {

                    samples.map(function (_row, idx) {
                        var row_data = [];
                        let row = _row
                        var column_val;
                        data.push(row_data)
                        return (
                            <tr key={idx}>
                                {columns.map((column, idx) => {
                                    if (typeof row[column] === 'object'){
                                        let keys = Object.keys(row[column]);
                                        var values = []
                                        keys.map((key, idx) => {
                                            if (row[column][key]) {
                                            values.push(key)
                                        }
                                        column_val = values.join(", ")
                                        })}
                                    else {
                                        column_val = row[column];
                                    }
                                    row_data.push(column_val)
                                    return(
                                        <td key={idx} style={{width:"350 !important"}}>{column_val}</td>
                                    )
                                })}
                            </tr>
                        )

                    }) //data.map

                }
                </tbody>


            </table>
            <div id="requestedSamplesButtons" className="swtflexbox">
                <RaisedButton
                    primary={true}
                    label="< Back"
                    style={styles.button}
                    onClick={props.redirectBack}
                />
                {!props.request_id &&
                <RaisedButton
                    default={true}
                    label="Confirm Request and Create Shipping Manifest"
                    style={styles.button}
                    onClick={props.createShippingManifest.bind(this, data, samples, props.user, props.facility, false)}
                />}
                {props.request_id &&
                <RaisedButton
                    default={true}
                    label="Confirm Request and Create Shipping Manifest"
                    style={styles.button}
                    onClick={props.createShippingManifest.bind(this, data, samples, props.user, props.facility, true)}
                />}
            </div>
            <div id="myCanvas" width="578" height="200"></div>
        </div>

    )
}


export default RequestedSamplesTable;