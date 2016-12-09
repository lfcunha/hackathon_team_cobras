/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import {Requester} from './requester'
import * as actions_ from '../../actions/selectFacility'
import {addUserInfo} from '../../actions/userInfo'
import { push, goBack } from 'react-router-redux';
import Title from "../PageTitle"
import FlashMessage from '../FlashMessage/flashMessage'


const RequesterInformation = (props) => {
    return (
        <div>
            <Title title="Requester Information"/>
            <FlashMessage {...props}/>
            <Requester {...props}/>
        </div>
    )
}

var handleInput = function (props, e) {
    var value = e.target.value;
    if (!value) {
        value = $(".form-control").val()
    }
    var name = e.target.name
    props.addAttribute(name, value)
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        samples: state.reviewTable.samples,
        columns: ["name",
            "institution",
            "street_address",
            "city",
            "state_province",
            "zipcode",
            "country",
            "daytime_phone",
            "email"],
        flashMessage: state.fseSelection.flash,
        fetchError: state.fseSelection.fetchError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        assignSequencingFacility: (zipcode, samples) => {
            "use strict";
            dispatch(actions_.selectFacility(zipcode, samples))
        },
        addAttribute: (column, value) => {
            "use strict";
            dispatch(addUserInfo(column, value))
        },
        handleInput: (props, e) => {
            return handleInput(props, e)
        },
        redirectBack: (d) => {
            "use strict";
            dispatch(goBack())
        }
    }
}

const RequesterInformation_ = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequesterInformation);

export default RequesterInformation_