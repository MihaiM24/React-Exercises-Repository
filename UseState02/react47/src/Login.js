import { useState } from "react";


export function Login (){
    const [data,setData]=useState({
                                    username:"",
                                    password:"",
                                    active:true
    })
   
    const onLogin=(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const disabledValue= (event.target.value) ? false : true;
        setData({
           [name]:value,
           active:disabledValue
        })
    }
    const handleLogin=()=>{
        const user=this.state;
    }
    

        return(
            <div>
                <input
                name="username" 
                value={data.username}
                onChange={onLogin}/>
                <br/>   

                <input
                name="password"
                type="password"
                value={data.password}
                onChange={onLogin}/>
                <br/>

                <button
                name="login"
                disabled={data.isDisabled}
                onClick={handleLogin}>Login</button>
            </div>
        )
    }