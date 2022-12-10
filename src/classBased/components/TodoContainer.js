/* eslint-disable */
import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

export default class TodoContainer extends Component {
  state = {
    todos: [],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  componentDidMount() {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.todos !== this.state.todos) {
      const temp = this.state.todos;
      localStorage.setItem('todos', JSON.stringify(temp));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={this.addTodo} />
          <TodoList
            data={this.state.todos}
            handleChangeProps={this.handleChange}
            handleDelete={this.handleDelete}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
