// components/Todo.js
import React from "react";
import Button from "./Button";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #1e1e1e;
  color: white;
  border: 2px solid #7e7e7e;
  border-radius: 10px;
`;

const TodoText = styled.span`
  flex: 1;
`;

function Todo({ todo, handleDelete }) {
  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };

  return (
    <TodoContainer>
      <TodoText>{todo.text}</TodoText>
      <Button onClick={handleDeleteClick}>Delete</Button>
    </TodoContainer>
  );
}

export default Todo;
