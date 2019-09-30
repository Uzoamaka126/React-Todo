import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './Todo.css'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {id: 1, task: 'Organize Garage', completed: false },
        // {id: 2, task: 'Write Code', completed: false },
        // {id: 3, task: 'Write Article', completed: false }
      ],
      
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);

  }

  updateList = (task) => 
  {
    this.setState({
      todos: [...this.state.todos, task]
    })
  }
  deleteTask = (id) => {
    let currentTodo = this.state.todos;
    currentTodo.map(item => {
      if (item.id === id) {
        currentTodo.splice(currentTodo.indexOf(item), 1);
      }
    })
    this.setState({
      todos: currentTodo
    })
  }

  toggleCompletedTask = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        Create A New Todo Task
        <TodoForm updateList={this.updateList} handleSubmit={this.handleSubmit}  handleChange={this.handleChange} todoInput={this.state.todoInput} />
        My Todo List:
        <TodoList todos={this.state.todos} deleteTask={this.deleteTask} toggleCompletedTask={this.toggleCompletedTask} />
        {/* Completed Tasks: */}
        {/* <Todo */}
      </div>
    );
  }
}

export default App;
