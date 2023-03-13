import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App (){
  const [language,setLanguage]=useState("en")
  
  const handleLanguageChange=(event)=>{
   setLanguage(
      event.target.value
    ) }

return (
    <div>
        <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ro">Romanian</option>
        </select> 
        <LanguageContext.Provider value={language}>
            <DisplayLanguage />
        </LanguageContext.Provider>
    </div>
)}
