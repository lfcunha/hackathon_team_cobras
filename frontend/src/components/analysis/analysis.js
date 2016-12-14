/**
 * Created by luiscunha on 3/23/16.
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import moment from 'moment'
import "./style.css"
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import GoogleMap from 'google-map-react';

const analysisView = (props) => {

    const styles = {
        button: {
            margin: 15,
        },
        tableStyle: {
            /*border: "solid",
            borderWidth: "0px",
            fontSize: 14,
            */
        },
        tdStyle: {
            fontSize: "1em"
        },
        divStyle: {
            //background: "#eee",
            padding: "2px",
            margin: "2px",
            /*fontSize: "0.5em"*/
        },
        inputNumber: {
            /*fontSize: 14 + "px !important"*/
        },
        grid: {
            width: 20 + "%"
        },
        gridCenter: {
            margin: "auto",
            width: 60 + "%",
            padding: 10
        },
        swtflexbox: {
            display: "flex"
        }

    }
    const defaultProps = {
        center: {lat: 40.7128, lng: -74.0059},
        zoom: 12,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    return (
        <div className="map" style={{height:"500px"}}>
                <GoogleMap
                    bootstrapURLKeys={{key: "AIzaSyA6szITQ7ZDGeVtxZMQlJzoBpzRcNrN5jE"}}
                    center={defaultProps.center}
                    zoom={defaultProps.zoom}
                    height={500}
                >


                </GoogleMap>
        </div>
    )
}


export default analysisView
