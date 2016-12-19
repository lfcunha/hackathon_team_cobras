/**
 * Created by luiscunha on 6/3/16.
 */


import React from 'react';
import { GoogleMap, Marker, Polyline, GoogleMapLoader } from 'react-google-maps';


class VisibleMap extends Component {
    /**
        Because stateless components don't have access to lifecycle methods, I need to wrap it in a
        regular component. There is a need to add the map code to componentdidmount, because otherwise it doesn't find
        the dom node to add the map to.
     */

    componentDidMount() {
        google.maps.visualRefresh = true;
        var t = [
            {featureType: "poi", stylers: [
                {visibility: "off"}
            ]}
        ];
        var options = {disableDoubleClickZoom: true, zoom: 11, disableDefaultUI: true, mapTypeControl: false, zoomControl: false, styles: t,
            suppressInfoWindows: true, overviewMapControl: true, overviewMapControlOptions: {opened: false},
            streetViewControl: false, mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            options
        );
            var center = new google.maps.LatLng(40.7727, -73.9855);
            map.setCenter(center)

        var ecbs = [{"nyc_BIN": "1051337", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7768200,-73.9458010"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6636641,-73.9101565"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6636641,-73.9101565"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633680,-73.9096820"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6636641,-73.9101565"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633680,-73.9096820"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633680,-73.9096820"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6636641,-73.9101565"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633592,-73.9091584"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6634868,-73.9100171"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633592,-73.9091584"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6634868,-73.9100171"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633680,-73.9096820"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6636641,-73.9101565"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633592,-73.9091584"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6634868,-73.9100171"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633680,-73.9096820"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633592,-73.9091584"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6634868,-73.9100171"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6633592,-73.9091584"}, {"nyc_BIN": "3326506", "inspect_date": "2016-12-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6634868,-73.9100171"}, {"nyc_BIN": "1057092", "inspect_date": "2016-12-07", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7979070,-73.9721420"}, {"nyc_BIN": "1008378", "inspect_date": "2016-11-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7295056,-74.0036974"}, {"nyc_BIN": "1059959", "inspect_date": "2016-11-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8207550,-73.9551510"}, {"nyc_BIN": "1059959", "inspect_date": "2016-11-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8207550,-73.9551510"}, {"nyc_BIN": "1051391", "inspect_date": "2016-11-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7982502,-73.9523313"}, {"nyc_BIN": "1059959", "inspect_date": "2016-11-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8207550,-73.9551510"}, {"nyc_BIN": "1059959", "inspect_date": "2016-11-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8207550,-73.9551510"}, {"nyc_BIN": "3176092", "inspect_date": "2016-11-03", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6086854,-73.9680234"}, {"nyc_BIN": "1050258", "inspect_date": "2016-11-02", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7810634,-73.9469882"}, {"nyc_BIN": "3084963", "inspect_date": "2016-10-31", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6630490,-73.8977860"}, {"nyc_BIN": "3340607", "inspect_date": "2016-10-31", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6031731,-73.9423233"}, {"nyc_BIN": "3084963", "inspect_date": "2016-10-31", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6630490,-73.8977860"}, {"nyc_BIN": "1089797", "inspect_date": "2016-10-21", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8069960,-73.9426890"}, {"nyc_BIN": "3038672", "inspect_date": "2016-10-06", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6755020,-73.9190420"}, {"nyc_BIN": "1031999", "inspect_date": "2016-10-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7841828,-73.9772806"}, {"nyc_BIN": "1031999", "inspect_date": "2016-10-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7841828,-73.9772806"}, {"nyc_BIN": "1031999", "inspect_date": "2016-10-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7841828,-73.9772806"}, {"nyc_BIN": "1031999", "inspect_date": "2016-10-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7841828,-73.9772806"}, {"nyc_BIN": "3414036", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6833708,-73.9116588"}, {"nyc_BIN": "3414036", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6833708,-73.9116588"}, {"nyc_BIN": "1802206", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7385646,-73.9785253"}, {"nyc_BIN": "3327224", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6388532,-73.9446748"}, {"nyc_BIN": "1018061", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7402390,-73.9850193"}, {"nyc_BIN": "1802206", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7385646,-73.9785253"}, {"nyc_BIN": "3327224", "inspect_date": "2016-09-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6388532,-73.9446748"}, {"nyc_BIN": "3103189", "inspect_date": "2016-09-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6510440,-73.9219030"}, {"nyc_BIN": "3103189", "inspect_date": "2016-09-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6510440,-73.9219030"}, {"nyc_BIN": "1040136", "inspect_date": "2016-09-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7543380,-73.9647110"}, {"nyc_BIN": "1040136", "inspect_date": "2016-09-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7543380,-73.9647110"}, {"nyc_BIN": "3414181", "inspect_date": "2016-09-14", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5881339,-73.9723069"}, {"nyc_BIN": "3414180", "inspect_date": "2016-09-14", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5879059,-73.9722670"}, {"nyc_BIN": "3038672", "inspect_date": "2016-09-08", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6755020,-73.9190420"}, {"nyc_BIN": "1049970", "inspect_date": "2016-09-06", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7762760,-73.9506730"}, {"nyc_BIN": "3414048", "inspect_date": "2016-09-02", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6841420,-73.9126700"}, {"nyc_BIN": "3414048", "inspect_date": "2016-09-02", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6841420,-73.9126700"}, {"nyc_BIN": "3066739", "inspect_date": "2016-08-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7232717,-73.9495059"}, {"nyc_BIN": "3066739", "inspect_date": "2016-08-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7232717,-73.9495059"}, {"nyc_BIN": "1015468", "inspect_date": "2016-08-26", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7399802,-73.9930291"}, {"nyc_BIN": "1059317", "inspect_date": "2016-08-23", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8112970,-73.9519556"}, {"nyc_BIN": "1043872", "inspect_date": "2016-08-08", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7659484,-73.9632574"}, {"nyc_BIN": "1043872", "inspect_date": "2016-08-08", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7659484,-73.9632574"}, {"nyc_BIN": "1010325", "inspect_date": "2016-08-01", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7249358,-74.0104201"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "1087777", "inspect_date": "2016-07-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7664987,-73.9916144"}, {"nyc_BIN": "3030734", "inspect_date": "2016-07-25", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6754780,-73.9467750"}, {"nyc_BIN": "3030734", "inspect_date": "2016-07-25", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6754780,-73.9467750"}, {"nyc_BIN": "3398591", "inspect_date": "2016-07-25", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6818163,-73.9752930"}, {"nyc_BIN": "3038027", "inspect_date": "2016-07-19", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6659890,-73.9372500"}, {"nyc_BIN": "3038027", "inspect_date": "2016-07-19", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6659890,-73.9372500"}, {"nyc_BIN": "3038027", "inspect_date": "2016-07-19", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6659890,-73.9372500"}, {"nyc_BIN": "1008794", "inspect_date": "2016-07-18", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7290896,-73.9933917"}, {"nyc_BIN": "3057506", "inspect_date": "2016-07-06", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6848400,-73.9728480"}, {"nyc_BIN": "3057506", "inspect_date": "2016-07-06", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6848400,-73.9728480"}, {"nyc_BIN": "1015032", "inspect_date": "2016-07-01", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7462874,-73.9938704"}, {"nyc_BIN": "3107060", "inspect_date": "2016-06-24", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6606610,-73.9400210"}, {"nyc_BIN": "1024956", "inspect_date": "2016-06-24", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7587929,-73.9919843"}, {"nyc_BIN": "1057967", "inspect_date": "2016-06-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8111621,-73.9464437"}, {"nyc_BIN": "1040856", "inspect_date": "2016-06-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7647994,-73.9689259"}, {"nyc_BIN": "1040856", "inspect_date": "2016-06-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7647994,-73.9689259"}, {"nyc_BIN": "1077494", "inspect_date": "2016-06-21", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7226107,-73.9855972"}, {"nyc_BIN": "1005841", "inspect_date": "2016-06-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7264206,-73.9835487"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1024956", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7587929,-73.9919843"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1021900", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7444560,-73.9749507"}, {"nyc_BIN": "1021900", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7444560,-73.9749507"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "1089295", "inspect_date": "2016-06-10", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7411015,-74.0075316"}, {"nyc_BIN": "3327224", "inspect_date": "2016-05-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6388532,-73.9446748"}, {"nyc_BIN": "3327224", "inspect_date": "2016-05-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6388532,-73.9446748"}, {"nyc_BIN": "1006172", "inspect_date": "2016-05-13", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7254990,-73.9883750"}, {"nyc_BIN": "1006172", "inspect_date": "2016-05-13", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7254990,-73.9883750"}, {"nyc_BIN": "1015952", "inspect_date": "2016-05-03", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7512445,-73.9853757"}, {"nyc_BIN": "3126865", "inspect_date": "2016-04-27", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6372199,-73.9712026"}, {"nyc_BIN": "2083483", "inspect_date": "2016-04-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8826520,-73.9170500"}, {"nyc_BIN": "3063420", "inspect_date": "2016-04-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7119984,-73.9650036"}, {"nyc_BIN": "3063420", "inspect_date": "2016-04-20", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7119984,-73.9650036"}, {"nyc_BIN": "1008794", "inspect_date": "2016-04-18", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7290896,-73.9933917"}, {"nyc_BIN": "3035094", "inspect_date": "2016-04-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6631578,-73.9501653"}, {"nyc_BIN": "3035094", "inspect_date": "2016-04-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6631578,-73.9501653"}, {"nyc_BIN": "3035094", "inspect_date": "2016-04-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6631578,-73.9501653"}, {"nyc_BIN": "3072460", "inspect_date": "2016-04-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6975316,-73.9318006"}, {"nyc_BIN": "3247146", "inspect_date": "2016-04-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5865650,-73.9451120"}, {"nyc_BIN": "3247146", "inspect_date": "2016-04-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5865650,-73.9451120"}, {"nyc_BIN": "1076290", "inspect_date": "2016-04-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7760121,-73.9641647"}, {"nyc_BIN": "1076290", "inspect_date": "2016-04-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7760121,-73.9641647"}, {"nyc_BIN": "1076290", "inspect_date": "2016-04-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7760121,-73.9641647"}, {"nyc_BIN": "1076290", "inspect_date": "2016-04-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7760121,-73.9641647"}, {"nyc_BIN": "3418166", "inspect_date": "2016-03-31", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7347231,-73.9598973"}, {"nyc_BIN": "3418166", "inspect_date": "2016-03-31", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7347231,-73.9598973"}, {"nyc_BIN": "3037747", "inspect_date": "2016-03-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6675040,-73.9356650"}, {"nyc_BIN": "3037747", "inspect_date": "2016-03-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6675040,-73.9356650"}, {"nyc_BIN": "3030947", "inspect_date": "2016-03-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6749859,-73.9519630"}, {"nyc_BIN": "3030947", "inspect_date": "2016-03-28", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6749859,-73.9519630"}, {"nyc_BIN": "1089304", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1047502", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7764113,-73.9595779"}, {"nyc_BIN": "1089304", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1047502", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7764113,-73.9595779"}, {"nyc_BIN": "1089304", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1089304", "inspect_date": "2016-03-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "3030734", "inspect_date": "2016-03-21", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6754780,-73.9467750"}, {"nyc_BIN": "3182894", "inspect_date": "2016-03-21", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6067890,-73.9591540"}, {"nyc_BIN": "3030734", "inspect_date": "2016-03-21", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6754780,-73.9467750"}, {"nyc_BIN": "3002556", "inspect_date": "2016-03-18", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6916434,-73.9906746"}, {"nyc_BIN": "3002556", "inspect_date": "2016-03-18", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6915500,-73.9905448"}, {"nyc_BIN": "2002112", "inspect_date": "2016-03-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8331295,-73.9094735"}, {"nyc_BIN": "2002115", "inspect_date": "2016-03-16", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8329303,-73.9095871"}, {"nyc_BIN": "1030988", "inspect_date": "2016-03-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7803754,-73.9843681"}, {"nyc_BIN": "1011144", "inspect_date": "2016-03-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7339048,-74.0047823"}, {"nyc_BIN": "1011144", "inspect_date": "2016-03-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7339048,-74.0047823"}, {"nyc_BIN": "1049819", "inspect_date": "2016-03-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7740023,-73.9530184"}, {"nyc_BIN": "3081739", "inspect_date": "2016-03-09", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6637760,-73.9128940"}, {"nyc_BIN": "1057492", "inspect_date": "2016-03-07", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8033933,-73.9488229"}, {"nyc_BIN": "1053701", "inspect_date": "2016-03-07", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8092720,-73.9417600"}, {"nyc_BIN": "1053701", "inspect_date": "2016-03-07", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8092720,-73.9417600"}, {"nyc_BIN": "3059847", "inspect_date": "2016-03-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7073143,-73.9626730"}, {"nyc_BIN": "1012044", "inspect_date": "2016-03-01", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7354104,-74.0095738"}, {"nyc_BIN": "1012044", "inspect_date": "2016-03-01", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7354104,-74.0095738"}, {"nyc_BIN": "3135596", "inspect_date": "2016-02-17", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6421030,-73.9926200"}, {"nyc_BIN": "3135596", "inspect_date": "2016-02-17", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6421030,-73.9926200"}, {"nyc_BIN": "3115624", "inspect_date": "2016-02-08", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6581427,-73.9506200"}, {"nyc_BIN": "3085552", "inspect_date": "2016-02-03", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6622436,-73.8933544"}, {"nyc_BIN": "3085552", "inspect_date": "2016-02-03", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6622436,-73.8933544"}, {"nyc_BIN": "1043221", "inspect_date": "2016-01-25", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7745604,-73.9609134"}, {"nyc_BIN": "1043260", "inspect_date": "2016-01-25", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7750440,-73.9598520"}, {"nyc_BIN": "3320309", "inspect_date": "2016-01-22", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6822270,-73.9286489"}, {"nyc_BIN": "3085552", "inspect_date": "2016-01-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6622436,-73.8933544"}, {"nyc_BIN": "3085552", "inspect_date": "2016-01-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6622436,-73.8933544"}, {"nyc_BIN": "1065067", "inspect_date": "2016-01-12", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8687450,-73.9249380"}, {"nyc_BIN": "1065067", "inspect_date": "2016-01-12", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8687450,-73.9249380"}, {"nyc_BIN": "1063185", "inspect_date": "2016-01-12", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8465306,-73.9335728"}, {"nyc_BIN": "1057312", "inspect_date": "2016-01-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8042104,-73.9682080"}, {"nyc_BIN": "1046293", "inspect_date": "2016-01-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7681810,-73.9523690"}, {"nyc_BIN": "1046293", "inspect_date": "2016-01-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7681810,-73.9523690"}, {"nyc_BIN": "1057312", "inspect_date": "2016-01-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8042104,-73.9682080"}, {"nyc_BIN": "1057312", "inspect_date": "2016-01-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8042104,-73.9682080"}, {"nyc_BIN": "1053085", "inspect_date": "2016-01-06", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7950965,-73.9331520"}, {"nyc_BIN": "3257104", "inspect_date": "2016-01-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5811882,-73.9734612"}, {"nyc_BIN": "3257104", "inspect_date": "2016-01-05", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.5811882,-73.9734612"}, {"nyc_BIN": "3053346", "inspect_date": "2016-01-04", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6811930,-73.9431950"}, {"nyc_BIN": "2007805", "inspect_date": "2015-12-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8356020,-73.9130580"}, {"nyc_BIN": "2007805", "inspect_date": "2015-12-30", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8356020,-73.9130580"}, {"nyc_BIN": "1024845", "inspect_date": "2015-12-23", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.7645220,-73.9832757"}, {"nyc_BIN": "3181052", "inspect_date": "2015-12-18", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6160970,-73.9572309"}, {"nyc_BIN": "1089304", "inspect_date": "2015-12-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1063160", "inspect_date": "2015-12-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8442280,-73.9352550"}, {"nyc_BIN": "1089304", "inspect_date": "2015-12-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1089304", "inspect_date": "2015-12-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "1089304", "inspect_date": "2015-12-15", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.8133907,-73.9449748"}, {"nyc_BIN": "3126865", "inspect_date": "2015-12-11", "badge": "2491", "inspect_name": "SPINNATO CHARLE 2491", "location": "40.6372199,-73.9712026"}]
        var ecbs2 = [{"nyc_BIN": "1057518", "inspect_date": "2016-12-13", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8048571,-73.9509720"}, {"nyc_BIN": "1057086", "inspect_date": "2016-12-12", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7980163,-73.9731370"}, {"nyc_BIN": "1061890", "inspect_date": "2016-12-12", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8248818,-73.9491365"}, {"nyc_BIN": "1061890", "inspect_date": "2016-12-12", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8247765,-73.9493145"}, {"nyc_BIN": "3103189", "inspect_date": "2016-12-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.6510440,-73.9219030"}, {"nyc_BIN": "3052194", "inspect_date": "2016-12-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.6827270,-73.9535210"}, {"nyc_BIN": "3103189", "inspect_date": "2016-12-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.6510440,-73.9219030"}, {"nyc_BIN": "3057506", "inspect_date": "2016-12-02", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.6848400,-73.9728480"}, {"nyc_BIN": "1032612", "inspect_date": "2016-11-30", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7930480,-73.9687150"}, {"nyc_BIN": "2012553", "inspect_date": "2016-11-28", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8560120,-73.8838360"}, {"nyc_BIN": "1055411", "inspect_date": "2016-11-25", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7957290,-73.9620970"}, {"nyc_BIN": "1031571", "inspect_date": "2016-11-25", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7880400,-73.9680590"}, {"nyc_BIN": "2001501", "inspect_date": "2016-11-23", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8232160,-73.9118230"}, {"nyc_BIN": "2001501", "inspect_date": "2016-11-23", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8232160,-73.9118230"}, {"nyc_BIN": "2001501", "inspect_date": "2016-11-23", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8232160,-73.9118230"}, {"nyc_BIN": "2001501", "inspect_date": "2016-11-23", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8232160,-73.9118230"}, {"nyc_BIN": "1032170", "inspect_date": "2016-11-22", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7868370,-73.9737600"}, {"nyc_BIN": "3071940", "inspect_date": "2016-11-18", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7000680,-73.9320879"}, {"nyc_BIN": "1007921", "inspect_date": "2016-11-16", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7246247,-73.9945985"}, {"nyc_BIN": "2007398", "inspect_date": "2016-11-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8443923,-73.9092448"}, {"nyc_BIN": "1060408", "inspect_date": "2016-11-10", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8191390,-73.9423790"}, {"nyc_BIN": "1060408", "inspect_date": "2016-11-10", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8191390,-73.9423790"}, {"nyc_BIN": "1017090", "inspect_date": "2016-11-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7474024,-73.9829604"}, {"nyc_BIN": "1016093", "inspect_date": "2016-11-02", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7373720,-73.9914748"}, {"nyc_BIN": "1016093", "inspect_date": "2016-11-02", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7373720,-73.9914748"}, {"nyc_BIN": "1064197", "inspect_date": "2016-11-01", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8617295,-73.9272413"}, {"nyc_BIN": "2023765", "inspect_date": "2016-11-01", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8274440,-73.8810880"}, {"nyc_BIN": "1089679", "inspect_date": "2016-10-31", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7235720,-73.9957420"}, {"nyc_BIN": "1047660", "inspect_date": "2016-10-24", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7780609,-73.9568422"}, {"nyc_BIN": "1062592", "inspect_date": "2016-10-19", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8360016,-73.9383731"}, {"nyc_BIN": "1063020", "inspect_date": "2016-10-19", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8411704,-73.9376956"}, {"nyc_BIN": "1012568", "inspect_date": "2016-10-13", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7452371,-74.0056649"}, {"nyc_BIN": "1012568", "inspect_date": "2016-10-13", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7452371,-74.0056649"}, {"nyc_BIN": "1031127", "inspect_date": "2016-10-11", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7842420,-73.9816530"}, {"nyc_BIN": "1031127", "inspect_date": "2016-10-11", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7842420,-73.9816530"}, {"nyc_BIN": "1031127", "inspect_date": "2016-10-11", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7842420,-73.9816530"}, {"nyc_BIN": "1060408", "inspect_date": "2016-10-07", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8191390,-73.9423790"}, {"nyc_BIN": "1060408", "inspect_date": "2016-10-07", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8191390,-73.9423790"}, {"nyc_BIN": "2003556", "inspect_date": "2016-10-04", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8425220,-73.9252750"}, {"nyc_BIN": "2003556", "inspect_date": "2016-10-04", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8425220,-73.9252750"}, {"nyc_BIN": "2002892", "inspect_date": "2016-10-04", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8313103,-73.9210426"}, {"nyc_BIN": "1059421", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8147732,-73.9478250"}, {"nyc_BIN": "1059421", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8147732,-73.9478250"}, {"nyc_BIN": "1059445", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8142890,-73.9490900"}, {"nyc_BIN": "2006476", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8182050,-73.8858200"}, {"nyc_BIN": "1059421", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8148410,-73.9481740"}, {"nyc_BIN": "1059421", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8148410,-73.9481740"}, {"nyc_BIN": "1059445", "inspect_date": "2016-10-03", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8142890,-73.9490900"}, {"nyc_BIN": "1022577", "inspect_date": "2016-09-28", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7552833,-73.9854807"}, {"nyc_BIN": "1022577", "inspect_date": "2016-09-28", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7552833,-73.9854807"}, {"nyc_BIN": "1022577", "inspect_date": "2016-09-28", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7552833,-73.9854807"}, {"nyc_BIN": "1015598", "inspect_date": "2016-09-28", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.7430161,-73.9904457"}, {"nyc_BIN": "2070565", "inspect_date": "2016-09-23", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.9003054,-73.8577667"}, {"nyc_BIN": "2092008", "inspect_date": "2016-09-20", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8219769,-73.8957926"}, {"nyc_BIN": "1064423", "inspect_date": "2016-09-20", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8523799,-73.9350320"}, {"nyc_BIN": "2002889", "inspect_date": "2016-09-16", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8319500,-73.9206670"}, {"nyc_BIN": "2002889", "inspect_date": "2016-09-16", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8319500,-73.9206670"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-15", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2012955", "inspect_date": "2016-09-06", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8462762,-73.8854250"}, {"nyc_BIN": "2070565", "inspect_date": "2016-08-29", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.9003054,-73.8577667"}, {"nyc_BIN": "2008269", "inspect_date": "2016-08-22", "badge": "2762", "inspect_name": "TUA LUIS 2762", "location": "40.8529870,-73.9072450"}]
        var flightPlanCoordinates = [ ];
        var flightPlanCoordinates2 = [ ];
        var markers1 = []
        var markers2 = []

        ecbs.map( (ecb, idx) => {
            var  _key = String(idx)
            var success = true;
            try {
                var loc = ecb.location.split(",")
                var lat = parseFloat(loc[0].trim())
                var lng = parseFloat(loc[1].trim())
            }
            catch(err){
                var success = false;

            }
            if (success){
                flightPlanCoordinates.push({lat: lat, lng: lng})
                markers1.push(
                    new google.maps.Marker({
                        position: {
                            lat:  lat,
                            lng: lng,
                        },
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 5,
                            fillColor: "red",
                            fillOpacity: 0.8,
                            strokeColor: 'red',
                            strokeWeight: 2
                        },
                        key: _key,
                        defaultAnimation: 2,
                        map: null
                    })
                )
            }
        })

