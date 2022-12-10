/* eslint-disable */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodo(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('please write them');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    </>
  );
};

export default InputTodo;
