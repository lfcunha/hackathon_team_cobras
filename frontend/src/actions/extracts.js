/**
 * Created by luiscunha on 6/4/16.
 */


import {
    ADD_EXTRACT_REQUEST,
    ADD_EXTRACT_SUCCESS,
    ADD_EXTRACT_FAILURE,
    EDITING_STATUS,
    SET_STATUS,
    SET_PAGE,
    SET_FILTER_SEARCH,
    SET_FILTER_EXTRACTS,
    SET_EXTRACTS_CHECKED,
    SORT_EXTRACTS,
} from './actionTypes';
import {API_ENDPOINT} from "../config"
import {checkStatus, parseJSON} from '../utils/utils';
import 'isomorphic-fetch';


export const setPage = (page) => {
    "use strict";
    return {
        type: SET_PAGE,
        page: page
    }
}

const getExtractsRequest = () => {
    "use strict";
    return {
        type: ADD_EXTRACT_REQUEST,

    }
}

const getExtractsSuccess = (extracts) => {
    "use strict";
    return {
        type: ADD_EXTRACT_SUCCESS,
        extracts: extracts

    }
}

const getExtractsFailure = (err) => {
    "use strict";
    return {
        type: ADD_EXTRACT_FAILURE,
        err: err
    }
}

export const getExtracts = () => {
    "use strict";
    var fetchParams = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': 'localhost',
            'AuthToken': 'Bearer ' + authorization_token
        }
    }
    if (__LOCAL__) {
        var extracts = {
            "status": true,
            "core": true,
            "requesters": {"Melanie Richter": false, "Luis Cunha": false, "Stephan  Bour": false},
            "requestNumbers": {
                "R110": false,
                "R111": false,
                "R112": false,
                "R113": false,
                "R114": false,
                "R115": false,
                "R122": false,
                "R124": false,
                "R125": false,
                "R129": false,
                "R130": false,
                "R131": false,
                "R132": false,
                "R133": false,
                "R138": false,
                "R139": false,
                "R140": false,
                "R141": false,
                "R142": false,
                "R143": false,
                "R144": false,
                "R145": false,
                "R146": false,
                "R147": false,
                "R148": false,
                "R149": false,
                "R150": false,
                "R151": false,
                "R152": false,
                "R153": false,
                "R154": false,
                "R155": false,
                "R156": false,
                "R157": false,
                "R158": false,
                "R161": false,
                "R162": false,
                "R163": false,
                "R164": false,
                "R165": false,
                "R166": false,
                "R167": false,
                "R168": false,
                "R169": false,
                "R170": false,
                "R171": false,
                "R172": false,
                "R173": false,
                "R174": false,
                "R175": false,
                "R176": false,
                "R177": false,
                "R178": false,
                "R179": false,
                "R180": false,
                "R181": false,
                "R182": false,
                "R183": false,
                "R184": false,
                "R185": false,
                "R186": false,
                "R187": false,
                "R188": false,
                "R189": false,
                "R190": false,
                "R191": false,
                "R192": false,
                "R193": false,
                "R194": false,
                "R195": false,
                "R196": false,
                "R197": false,
                "R198": false,
                "R199": false,
                "R200": false,
                "R201": false,
                "R202": false,
                "R203": false,
                "R204": false,
                "R205": false,
                "R206": false,
                "R207": false,
                "R208": false,
                "R209": false,
                "R210": false,
                "R211": false,
                "R212": false,
                "R213": false,
                "R214": false,
                "R215": false,
                "R216": false,
                "R217": false,
                "R218": false,
                "R219": false,
                "R220": false,
                "R221": false,
                "R222": false,
                "R223": false,
                "R224": false,
                "R225": false,
                "R226": false,
                "R227": false,
                "R228": false,
                "R229": false,
                "R230": false,
                "R231": false,
                "R232": false,
                "R233": false,
                "R234": false,
                "R235": false,
                "R236": false,
                "R237": false,
                "R238": false,
                "R240": false,
                "R241": false,
                "R242": false,
                "R243": false,
                "R244": false,
                "R245": false,
                "R246": false,
                "R247": false,
                "R248": false,
                "R249": false,
                "R250": false,
                "R251": false,
                "R252": false,
                "R253": false,
                "R254": false,
                "R255": false,
                "R256": false,
                "R257": false,
                "R258": false,
                "R259": false,
                "R260": false,
                "R261": false,
                "R262": false,
                "R263": false,
                "R264": false,
                "R265": false,
                "R266": false,
                "R267": false,
                "R268": false,
                "R269": false,
                "R270": false,
                "R271": false,
                "R272": false,
                "R273": false,
                "R274": false,
                "R275": false,
                "R276": false,
                "R277": false,
                "R278": false,
                "R279": false,
                "R280": false,
                "R281": false,
                "R282": false,
                "R283": false,
                "R284": false,
                "R285": false,
                "R286": false,
                "R287": false,
                "R289": false,
                "R290": false,
                "R291": false,
                "R292": false,
                "R293": false,
                "R294": false,
                "R295": false,
                "R296": false,
                "R297": false,
                "R298": false,
                "R299": false,
                "R300": false,
                "R301": false,
                "R302": false,
                "R303": false,
                "R304": false,
                "R305": false,
                "R306": false,
                "R307": false,
                "R308": false,
                "R309": false,
                "R310": false,
                "R311": false,
                "R312": false,
                "R313": false,
                "R314": false,
                "R315": false,
                "R316": false,
                "R317": false,
                "R318": false,
                "R319": false,
                "R320": false,
                "R321": false,
                "R322": false,
                "R323": false,
                "R324": false,
                "R325": false,
                "R326": false,
                "R331": false,
                "R332": false,
                "R333": false,
                "R334": false,
                "R335": false,
                "R336": false,
                "R337": false,
                "R338": false,
                "R339": false,
                "R340": false,
                "R341": false,
                "R342": false,
                "R343": false,
                "R344": false,
                "R345": false,
                "R346": false,
                "R347": false,
                "R348": false,
                "R349": false,
                "R350": false,
                "R351": false,
                "R352": false,
                "R353": false,
                "R354": false,
                "R355": false,
                "R356": false,
                "R357": false
            },
            "extracts": [{
                "id": "53",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R110_S1_E1",
                "status": "Declined",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "54",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R110_S1_E2",
                "status": "Shipped",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "55",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R111_S1_E1",
                "status": "Requested",
                "results": "http://s3.amazon.com/12344",
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "56",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R111_S1_E2",
                "status": "Failed-Sequencing/Assembly",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "57",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R112_S1_E1",
                "status": "Failed-Sequencing/Assembly",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "58",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R112_S1_E2",
                "status": "Requested",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "59",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R113_S1_E1",
                "status": "Accepted",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "60",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R113_S1_E2",
                "status": "Failed-Sequencing/Assembly",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "61",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R114_S1_E1",
                "status": "received",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "62",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R114_S1_E2",
                "status": "received",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "63",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R115_S1_E1",
                "status": "failed",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "64",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R115_S1_E2",
                "status": "complete",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "67",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R122_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "68",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R124_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "69",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R125_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "70",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R129_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "71",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R130_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "72",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R131_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "73",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R132_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "74",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R133_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "75",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R138_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "76",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R139_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "77",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R140_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "78",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R141_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "79",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R142_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "80",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R143_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "81",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R144_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "82",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R145_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "83",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R146_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "84",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R147_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "85",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R148_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "86",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R149_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "87",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R150_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "88",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R151_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "89",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R152_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "90",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R153_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "91",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R154_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "92",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R155_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "93",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R156_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "94",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R157_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "95",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R158_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "96",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R161_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "97",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R162_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "98",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R163_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "99",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R164_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "100",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R165_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "101",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R166_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "102",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R167_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "103",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R168_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "104",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R169_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "105",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R170_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "106",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R171_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "107",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R172_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "108",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R173_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "109",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R174_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "110",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R175_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "111",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R176_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "112",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R177_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "113",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R178_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "114",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R179_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "115",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R180_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "116",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R181_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "117",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R182_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "118",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R183_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "119",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R184_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "120",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R185_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "121",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R186_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "122",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R187_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "123",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R188_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "124",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R189_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "125",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R190_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "126",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R191_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "127",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R192_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "128",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R193_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "129",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R194_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "130",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R195_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "131",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R196_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "132",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R197_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "133",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R198_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "134",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R199_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "135",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R200_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "136",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R201_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "137",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R202_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "138",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R203_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "139",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R204_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "140",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R205_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "141",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R206_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "142",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R207_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "143",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R208_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "144",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R209_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "145",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R210_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "146",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R211_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "147",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R212_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "148",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R213_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "149",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R214_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "150",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R215_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "151",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R216_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "152",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R217_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "153",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R218_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "154",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R219_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "155",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R220_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "156",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R221_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "157",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R222_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "158",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R223_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "159",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R224_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "160",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R225_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "161",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R226_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "162",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R227_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "163",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R228_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "164",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R229_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "165",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R230_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "166",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R231_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "167",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R232_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "168",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R233_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "169",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R234_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "170",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R235_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "171",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R236_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "172",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R237_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "173",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R238_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "174",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R240_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "175",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R240_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "176",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R241_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "177",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R241_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "178",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R242_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "179",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R242_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "180",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R243_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "181",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R243_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "182",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R244_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "183",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R244_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "184",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R245_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "185",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R245_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "186",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R246_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "187",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R246_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "188",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R247_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "189",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R247_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "190",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R248_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "191",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R248_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "192",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R249_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "193",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R249_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "194",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R250_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "195",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R250_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "196",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R251_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "197",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R251_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "198",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R252_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "199",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R252_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "200",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R253_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "201",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R253_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "202",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R254_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "203",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R254_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "204",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R255_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "205",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R255_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "206",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R256_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "207",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R256_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "208",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R257_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "209",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R257_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "210",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R258_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "211",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R258_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "212",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R259_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "213",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R259_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "214",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R260_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "215",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R260_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "216",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R261_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "217",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R261_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "218",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R262_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "219",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R262_S2_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "220",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R263_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "221",
                "requester": "Melanie Richter",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R264_S1_E1",
                "status": null,
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "222",
                "requester": "Melanie Richter",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R265_S1_E1",
                "status": null,
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "223",
                "requester": "Melanie Richter",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R266_S1_E1",
                "status": null,
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "224",
                "requester": "Melanie Richter",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R267_S1_E1",
                "status": null,
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "225",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R268_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "226",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R269_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "227",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R270_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "228",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R271_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "229",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R272_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "230",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R273_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "231",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R274_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "232",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R275_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "233",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R276_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "234",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R277_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "235",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R278_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "236",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R279_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "237",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R280_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "238",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R281_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "239",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R282_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "240",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R283_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "241",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R284_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "242",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R285_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "243",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R286_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "244",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R287_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "245",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R289_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "246",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R290_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "247",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R291_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "248",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R292_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "249",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R293_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "250",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R294_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "251",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R295_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "252",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R296_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "253",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R297_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "254",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R298_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "255",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R299_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "256",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R300_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "257",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R301_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "258",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R302_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "259",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R303_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "260",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R304_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "261",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R305_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "262",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R306_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "263",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R307_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "264",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R308_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "265",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R309_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "266",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R310_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "267",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R311_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "268",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R312_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "269",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R313_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "270",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R314_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "271",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R315_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "272",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R316_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "273",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R317_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "274",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R318_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "275",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R319_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "276",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R320_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "277",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R321_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "278",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R322_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "279",
                "requester": "Melanie Richter",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R323_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "280",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R324_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "281",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R325_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "282",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R326_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "287",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R331_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "288",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R332_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "289",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R333_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "290",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R334_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "291",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R335_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "292",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R336_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "293",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R337_S1_E1",
                "status": null,
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "294",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R338_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "295",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R338_S1_E2",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "296",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R339_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "297",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R339_S1_E2",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "298",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R340_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "299",
                "requester": "Melanie Richter",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R340_S1_E2",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "300",
                "requester": "Stephan  Bour",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R341_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "301",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R342_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "302",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R343_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "303",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R344_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "304",
                "requester": "Luis Cunha",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R345_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "305",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R346_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "306",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R347_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "307",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R348_S1_E1",
                "status": null,
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "308",
                "requester": "Luis Cunha",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R349_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "309",
                "requester": "Luis Cunha",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R350_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "310",
                "requester": "Stephan  Bour",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R351_S1_E1",
                "status": null,
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "311",
                "requester": "Stephan  Bour",
                "digs_id": "5",
                "institution": "CRIP",
                "extract_id": "R352_S1_E1",
                "status": null,
                "results": null,
                "digs": "JHU-Thielen"
            }, {
                "id": "312",
                "requester": "Luis Cunha",
                "digs_id": "1",
                "institution": "CRIP",
                "extract_id": "R353_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UT-Bahl"
            }, {
                "id": "313",
                "requester": "Stephan  Bour",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R354_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "314",
                "requester": "Stephan  Bour",
                "digs_id": "3",
                "institution": "CRIP",
                "extract_id": "R355_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "UGA-Tripp"
            }, {
                "id": "315",
                "requester": "Stephan  Bour",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R356_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }, {
                "id": "316",
                "requester": "Stephan  Bour",
                "digs_id": "2",
                "institution": "CRIP",
                "extract_id": "R357_S1_E1",
                "status": "Requested",
                "results": null,
                "digs": "MtSinai-van-Bakel"
            }],
            "user_institutions_roles": "'CRIP','Emory-UGA-CEIRS','Johns-Hopkins-CEIRS','NYICE','StJude-CEIRS','UT-Bahl_1000','MS-VanBakel_2000','UGA-Tripp_3000','UGA-Perez_4000','JHU-Thielen_5000'",
            "user_roles": ["CRIP--ReadRole", "Emory-UGA-CEIRS--ReadRole", "Johns-Hopkins-CEIRS--ReadRole", "NYICE--ReadRole", "StJude-CEIRS--ReadRole", "CRIP--WriteRole", "Emory-UGA-CEIRS--WriteRole", "Johns-Hopkins-CEIRS--WriteRole", "NYICE--WriteRole", "StJude-CEIRS--WriteRole", "UT-Bahl_1000--ReadRole", "MS-VanBakel_2000--ReadRole", "UGA-Tripp_3000--ReadRole", "UGA-Perez_4000--ReadRole", "JHU-Thielen_5000--ReadRole"]
        };
    }
    return dispatch => {
        dispatch(getExtractsRequest()); // show spinner while loading
        return new Promise(function (resolve, reject) {
            var api = API_ENDPOINT()
            if (__LOCAL__) {
                var extracts = {
                    "status": true,
                    "core": true,
                    "requesters": {"Melanie Richter": false, "Luis Cunha": false, "Stephan  Bour": false},
                    "requestNumbers": {
                        "R110": false,
                        "R111": false,
                        "R112": false,
                        "R113": false,
                        "R114": false,
                        "R115": false,
                        "R122": false,
                        "R124": false,
                        "R125": false,
                        "R129": false,
                        "R130": false,
                        "R131": false,
                        "R132": false,
                        "R133": false,
                        "R138": false,
                        "R139": false,
                        "R140": false,
                        "R141": false,
                        "R142": false,
                        "R143": false,
                        "R144": false,
                        "R145": false,
                        "R146": false,
                        "R147": false,
                        "R148": false,
                        "R149": false,
                        "R150": false,
                        "R151": false,
                        "R152": false,
                        "R153": false,
                        "R154": false,
                        "R155": false,
                        "R156": false,
                        "R157": false,
                        "R158": false,
                        "R161": false,
                        "R162": false,
                        "R163": false,
                        "R164": false,
                        "R165": false,
                        "R166": false,
                        "R167": false,
                        "R168": false,
                        "R169": false,
                        "R170": false,
                        "R171": false,
                        "R172": false,
                        "R173": false,
                        "R174": false,
                        "R175": false,
                        "R176": false,
                        "R177": false,
                        "R178": false,
                        "R179": false,
                        "R180": false,
                        "R181": false,
                        "R182": false,
                        "R183": false,
                        "R184": false,
                        "R185": false,
                        "R186": false,
                        "R187": false,
                        "R188": false,
                        "R189": false,
                        "R190": false,
                        "R191": false,
                        "R192": false,
                        "R193": false,
                        "R194": false,
                        "R195": false,
                        "R196": false,
                        "R197": false,
                        "R198": false,
                        "R199": false,
                        "R200": false,
                        "R201": false,
                        "R202": false,
                        "R203": false,
                        "R204": false,
                        "R205": false,
                        "R206": false,
                        "R207": false,
                        "R208": false,
                        "R209": false,
                        "R210": false,
                        "R211": false,
                        "R212": false,
                        "R213": false,
                        "R214": false,
                        "R215": false,
                        "R216": false,
                        "R217": false,
                        "R218": false,
                        "R219": false,
                        "R220": false,
                        "R221": false,
                        "R222": false,
                        "R223": false,
                        "R224": false,
                        "R225": false,
                        "R226": false,
                        "R227": false,
                        "R228": false,
                        "R229": false,
                        "R230": false,
                        "R231": false,
                        "R232": false,
                        "R233": false,
                        "R234": false,
                        "R235": false,
                        "R236": false,
                        "R237": false,
                        "R238": false,
                        "R240": false,
                        "R241": false,
                        "R242": false,
                        "R243": false,
                        "R244": false,
                        "R245": false,
                        "R246": false,
                        "R247": false,
                        "R248": false,
                        "R249": false,
                        "R250": false,
                        "R251": false,
                        "R252": false,
                        "R253": false,
                        "R254": false,
                        "R255": false,
                        "R256": false,
                        "R257": false,
                        "R258": false,
                        "R259": false,
                        "R260": false,
                        "R261": false,
                        "R262": false,
                        "R263": false,
                        "R264": false,
                        "R265": false,
                        "R266": false,
                        "R267": false,
                        "R268": false,
                        "R269": false,
                        "R270": false,
                        "R271": false,
                        "R272": false,
                        "R273": false,
                        "R274": false,
                        "R275": false,
                        "R276": false,
                        "R277": false,
                        "R278": false,
                        "R279": false,
                        "R280": false,
                        "R281": false,
                        "R282": false,
                        "R283": false,
                        "R284": false,
                        "R285": false,
                        "R286": false,
                        "R287": false,
                        "R289": false,
                        "R290": false,
                        "R291": false,
                        "R292": false,
                        "R293": false,
                        "R294": false,
                        "R295": false,
                        "R296": false,
                        "R297": false,
                        "R298": false,
                        "R299": false,
                        "R300": false,
                        "R301": false,
                        "R302": false,
                        "R303": false,
                        "R304": false,
                        "R305": false,
                        "R306": false,
                        "R307": false,
                        "R308": false,
                        "R309": false,
                        "R310": false,
                        "R311": false,
                        "R312": false,
                        "R313": false,
                        "R314": false,
                        "R315": false,
                        "R316": false,
                        "R317": false,
                        "R318": false,
                        "R319": false,
                        "R320": false,
                        "R321": false,
                        "R322": false,
                        "R323": false,
                        "R324": false,
                        "R325": false,
                        "R326": false,
                        "R331": false,
                        "R332": false,
                        "R333": false,
                        "R334": false,
                        "R335": false,
                        "R336": false,
                        "R337": false,
                        "R338": false,
                        "R339": false,
                        "R340": false,
                        "R341": false,
                        "R342": false,
                        "R343": false,
                        "R344": false,
                        "R345": false,
                        "R346": false,
                        "R347": false,
                        "R348": false,
                        "R349": false,
                        "R350": false,
                        "R351": false,
                        "R352": false,
                        "R353": false,
                        "R354": false,
                        "R355": false,
                        "R356": false,
                        "R357": false
                    },
                    "extracts": [{
                        "id": "53",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R110_S1_E1",
                        "status": "Declined",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "54",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R110_S1_E2",
                        "status": "Shipped",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "55",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R111_S1_E1",
                        "status": "Requested",
                        "results": "http://s3.amazon.com/12344",
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "56",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R111_S1_E2",
                        "status": "Failed-Sequencing/Assembly",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "57",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R112_S1_E1",
                        "status": "Failed-Sequencing/Assembly",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "58",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R112_S1_E2",
                        "status": "Requested",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "59",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R113_S1_E1",
                        "status": "Accepted",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "60",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R113_S1_E2",
                        "status": "Failed-Sequencing/Assembly",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "61",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R114_S1_E1",
                        "status": "received",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "62",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R114_S1_E2",
                        "status": "received",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "63",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R115_S1_E1",
                        "status": "failed",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "64",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R115_S1_E2",
                        "status": "complete",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "67",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R122_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "68",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R124_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "69",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R125_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "70",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R129_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "71",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R130_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "72",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R131_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "73",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R132_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "74",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R133_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "75",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R138_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "76",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R139_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "77",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R140_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "78",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R141_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "79",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R142_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "80",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R143_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "81",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R144_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "82",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R145_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "83",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R146_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "84",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R147_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "85",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R148_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "86",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R149_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "87",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R150_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "88",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R151_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "89",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R152_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "90",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R153_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "91",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R154_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "92",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R155_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "93",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R156_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "94",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R157_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "95",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R158_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "96",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R161_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "97",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R162_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "98",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R163_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "99",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R164_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "100",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R165_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "101",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R166_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "102",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R167_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "103",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R168_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "104",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R169_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "105",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R170_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "106",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R171_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "107",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R172_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "108",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R173_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "109",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R174_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "110",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R175_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "111",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R176_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "112",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R177_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "113",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R178_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "114",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R179_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "115",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R180_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "116",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R181_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "117",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R182_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "118",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R183_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "119",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R184_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "120",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R185_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "121",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R186_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "122",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R187_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "123",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R188_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "124",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R189_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "125",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R190_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "126",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R191_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "127",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R192_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "128",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R193_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "129",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R194_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "130",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R195_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "131",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R196_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "132",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R197_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "133",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R198_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "134",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R199_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "135",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R200_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "136",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R201_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "137",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R202_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "138",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R203_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "139",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R204_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "140",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R205_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "141",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R206_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "142",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R207_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "143",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R208_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "144",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R209_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "145",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R210_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "146",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R211_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "147",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R212_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "148",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R213_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "149",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R214_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "150",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R215_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "151",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R216_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "152",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R217_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "153",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R218_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "154",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R219_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "155",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R220_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "156",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R221_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "157",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R222_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "158",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R223_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "159",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R224_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "160",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R225_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "161",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R226_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "162",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R227_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "163",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R228_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "164",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R229_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "165",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R230_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "166",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R231_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "167",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R232_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "168",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R233_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "169",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R234_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "170",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R235_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "171",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R236_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "172",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R237_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "173",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R238_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "174",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R240_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "175",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R240_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "176",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R241_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "177",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R241_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "178",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R242_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "179",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R242_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "180",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R243_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "181",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R243_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "182",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R244_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "183",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R244_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "184",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R245_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "185",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R245_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "186",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R246_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "187",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R246_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "188",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R247_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "189",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R247_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "190",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R248_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "191",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R248_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "192",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R249_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "193",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R249_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "194",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R250_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "195",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R250_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "196",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R251_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "197",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R251_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "198",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R252_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "199",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R252_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "200",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R253_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "201",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R253_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "202",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R254_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "203",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R254_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "204",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R255_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "205",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R255_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "206",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R256_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "207",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R256_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "208",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R257_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "209",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R257_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "210",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R258_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "211",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R258_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "212",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R259_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "213",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R259_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "214",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R260_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "215",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R260_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "216",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R261_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "217",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R261_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "218",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R262_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "219",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R262_S2_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "220",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R263_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "221",
                        "requester": "Melanie Richter",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R264_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "222",
                        "requester": "Melanie Richter",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R265_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "223",
                        "requester": "Melanie Richter",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R266_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "224",
                        "requester": "Melanie Richter",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R267_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "225",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R268_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "226",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R269_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "227",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R270_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "228",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R271_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "229",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R272_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "230",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R273_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "231",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R274_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "232",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R275_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "233",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R276_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "234",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R277_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "235",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R278_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "236",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R279_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "237",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R280_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "238",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R281_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "239",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R282_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "240",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R283_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "241",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R284_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "242",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R285_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "243",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R286_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "244",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R287_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "245",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R289_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "246",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R290_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "247",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R291_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "248",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R292_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "249",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R293_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "250",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R294_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "251",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R295_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "252",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R296_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "253",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R297_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "254",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R298_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "255",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R299_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "256",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R300_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "257",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R301_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "258",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R302_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "259",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R303_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "260",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R304_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "261",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R305_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "262",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R306_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "263",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R307_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "264",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R308_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "265",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R309_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "266",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R310_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "267",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R311_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "268",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R312_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "269",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R313_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "270",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R314_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "271",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R315_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "272",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R316_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "273",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R317_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "274",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R318_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "275",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R319_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "276",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R320_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "277",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R321_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "278",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R322_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "279",
                        "requester": "Melanie Richter",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R323_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "280",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R324_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "281",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R325_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "282",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R326_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "287",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R331_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "288",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R332_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "289",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R333_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "290",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R334_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "291",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R335_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "292",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R336_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "293",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R337_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "294",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R338_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "295",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R338_S1_E2",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "296",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R339_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "297",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R339_S1_E2",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "298",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R340_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "299",
                        "requester": "Melanie Richter",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R340_S1_E2",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "300",
                        "requester": "Stephan  Bour",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R341_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "301",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R342_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "302",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R343_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "303",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R344_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "304",
                        "requester": "Luis Cunha",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R345_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "305",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R346_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "306",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R347_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "307",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R348_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "308",
                        "requester": "Luis Cunha",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R349_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "309",
                        "requester": "Luis Cunha",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R350_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "310",
                        "requester": "Stephan  Bour",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R351_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "311",
                        "requester": "Stephan  Bour",
                        "digs_id": "5",
                        "institution": "CRIP",
                        "extract_id": "R352_S1_E1",
                        "status": null,
                        "results": null,
                        "digs": "JHU-Thielen"
                    }, {
                        "id": "312",
                        "requester": "Luis Cunha",
                        "digs_id": "1",
                        "institution": "CRIP",
                        "extract_id": "R353_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UT-Bahl"
                    }, {
                        "id": "313",
                        "requester": "Stephan  Bour",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R354_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "314",
                        "requester": "Stephan  Bour",
                        "digs_id": "3",
                        "institution": "CRIP",
                        "extract_id": "R355_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "UGA-Tripp"
                    }, {
                        "id": "315",
                        "requester": "Stephan  Bour",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R356_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }, {
                        "id": "316",
                        "requester": "Stephan  Bour",
                        "digs_id": "2",
                        "institution": "CRIP",
                        "extract_id": "R357_S1_E1",
                        "status": "Requested",
                        "results": null,
                        "digs": "MtSinai-van-Bakel"
                    }],
                    "user_institutions_roles": "'CRIP','Emory-UGA-CEIRS','Johns-Hopkins-CEIRS','NYICE','StJude-CEIRS','UT-Bahl_1000','MS-VanBakel_2000','UGA-Tripp_3000','UGA-Perez_4000','JHU-Thielen_5000'",
                    "user_roles": ["CRIP--ReadRole", "Emory-UGA-CEIRS--ReadRole", "Johns-Hopkins-CEIRS--ReadRole", "NYICE--ReadRole", "StJude-CEIRS--ReadRole", "CRIP--WriteRole", "Emory-UGA-CEIRS--WriteRole", "Johns-Hopkins-CEIRS--WriteRole", "NYICE--WriteRole", "StJude-CEIRS--WriteRole", "UT-Bahl_1000--ReadRole", "MS-VanBakel_2000--ReadRole", "UGA-Tripp_3000--ReadRole", "UGA-Perez_4000--ReadRole", "JHU-Thielen_5000--ReadRole"]
                };
                dispatch(getExtractsSuccess(extracts))
                // TODO: remove these hardcoded extracts
            }
            else {
                fetch(api + "/extracts/", fetchParams)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then(json => {
                        if (json) {
                            if (json.status) {
                                dispatch(getExtractsSuccess(json))
                                setTimeout(() => resolve(), 100);
                            }
                            else {
                                var error = {};
                                error.statusText = json.statusText
                                dispatch(getExtractsFailure(error));
                            }
                        }

                    })
                    .catch(error => {
                        const response = error.response;
                        console.log("No Extracts", error)
                        if (response === undefined) {
                            dispatch(getExtractsFailure(error));
                        } else {
                            parseJSON(response)
                                .then(json => {
                                    error.status = response.status;
                                    error.statusText = response.statusText;
                                    dispatch(getExtractsFailure(error));
                                });
                        }
                        resolve()
                    });

                //.then(json => console.log(json));
            }
        })
    }

}

