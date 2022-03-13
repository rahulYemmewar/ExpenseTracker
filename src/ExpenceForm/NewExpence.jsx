import React, { useState } from "react";
import ExpencesForm from "./ExpenceForm";
import "./ExpencesForm.css";
 
const NewExpence=(props)=> {

    const [ showExpencesFrom, setShowExpencesFrom]=useState(false);

    const getExpencesData=(data)=>{
        //alert("hii from new");
        //console.log(data);
        props.getExpencesRecod(data);
    }


    return(<div className="UpperBlock">
        {!showExpencesFrom && <button onClick={()=> setShowExpencesFrom(true)} className="AddNewExpencesButtonStyle">Add New Expences</button>}
    {showExpencesFrom && <ExpencesForm getExpencesData={getExpencesData} setShowExpencesFrom={setShowExpencesFrom} />}
    </div>)
   
}

export default NewExpence;