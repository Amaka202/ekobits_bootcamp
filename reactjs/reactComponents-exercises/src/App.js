import React from "react";
import logo from './logo.svg';
import './App.css';
import Todoitem from "./Todoitem";
import {todoList} from "./todoList";

function App() {
  const todoListItem = todoList.map((item, index) => <Todoitem key={index} chore={item}/>)


  return (
    <div className="todo-list">
      {todoListItem}
    </div>
  );
}

export default App;
