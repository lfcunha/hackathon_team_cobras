/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import Map from './map'
import {connect} from 'react-redux'
import FlashMessage from '../FlashMessage/flashMessage'
import * as actions_ from '../../actions/violations'

const HomePageComponent = (props) => {
    return (
        <div>
            <Map {...props} />
            <FlashMessage {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        violations: state.violations.violations,
        var1: "BBBB"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMarkerRightclick: (index, e) => {
            "use strict";
            console.log(index)
            console.log(e)
    }
    }
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);


export default HomePage