import React,{Component} from "react";
import { Welcome } from "./Welcome";
import {Container} from "./Container"
export class App extends Component{
    render(){
        return (
            <Container>
            <Welcome />
            <p>Ex 38</p>
            </Container>
            
        )
    }
}