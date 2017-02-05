import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import TodoList from './components/todo-list';
import AddItem from './components/add-item';

class App extends Component {
  constructor() {
    super();

    const list = this.getStoredTodos();
    this.state = { list };
  }

  getStoredTodos() {
    if (localStorage.todos === undefined) {
      localStorage.todos = JSON.stringify([]);
    }

    return JSON.parse(localStorage.todos);
  }

  addItem(item) {
    const list = this.state.list;
    list.push(item);
    this.saveAndUpdateList(list);
  }

  deleteItem(idx) {
    const list = this.state.list;
    list.splice(idx, 1);
    this.saveAndUpdateList(list);
  }

  saveAndUpdateList(list) {
    localStorage.todos = JSON.stringify(list);
    this.setState({ list });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Todo App</h1>
        <TodoList
          onDelete={this.deleteItem.bind(this)}
          list={this.state.list}
        />
        <AddItem onAdd={this.addItem.bind(this)} />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
