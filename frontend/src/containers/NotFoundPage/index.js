/**
 * Created by luiscunha on 4/5/16.
 */


import React from 'react'

const NotFoundPage = (props) => {
    return (
        <div style={{marginTop:100}}>
            <h1>Default: Page Not Found...</h1>
            <p>Sorry, but the page at <b> {window.location.pathname} </b> does not exist.</p>
        </div>
    )
}

export default NotFoundPage