import React from "react"
import { useState } from "react"
import { useEffect } from "react"

export function ClickCounter({initialValue=0 , incrementBy=1}){
    const [count,setCount]=useState(initialValue)
    const clickButton=()=>{
            setCount(
                count=>count+incrementBy
            )
    }

    const onCounterChange=(count)=>{
        document.title = `You clicked ${count} times`;
    }

    useEffect(()=>{
        onCounterChange(count)
    }); 

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={clickButton}>Click Me</button>
        </div>
    )
    
}