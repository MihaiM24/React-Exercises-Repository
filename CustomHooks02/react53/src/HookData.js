import { useState } from "react";
import { useEffect } from "react";

export function HookData(){
    const [data,setData]=useState("");
    
    useEffect(()=>
    console.log(data),[data])

   const handleDataChange=(event)=>{
   const {name,value}=event.target;
    setData(data=>{
        return{
        ...data,
        [name]:value
        }
    })
    }
   return{
    username:data.username,
    password:data.password,
    handleDataChange
   }
}