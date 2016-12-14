/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import Title from "../PageTitle"
import mapView from './mapView'

const Map = (props) => {
    return (
        <div>
            <Title title="Violations map" />
            <span>{props.var1}</span>

            <mapView {...props} />
            <span>BBBB</span>
        </div>
    )
}

export default Map