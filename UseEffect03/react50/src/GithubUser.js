import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function GithubUser( {username} ) {
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
             return response.json();
        })
        .then((json)=>{
            console.log(json);
            setData(json)
        }) 
    },[username])

return (
    <div>
        {data && <h1>Username: {data.name}</h1>}
    </div>
)
}