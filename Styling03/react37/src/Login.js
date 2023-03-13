import React from "react";
export class Login extends React.Component{
    state={
        username:"",
        password:"",
        active:true
    }

    componentDidUpdate(){
        console.log(this.state) 
    }

    onLogin=(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const disabledValue= (event.target.value) ? false : true;
        this.setState({
           [name]:value,
           active:disabledValue
        })
    }

     handleLogin=()=>{
        const user=this.state;
        return user;
     }
    
    render(){
        const user=this.handleLogin()
        const switchColor={
            backgroundColor: user.password.length > 8 ? "green" : "red"
        }
        return(
            <div>
                <input
                name="username" 
                value={this.state.username}
                onChange={this.onLogin} />
                <br/>

                <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onLogin} />
                <br />
                
                <button
                style={switchColor}
                name="login"
                disabled={this.state.active}
                onClick={this.handleLogin}> Log In </button>
            </div>
        )
    }
}
