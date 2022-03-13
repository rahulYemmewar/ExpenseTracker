import React from "react";
import { useState } from "react";
import "./ExpencesForm.css";

const ExpencesForm= (props)=> {

    const [title, setTitle]= useState("Addvic");
    const [amount, setAmount] =useState("0.0");
    const [date, setDate] =useState("");

    const updateTitle= (e)=>{
        setTitle(e.target.value);
       
    }

    const handlesubmit= (e)=>{ //when data submit then reset the page this function do this work
        //alert("Add Expence Successfully");
        e.preventDefault();//stop the page for reloading
        //console.log(title, amount, date);

        // let month= date.toLocaleString("en-us", {month: "long" });
        // let year= date.getFullYear();
        // let date= date.getDate();
    
        const data ={
            id: Math.random().toString(),
            date: new Date(date),
            item : title,
            price: amount, 
    
        }
        props.getExpencesData(data);
        setTitle("");
        setAmount("");
        setDate("");

        
    }
     
    return(<form onSubmit={handlesubmit} >
        <div  className="upperSmallBlock">
            <div className="TitleStyle"><label>Title</label><input type="text" onChange={updateTitle} value={title} className="BlockStyle"/></div>
            <div className="TitleStyle"><label>Amount</label><input type="number" onChange={(e)=> {setAmount(e.target.value)}} value={amount} className="BlockStyle"/></div>
            <div className="TitleStyle"><label>Date</label><input type="date" onChange={(e)=>{setDate(e.target.value)}} value={date} className="BlockStyle"/></div>
         </div>

    <div>
        <button onClick={()=>{props.setShowExpencesFrom(false) }} className="CancelButtonStyle">Cancel</button>
        <button  className="AddExpence"><b>Add Expence</b></button>
    </div>
    </form>)
    
    
}
export default ExpencesForm;