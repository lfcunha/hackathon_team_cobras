/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {toTitleCase} from "../../utils/utils"


const style = {
    marginLeft: 20,
    fontSize: 14 + "px !important"
};

export const Requester = (props) => {
    "use strict";

    const styles = {
        button: {
            marginLeft: 30
        },
        tableStyle: {
            /*border: "solid",
            borderWidth: "2px",
            borderColor: "#f00",*/
            padding: "2px",
            margin: "0 auto",
            fontSize: "18 !important",
            maxWidth:600,
        },
        tdStyle: {
            fontSize: "1em"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            marginBottom: 50,
            marginTop: 30,
            fontSize: 18,
            borderColor: "#f00",
            maxWidth:600,

        },
        requester: {
            margin: "0 auto",
            /*fontSize: 18,*/
            textAlign: "center"
        }

    }
    let columns = props.columns
    let user = props.user
    //<TextField hintText={t} style={style} underlineShow={false} disabled/>
    return (
        <div>
            <div style={styles.requester}>
                <div style={{marginBottom: 30}}>
                    <div style={{padding: "5px 0px 10px 10px"}}><h5>Please verify your contact
                        information below</h5></div>
                    <div style={{padding: "5px 0px 10px 10px"}}><h5>If you contact information is
                        incorrect, please update
                        your profile information under My
                        Account.</h5></div>

                </div>
            </div>
            <div>
                <div id="requesterInfoTable" className="" style={styles.tableStyle}>
                    <form>
                    <table className="table table-striped table-bordered table-responsive">
                        <tbody>
                    {
                        columns.map((column, idx) => {
                            var _data = user;
                            return (
                                <tr key={idx}>
                                    <Column row={-1} name={column} value={column}/>
                                    <Column row={1} addAttribute={props.addAttribute} handleInput={props.handleInput}
                                            name={column} value={_data[column]}/>
                                </tr>
                            )
                            return (
                                <div key={idx} >
                                    <Paper zDepth={2} style={{fontSize: "18px !important"}}>
                                        <TextField hintText={t} value={t} style={{fontSize: "18px !important", marginLeft: 20, maxWith: 400, width: "100%"}}
                                                   underlineShow={false}/>
                                        <Divider />
                                    </Paper>
                                </div>
                            )
                        })
                    }
                        </tbody></table></form>
                </div>
                <div className="swtflexbox" style={{marginTop: 30}}>
                    <RaisedButton
                        default={true}
                        label="< Back"
                        style={styles.button}
                        onClick={props.redirectBack}
                    />
                    <RaisedButton
                        default={true}
                        label="Select Sequencing Facility"
                        style={styles.button}
                        onClick={props.assignSequencingFacility.bind(this, props.user.zipcode, props.samples)}
                    />
                </div>
            </div>
        </div>

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
            case 'state_province':
                var options = ["Alabama"
                    ,"Alaska"
                    ,"Arizona"
                    ,"Arkansas"
                    ,"California"
                    ,"Colorado"
                    ,"Connecticut"
                    ,"Delaware"
                    ,"Florida"
                    ,"Georgia"
                    ,"Hawaii"
                    ,"Idaho"
                    ,"Illinois", "Indiana"
                    ,"Iowa"
                    ,"Kansas"
                    ,"Kentucky"
                    ,"Louisiana"
                    ,"Maine"
                    ,"Maryland"
                    ,"Massachusetts"
                    ,"Michigan"
                    ,"Minnesota"
                    ,"Mississippi"
                    ,"Missouri"
                    ,"Montana", "Nebraska"
                    ,"Nevada"
                    ,"New Hampshire"
                    ,"New Jersey"
                    ,"New Mexico"
                    ,"New York"
                    ,"North Carolina"
                    ,"North Dakota"
                    ,"Ohio"
                    ,"Oklahoma"
                    ,"Oregon"
                    ,"Pennsylvania","Rhode Island"
                    ,"South Carolina"
                    ,"South Dakota"
                    ,"Tennessee"
                    ,"Texas"
                    ,"Utah"
                    ,"Vermont"
                    ,"Virginia"
                    ,"Washington"
                    ,"West Virginia"
                    ,"Wisconsin"
                    ,"Wyoming"]
                return (
                    <td style={{maxWidth:100}}>
                        <SelectCell options={options} {...props} />
                    </td>
                )
            case 'country':
                var options = ["USA"]
                return (
                    <td style={{maxWidth:100}}>
                        <SelectCell options={options} {...props} />
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



const Cell = (props) => {

    "use strict";
    var cl = "form-control"
    if (props.row != -1) {
        var value = props.value;
        var name = props.name;
        if (name == "email" && value.length > 0){
            var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if (!email_regex.test(props.value)) {
                cl += " error"
            }

        }

        return (
            <div>
                <input row={props.row} defaultValue={value}
                        className={cl} name={name} onBlur={props.handleInput.bind(this, props)}
                       style={styles.tdStyle} required autoComplete="off"
                />
            </div>
        )
    }
    else {
        var name = props.name
        if (name === "state_province") value = 'State/Province';
        else if (name == "zipcode") value = 'Zip/Postal Code';
        else {
            var value = toTitleCase(props.name.split("_").join(" "))
            value = value.toString().split("_").join(" ")
        }


        return (
            <span id={props.row}>{value} </span>
        )
    }
}

const SelectCell = (props) => {
    "use strict";

    var cl = "form-control"
    return (
        <select className={cl} name={props.name} defaultValue={props.value || 0}
                onChange={props.handleInput.bind(this, props)} style={styles.tdStyle}>
            <option value={0} disabled>N/A</option>
            {props.options.map((option, idx) => {
                return (
                    <option value={option} key={idx}>{option}</option>
                )
            })}
        </select>
    )
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
        fontSize: "18px !important",
        width: 100 + "%"
    },
    divStyle: {
        //background: "#eee",
        padding: "2px",
        margin: "2px",
        fontSize: "0.5em",
        borderColor: "#f00"
    }
}