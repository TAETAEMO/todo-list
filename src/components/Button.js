// components/Button.js
import React from "react";
import styled from "styled-components";

const Button1 = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  padding: 8px;
  background-color: #1e1e1e;
  color: white;
  border: 2px solid #7e7e7e;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: large;

  &:hover {
    background-color: #7e7e7e;
  }
`;
function Button({ onClick, children }) {
  return <Button1 onClick={onClick}>{children}</Button1>;
}

export default Button;
