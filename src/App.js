import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./store/listSlice";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import Button from "./components/Button";

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const AppWrapper = styled.div`
  background-color: #1e1e1e;
  max-width: 400px;
  margin: 0 auto;
  padding: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 20px;
  padding: 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: #1e1e1e;
  color: white;
  border: 2px solid #7e7e7e;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.list.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: inputValue }));
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <AppWrapper>
      <Container>
        <Input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </Container>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </AppWrapper>
  );
};

export default App;
