import React from "react";
export function Sum({numbers=[232, 344, 41, 81, 2]}){
        const calc = numbers.reduce((a,b)=> a+b )
                return <h1>The sum is: {calc}</h1>
}