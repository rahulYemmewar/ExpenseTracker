import React from "react";
import "./ExpencesItem.css"
import ExpenceDate from "./ExpenceDate";

const ExpenceItem= (props) => {
    return(<div>
<div className="rowStyle">

<ExpenceDate expenceData={props.expenceData}/>
<div className="itemstyle"><h2>{props.expenceData.item}</h2></div>
<div className="priseStyle"><h3>${props.expenceData.price}</h3></div>

</div>

    </div>
    )
}

export default ExpenceItem ;