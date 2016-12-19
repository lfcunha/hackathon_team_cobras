/**
 * Created by luiscunha on 6/3/16.
 */

import React from 'react';
import { GoogleMap, Marker, Polyline, GoogleMapLoader } from 'react-google-maps';

const MapView = (props) => {
    var {violations} = props
    console.log(violations)
    var markers_ = {"aug":[], "sept":[], "oct":[], "nov":[]}
    /*
     let keys = Object.keys(row[column]);
     var values = []
     keys.map((key, idx) => {
     if (row[column][key]) {
     values.push(key)
     }
    * */

    let months = Object.keys(markers_)

    months.map((m, v)=>{



    violations[m]
        .map((v, idx)=>{
            try {
                var loc = v.location.split(",")
                var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

                //console.log(loc)
                markers_[m].push({
                    position: {
                        lat: parseFloat((loc[0])), lng: parseFloat(loc[1].trim()),
                    },
                    key: String(idx),
                    defaultAnimation: 2,
                    icon: image

                })
            }
            catch(err){
                console.log("oops")
            }
        })
    })

    console.log(markers_)
    var mkrs
    var i = 0
    setInterval(()=>{mkrs=markers_[months[i]]; i++; if (i>4){i=0}; console.log()}, 2000)



    var {var1} = props
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
            height: "500px"
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

    var markers =  [{
        position: {
            lat: 40.7128,
            lng: -74.0059,
        },
        key: "m1",
        defaultAnimation: 2,
    },{
        position: {
            lat: 40.7128,
            lng: -73.9059,
        },
        key: "m2",
        defaultAnimation: 2,
    }]

    const defaultProps = {
        center: {lat: 40.7128, lng: -74.0059},
        zoom: 12,
        greatPlaceCoords: {lat: 40.7727, lng: -73.9855}
    };
    var flightPlanCoordinates = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
    ];

    return (
        <div className="map" style={{height:"500px"}}>
            <GoogleMapLoader
                containerElement={
                    <div
                        style={{
                            height: "1000px",
                        }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        bootstrapURLKeys={{key: "AIzaSyA6szITQ7ZDGeVtxZMQlJzoBpzRcNrN5jE"}}
                        defaultZoom={12}
                        defaultCenter={{lat: 40.7727, lng: -73.9855}}
                    >

                        {markers_["aug"].map((marker, index) => {
                            markers.push()
                            return (
                                <Marker
                                    {...marker}
                                    onRightclick={props.handleMarkerRightclick.bind(this, index)} />
                            );
                        })}
                        <Polyline
                            path = {flightPlanCoordinates}
                            geodesic = {true}
                            strokeWeight = {1}
                            options = {{"strokeWeight": 1,geodesic: true,
                                strokeColor: '#FF0000',
                                strokeOpacity: 1.0,}}
                        />
                    </GoogleMap>
                }
            />

        </div>
    )
}



export default MapView