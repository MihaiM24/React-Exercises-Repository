import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function CarDetails() 
{
    const [model, setModel]= useState({model: "Break"});
    const [year, setYear]= useState({year: 6});
    const [color, setColor]= useState({color: "white"});

    const defaultModel=useRef(model);
    const defaultYear=useRef(year);
    const defaultColor=useRef(color);


useEffect(()=>{
    defaultModel.current=model;
    defaultYear.current=year;
    defaultColor.current=color;
}, [model,year,color])

const car={model:defaultModel.current, year:defaultYear.current, color:defaultColor.current}
console.log(car)

return(
    <div>
        <form>
            <input 
            name="model"
            ref={defaultModel}
            onChange={e=>setModel(e.target.value)}/>
            <br/>

            <input 
            name="color"
            ref={defaultColor}
            onChange={e=>setColor(e.target.value)}/>
            <br/>

            <input 
            name="year"
            ref={defaultYear}
            onChange={e=>setYear(e.target.value)}/>
            <br/>

        </form>
   
    </div>
    )
}