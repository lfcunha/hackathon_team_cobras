/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import ThankYouMessage from "./ThankYou"
import { push, goBack } from 'react-router-redux';
import {getExtracts} from '../../actions/extracts';
import {resetJobsList} from '../../actions/newRequest';

const ThankYouComponent = (props) => {
    return (
        <div id="thankYou" style={{backgroundColor:"#ffffff"}}>
            <ThankYouMessage {...props} />
        </div>
    )
}


let facilities = {"DIGS-1": "UT-Bahl DIGS Core",
              "DIGS-2": "Mt.Sinai-van Bakel DIGS Core" ,
              "DIGS-3": "UGA-Tripp DIGS Core",
              "DIGS-4": "UGA-Perez DIGS Core",
              "DIGS-5": "UGA-Perez DIGS Core"}

const mapStateToProps = (state) => {
    return {
        requestID: state.reviewRequest.request_id,
        facility: facilities[state.fseSelection.choice],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirectBack: () => {
            "use strict";
            dispatch(goBack())
        },
        redirectHome: () => {
            "use strict";
            dispatch(resetJobsList())
            dispatch(push('/'))
            dispatch(getExtracts())
        }
    }
}

const ThankYou = connect(
    mapStateToProps,
    mapDispatchToProps
)(ThankYouComponent);

export default ThankYou