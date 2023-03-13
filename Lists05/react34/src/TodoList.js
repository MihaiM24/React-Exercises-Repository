import React from "react";


export class TodoList extends React.Component{
    state={
        listItem:this.props.todos,
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
                listItem: [...this.state.listItem, {title: this.state.addItem} ] ,
                addItem:""
            }                    
    )}
    handleReset=()=>{
        this.setState({
            listItem:[],
            addItem: ""
        })
    }
render(){
       
        const items=this.state.listItem.map(
            (todo,index)=>
            <li key={index}>{todo.title}</li>
        );
    return(
        <div>
            <ul>
            {items}
            </ul>

            <input
            name="listItem"
            value={this.state.addItem}
            onChange={this.handleOnchange} />
            <button 
            name="addItem"
            onClick={this.handleOnclick}> Add an item </button>
            <br/>
            <button
            name="reset"
            type="reset"
            onClick={this.handleReset}>Clear the list</button>
        </div>
        )
    }
}