import React from "react";
import { LanguageContext } from "./LanguageContext";
export class DisplayLanguage extends React.Component{
    render(){
        return(
        <LanguageContext.Consumer>
       {
            (language)=>(  
            <div>
            <h1> You are speaking {language}</h1>
            </div>)
        }
        </LanguageContext.Consumer>
    )}
}