/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul>
      {props.data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          handleDelete={props.handleDelete}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
}
