import React from "react";
import { useMemo } from "react"

export function FilteredList({data}){
  
    const adults=useMemo(()=>{
        return data.filter((user)=> user.age >18)
    }, [data]);
    return(
        <div>
            {adults.map(user=>
                <li>{user.name}</li>
            )}
        </div>
    )
}