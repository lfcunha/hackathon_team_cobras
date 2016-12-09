/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    marginLeft: 20,
    fontSize: 14 + "px !important"
};

export const FacilitySelectionMenu = (props) => {
    "use strict";

    let {redirectBack} = props;
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
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            fontSize: "1em",
            borderColor: "#f00"
        }

    }
    //console.log("OOPS, no DIGS1")
    var _digs = [];
    try {
        _digs  = props.data.digs[1]
    }
    catch (err) {
        //console.log("OOPS, no _DIGS")
    }

    return (
        <div>

            <div style={{border: '0px solid black; margin-bottom:30px'}}>
                <div style={styles.requester}>
                    <div>
                        <div style={{padding: "5px 0px 10px 10px", fontSize: "18px !important"}}><strong>Considering your
                            requirements and the current capacity of the DIGS, the following facilities can
                            potentially perform your job request</strong></div>
                    </div>                </div>
            </div>
            <RadioCell {...props} />

            <div className="swtflexbox">
                <RaisedButton
                    default={true}
                    label="< Back"
                    style={{margin: 10}}
                    onClick={redirectBack}
                />
                { (_digs.length > 0) &&
                    <RaisedButton
                        default={true}
                        label="Confirm Facility selection"
                        style={{margin: 10}}
                        onClick={props.confirmFacilitySelection}
                    />
                }
                {(_digs.length < 1) &&
                    <RaisedButton
                        disabled={true}
                        default={true}
                        label="Confirm Facility selection"
                        style={{margin: 10}}
                        onClick={props.confirmFacilitySelection}
                    />}
            </div>







        </div>

    )
}

const RadioCell = (props) => {
    "use strict";
    /*
     No validation. UI shows No as default. Server must set this default if it has not been set in the redux store
     by the user by changing the choice
     */

    let DIGS = {
        "DIGS-1": "UT-Bahl DIGS Core",
        "DIGS-2": "Mt.Sinai-van Bakel DIGS Core",
        "DIGS-3": "UGA-Tripp DIGS Core",
        "DIGS-4": "UGA-Perez DIGS Core",
        "DIGS-5": "JHU-Thielen DIGS Core"
    }

    var digs_0;
    var digs_1;
    var digs_2;
    var digs_3;
    var digs_4;
    var digs_5;
    try {
        digs_1  = props.data.digs[1]
        if (digs_1.length == 0) digs_1 = null
    }
    catch (err) {
        //console.log("OOPS, no DIGS1")
        digs_1 = null
    }
    try {
        digs_2  = props.data.digs[2]
    }
    catch (err) {
        //console.log("OOPS, no DIGS2")
        digs_2 = null
    }
    try {
        digs_3  = props.data.digs[3]
    }
    catch (err) {
        //console.log("OOPS, no DIGS3")
        digs_3 = null
    }
    try {
        digs_4  = props.data.digs[4]
    }
    catch (err) {
        //console.log("OOPS, no DIGS4")
        digs_4 = null
    }
    try {
        digs_5  = props.data.digs[5]
    }
    catch (err) {
        //console.log("OOPS, no DIGS5")
        digs_5 = null
    }
    try {
        digs_0  = props.data.digs[0]
    }
    catch (err) {
        //console.log("OOPS, no DIGS0")
        digs_0 = null
    }


    var choice = props.data.choice || digs_1
    return (
        <div style={{fontSize: 18}}>

            {
                digs_1 &&
                <div>
                    <input type="radio" name={"digs-choice"} id={1} value={digs_1}
                           onChange={props.chooseFacility.bind(this, props)} checked={choice === digs_1} /> {DIGS[digs_1]}
                </div>

            }

            {digs_2 &&
            <div>
                <input type="radio" name={"digs-choice"} id={2} value={digs_2}
                       onChange={props.chooseFacility.bind(this, props)} checked={choice === digs_2} /> {DIGS[digs_2]}
            </div>
            }
            {digs_3 &&
            <div>
                <input type="radio" name={"digs-choice"} id={3} value={digs_3}
                       onChange={props.chooseFacility.bind(this, props)} checked={choice === digs_3}/> {DIGS[digs_3]}
            </div>
            }
            {digs_4 &&
            <div>
                <input type="radio" name={"digs-choice"} id={3} value={digs_4}
                       onChange={props.chooseFacility.bind(this, props)} checked={choice === digs_4}/> {DIGS[digs_4]}
            </div>
            }
            {digs_5 &&
            <div>
                <input type="radio" name={"digs-choice"} id={3} value={digs_5}
                       onChange={props.chooseFacility.bind(this, props)} checked={choice === digs_5}/> {DIGS[digs_5]}
            </div>
            }
            {digs_0 && digs_0.map(function(digs, index){
                return (
                    <div key={index}>
                        <input type="radio" name={"digs-choice"} id={0} value="0"
                               disabled/> <span
                        style={{color:"#D3D3D3"}}>{DIGS[digs]}</span>
                    </div>
                )
            })

            }

        </div>
    )
}
