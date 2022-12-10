/* eslint-disable */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            handleDelete={this.props.handleDelete}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}
