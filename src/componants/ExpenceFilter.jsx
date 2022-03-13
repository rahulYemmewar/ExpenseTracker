import React from "react";
import "./ExpenceFilter.css"

const ExpenceFilter =(props)=>{

    return(<div className="FlexFilter">
<div className="h3TagStyle"><h3>Filter by Year</h3></div>
<div className="SelectPosition"><select onChange={(e) => props.UpdatedFilterYear(e.target.value)} value={props.filterYear} className="SelectStyle">
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    </select></div>

    </div>)
}

export default ExpenceFilter;