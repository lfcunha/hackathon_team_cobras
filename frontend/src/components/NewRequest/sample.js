/**
 * Created by luiscunha on 3/23/16.
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import moment from 'moment'
import "./style.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';


var handleClick = function (props) {
    console.log(1, props.name);
}

const getHeaders = (props) => {
    return props.headers || [];
}


const removeCell = () => {
    "use strict";
    return (
        <i className="material-icons">backspace</i>
    )
}

const getCell = (data, col) => {
    "use strict";
    return <span>{data[col]}</span>
}

const dpccSampleTable = (props) => {
    var headers = getHeaders(props);
    var isFetching = props.dpccSamples.fetching;
    var data = props.dpccSamples.samples; //getData(props);
    var extractsCount = props.extractsCount || false
    if (!(data instanceof Array && data.length > 0)) {
        data = Array();
    }

    var removeSample = props.removeSample;

    const styles = {
        button: {
            margin: 15,
        },
        tableStyle: {
            /*border: "solid",
            borderWidth: "0px",
            fontSize: 14,
            */
        },
        tdStyle: {
            fontSize: "1em"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            /*fontSize: "0.5em"*/
        },
        inputNumber: {
            /*fontSize: 14 + "px !important"*/
        },
        grid: {
            width: 20 + "%"
        },
        gridCenter: {
            margin: "auto",
            width: 60 + "%",
            padding: 10
        },
        swtflexbox: {
            display: "flex"
        }

    }

    const _handleReviewJobList = function (props, e) {
        e.preventDefault();
        //call action to setUp augment store with second table columns;
        //hashHistory.push('/results')
        //props.push("/results")
        props.redirectToReviewTable(props.dpccSamples.samples);
        //props.augmentStore(state)
        //Link redirect to second table component
    }

    /*
     * modal prompt to reset dpccSamples > sample store
     */
    var Modal = React.createClass({
        displayName: 'Modal',
        backdrop: function() {
            return <div className='modal-backdrop in' />;
        },

        modal: function() {
            var style = {display: 'block'};
            return (
                <div
                    className='modal in'
                    tabIndex='-1'
                    role='dialog'
                    aria-hidden='false'
                    ref='modal'
                    style={style}
                >
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        },

        render: function() {
            return (
                <div>
                    {this.backdrop()}
                    {this.modal()}
                </div>
            );
        }
    });

    var Confirm = React.createClass({
        displayName: 'Confirm',
        getDefaultProps: function() {
            return {
                confirmLabel: 'OK',
                abortLabel: 'Cancel'
            };
        },

        abort: function() {
            return this.promise.reject();
        },

        confirm: function() {
            return this.promise.resolve();
        },


        render: function() {
            this.promise = new $.Deferred();
            var modalBody;
            if (this.props.description) {
                modalBody = (
                    <div className='modal-body'>
                        {this.props.description}
                    </div>
                );
            }

            return (
                <Modal>
                    <div className='modal-header'>
                        <h4 className='modal-title'>
                            {this.props.message}
                        </h4>
                    </div>
                    {modalBody}
                    <div className='modal-footer'>
                        <div className='text-right'>
                            <button
                                role='abort'
                                type='button'
                                className='btn btn-default'
                                onClick={this.abort}
                            >
                                {this.props.abortLabel}
                            </button>
                            {' '}
                            <button
                                role='confirm'
                                type='button'
                                className='btn btn-primary'
                                ref='confirm'
                                onClick={this.confirm}
                            >
                                {this.props.confirmLabel}
                            </button>
                        </div>
                    </div>
                </Modal>
            );
        }
    });

    var confirm = function(message, options) {
        var cleanup, component, props, wrapper;
        if (options == null) {
            options = {};
        }
        props = $.extend({
            message: message
        }, options);
        wrapper = document.body.appendChild(document.createElement('div'));
        component = render(<Confirm {...props}/>, wrapper);
        cleanup = function() {
            unmountComponentAtNode(wrapper);
            return setTimeout(function() {
                return wrapper.remove();
            });
        };
        return component.promise.always(cleanup).promise();
    };

    const _handleResetJobList = function () {

        //call action to setUp augment store with second table columns;
        //hashHistory.push('/results')
        //props.push("/results")
        return confirm('Are you sure?', {
            description: 'Would you like to remove this item from the list?',
            confirmLabel: 'Yes',
            abortLabel: 'No'
        }).then((function(_this) {
            return function() {
                props.resetJobList();
                return $(_this).parent().remove();
            };
        })(this));
    }

    function* entries(obj) {
        for (let key of Object.keys(obj)) {
            yield [key, obj[key]];
        }
    }

    var IDs = []
    return (
        <div>

            <div id="table" className="" style={styles.divStyle}>
                    <table className="table table-hover table-bordered" style={styles.tableStyle}>
                        <thead>
                        <tr>
                            {headers.map(function (title, idx) {
                                return <th className="text-nowrap" key={idx}>{title}</th>
                            })}
                        </tr>
                        </thead>

                        <tbody style={styles.tdStyle}>
                        {
                            data.map(function (_row, idx) {
                                var o = Object.keys(_row)[0]
                                var s = _row[o].sample
                                var _id = _row.id
                                //s.unshift({"sample_identifier":s["sample_identifier"], "id":_id})

                                delete _row["id"]
                                var count = 0;
                                var outerIDX = idx
                                var _display = _row[o].display;
                                return s.map(function (row, idx) {
                                    "use strict";
                                    var _outerIDX = outerIDX
                                    var number_extracts;
                                    try {
                                        number_extracts = row.number_extracts.toString()
                                    }
                                    catch (err) {
                                        number_extracts = "0"
                                    }
                                    var display = _display;
                                    if (row.header) {
                                        return (
                                            <CellSampleId row={row} outerIDX={_outerIDX} display={display}
                                                          toggleSamples={props.toggleSamples} key={idx} idx={idx}
                                                          numberExtracts={number_extracts}
                                                          removeSample={removeSample}
                                            />
                                        )
                                    }
                                    else {
                                        if (display) {
                                            return (
                                                <CellGroup row={row} key={idx} idx={idx}
                                                           numberExtracts={number_extracts}
                                                           handleExtractCount={props.handleExtractCount}/>
                                            )
                                        }
                                    }

                                })

                            }) //data.map

                        }
                        </tbody>


                    </table>
            </div>
            { (!isFetching && data.length != 0 && extractsCount) &&
            <div className="swtflexbox">
                <div className="item removable">
                    < RaisedButton
                        secondary={true}
                        label="reset"
                        style={styles.button}
                        onClick={_handleResetJobList}
                    />
                </div>
                <div className="item">
                    < RaisedButton
                        default={true}
                        label="Provide Extract Information"
                        style={styles.button}
                        onClick={_handleReviewJobList.bind(this, props)}
                    />
                </div>
            </div>
            }

            { (!isFetching && data.length != 0 && !extractsCount) &&
            <div className="swtflexbox">
                <div className="item removable">
                    < RaisedButton
                        secondary={true}
                        label="reset"
                        style={styles.button}
                        onClick={_handleResetJobList}
                    />
                </div>
                <div className="item">
                    < RaisedButton
                        default={true}
                        label="Provide Extract Information"
                        style={styles.button}
                        disabled={true}
                    />
                </div>
            </div>
            }

            { (isFetching || data.length === 0 ) &&
            <div className="swtflexbox">
                <div className="item">
                    < RaisedButton
                        secondary={true}
                        label="Reset"
                        style={styles.button}
                        disabled={true}
                    />
                </div>
                <div className="item">
                    < RaisedButton
                        default={true}
                        label="Provide Extract Information"
                        style={styles.button}
                        disabled={true}
                    />
                </div>
            </div>
            }

        </div>
    )
}