export const edit = (extract_row_id, row) => {
    "use strict";

    return {
        type: EDITING_STATUS,
        extract_row_id: extract_row_id,
        row: row,
    }
}

export const check = (extract_row_id, row) => {
    "use strict";

    return {
        type: SET_EXTRACTS_CHECKED,
        extract_row_id: extract_row_id,
        row: row,
    }
}

export const setStatusSuccess = (extract_row_id, row, name, status) => {
    "use strict";

    return {
        type: SET_STATUS,
        extract_row_id: extract_row_id,
        row: row,
        column_name: name,
        status: status,

    }
}

export const setStatus = (extract_row_id, row, name, status, extracts) => {
    if (extract_row_id != null && extract_row_id != undefined && extract_row_id != "") {
        var extracts_to_update_status = []
        extracts.map((extract) => {
            if (extract.checked == true) {
                extracts_to_update_status.push(extract.id)
            }
        })
        if (!$.inArray(extract_row_id, extracts_to_update_status)) {
            extracts_to_update_status.push(extract_row_id)
        }

        var fetchParams = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'localhost',
                'AuthToken': 'Bearer ' + authorization_token
            }
        }

        fetchParams["body"] = JSON.stringify({
            extract_row_id: extract_row_id,
            name: name,
            value: status,
            extracts_to_update_status: extracts_to_update_status
        })
        return dispatch => {
            //dispatch(getExtractsRequest()); // show spinner while loading

            //fetch('http://swt.niaidceirs-dev.net/dpccsamples?sample_identifier=' + sample)
            //1136032706272
            var api = API_ENDPOINT()
            fetch(api + "/extracts/", fetchParams)
                .then(checkStatus)
                .then(parseJSON)
                .then(json => {
                    if (json.status) {
                        dispatch(setStatusSuccess(extract_row_id, row, name, status))
                    }
                    else {
                        dispatch(getExtractsFailure({
                            "status": 200,
                            "statusText": json.statusText,
                        }))
                    }

                })
                .catch(error => {
                    const response = error.response;

                    if (response === undefined) {
                        dispatch(getExtractsFailure(error));
                    } else {
                        parseJSON(response)
                            .then(json => {
                                error.status = response.status;
                                error.statusText = response.statusText;
                                error.message = json.message;
                                dispatch(getExtractsFailure(error));
                            });
                    }
                });
            //.then(json => console.log(json));
        }
    }
}

export const filterBySearch = (v) => {
    "use strict";
    return {
        type: SET_FILTER_SEARCH,
        value: v
    }
}

export const filterExtracts = (filterName, value, checked) => {
    "use strict";
    return {
        type: SET_FILTER_EXTRACTS,
        filterName: filterName,
        value: value,
        checked: checked

    }
}


export const _sort = (column_name) => {
    "use strict";
    return {
        type: SORT_EXTRACTS,
        column_name: column_name
    }

}