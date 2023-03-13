import React from "react";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export function DisplayLanguage (){
    const language=useContext(LanguageContext);
    return(<h1> You are speaking {language}</h1>)

}