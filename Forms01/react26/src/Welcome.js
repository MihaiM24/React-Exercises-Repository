import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
export class Welcome extends React.Component{
    render(){
        return <p>Welcome, {this.props.name}!</p>
    }
}