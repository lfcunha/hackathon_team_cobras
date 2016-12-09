/**
 * Created by luiscunha on 4/18/16.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

const AddNewSample = (props) => {
    var isFetching = props.dpccSamples.fetching;
    const styles = {
        button: {
            marginTop: 0 + 'px !important',
            marginLeft: 10
        },
        inputStyle: {
            marginLeft: 10,
            /*fontFamily: 'Roboto',*/
            color: "gray",
            /*fontSize: '0.5em'*/
        },
        divStyle: {
            marginLeft: 5,
            marginBottom: 20,
        }
    }

    return (
        <div style={styles.divStyle}>
            Retrieve Sample by ID: <span style={styles.inputStyle}>

            {(!isFetching ) &&
            <span>
                <TextField hintText="SampleID" id="addSampleID"
                           floatingLabelText="Enter a Sample Identifier"
                           onKeyDown={props.handleTextFieldChange.bind(this, props)}/>
                <RaisedButton
                    default={true}
                    label="Add To Job List"
                    style={styles.button}
                    onClick={props.handleTextFieldChangeButton.bind(this, props)}
                />
            </span>
            }
            {isFetching &&
            <span>
                <TextField hintText="SampleID" id="addSampleID"
                           floatingLabelText="Enter a Sample Identifier"
                           onKeyDown={props.handleTextFieldChangeButton.bind(this, props)}
                           disabled={true}
                />
                 < RaisedButton
                     default={true}
                     label="Add To Job List"
                     style={styles.button}
                     color="#900018"
                     onClick={props.handleTextFieldChange.bind(this, props)}
                 />
                <CircularProgress style={{width:50, marginTop: 0}}/>
            </span>
            }
            </span>
        </div>
    )
};

export default AddNewSample
