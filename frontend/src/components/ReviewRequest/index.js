/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import Requester from './requesterInfo'
import RequestedSamplesTable from './requestedSamples'
import Title from "../PageTitle"
import * as actions_ from '../../actions/shippingManifest'
import { push, goBack } from 'react-router-redux';
import FlashMessage from '../FlashMessage/flashMessage'

const ReviewRequestComponent = (props) => {
    return (
        <div id="Manifesto1" style={{backgroundColor:"#ffffff"}}>
            <Title title="Please review your request"/>
            <FlashMessage {...props}/>
            <Requester {...props} />
            <RequestedSamplesTable {...props} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        request_id: state.reviewTable.request_id,
        samples: state.reviewTable.samples,
        user: state.user,
        facility: state.fseSelection,
        columns: ["sample_identifier", "project_identifier", "submission_type", "submission_id", "extract_id",
            "extract_material", "analysis_type"],
        flashMessage: state.reviewRequest.flash,
        fetchError: state.reviewRequest.fetchError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createShippingManifest: (data, samples, user, facility, already_created) => {
            "use strict";
            dispatch(actions_.createShippingManifest(data, samples, user, facility, already_created))
        },
        redirectBack: () => {
            "use strict";
            dispatch(goBack())
        },
        other: () => {
            "use strict";
            dispatch(push('/reviewRequest'))
        }

    }
}

const ReviewRequest = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewRequestComponent);

export default ReviewRequest