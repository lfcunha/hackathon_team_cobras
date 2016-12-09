/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'

const Requester = (props) => {
    "use strict";

    let user = props.user;
    return (
        <div id="requesterInfo" style={{maxWidth:300, fontSize:18, border: "1px solid black"}}>
            <fieldset className="form-group" style={{marginLeft:10, marginRight:10}}>
                <legend>Requester:</legend>
                    <div id="requesterInfo">
                        {user.name} <br/>
                        {user.institution} <br/>
                        {user.street_address} <br/>
                        {user.city}, {user.state_province} {user.zipcode}<br/>
                    </div>
            </fieldset>
        </div>

    )
}


export default Requester;