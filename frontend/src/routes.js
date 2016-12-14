/**
 * Created by luiscunha on 4/4/16.
 */

import React from 'react' // eslint-disable-line
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Analysis from './containers/Analysis'
import Home from "./containers/Home"


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='analysis' component={Analysis} />
    </Route>
)