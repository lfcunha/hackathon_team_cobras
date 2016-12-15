/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import Title from "../PageTitle"
import MapView from './mapView'

const Map = (props) => {
    return (
        <div>
            <Title title="Violations map" />
            <MapView {...props} />
        </div>
    )
}

export default Map