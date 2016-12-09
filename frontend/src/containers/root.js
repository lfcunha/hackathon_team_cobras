/**
 * Created by luiscunha on 4/4/16.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from '../routes'
import {syncHistoryWithStore} from 'react-router-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {black} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: "rgb(1,38,65)",
        primary1Color: "rgb(156, 204, 257)",
    },
    flatButton: {
        fontSize: 17,
        fontWeight: 500,
    },
    raisedButton: {
        secondaryColor: "#8f1a00",
        defaultTextColor: "#8f1a00"
    }
})

/*
*  To remove the ?_k=xxx in the url , could use:
* import createBrowserHistory from 'history/lib/createBrowserHistory';
* and
* <Router history={createBrowserHistory()}>{routes}</Router>
*
* but then loose ability to rerender if user reloads page
*
*/

export default class Root extends React.Component {

    render () {
        const { store } = this.props
        const history = syncHistoryWithStore(hashHistory, store)
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Router history={history}>{routes}</Router>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: React.PropTypes.object.isRequired
}