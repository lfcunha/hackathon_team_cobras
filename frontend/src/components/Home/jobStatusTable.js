/**
 * Created by luiscunha on 6/3/16.
 */

import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import ReactPaginate from 'react-paginate';
import Checkbox from 'material-ui/Checkbox';
var ReactTooltip = require("react-tooltip")
import {blue500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

const styles = {
    active: {
        color:blue500,
        float: "left"
    },
    inactive: {
        float: "left"
    }
}

const JobStatusTable = (props) => {
    if (typeof(props.extracts) != "undefined") {
        var _extracts = props.extracts
    }
    else {
        var _extracts = []
    }

    if (typeof(props.requesters) != "undefined") {
        var flag_requesters = false
        $.map(props.requesters, function (val, key) {
            if (val == true) flag_requesters = true
        })

        var flag_requestNumbers = false
        $.map(props.requestNumbers, function (x, y) {
            if (x == true) flag_requestNumbers = true
        })

        var flag_statuses = false
        $.map(props.statuses, function (x, y) {
            if (x == true) flag_statuses = true
        })

        if (flag_requesters == true || flag_requestNumbers == true ||
            flag_statuses == true || props.searchFilter != "") {

            if (flag_requestNumbers == true) {
                var extracts_01 = _extracts.filter(function (x) {
                    return (props.requestNumbers[x.extract_id.split("_")[0]] == true)
                })
            }
            else var extracts_01 = _extracts

            if (flag_requesters == true) {
                var extracts_02 = extracts_01.filter(function (x) {
                    return (props.requesters[x.requester] == true)
                })
            }
            else var extracts_02 = extracts_01

            if (flag_statuses == true) {
                var extracts_03 = extracts_02.filter(function (x) {
                    return (props.statuses[x.status] == true)
                })
            }
            else var extracts_03 = extracts_02

            if (props.searchFilter != "") {
                var extracts_04 = extracts_03.filter(function (x) {
                    return ( (x.extract_id == props.searchFilter) ||
                        (x.extract_id == props.searchFilter.replace(/-/g, '_')) ||
                        (x.digs == props.searchFilter)
                    )
                })
            }
            else var extracts_04 = extracts_03

            if (props.showCompletedRequests == false) {
                var extracts = extracts_04.filter(function (x) {
                    return x["status"] != "Completed"
                })
            }
            else var extracts = extracts_04
        }
        else if (props.showCompletedRequests == false) {
            var extracts = _extracts.filter(function (x) {
                return x["status"] != "Completed"
            });
        }
        else {
            var extracts = _extracts;
        }
    }
    else {var extracts = _extracts;}

    var columns = props.common_columns || []

    var sort_arrow = {"1": "keyboard_arrow_up", "-1": "keyboard_arrow_down"}
    var core = props.core
    var {selectPage} = props
    var page = props.page || 0;
    var rowPerPage = 10;
    try {
        var totalSamples = extracts.length;
    }
    catch (err){
        var totalSamples = 1;
    }

    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    {!props.fetching && <th data-tip="Change status on all selected rows">Select</th>}
                    {
                        columns.map((column, index) => {
                            return <th style= {{marginTop:0}} key={index} onClick={props.sort.bind(this, column.name)}>
                                <p style={{display:"inline"}}>
                                <i className="material-icons" style={styles[column.active]}>
                                                {column.asc && sort_arrow["1"]} {!column.asc && sort_arrow["-1"]}
                                        </i>
                                        {column.name}
                                </p>
                                    </th>

                        })
                    }
                    {!core && !props.fetching && <th>Results</th>}
                </tr>
                </thead>
                <tbody>
                {
                    extracts.map((row, index) => {
                        var editingStatus;
                        if (row.editingStatus == undefined) {editingStatus = false}
                        else editingStatus = row.editingStatus
                        if (index >= ((page -1 )*rowPerPage ) && index < ((page - 1)*rowPerPage + rowPerPage )) {
                            return (
                                <Row key={index} core={core} extracts={row} edit={props.edit} row={index}
                                     handleInput={props.handleInput} setStatus={props.setStatus}
                                     extract_row_id={row.id}
                                     editingStatus={editingStatus}
                                     check={props.check}
                                     allExtracts = {props.extracts}
                                />

                            )
                        }
                    })
                }
                </tbody>
            </table>
            {props.fetching &&
            <div className="swtflexboxVertical" style={{width:"100%"}}>
                <CircularProgress style={{width:100, marginTop: 0}}/>
                <br/>
                <span style={{width:100, marginTop: 0}}>Loading data...</span>
            </div>
            }

            <div style={{marginRight: 10, float:"right"}}>
            {!props.fetching &&
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<span>...</span>}
                               breakClassName={"break-me"}
                               pageNum={Math.ceil(totalSamples/rowPerPage)}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={4}
                               clickCallback={selectPage}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
            }
            </div>
            < ReactTooltip offset={{top: 25, left: 10}} />
        </div>

    )
}


