/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import {toTitleCase} from "../../utils/utils"
import moment from 'moment'
import {FacilitySelection} from './FacilitySelection'

const styles = {
    button: {
        margin: 15
    },
    tableStyle: {
        border: "solid",
        borderWidth: "2px"
    },
    tdStyle: {
        fontSize: "1em",
        width: 100 + "%"
    },
    divStyle: {
        padding: "2px",
        margin: "2px",
        borderColor: "#f00"
    },
    spanStyle: {
        padding: "15px 0px 15px 30px",
    },
    capacityStyle: {
        padding: "15px 0px 15px 20px",
    },
    toggle: {
        marginBottom: 16,
        fontWeight: "100 !important",
    },
    checkbox: {
        marginBottom: 1,
        maxWidth: 150
    },
    menuTitle: {
        marginTop: "10px 0px 0px 0px",
        padding: "5px 0px 5px 10px",
        fontWeight: 500,
    },
    itemStyle: {
        padding: "5px 0px 1px 30px",
    },
    itemCapacityStyle: {
        padding: "17px 0px 1px 30px",
    },
    block: {
        padding: "35px 0px 1px 1px",
    },
    customWidth: {
        width: 200,
    },
    flexbox: {
        marginTop: 20,
        display: "flex",
        display: "-ms-flexbox",
        display: "-webkit-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '30px'
    }
}

export const FacilityManagementWindow = (props) => {
    "use strict";
    //console.error(props.data.propagate_month_to_month)

    let my_instruments = props.data.my_instruments
    let propagate_month_to_month = props.data.propagate_month_to_month


    var capacityOptions = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]
    var toggle = Boolean(parseInt(props.data.propagate_month_to_month));

    var Illumina;
    var Ion_Torrent;
    var PacBio;

    try {
        Illumina = my_instruments.Illumina
    }
    catch (err) {
        Illumina = null;
    }
    try {
        Ion_Torrent = my_instruments["Ion Torrent"]
    }
    catch (err) {
        Ion_Torrent = null;
    }
    try {
        PacBio = my_instruments.PacBio
    }
    catch (err) {
        PacBio = null;
    }


    return (
        <div style={styles.flexbox}>
            <div style={styles.requester}>
                <div style={{border: "1px solid", borderColor: "#ccc"}}>
                    <FacilitySelection {...props}/>

                    <div style={styles.block}>
                        <span style={styles.menuTitle}><strong>Capacity:</strong></span>

                        <div className="flexbox-container" style={{width: "100%"}}>
                            <div style={styles.itemCapacityStyle}>My Total Capacity for the current month
                                ({moment().format("MMM YYYY")}) is:
                            </div>

                            <div style={[{maxWidth: 150}, styles.itemStyle]}>
                                <SelectCell options={capacityOptions} {...props} name="capacityTotal"
                                            cap={props.data.current_capacity}/>
                            </div>
                        </div>
                    </div>

                    <div style={styles.itemStyle}>
                        <Toggle
                            label="Propagate my Total Capacity from month to month"
                            defaultToggled={toggle}
                            labelPosition="right"
                            style={styles.toggle}
                            labelStyle={{fontWeight: "normal"}}
                            onToggle={props.toggle_propagation_month_to_month.bind(this, props.myCurrentFacility, propagate_month_to_month)}
                        />
                    </div>

                    <div style={styles.itemStyle}>
                        Total samples currently assigned: <span
                        style={{textDecoration: "underline"}}>{props.data.usage_count}</span>
                    </div>

                    <div style={styles.block}>
                        <span style={styles.menuTitle}><strong>Operational Instruments:</strong></span>
                        <div className="flexbox-container">
                            <div style={styles.itemStyle}>
                                <Checkbox
                                    label="Illumina"
                                    style={styles.checkbox}
                                    labelStyle={{fontWeight: "normal"}}
                                    checked={Illumina || false}
                                    onCheck={props.instrumentChange.bind(this, props.myCurrentFacility, "Illumina")}
                                />
                            </div>
                            <div style={styles.itemStyle}>
                                <Checkbox
                                    label="Ion Torrent"
                                    style={styles.checkbox}
                                    labelStyle={{fontWeight: "normal"}}
                                    checked={Ion_Torrent || false}
                                    onCheck={props.instrumentChange.bind(this, props.myCurrentFacility, "Ion Torrent")}
                                />
                            </div>
                            <div style={styles.itemStyle}>
                                <Checkbox
                                    label="PacBio"
                                    style={styles.checkbox}
                                    labelStyle={{fontWeight: "normal"}}
                                    checked={PacBio || false}
                                    onCheck={props.instrumentChange.bind(this, props.myCurrentFacility, "PacBio")}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={styles.block}>
                        <span style={styles.menuTitle}><strong>Contact:</strong></span>
                        <div style={styles.itemStyle}>
                            <table className="table" style={{textAlign: 'left'}}>
                                <thead></thead>
                                <tbody>
                                <tr>
                                    <td style={{border: "None", paddingLeft:"0px"}}>Name: <span
                                        style={{textDecoration: "underline"}}> {props.data.name}</span></td>
                                    <td style={{border: "None"}}>Street Address: <span
                                        style={{textDecoration: "underline"}}>{props.data.address}</span></td>
                                </tr>
                                <tr>
                                    <td style={{border: "None", paddingLeft:"0px"}}>Institution: <span
                                        style={{textDecoration: "underline"}}>{props.data.institution}</span></td>
                                    <td style={{border: "None"}}>City: <span
                                        style={{textDecoration: "underline"}}>{props.data.city}</span></td>
                                </tr>
                                <tr>
                                    <td style={{border: "None", paddingLeft:"0px"}}>Daytime Phone: <span
                                        style={{textDecoration: "underline"}}>{props.data.phone}</span></td>
                                    <td style={{border: "None"}}>State/Province: <span
                                        style={{textDecoration: "underline"}}>{props.data.state}</span></td>
                                </tr>
                                <tr>
                                    <td style={{border: "None", paddingLeft:"0px"}}>Email: <span
                                        style={{textDecoration: "underline"}}>{props.data.email}</span></td>
                                    <td style={{border: "None"}}>Zip/Postal Code: <span
                                        style={{textDecoration: "underline"}}>{props.data.zip}</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}


const SelectCell = (props) => {
    "use strict";
    var cl = "";
    cl += " form-control"

    var cap = props.cap
    return (
        <select className={cl} id={props.id_} name={props.name} value={parseInt(cap)}
                onChange={props.capacityChange.bind(this, props.myCurrentFacility)}>
            {props.options.map((option, idx) => {
                return (
                    <option value={option} key={idx}>{option}</option>
                )
            })}
        </select>
    )
}