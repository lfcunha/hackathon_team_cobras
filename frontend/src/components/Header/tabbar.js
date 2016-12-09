/**
 * Created by luiscunha on 5/13/16.
 */

import React from 'react'
import {Link} from 'react-router'
import {IndexLink} from 'react-router'
import FlatButton from 'material-ui/FlatButton';
import {decodeUserProfile} from '../../utils/utils'

var token = decodeUserProfile(authorization_token);


const styles = {
    headline: {
        color: "rgb(1,38,65)"
        /*
         Other FlatButton Attributes are set in muitheme, set in root.js
         */
    },
    flexbox: {
        marginTop: 20,
        display: "flex",
        display: "-ms-flexbox",
        display: "-webkit-flex"
        }
};

const TabsNavigation = (props) => {
    var getChildContext = () => {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    return(

        <div className="swtflexbox" style={styles.flexbox}>
            <IndexLink  to='/'> <FlatButton label="Home" secondary={true} style={styles.headline} /> </IndexLink>

            {!props.extractsFetching && !props.facilitiesFetching &&
                <Link to='/newRequest' onClick={props.reset}><FlatButton label="New Request" secondary={true}
                                               style={styles.headline} /></Link>

            }

            {props.extractsFetching && props.facilitiesFetching &&
                <FlatButton label="New Request" secondary={true} style={styles.headline}/>
            }

            {token.digs && (!props.facilitiesFetching) &&
            <Link to='/facilityManagement'><FlatButton label="Facility Management" secondary={true}
                                                  style={styles.headline}/></Link>
            }
            {token.digs && (props.facilitiesFetching) &&
            <FlatButton label="Facility Management" secondary={true}
                                                       style={styles.headline}/>
            }
        </div>

)};


export default TabsNavigation;