const Row = (props) => {
    "use strict";
    var identifiers = props.extracts.extract_id.split("_");
    var request_id = identifiers[0]
    var sample_id =identifiers[0] + "-" + identifiers[1]
    var extract_id = identifiers[0] + "-" + identifiers[1] + "-" + identifiers[2]
    return (
        <tr>
            <td style={{textAlign: "center !important"}}>
                <Checkbox
                    key = {props.row}
                    label=""
                    style={{
                        marginBottom: 2,
                    }}
                    labelStyle={{fontWeight: "normal"}}
                    checked = {props.extracts.checked || false}
                    onCheck={props.check.bind(this, props.extract_row_id, props.row)}
                />
            </td>
            <Cell name="requester" value={props.extracts.requester}/>
            <Cell name="digs" value={props.extracts.digs}/>
            <Cell name="request_id" value={request_id}/>
            <Cell name="sample_id" value={sample_id}/>
            <Cell name="extract_id" value= {extract_id}/>
            {props.editingStatus && props.core && <SelectCell {...props}  />}

            {!props.editingStatus && props.core &&  <Editable name="status" value={props.extracts.status} edit={props.edit} row={props.row} extract_row_id={props.extract_row_id}/>}


            {!props.core &&  <Cell name="status" value={props.extracts.status}/>}


            {!props.core && <Cell name="results" identifier={extract_id}
                                  value ={props.extracts.results}/>}

        </tr>
    )
}

const iconStyles = {

};

const Cell = (props) => {
    "use strict";
    var value = props.value;
    var identifier = props.identifier +" Results"

    if (props.name == "results"){
        if (value != undefined) {
            if (value.length > 0) {
            return (
                <td style={{ textAlign: "center" }} name={props.name}>
                    <a href="http://www.niaidceirs.org/">
                        <FontIcon hoverColor="blue" className="material-icons" style={iconStyles}>
                            archive
                        </FontIcon>
                    </a>
                </td>
            )}
        }
        else {return (<td></td>)}
    }

    else {
        return (
            <td name={props.name} style={{wordWrap:"break-word", overflow: "hidden"}}>{value}</td>
        )
    }
}


const Editable = (props) => {
    "use strict";


    //
    return (
        <td name={props.name} style={{maxWidth:"250 !important"}}  onDoubleClick={props.edit.bind(this, props.extract_row_id, props.row)} >{props.value}  </td>
    )
}


const SelectCell = (props) => {

    var options = ["Requested",
        "Accepted",
        "Declined",
        "Shipped",
        "Received",
        "In Progress",
        "Failed-Samples Not Received",
        "Failed-Sample QC",
        "Failed-Sequencing/Assembly"];

    const styles = {
        aligner: {
            display: "flex",
            flexDirection: "column",   //alignItems: "center",
            justifyContent: 'center',
            height: "100%"
        },
        item: {

        }
    }

    return (

        <td style={styles.aligner}>
            <select  style={styles.item} className="form-control" id={props.extracts.id} name={"selectStatus"} defaultValue={props.row.status || 0}
                    onChange={props.handleInput.bind(this, props)}>
                <option value={0} disabled>Select Status...</option>
                {options.map((option, idx) => {
                    return (
                        <option value={option} key={idx}>{option}</option>
                    )
                })}
            </select>
        </td>
    )

}


export default JobStatusTable