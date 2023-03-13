import React from "react";


export class TodoList extends React.Component{
    state={
        listItem:
                    [
                    { title:"Make a cake"},
                    { title:"Go to Gym"},
                    { title:"Clean the Home"},
                    { title:"Take a shower"}
                    ],
        addItem:""
    }
    handleOnchange=(event)=>{
        const addValue=event.target.value;
        this.setState({
            addItem:addValue
       })
    }
    handleOnclick=()=>{
        this.setState(
            { 
                listItem: [...this.state.listItem, {title: this.state.addItem} ]  
            }                    
    )}
render(){
       
        const items=this.state.listItem.map(
            (todo,index)=>
            <li key={index}>{todo.title}</li>
        );
    return(
        <div>
            <ul>
            {this.props.render(this.state.listItem)}
            </ul>

            <input
            name="listItem"
            onChange={this.handleOnchange} />
            <button 
            name="addItem"
            onClick={this.handleOnclick}> Add an item </button>
        </div>
        )
    }
}