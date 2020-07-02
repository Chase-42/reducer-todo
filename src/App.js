import React from 'react';
import Todo from './components/Todo';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <AppDiv>
      <h1>Welcome to your To Do App!</h1>
      <Todo />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background: #6a8b67;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 58rem;
  max-width: 50rem;
  margin: 2.25rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`;
