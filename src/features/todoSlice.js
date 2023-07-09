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

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (action.payload === item.id) {
          return { ...item, done: !item.done };
        }

        return item;
      });
    },
    deleteTodoItem: (state, action) => {
      const itemId = action.payload;
      state.todoList = state.todoList.filter((item) => item.id !== itemId);
    },
  },
});

export const { saveTodo, setCheck, deleteTodoItem } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
