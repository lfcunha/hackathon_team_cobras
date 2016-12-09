/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react'

export const FacilitySelection = (props) => {
    "use strict";

    const styles = {
        menuTitle: {
            margin: "20px 0px 0px 0px",
            padding: "5px 0px 5px 0px",
            /*fontSize: "18px !important",*/
        }
    }

    return (
        <div style={{border: '0px solid black; margin-bottom:0px'}}>
            <div className="flexbox-container" style={styles.menuTitle}>
                <div style={{paddingTop:17}}><strong>Facility:</strong></div>
                <div>
                    <SelectCell options={props.myDigs} {...props} name="myFacility"
                                currentDigs={props.myCurrentFacility}/>
                </div>
            </div>
        </div>

    )
}


const SelectCell = (props) => {
    "use strict";
    var cl = "";
    cl += " form-control"
    //

    return (
        ((props.myDigs.length > 1) &&
        <select style={{width: 150}} className={cl} id={props.id_} name={props.name}
                defaultValue={props.currentDigs}
                onChange={props.setMyFacility}>
            {props.options.map((option, idx) => {
                return (
                    <option value={option} key={idx}>{option}</option>
                )
            })}
        </select>)
        ||
        ((props.myDigs.length < 2) &&
        <select style={{width: 150}} className={cl} id={props.id_} disabled name={props.name}
                defaultValue={props.currentDigs}
                onChange={props.setMyFacility}>
            {props.options.map((option, idx) => {
                return (
                    <option value={option} key={idx}>{option}</option>
                )
            })}
        </select>)
    )


}