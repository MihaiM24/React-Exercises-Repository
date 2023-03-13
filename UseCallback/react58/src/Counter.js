import React from "react";
import { useCounter } from "./useCounter";

export function Counter({initialValue=0}){
    const {count,increment,decrement,reset}=useCounter(initialValue);
return(
    <div>
        <h1>Counter :{count}</h1>
        <button name="increme" onClick={increment}>Increase number</button>
        <button name="decrease" onClick={decrement}>Decrease number</button>
        <button  name="reset" onClick={reset}>Reset</button>
    </div>
    )
}