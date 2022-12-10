/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

export default function TodoContainer() {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  // useEffect(() => {
  //   console.log('test run');
  //   // getting stored items
  //   const loadedTodos = JSON.parse(localStorage.getItem('todos'));

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, [setTodos]);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodo={addTodo} />
        <TodoList
          data={todos}
          handleChangeProps={handleChange}
          handleDelete={handleDelete}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}
