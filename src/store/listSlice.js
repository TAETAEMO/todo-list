import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = listSlice.actions;
export default listSlice.reducer;
