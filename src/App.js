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
  box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  height: 58rem;
  margin: 2% 5% 5% 5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`;
