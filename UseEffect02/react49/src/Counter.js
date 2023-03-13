import React from "react";
import { useState } from "react"
import { useEffect } from "react";
export function Counter(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const id= setInterval(()=>{   
            setCount((count)=>count+1) },1000);  
        return()=>{ clearInterval(id) }
    })
    return(<div><h1>Counter: {count}</h1></div>)
    
    }