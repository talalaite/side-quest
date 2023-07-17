import { createSlice } from "@reduxjs/toolkit";

// type todoItemType = {
//   id: Number,
//   done: Boolean,
//   item: string,
// };

// type initialStateType = {
//   todoList: Array<todoItemType>,
// };

// const initialState: initialStateType = {
//   todoList: [],
// };

const todosItems = sessionStorage.getItem("todosItems");

const initialState = {
  todoList: todosItems ? JSON.parse(todosItems) : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      sessionStorage.setItem("todosItems", JSON.stringify(state.todoList));
    },
    setCheck: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (action.payload === item.id) {
          return { ...item, done: !item.done };
        }

        return item;
      });
      sessionStorage.setItem("todosItems", JSON.stringify(state.todoList));
    },
    deleteTodoItem: (state, action) => {
      const itemId = action.payload;
      state.todoList = state.todoList.filter((item) => item.id !== itemId);
      sessionStorage.setItem("todosItems", JSON.stringify(state.todoList));
    },
  },
});

export const { saveTodo, setCheck, deleteTodoItem } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
