import React, { Component } from 'react';

export default class AddItem extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.todoInput.value);
    this.refs.todoForm.reset();
  }

  render() {
    return (
      <form
        ref='todoForm'
        onSubmit={this.handleSubmit.bind(this)}>
        <input className='form-control' required ref='todoInput' />
        <input className='btn btn-primary btn-lg' type='submit' value='Add' />
      </form>
    );
  }
}
