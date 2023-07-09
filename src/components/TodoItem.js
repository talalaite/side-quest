import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodoItem } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoItem(id));
  };

  return (
    <div className="todoItem">
      <Checkbox checked={done} color="primary" onChange={handleCheck} />
      <p className={done && "todoItem--done"}>{name}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TodoItem;
