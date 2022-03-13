import React from "react";
import ExpenceItem from './ExpenceItem';
import "./Expences.css"
import ExpenceFilter from "./ExpenceFilter"
import { useState } from "react";
import ExpenceChart from "./ExpenceChart";



const Expences =( {expenceData}) => {

    const [ filterYear, setFilterYear]= useState("2022");

    const UpdatedFilterYear=(year)=>{
        setFilterYear(year);
    }

    let filterRecord =expenceData.filter((exp)=>{
        return exp.date.getFullYear() == filterYear ;
    })

    return(
        <div className="LowerBox">
        {/* <ExpenceItem expenceData={expenceData[0]}/>
        <ExpenceItem expenceData={expenceData[1]}/>
        <ExpenceItem expenceData={expenceData[2]}/> */}

        <ExpenceFilter UpdatedFilterYear={UpdatedFilterYear} filterYear={filterYear} />
        <ExpenceChart filterRecord={filterRecord} />
        {   filterRecord.length > 0 ?
                filterRecord.map(row =>{
                return(
                    <ExpenceItem expenceData={row}/>
                     );
                })
            : <h1 style={{color:"red"}}>No data found..!</h1>
        }
       
        </div>
    )
}

export default Expences;