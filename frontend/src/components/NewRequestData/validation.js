/**
 * Created by luiscunha on 4/23/16.
 */

import {API_ENDPOINT} from "../../config"
import {checkStatus, parseJSON} from '../../utils/utils';
import 'isomorphic-fetch';

export const in_database = (table, column, value) => {
    return new Promise(function (resolve, reject) {
        var fetchParams = {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'localhost'
            }
        }

        var api = API_ENDPOINT()
        fetch(api + "/"  + table + "/" + column + "/" + encodeURI(value), fetchParams)
            .then(checkStatus)
            .then(parseJSON)
            .then(json => {
                if (json.success){
                    if (parseInt(json.res) > 0 ){
                        resolve({"status": true, "message": ""});
                    }
                    else {resolve({"status": false, "message": "Check the spelling of the host species"})}
                }
            })
            .catch(error => {
                const response = error.response;
                if (response === undefined) {
                    resolve({"status": false, "message": "failed to contact database"});
                } else {
                    parseJSON(response)
                        .then(json => {
                            error.status = response.status;
                            error.statusText = response.statusText;
                            error.message = json.message;
                            resolve({"status": false, "message": "failed to contact database", "error": error});
                        });
                }
            });
    });

}



const validate = (row, column, value, table) => {
    "use strict";
    if (row < 0) return {"pass": true, "msg": ""}

    if (table == "sampleReview") {
         switch (column) {
            case "sample_id":
                return (value != undefined && value.length > 1) ?
                    {"pass": true, "msg": ""} :
                {"pass": true, "msg": "Sample ID required"}

            case "sequencing_study_identifier":
                return {"pass": true, "msg": ""} //optional
            case "project_identifier":
                return {"pass": true, "msg": ""}
                if (Number.isInteger(parseInt(value)))return {"pass": true, "msg": ""}
                return {"pass": false, "msg": "value must be an integer"}
            case "virus_identifier":
                return (value != undefined && value.length > 0) ? {"pass": true, "msg": ""} :
                {"pass": false, "msg": "enter value or NA"}
            case "strain_name":
                return (value != undefined && value.length > 0) ? {"pass": true, "msg": ""} :
                {"pass": false, "msg": "enter value or U"}
            case "influenza_subtype":
                return (value != undefined && value.length > 0) ? (value.match(/H[\d|x]N[\d|x]/g) ?
                {"pass": true, "msg": ""} :
                {
                    "pass": false, "msg": "Please check the format of subtype. " +
                "Mark unknown subtype with x, e.g. (H1Nx)"
                }) : {"pass": false, "msg": "enter value or U or NA"}
            case "host_species":
                let table = "v_species"
                let column = "sdict_host_species"
                if (value === "U" || value === "NA") {
                    return {"pass": true, "msg": ""}
                }
                else if (value == undefined || value.length === 0) return {"pass": false, "msg": "enter valid species name or U or NA"}
                else {
                    return {"pass": true, "msg": ""}  //TODO: in database valiation needs to dispatch an action, since it's async
                    var a = ""
                    var b = in_database(table, column, value).then(function (res) {
                        a =  {"pass": Boolean(res.status), "msg": res.message}
                        return a
                    }).then(function(){})
                    return a

                }
            case "lab_host":
                return (value != undefined && value.length > 0) ? {"pass": true, "msg": ""} :
                {"pass": false, "msg": "enter value or NA"}
            case "passage_history":
                return (value != undefined && value.length > 0) ? (value.match(/([E|C|S|M]\d+)|ORI/g) ?
                {"pass": true, "msg": ""} : {
                    "pass": false, "msg": "Please check the passage history format"
                }) : {"pass": false, "msg": "enter value or X"}
            case "pathogenicity":
                try {
                    return value.match(/HPAI|LPAI|U|NA/g) ? {"pass": true, "msg": ""} :
                    {"pass": false, "msg": "Choose from HPAI, LPAI, U or NA"}
                }
                catch (err) {
                    if (err.toString().indexOf("TypeError") > -1) {
                        return {"pass": false, "msg": "Enter value or U or NA"}
                    }
                }
            case "extract_material":
                try {
                    return value.match(/DNA|cDNA|Viral RNA|mRNA|PCR fragment|Whole virus|OTH-/g) ?
                    {"pass": true, "msg": ""} :
                    {"pass": false, "msg": "Choose from one of the options"}
                }
                catch (err) {
                    if (err.toString().indexOf("TypeError") > -1) {
                        return {"pass": false, "msg": "Choose an option"}
                    }
                }
            case "volume":
             case "concentration":
                return (value != undefined && value.length > 0) ?
                    (value.match(/[\d+|U|NA]/g) ? {"pass": true, "msg": ""} : {
                        "pass": false,
                        "msg": "enter a numeric value"
                    }) :
                {"pass": false, "msg": "enter a numeric value, U or NA"}
            case "concentration_determined_by":
                try {
                    return value.match(/Nanodrop|Qbit|Spectrometry|OTH-/g) ? {"pass": true, "msg": ""} :
                    {"pass": false, "msg": "Choose from one of the options"}
                }
                catch (err) {
                    if (err.toString().indexOf("TypeError") > -1) {
                        return {"pass": false, "msg": "Choose an option"}
                    }
                }
            case "sequencing_technology":
                let options = ["Illumina", "Ion Torrent","PacBio","No Preference"]
                var pass = true;
                var msg = "";
                try {
                    let k = Object.keys(value)
                    k.map(function(key, index){
                        if (options.indexOf(key) < 0) {
                            pass = false;
                            msg = "Check at least one of the options"
                        }
                    })
                    return {"pass": pass, "msg": msg}
                }
                catch (err) {
                    if (err.toString().indexOf("TypeError") > -1) {
                        return {"pass": false, "msg": "Check an leat an option"}
                    }
                }

            case "analysis_type":
                let analysis_type_options = ["Annotation","Variant Analysis","Phylogenetic","Geographic Mapping"]
                var pass = true;
                var msg = "";
                try {
                    let k = Object.keys(value)
                    k.map(function(key, index){
                        if (analysis_type_options.indexOf(key) < 0) {
                            pass = false;
                            msg = "Check at least one of the options"
                        }
                    })
                    return {"pass": pass, "msg": msg}
                }
                catch (err) {
                    if (err.toString().indexOf("TypeError") > -1) {
                        return {"pass": false, "msg": "Check an leat an option"}
                    }
                }
            default:
                return {"pass": true, "msg": ""}
        }
    }

}


export default validate;