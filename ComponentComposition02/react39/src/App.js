import React,{Component} from "react";
import { Welcome } from "./Welcome";
import {Container} from "./Container"
export class App extends Component{
    render(){
        return (
            <Container title="Just testing">
            <Welcome />
            <p>Ex 38</p>
            </Container>
            
        )
    }
}