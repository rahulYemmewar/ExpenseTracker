import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart =(props)=> {
    
    

    let priceArray = props.chartDataPoints.map((row)=> row.price)
    let maxPrice = Math.max(...priceArray);

    return (<div className="Chart">
            {
                props.chartDataPoints.map((record)=>{
                    return( <ChartBar label={record.label} value={record.price} maxValue={maxPrice}/> )
                })

            }
            
            
            
            
            
           
           
           
           
           
           
            {/* <ChartBar label="Jan" value={799} maxValue={null}/>
            <ChartBar label="Mar" value={799} maxValue={null}/>
            <ChartBar label="Apr" value={799} maxValue={null}/>
            <ChartBar label="May" value={799} maxValue={null}/>
            <ChartBar label="Jun" value={799} maxValue={null}/>
            <ChartBar label="Jul" value={799} maxValue={null}/>
            <ChartBar label="Aug" value={799} maxValue={null}/>
            <ChartBar label="Sep" value={799} maxValue={null}/>
            <ChartBar label="Oct" value={799} maxValue={null}/>
            <ChartBar label="Nov" value={799} maxValue={null}/>
            <ChartBar label="Dec" value={799} maxValue={null}/> */}
            
            
    </div>)

}

export default Chart;