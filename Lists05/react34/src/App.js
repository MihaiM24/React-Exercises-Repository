import React from "react";
import { TodoList } from "./TodoList";

const toDoList=[
  { title:"Item 1"},
  { title:"Item 2"},
  { title:"Item 3"}
];

export class App extends React.Component{
render(){
  return (
   <TodoList todos={toDoList} />
  )
}
}