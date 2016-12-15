/**
 * Created by luiscunha on 12/14/16.
 */

import React from 'react';
import {greatPlaceStyle} from './my_great_place_styles.js';

const MyGreatPlace = (props) => {
        return (
            <div style={greatPlaceStyle}>
                {props.text}
            </div>
        );
}

export default MyGreatPlace