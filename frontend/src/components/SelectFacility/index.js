/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import {FacilitySelectionMenu} from './selectFacility'
import * as actions_ from '../../actions/selectFacility'
import { push, goBack } from 'react-router-redux';
import Title from "../PageTitle"
import FlashMessage from '../FlashMessage/flashMessage'

const FacilitySelectionComponent = (props) => {
    return (
        <div>
            <Title title="Select Facility"/>
            <FlashMessage props={props}/>
            <FacilitySelectionMenu {...props} />
        </div>
    )
}

function handlechooseFacility(props, e){
    var value = e.target.value;
    props.addFacilityChoice(value)

}

const mapStateToProps = (state) => {
    return {
        data: state.fseSelection,
        flashMessage: state.fseSelection.flash,
        fetchError: state.fseSelection.fetchError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseFacility: (props, e) => {
            "use strict";
                return handlechooseFacility(props, e)
        },
        addFacilityChoice: (digs_choice) => {
            "use strict";
            dispatch(actions_.fseChoice(digs_choice))
        },
        redirectBack: () => {
            "use strict";
            dispatch(goBack())
        },
        confirmFacilitySelection: () => {
            "use strict";
            dispatch(push('/reviewRequest'))
        }

    }
}

const FacilitySelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacilitySelectionComponent);


export default FacilitySelection