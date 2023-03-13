import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HookGithubUser } from "./HookGithubUser";


export function GithubUser({username}){
    const {data}=HookGithubUser({username});

    return (
    <div>
        {data && <h1>User Name: {data.name || data.login} </h1>} 
    </div>
    )
}