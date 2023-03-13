import React from "react";
export class Container extends React.Component{
    render(){
        return (
        <div className="test1">
            <h1>{this.props.title}</h1>
            <h4>{this.props.children}</h4>
        </div>
        )
    }
}