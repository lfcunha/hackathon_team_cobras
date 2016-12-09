/**
 * Created by luiscunha on 4/10/16.
 */

import React from 'react'
import Title from "../PageTitle"
import JobStatusTable from './jobStatusTable'
import FilterAndSearch from "./filterAndSearch"

const JobStatus = (props) => {
    return (
        <div>
            <Title title="Job Queue and Status Management" />
            {props.requesters && <FilterAndSearch {...props}/>}
            <JobStatusTable {...props} />
        </div>
    )
}

export default JobStatus