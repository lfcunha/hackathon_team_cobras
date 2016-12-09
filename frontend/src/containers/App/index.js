/**
 * Created by luiscunha on 3/30/16.
 */

import React from 'react'
import Header from '../../components/Header'
import "../../assets/css/style.css"
import "../../assets/css/fonts/roboto.css"
//local material-icons via cdn. imported won't work in safari

const App = (props) => {

    const styles = {
        sides: {
            width: 2 + "%"
        },
        center: {
            width: 96 + "%"
        }
    }

    const {children} = props;
    return (
        <div>
            <Header />
            <main>
                <div className="container appcontainer" style={{marginTop:10}}>
                    <div className="row">
                        <div className="col-md-4" style={styles.sides}></div>
                        <div className="col-md-4" style={styles.center}>
                            {children}
                        </div>
                        <div className="col-md-4" style={styles.sides}></div>
                    </div>
                </div>
            </main>
        </div>)
}


export default App

