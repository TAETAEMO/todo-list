export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
