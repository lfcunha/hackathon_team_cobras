/**
 * Created by luiscunha on 5/13/16.
 */

import React from 'react'
import {Link} from 'react-router'
import {IndexLink} from 'react-router'
import FlatButton from 'material-ui/FlatButton';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//import {decodeUserProfile} from '../../utils/utils'
//var token = decodeUserProfile(authorization_token);


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

            {!props.violationsFetching &&
                <Link to='/analysis' disabled onClick={props.reset}><FlatButton label="Analysis" secondary={true}
                                               style={styles.headline} /></Link>
            }

            {props.violationsFetching &&
            <Link to='/analysis'  onClick={props.reset}> <FlatButton label="analysis" disabled={true}  secondary={true} style={styles.headline}/></Link>
            }

        </div>

)};


export default TabsNavigation;