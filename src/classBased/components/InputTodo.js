/* eslint-disable */
import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write them');
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.onSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add todo"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
