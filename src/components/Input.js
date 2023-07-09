import React, { useState } from "react";
import "./Input.css";

import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add item</button>
    </div>
  );
};

export default Input;

// TODO:
// save todo items to session storage, so it would not reset after updating
// don't do the second point do dede aurimas task instead
// clone project and adapt to typescript
