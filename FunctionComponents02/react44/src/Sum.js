import React from "react";
export function Sum({numbers}){
        const calc = numbers.reduce((a,b)=> a+b )
                return <h1>The sum is: {calc}</h1>
}