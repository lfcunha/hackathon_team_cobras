/**
 * Created by luiscunha on 4/19/16.
 */

import React from 'react'

const Title = ({title}) => {
    "use strict";

    const styles = {
        divStyle: {
            marginTop: 20 + "px !important",
            marginBottom: 20 + "px !important",
        },

        title: {
            margin: "0 auto",
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 30,
            color: "rgb(151,202,247)"
        },
        flexbox: {
            marginTop: 20,
            display: "flex",
            textAlign: "center",
            margin: "0 auto"
        }
    }

    return (
        <div className="mytitle" id="pageTitle" style={styles.divStyle}>
            <h4 style={styles.title}>{title}</h4>
        </div>
    )
}



export default Title;