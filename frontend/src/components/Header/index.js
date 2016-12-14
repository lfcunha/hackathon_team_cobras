/**
 * Created by luiscunha on 4/5/16.
 */

import React from 'react'
import {connect} from 'react-redux'
import Tabbar from "./tabbar"

export default (props) => {
    return (
        <header>
            <TabbarComponent />
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        violationsFetching: state.violations.fetching || false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            "use strict";
        }
    }
}

const TabbarComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabbar);