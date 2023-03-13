import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
class App extends React.Component{
state={
    language:"en"
}
handleLanguageChange=(event)=>{
    this.setState({
        language:event.target.value
    })
}
render(){
return (
      <div>
      <select value={this.state.language} onChange={this.handleLanguageChange}>
      <option value="en">English</option>
      <option value="ro">Romanian</option>
      </select>
    <LanguageContext.Provider value={this.state.language}>
    <DisplayLanguage />
    </LanguageContext.Provider>
  
  </div>
  
  
)
  }
}
export default App;