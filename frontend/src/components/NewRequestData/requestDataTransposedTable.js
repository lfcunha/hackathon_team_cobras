/**
 * Created by luiscunha on 4/14/16.
 */

import React from 'react';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import moment from 'moment'
import validate from "./validation"
import {toTitleCase} from "../../utils/utils"
import Pagination from "../Pagination/pagination"
var ReactTooltip = require("react-tooltip")
import ReactPaginate from 'react-paginate';
import {in_database} from  "./validation"

const RequestDataTransposedTable = ({data, columns, handleInput, addAttribute,
    redirectToRequesterInformation, redirectBack, selectPage, setPage}) => {
    "use strict";
    var samples = data.samples || [];
    var columns = columns || []
    var page = data.page || 0;
    var columnsPerPage = 3;
    try {
        var totalSamples = data.samples.length;
    }
    catch (err){
        var totalSamples = 1;
    }

    const styles = {
        button: {
            margin: 15
        },
        tableStyle: {
            border: "solid",
            borderWidth: "2px",
            fontSize: 14,
        },
        tdStyle: {
            fontSize: "1em",
            width: 100 + "%"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            fontSize: 14,
            borderColor: "#f00"
        }

    }

    var validation_status = true;
    samples.map(function (sample, index) {
        let keys = Object.keys(sample)

        if (!sample["new_sample"]) {
            /*
             * Verify only columns that the user will fill in and skip pre-filled columnsfrom DPCC, even if they contain
             * no data
             */
            var existing_sample_keys_to_validate = ["extract_material", "volume", "concentration",
                "concentration_determined_by", "sequencing_technology", "analysis_type", "virus_identifier",
                "influenza_subtype", "lab_host", "passage_history", "pathogenicity"] ;

            existing_sample_keys_to_validate.map(function(mykey, index){
                if (!sample.hasOwnProperty(mykey)) validation_status = false; //attribute not yet added. This check is
                                                                              //required because state object not
                                                                              //initialized with keys (set to null)
            })
            if (validation_status){
                // If all attributes have been added, check if they pass validation.
                // Could have only ran on the keys in existing_sample_keys_to_validate, but I'm running on all
                // keys on sample, even the ones the user did not input. That's OK because the keys for which
                // a validation is not defined, will not match a case, and return a 'pass' status from by default case
                keys.map(function (column, index_) {
                    var row = 1; // must pass a value > -1, otherwise skips validation of column headers
                    var table = "sampleReview";
                    var validation = validate(row, column, sample[column], table)
                    if (!validation.pass) validation_status = false;
                })
            }
        }
        else {
            /*
             * Verify only columns that the user will fill in and skip pre-filled columnsfrom DPCC, even if they contain
             * no data
             */
            var new_sample_keys_to_validate = ["project_identifier", "center_name", "virus_identifier",
                "strain_name", "influenza_subtype", "host_species", "lab_host", "passage_history", "pathogenicity",
                "extract_material", "volume", "concentration", "concentration_determined_by", "sequencing_technology",
                "analysis_type", "virus_identifier"] ;

            new_sample_keys_to_validate.map(function(mykey, index){
                if (!sample.hasOwnProperty(mykey)) {validation_status = false;}
            })
            if (validation_status) {
                keys.map(function (column, index_) {
                    var row = 1; // must pass a value > -1, otherwise skips validation of column headers
                    var table = "sampleReview";
                    /*if (column == "host_species") {
                        //TODO: this needs to dispatch an action because it's async
                        // validation_status will need to be a property in the store
                        in_database("v_species", "sdict_host_species", sample[column]).then(
                            function (res) {
                                console.log("RES", res)
                                var validation = {pass: res.status, msg: res.message}
                                if (!validation.pass) validation_status = false;
                            }
                        )
                    }
                    else {*/
                        var validation = validate(row, column, sample[column], table)
                        if (!validation.pass) validation_status = false;
                    /*}*/
                    setTimeout(function () {
                    }, 2000)
                })
            }

        }
    })

    return (
        <div>
            <div id="table" className="" style={styles.divStyle}>
                <div style={{border: '0px solid black; margin-bottom:30px'}}>
                    <div style={styles.requester}>
                        <div>
                            <div style={{padding: "5px 0px 10px 10px", fontSize: "1.2em"}}><strong>Please verify /
                                complete the information below</strong></div>
                        </div>
                    </div>
                </div>
                    <table id="requestData" className="table table-hover table-bordered" style={styles.tdStyle}>
                        <thead>
                        {
                            <tr>
                                <Header row={-1} value={""}/>
                                {samples.map(
                                    function (_, idx) {
                                        if (idx >= ((page-1)*columnsPerPage ) && idx < ((page-1)*columnsPerPage + columnsPerPage )) {
                                            return (
                                                <Header key={idx} row={-1} value={"Sample " + (idx + 1)}/>
                                            )
                                        }
                                    }
                                )}
                            </tr>
                        }
                        </thead>
                        <tbody>
                        {
                            columns.map((column, idx) => {
                                var _data = samples;
                                var column_name = toTitleCase(column.split("_").join(" "))
                                return (
                                    <tr key={idx}>
                                        <Column row={-1} name={column_name} value={column}/>
                                        {_data.map(function (x, idx) {
                                            if (idx >= ((page-1)*columnsPerPage ) && idx < ((page - 1 )*columnsPerPage + columnsPerPage )){
                                            return (
                                                <Column key={idx} addAttribute={addAttribute} handleInput={handleInput}
                                                        id_={x["id"]} row={idx}
                                                        extract_identifier={x["extract_identifier"]}
                                                        name={column} samples={samples}
                                                        value={x[column]}/>
                                            )}
                                        })}
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
            </div>
            <div style={{marginRight: 10, float:"right"}}>
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<span>...</span>}
                               breakClassName={"break-me"}
                               pageNum={Math.ceil(totalSamples/columnsPerPage)}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={4}
                               clickCallback={selectPage}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
            </div>


            <div className="swtflexbox">
                <RaisedButton
                    default={true}
                    label="< Back"
                    style={styles.button}
                    onClick={redirectBack}
                />
                {validation_status &&
                <RaisedButton
                    default={true}
                    label="Requester Information"
                    style={styles.button}
                    onClick={redirectToRequesterInformation}
                />}
                {!validation_status &&
                <RaisedButton
                    disabled={true}
                    label="Requester Information"
                    style={styles.button}
                    onClick={redirectToRequesterInformation}
                />}
            </div>
        </div>
    )
}


const Header = (props) => {
    "use strict";
    var row = props.row;
    var columnName = props.columnName;
    var value = props.value;
    return (
        <th style={{textAlign:"right"}}>
            <Cell row={row} header={columnName} value={value}/>
        </th>
    )
}


const Column = (props) => {
    "use strict";
    if (props.row === -1) {
        return (
            <td className="text-nowrap" style={{maxWidth:100}}>
                <strong><Cell {...props} /></strong>
            </td>
        )
    }
    else {
        switch (props.name) {
            case 'pathogenicity':
                var options = ["HPAI", "LPAI", "U", "NA"]
                return (
                    <td style={{maxWidth:100}}>
                        <SelectCell options={options} {...props} />
                    </td>
                )
            case 'extract_material':
                var options = ["DNA", "cDNA", "Viral RNA", "PCR fragment"]
                return (
                    <td style={{maxWidth:100}}>
                        <SelectCell options={options} {...props} />
                    </td>
                )
            case 'concentration_determined_by':
                var options = ["Nanodrop", "Qbit", "Spectrometry"]
                return (
                    <td style={{maxWidth:100}}>
                        <SelectCell options={options} {...props} />
                    </td>
                )
            case 'sequencing_technology':
                var options = ["Illumina", "Ion Torrent", "PacBio", "No Preference"]
                return (
                    <td style={{maxWidth:100}}>
                        <CheckboxCell options={options} {...props} />
                    </td>
                )
            case 'analysis_type':
                var options = ["Annotation", "Phylogenetic", "Variant Analysis", "Geographic Mapping"]
                return (
                    <td style={{maxWidth:100}}>
                        <CheckboxCell options={options} {...props} />
                    </td>
                )
            case 'raw_sequences':
                return (
                    <td style={{maxWidth:100}}>
                        <RadioCell {...props} />
                    </td>
                )

            default:
                return (
                    <td style={{maxWidth:100}}>
                        <Cell {...props} />
                    </td>
                )
        }
    }
}

const styles = {
    button: {
        marginTop: 50 + 'px !important',
        marginLeft: 40 + "%"
    },
    tableStyle: {
        border: "solid",
        borderWidth: "2px"
    },
    tdStyle: {
        fontFamily: "Roboto, sans-serif",
        fontSize: "1em !important",
        width: 100 + "%"
    },
    divStyle: {
        //background: "#eee",
        padding: "2px",
        margin: "2px",
        fontSize: "0.5em",
        borderColor: "#f00"
    },
    input: {
        fontFamily: "Roboto, sans-serif",
        fontSize: "1em"
    }
}

const SelectCell = (props) => {
    "use strict";
    try {
        if (props.value.length > 0) {
            var validation = validate(parseInt(props.row), props.name, props.value, "sampleReview")
            var cl = validation.pass ? "OK" : "error";
        }
        else {
            var cl = ""
        }
    }
    catch (err) {
        var cl = "";
    }
    cl += " form-control"
    return (
        <select className={cl} id={props.id_} name={props.name} defaultValue={props.value || 0}
                onChange={props.handleInput.bind(this, props)}>
            <option value={0} disabled>Select One</option>
            {props.options.map((option, idx) => {
                return (
                    <option value={option} key={idx}>{option}</option>
                )
            })}
        </select>
    )
}

const CheckboxCell = (props) => {
    "use strict";
    try {
        if (props.value.length > 0) {
            var validation = validate(parseInt(props.row), props.name, props.value, "sampleReview")
            var cl = validation.pass ? "OK" : "error";

        }
        else {
            var cl = ""
        }
    }
    catch (err) {
        var cl = "";
    }
    cl += " form-control"

    return (
        <div className="flexbox-container">
            {props.options.map((option, idx) => {
                var cl = "item" + props.name
                var checked;
                try {
                    checked = props.samples[parseInt(props.id_)][props.name][option];
                }
                catch (err) {
                    checked = false;
                }
                return (
                    <label key={idx} className="c-input c-checkbox" style={{fontSize:"1em", fontWeight:400}}>
                        <div  className={cl} style={{marginLeft: 5}}>
                            <input type="checkbox" id={props.id_} checked={checked}
                                   onChange={props.handleInput.bind(this, props)} name={props.name} value={option}
                            /><span className="c-indicator" style={{marginLeft:5}}></span>{option}
                        </div>
                    </label>
                )
            })}
        </div>
    )
}
const RadioCell = (props) => {
    "use strict";
    /*
     No validation. UI shows No as default. Server must set this default if it has not been set in the redux store
     by the user by changing the choice
     */

    var name = props.name + "-" + props.id_
    return Boolean(parseInt(props.value)) ? (
        <div>
            <input style={styles.input} type="radio" name={name} id={props.id_} value="1" checked
                   onChange={props.handleInput.bind(this, props)}/> Y
            &nbsp;&nbsp;&nbsp;
            <input style={styles.input} type="radio" name={name} id={props.id_} value="0" onChange={props.handleInput.bind(this, props)}/> N
        </div>
    ) : (

        <div>
            <input style={styles.input} type="radio" name={name} id={props.id_} value="1" onChange={props.handleInput.bind(this, props)}/> Y
            &nbsp;&nbsp;&nbsp;
            <input style={styles.input} type="radio" name={name} id={props.id_} value="0" checked
                   onChange={props.handleInput.bind(this, props)}/> N
        </div>
    )
}


const Cell = (props) => {

    "use strict";
    var msg = "";
    var cl = "form-control ";
    try {
        if (props.value.length > 0) {

            var validation = validate(parseInt(props.row), props.name, props.value, "sampleReview")
            cl = validation.pass ? cl + " OK" : cl + " error";
            msg = validation.msg;
        }
        else {
            cl = "form-control ";
        }
    }
    catch (err) {
        cl = "form-control ";
    }

    if (props.row != -1) {
        var value = props.value;
        var name = props.name;
        if (props.name == "submission_date") {
            if (value != undefined) {
                // if called on undefined value, it will set todays date, which we don't want.
                value = moment(props.value).format('L')
            }
            cl += " numberInput"
        }

        return (
            <div className="has-danger">
                { !props.samples[parseInt(props.id_)]["new_sample"] && name.match(/sample_id|extract_id|submission_id|submission_type|submitter_name|submission_date|project_identifier|center_name|strain_name|submission_date|host_species/g) &&
                <span row={props.row} id={props.id_} data-id={props.row}>{value}</span>
                }
                { !props.samples[parseInt(props.id_)]["new_sample"] &&  !name.match(/sample_id|extract_id|submission_id|submission_type|submitter_name|submission_date|project_identifier|center_name|strain_name|submission_date|host_species/g) &&
                <input row={props.row} id={props.id_} defaultValue={value} data-id={props.row}
                       data-extract-identifier={props.extract_identifier} className={cl}
                       name={name} onBlur={props.handleInput.bind(this, props)}
                       data-tip={msg} style={styles.tdStyle}
                />
                }
                { props.samples[parseInt(props.id_)]["new_sample"] && name.match(/sample_id|extract_id|submission_id|submission_type|submitter_name|submission_date/g) &&
                <span row={props.row} id={props.id_} data-id={props.row}>{value}</span>
                }
                { props.samples[parseInt(props.id_)]["new_sample"] &&  !name.match(/sample_id|extract_id|submission_id|submission_type|submitter_name|submission_date/g) &&
                <input row={props.row} id={props.id_} defaultValue={value} data-id={props.row}
                       data-extract-identifier={props.extract_identifier} className={cl}
                       name={name} onBlur={props.handleInput.bind(this, props)}
                       data-tip={msg} style={styles.tdStyle}
                />
                }
                < ReactTooltip offset={{top: 25, left: 10}}/>

            </div>
        )
    }
    else {
        var value = toTitleCase(props.value.split("_").join(" "))
        value = value.toString().split("_").join(" ")
        if (value === "Volume") value = 'Volume (\u00B5l)';
        if (value == "Concentration") value = 'Concentration (ng/\u00B5l)';
        if (value == "Submission Id") value = "Submission ID"
        if (value == "Submission Time Id") value = "Submission ID"
        if (value == "Center Name") value = "Contributing Institution"
        if (value == "Sequencing Study Identifier") value = "Seq. Study Id." + " (optional)"

        return (
            <span id={props.row}>{value} </span>
        )
    }
}


export default RequestDataTransposedTable
