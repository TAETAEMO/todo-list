// components/TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoList;
