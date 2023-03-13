import React from "react";
import { FilteredList } from "./FilteredList";

const data=[
  {name:"Mihai",id: 1,age:25},
  {name:"Ionut",id: 2,age:20},
  {name:"Ionel",id: 3,age:14},
  {name:"Ion",id: 4,age:27},
  {name:"Ionela",id: 5,age:35}]

export default function App() {
  return (
    <FilteredList data={data}/>
  );
}
