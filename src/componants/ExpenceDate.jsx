import React from "react";
import "./ExpencesDate.css"
const ExpenceDate=({expenceData})=>{

    let month= expenceData.date.toLocaleString("en-us", {month: "long" });
    let year= expenceData.date.getFullYear();
    let date= expenceData.date.getDate();

    return(
        <div className="dateStyle">
            <div><b>{month}</b></div>
            <div>{year}</div>
            <div>{date}</div>

        </div>
    );
}

export default ExpenceDate;