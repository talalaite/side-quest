import React from "react";

import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app__container">
        <h1 className="app__headline">MY TODO LIST</h1>
        <Input />
        <div className="app__todosContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
