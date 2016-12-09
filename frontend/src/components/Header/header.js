/**
 * Created by luiscunha on 4/5/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import Tabbar from "./tabbar"
import * as actions_ from '../../actions/newRequest'

export default (props) => {
    return (
        <header>
            <TabbarComponent />
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        extractsFetching: state.extracts.fetching || false,
        facilitiesFetching: state.myFacility.fetching

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        reset: () => {
            "use strict";
            dispatch(actions_.resetJobsList())
        }
    }
}

const TabbarComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabbar);