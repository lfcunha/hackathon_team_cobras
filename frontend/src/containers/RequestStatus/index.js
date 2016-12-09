/**
 * Created by luiscunha on 4/9/16.
 */


import React from 'react'

const RequestStatus = (props) => {
    return (
        <div style={{marginTop:100}}>
            <h1>Request Status</h1>
            <p>-Page at <b> {window.location.pathname} </b> is in construction.</p>
        </div>
    )
}

export default RequestStatus