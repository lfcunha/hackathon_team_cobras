/**
 * Created by luiscunha on 8/25/16.
 */


import React from 'react';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {blue500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
    marginRight: 5,
    marginTop: "20%",
    position: "relative !important"
};

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
);

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,

    },
    flexbox: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        height: 150,
        overflowY: "auto",
        width: "100%",
        textAlign: "left"
    },

    filters: {
        border: "1px solid",
        borderColor: "#ccc",
        overflow: 'hidden',
        maxWidth:200


    },
    toggle: {
        marginBottom: 16,
        marginTop: "20%",
        fontWeight: "100 !important",
        overflow: 'hidden',
        color: 'rgb(11, 27, 222)'
    },
    checkbox: {
        marginBottom: 2,
    },
};

const FilterAndSearch = (props) => {
    "use strict";

    var {requestNumbers, requesters, statuses, showCompletedRequests} = props

    var _requesters = $.map(requesters, function (value, index) {
        return [index];
    })
    var _requestNumbers = $.map(requestNumbers, function (value, name) {
        return [name];
    })
    var _statuses = $.map(statuses, function (value, name) {
        console.log(name, value)
        return [name];
    })


    return (
        <div id="filterAndSearch" style={{margin: "20px 0px 20px 0px"}}>

            <div id="filterAndSearchFlex">

                <div id="Requester" style={styles.filters}>
                    <table className="table" style={{marginBottom:0}}>
                        <thead className="thead-inverse">
                        <tr>
                            <th>Requester</th>
                        </tr>
                        </thead>
                    </table>
                    <table className="table" style={{width: "100%", whiteSpace: "nowrap"}}>
                        <tbody>
                        <tr>
                            <td style={{border: 0, marginTop:"0px !important", paddingTop:"0px !important"}}>
                                <div className="swtflexbox" style={{align: "center"}}>
                                    <div className="btn-group" data-toggle="buttons" style={styles.flexbox}>
                                        {
                                            _requesters.map((x, idx) => {
                                                return (
                                                    <Checkbox
                                                        key={idx}
                                                        label={x}
                                                        style={styles.checkbox}
                                                        labelStyle={{fontWeight: "normal"}}
                                                        checked={requesters[x]}
                                                        onCheck={props.filterExtracts.bind(this, "requesters", x)}
                                                    />
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div id="RequesterNumber" style={styles.filters}>
                    <table className="table"  style={{marginBottom:0}}>
                        <thead className="thead-inverse">
                        <tr>
                            <th>Requester Number</th>
                        </tr>
                        </thead>
                    </table>
                    <table className="table" style={{width: "100%", whiteSpace: "nowrap"}}>
                        <tbody>
                        <tr>
                            <td style={{border: 0}}>
                                <div className="swtflexbox">
                                    <div className="btn-group" data-toggle="buttons" style={styles.flexbox}>
                                        {
                                            _requestNumbers.map((x, idx) => {
                                                return (
                                                    <Checkbox
                                                        key={idx}
                                                        label={x}
                                                        style={styles.checkbox}
                                                        labelStyle={{fontWeight: "normal"}}
                                                        checked={requestNumbers[x]}
                                                        onCheck={props.filterExtracts.bind(this, "requestNumbers", x)}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div id="Status" style={styles.filters}>
                    <table className="table"  style={{marginBottom:0}}>
                        <thead className="thead-inverse">
                        <tr>
                            <th>Status</th>
                        </tr>
                        </thead>
                    </table>
                    <table className="table" style={{width: "100%", whiteSpace: "nowrap"}}>
                        <tbody>
                        <tr>
                            <td style={{border: 0}}>
                                <div className="swtflexbox">
                                    <div className="btn-group" data-toggle="buttons" style={styles.flexbox}>
                                        {
                                            _statuses.map((x, idx) => {
                                                return (
                                                    <Checkbox
                                                        key={idx}
                                                        label={x}
                                                        style={styles.checkbox}
                                                        labelStyle={{fontWeight: "normal"}}
                                                        checked={statuses[x]}
                                                        onCheck={props.filterExtracts.bind(this, "statuses", x)}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div style={{
                    marginLeft: 1,
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "#ccc",
                    padding: "10px 10px 10px 10px",
                    maxWidth:200,
                    wordWrap: "break-word",
                    whiteSpace: 'normal'
                }}>
                    <Toggle
                        label="Show Completed Requests"
                        defaultToggled={showCompletedRequests}
                        labelPosition="right"
                        style={styles.toggle}
                        labelStyle={{fontWeight: "normal"}}
                        onToggle={props.filterExtracts.bind(this, "showCompletedRequests", "showCompletedRequests")}
                    />
                    <div >
                        <div>

                            <HomeIcon style={iconStyles} color={blue500} hoverColor={greenA200}
                                      onClick={props.doSearchClick}/>
                            <TextField
                                hintText="Type and press enter to search"
                                id="Search"
                                floatingLabelText="Search"
                                onKeyDown={props.doSearch}
                                style={{width: "80%"}}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default FilterAndSearch