        ecbs2.map( (ecb, idx) => {
            var  _key = String(idx)
            var success = true;
            try {
                var loc = ecb.location.split(",")
                var lat = parseFloat(loc[0].trim())
                var lng = parseFloat(loc[1].trim())
            }
            catch(err){
                var success = false;

            }
            if (success){
                flightPlanCoordinates2.push({lat: lat, lng: lng})
                markers2.push(
                    new google.maps.Marker({
                        position: {
                            lat:  lat,
                            lng: lng,
                        },
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 5,
                            fillColor: "green",
                            fillOpacity: 0.8,
                            strokeColor: 'green',
                            strokeWeight: 2
                        },
                        key: _key,
                        defaultAnimation: 2,
                        map: null
                    })
                )
            }
        })

        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates.slice(0, 1),
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 1
        });
        var flightPath2 = new google.maps.Polyline({
            path: flightPlanCoordinates2.slice(0, 1),
            geodesic: true,
            strokeColor: '#00FF00',
            strokeOpacity: 0.5,
            strokeWeight: 1
        });

        //console.log(flightPlanCoordinates.slice(0, 10))
        //flightPath.setPath(flightPlanCoordinates.slice(0, 30))
        //flightPath.setMap(map)

        var i=0
        var end = Math.max(markers1.length, markers2.length)
        var interval = setInterval(()=>{
            console.log("range", i, end)
            try {
                markers1[Math.min(i, markers1.length-1)].setMap(map)
                markers2[Math.min(i, markers2.length-1)].setMap(map)
                if (i > 0) {
                    if (i<markers1.length){
                        markers1[i - 1].setMap(null)
                    }
                    if (i<markers2.length){
                        markers2[i - 1].setMap(null)
                    }
                }
                i += 1
                if (i > end){

                    console.log("end:", i, end)
                    /*markers1[i].setMap(null)
                    markers1[i-1].setMap(null)
                    markers2[i].setMap(null)
                    markers2[i-1].setMap(null)*/
                    clearInterval(interval)
                    //i=0
                    flightPath.setPath(flightPlanCoordinates.slice(0, 1))
                    flightPath2.setPath(flightPlanCoordinates2.slice(0, 1))
                }
                flightPath.setMap(null);
                flightPath.setPath(flightPlanCoordinates.slice(0, Math.min(i, markers1.length)))
                flightPath.setMap(map);
                flightPath2.setMap(null);
                flightPath2.setPath(flightPlanCoordinates2.slice(0, Math.min(i, markers2.length)))
                flightPath2.setMap(map);


            }
            catch(err){
                console.log(err)
            }
            //if (i > markers.length){i=0}
        }, 500)

//http://localhost:8081/#/?_k=87mnni
        //http://localhost:5000/badges?badge=TUA%20LUIS%202762




        /*
        var marker1 = new google.maps.Marker({
            position: {
                lat: 40.7128,
                lng: -74.0059,
            },
            key: `m1`,
            defaultAnimation: 2,
            map: null
        })

        var marker2 = new google.maps.Marker(
            {
                position: {
                    lat: 40.7128,
                    lng: -73.9059,
                },
                key: `m2`,
                defaultAnimation: 2,
                map: null

            })

        //marker1.map=map
        var _markers = []
        _markers.push(marker1)
        _markers.push(marker2)


        setTimeout(()=>{marker2.setMap(map)}, 1)


         var i=0
         setInterval(()=>{
         _markers[i].setMap(map)
         i+=1
         if (i > 1){i=0}
         _markers[i].setMap(null)
         }, 100)
         */



    }
    render(){
        return <MapView {...this.props} />
    }
}

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
        <div id="map-canvas" style={{height:"800px"}}></div>
        )

}



export default VisibleMap