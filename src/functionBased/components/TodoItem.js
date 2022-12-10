/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const { completed, id, title } = props.todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.handleDelete(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        style={editMode}
        type="text"
        className={styles.textInput}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}
