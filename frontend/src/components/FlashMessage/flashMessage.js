/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react';


const FlashMessage = (props) => {
    "use strict";
    var divStyle = {
        //background: "#eee",
        padding: "20px",
        margin: "20px",
        fontSize: 14,
        marginTop:50
    };

    var fetchError = props.fetchError
    var status = props.status
    var flashMessage = props.flashMessage

    if (fetchError) {
        //if (status == 401){
            return (
                <div style={divStyle}>
                    <div className="alert alert-danger">
                        <strong>Error: {flashMessage}. If the problem persists contact the DPCC.<br/>
                        </strong>
                    </div>
                </div>
            )
        //}
    }
    return (<div></div>)
}


export default FlashMessage
