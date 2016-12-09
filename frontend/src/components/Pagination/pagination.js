/**
 * Created by luiscunha on 6/14/16.
 */


import React from 'react';

const Pagination = (props) => {
    "use strict";

    var {selectPage, setPage, totalSamples, numberRows, currentPage} = props
    var pages =  Array.from(new Array(Math.ceil(totalSamples/numberRows)), (x,i) => i)

    return (
        <div id="pagination" style={{fontSize: 20, marginRight: 10, float:"right"}}>
            <span style={{fontSize: "0.75em", marginRight: 10}}>Select page:</span>
            <select style={{fontSize: "0.75em"}} className={"pagination"} id={"page_select"} name={"pagination"} defaultValue={currentPage || 0}
                    onChange={selectPage.bind(this, setPage)}>
                {
                    pages.map((option, idx) => {
                        return (
                            <option value={option + 1 } key={idx}>{option + 1}</option>
                        )
                    })}
            </select>
        </div>
    )

}

export default Pagination