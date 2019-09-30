import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, task: 'Organize Garage', completed: false },
        {id: 2, task: 'Write Code', completed: false },
        {id: 3, task: 'Write Article', completed: false }
      ],
      todoInput: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    const todoInsert = {
      id:  Date.now(),
      task: this.state.todoInput,
      completed: false
    }
    const newTodoList = this.state.todos.concat(todoInsert);
    this.setState({
    // this.updateList(this.state.todos);
    // this.form.reset();
    todos: newTodoList
    })
  }
  handleChange = event => {
      this.setState({ todoInput: event.target.value });
  }
  handleTaskRemoval(event) {
    
  }
  // completedTasks(value) {
  //   let prevState = this.state.todos;
  //   let index = this.state.todos.indexOf(id);
  //   let completed = prevState.splice(index, 1);
  // }

  render() {
    return (
      <div>
        Create A New Todo Task
        <TodoForm handleSubmit={this.handleSubmit}  handleChange={this.handleChange}  todoInput={this.state.todoInput}/>
        My Todo List:
        <TodoList todos={this.state.todos}  />
        {/* Completed Tasks: */}
        {/* <Todo */}
      </div>
    );
  }
}

export default App;
