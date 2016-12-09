/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import FlashMessage from '../FlashMessage/flashMessage'
import {FacilityManagementWindow} from './FacilityManagementWindow'
import {FacilitySelection} from './FacilitySelection'
import * as actions_ from '../../actions/myFacility'
import Title from "../PageTitle"

const FacilityManagementComponent = (props) => {
    return (
        <div>
            <Title title="My Facility"/>
            <FlashMessage {...props}/>
            <FacilityManagementWindow {...props} />
        </div>
    )
}


function handlechooseFacility(props, e){
    var value = e.target.value;
    props.addFacilityChoice(value)

}

const mapStateToProps = (state) => {
    return {
        data: state.myFacility,
        fetchError: state.myFacility.fetchError,
        requesting: state.myFacility.requesting,
        flashMessage: state.myFacility.flash,
        status: state.myFacility.status,
        fetching: state.myFacility.fetching,
        myDigs: state.user.digs,
        myCurrentFacility: state.user.myCurrentFacility
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle_propagation_month_to_month: (myCurrentFacility, propagate_month_to_month) => {
            dispatch(actions_.updateMyFacility(myCurrentFacility, "toggle_propagation_month_to_month", {value: propagate_month_to_month}))
        },
        capacityChange: (myCurrentFacility, e) => {
            dispatch(actions_.updateMyFacility(myCurrentFacility, "capacity", {value: e.target.value}))

        },
        instrumentChange: (myCurrentFacility, instrument, e, checked) => {
            dispatch(actions_.updateMyFacility(myCurrentFacility, "instrument", {instrument: instrument, checked: checked}))
        },
        setMyFacility: (e) => {
            "use strict";
            dispatch(actions_.setMyFacility(e.target.value))
        }


    }
}

const FacilityManagement = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacilityManagementComponent);


export default FacilityManagement