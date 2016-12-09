/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import RequesterInformation from "../../components/RequesterInformation"

const RequesterInformationContainer = (props) => {
    return (
        <div>
            <RequesterInformation {...props} />
        </div>
    )
}

export default RequesterInformationContainer