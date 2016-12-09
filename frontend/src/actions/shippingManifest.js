/**
 * Created by luiscunha on 5/21/16.
 */

import {
    CONFIRM_REQUEST_CHOICE,
    SHIP_AND_SAVE_FAILURE,
    SAVE_REQUEST_ID
} from './actionTypes';
import {checkStatus, parseJSON} from '../utils/utils';
import {API_ENDPOINT} from "../config";
import { push } from 'react-router-redux';

function createAndSavePDFManifesto(data, request_id){
    "use strict";

    //https://github.com/simonbengtsson/jsPDF-AutoTable
    //https://github.com/MrRio/jsPDF/   (https://parall.ax/products/jspdf)

    //make an image: http://html2canvas.hertzen.com/examples.html
    // and add it to jspdf to save: http://stackoverflow.com/questions/23681325/convert-canvas-to-pdf-using-pdf-js

    var rows = data;
    rows.map(function(row, index){
        let extract_id = rows[index][4];
        rows[index][4] = "R" + parseInt(request_id) + "_" + extract_id
    })

    var columns = ["Sample ID", "Project ID", "Submission Type", "Submission ID", "Extract ID",
        "Material", "Analysis Type"]

    var specialElementHandlers = {
        '.skipme': function (element, renderer) {
            return true;
        }
    };

    var doc = new jsPDF('p', 'pt', 'letter');
    doc.setTextColor(200);
    doc.fromHTML($('#requesterInfo').html(), 15, 15, {
        'width': 500,
        'elementHandlers': specialElementHandlers
    })

    doc.autoTable(columns, rows, {
        startY: 150,
        tableWidth: 'wrap',
        styles: {fillColor: [255, 255, 255],
            fontSize:10,
            lineColor: 200,
            lineWidth: 0.5,
            overflow: 'linebreak',
            cellPadding: 2,
            halign: 'center'},
        headerStyles: {textColor:[0,0,0], rowHeight: 25, fontSize: 10,fillColor: [0, 188, 212]},
        columnStyles: {
            rowHeight: 20,
            id: {fillColor: 255},
            columnWidth: "wrap",
            fontSize:10,
            lineColor: 200,
            lineWidth: 0.5,
            overflow: 'linebreak'
        },
        margin: {top: 150, horizontal: 10, left:60},
        bodyStyles: {rowHeight: 12, fontSize: 8, valign: 'middle'},
        theme: 'grid',
        beforePageContent: function(data) {
            //doc.text("Header", 40, 30);
        }
    });

    doc.save('shipping_manifesto.pdf');

    return {
        type: SAVE_REQUEST_ID,
        request_id: request_id
    }
}

var fetchParams = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'localhost',
        'AuthToken': 'Bearer ' + authorization_token
    }
}

const shipManifestAndSaveExtractsFailure = (err) => {
    "use strict";
    return {
        type: SHIP_AND_SAVE_FAILURE,
        err: err
    }
}

export function createShippingManifest(manifestoData, samples, user, facility, already_created) {

    // Do not resubmit to database if user when back one page, and then clicked the create button again
    if (already_created){
        return dispatch => {
            dispatch(push("/thankYou"))
        }
    }
    else {
        fetchParams["body"] = JSON.stringify({
            manifesto: manifestoData,
            samples: samples,
            user: user,
            facility: facility
        })

        if (manifestoData != null && manifestoData != undefined && manifestoData != "") {
            return dispatch => {
                //dispatch(dpccSamplesRequest(sample)); // show spinner while loading

                var api = API_ENDPOINT()
                fetch(api + "/extracts/", fetchParams)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then(json => {
                        if (json.status) {
                            dispatch(createAndSavePDFManifesto(manifestoData, json.request_id))
                            dispatch(push("/thankYou"))
                        }
                        else {
                            dispatch(shipManifestAndSaveExtractsFailure({statusText:json.statusText}));
                        }
                    })
                    .catch(error => {
                        console.log("ERROR", error.response)
                        const response = error.response;
                        if (response === undefined) {
                            dispatch(shipManifestAndSaveExtractsFailure({statusText:"Undefined response"}));
                        } else {
                            parseJSON(response)
                                .then(json => {
                                    error.status = response.status;
                                    error.statusText = response.statusText;
                                    dispatch(shipManifestAndSaveExtractsFailure(error));
                                });
                        }
                    });


                //.then(json => console.log(json));

            }
        }
    }

}