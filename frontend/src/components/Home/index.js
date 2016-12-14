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
        violations: state.violations.extracts,
        var1: "AAAAAA"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);


export default HomePage