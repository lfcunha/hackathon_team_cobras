/**
 * Created by luiscunha on 4/4/16.
 */

import React from 'react' // eslint-disable-line
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import NewRequest from './containers/NewRequest'
import FacilityManagementContainer from "./containers/FacilityManagement"
import NewRequestDataContainer from './containers/NewRequestData'
import RequestStatus from './containers/RequestStatus/'
import NotFoundPage from './containers/NotFoundPage/'
import Results from "./containers/Results/"
import FacilitySelectionContainer from "./containers/FacilitySelection/"
import RequesterInformationContainer from './containers/RequesterInformation'
import ReviewRequestContainer from './containers/ReviewRequest/'
import ThankYouContainer from './containers/ThankYou/'
import Home from "./containers/Home"


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='requestStatus' component={RequestStatus} />
        <Route path='facilityManagement' component={FacilityManagementContainer} />
        <Route path='newRequest' component={NewRequest} />
        <Route path='newRequestData' component={NewRequestDataContainer} />
        <Route path='results' component={Results} />
        <Route path='requesterInformation' component={RequesterInformationContainer} />
        <Route path='selectFacility' component={FacilitySelectionContainer} />
        <Route path='reviewRequest' component={ReviewRequestContainer} />
        <Route path='thankYou' component={ThankYouContainer} />
        <Route path='*' component={NotFoundPage}/>
    </Route>
)