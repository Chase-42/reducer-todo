import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED
} from "../reducers/reducer";

import styled from "styled-components";

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [formValue, setFormValue] = useState("");

  const addTodo = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: { item: formValue }
    });
    setFormValue("");
  };

  const onChange = e => {
    setFormValue(e.target.value);
  };

  const markComplete = id => event => {
    event.preventDefault();
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: { item_id: id }
    });
  };

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({
      type: CLEAR_COMPLETED
    });
  };

  return (
    <ToDoDiv className="search-text">
      <FormDiv>
        <input
          placeholder="Add new todo here..."
          type="text"
          name="input"
          value={formValue}
          onChange={onChange}
        />
        <StyledButton onClick={addTodo} type="submit">
          Enter
        </StyledButton>
      </FormDiv>
      {todos
        ? todos.map(todo => (
            <li
              className={`task${todo.completed ? "completed" : ""}`}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              key={todo.id}
              onClick={markComplete(todo.id)}
            >
              {todo.item}
            </li>
          ))
        : null}
      <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
    </ToDoDiv>
  );
}

const ToDoDiv = styled.div`
  background: #68cece;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 16px auto;
  li {
    text-align: left;
    font-size: 1.3em;
    padding: 5px 0px 10px 110px;
    cursor: pointer;
  }
  input {
    padding: 6px;
    background: none;
    border: none;
    color: white;
    border-bottom: 1px solid black;
    margin-top: 0;
    font-size: 1em;
    ::placeholder {
      color: black;
    }
`;

const ClearButton = styled.button`
font-size: .9em;
background: #a4a89f;
text-transform: uppercase;
padding: 12px;
border-radius: 5px;
border: none;
transition: all 0.4s ease 0s;
margin-top: 4%;
margin-bottom: 3%;
&:hover {
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;

`;

const FormDiv = styled.form`
  background: #f5b390;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 5em;
  max-width: 300px;
  padding: 15px;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 1em;
  background: #a4a89f;
  text-transform: uppercase;
  padding: 9px;
  margin-left: 5%;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
  &:hover {
    color: black;
    background: #af5e62;
    border-color: #f6b93b !important;
    transition: all 0.4s ease 0s;
  }
`;
