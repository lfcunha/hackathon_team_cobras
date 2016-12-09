/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';

const ThankYouMessage = (props) => {
    "use strict";
    //console.log("PROPS", props)
    return (
        <div id="requesterInfo" style={{marginTop:50}}>
            <div style={{border:"1px solid", borderColor:"#ccc", padding:"10px 10px 10px 10px "}}>
            <span>Thank you for using the CEIRS Distributed Influenza Genomic Sequencing service!</span>
            <br/><br/>
            <span>Your sequencing request was received and assigned SWT_ID: R{props.requestID}. You will also receive a confirmation email.</span>
            <br/><br/>

            <span>You have requested that your samples be sequenced by the "{props.facility}".</span>
            <br/><br/>

            <span>A copy of your request was sent to the selected DIGS Core. They will confirm within 2 business days that they have the necessary capacity to accept your sequencing request.</span>
            <br/><br/>


            <span>Once you have received confirmation from the selected DIGS, please package your samples, include a copy of the shipping manifest, and ship to the address provided by the DIGS Core in their confirmation email.</span>
            <br/><br/>

            <span>Please package your samples, include a copy of the shipping manifests, and ship to the address provided for the selected DIGS.</span>
            <br/><br/><br/><br/>
            </div>
            <div className="swtflexbox" style={{marginTop: 30}}>
                <RaisedButton
                    default={true}
                    label="Back to SWT Home"
                    style={styles.button}
                    onClick={props.redirectHome}
                />
            </div>
        </div>

    )
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

export default ThankYouMessage;