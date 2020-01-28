import React from "react";
import Todo from "./components/Todo";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <AppDiv>
      <h2>Welcome to your Todo App!</h2>
      <Todo />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background: #af5e62;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 58em;
  max-width: 50em;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`;