const textcell = (data, col) => {
    "use strict";
    try {
        if (col == "submission_time_id") {
            return (<span>{moment(data["submission_date"]).format('L')}</span>)
        }
        else {
            return (<span>{data[col].toString()}</span>)
        }
    }
    catch (err) {
        return (<span></span>)
    }
}

const CellGroup = (props) => {
    "use strict";
    const styles = {
        button: {
            marginTop: 0 + 'px !important',
            marginLeft: 40 + "%"
        },
        tableStyle: {
            border: "solid",
            borderWidth: "0px"
        },
        tdStyle: {
            fontSize: "1em"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            fontSize: "0.5em"
        },
        inputNumber: {
            fontSize: 14 + "px !important"
        }

    }
    return (

        <tr>
            <td>
            </td>
            <td>

            </td>
            <td>
                {textcell(props.row, "submission_type")}
            </td>
            <td>
                {textcell(props.row, "submission_id")}
            </td>
            <td>
                {textcell(props.row, "submitter_name")}
            </td>
            <td>
                {textcell(props.row, "submission_time_id")}
            </td>
            <td>
                {textcell(props.row, "project_identifier")}
            </td>
            <td>
                {textcell(props.row, "center_name")}
            </td>
            <td>
                <input type="number" name="extract_count" id={props.row["id"]} data-id={props.idx} value={props.numberExtracts}
                       min="0" max="50" className="form-control numberInput"
                       onChange={props.handleExtractCount.bind(this, props.row.sample_id)}/>
            </td>

        </tr>
    )
}


const CellSampleId = (props) => {
    "use strict";

    const styles = {
        button: {
            marginTop: 0 + 'px !important',
            marginLeft: 40 + "%"
        },
        tableStyle: {
            border: "solid",
            borderWidth: "0px"
        },
        tdStyle: {
            fontSize: "1em"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            fontSize: "0.5em"
        },
        inputNumber: {
            fontSize: 14 + "px !important"
        },
        iconStyles: {
            marginLeft: 15,
        }


    }

    var display;
    if (props.display) {
        display = "keyboard_arrow_up"
    }
    else {
        display = "keyboard_arrow_down"
    }
    return (
        <tr>
            <td style={styles.tdCenter} onClick={() => props.removeSample(props.outerIDX)}>
                {removeCell()}
            </td>
            <td className="text-nowrap">
                <div>{textcell(props.row, "sample_identifier")} <FontIcon className="material-icons" id="toggleSamples"
                                                                          hoverColor={blue500}
                                                                          onClick={props.toggleSamples.bind(this, props.row.sample_identifier)}
                                                                          style={styles.iconStyles}>{display}</FontIcon >
                </div>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
    )
}

export default dpccSampleTable
