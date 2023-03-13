import React from "react";

export class UncontrolledLogin extends React.Component{
    state={
        username:"",
        password:"",
       
    }
   
    handleFormSubmit=(event)=>{
        const username=event.elements.username.value;
        const password=event.elements.password.value;
    }

    render(){
        return(
            <div>
            <div>
                <form onSubmit={this.handleFormSubmit}>
                        <input
                        autoFocus
                        name="username" />
                        <br />

                        <input
                        name="password"
                        type="password"/>
                        <br />

                        <button
                        name="login"
                        type="submit">Log In</button>
                        <br/>

                        <button
                        name="reset"
                        type="reset">Reset</button>
                </form>
            </div>
            </div>
        )
    }
}