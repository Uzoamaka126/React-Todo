import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {todoInput: ""}

    handleChange = event => {
        this.setState({ todoInput: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // const todoInsert = {
        //   id:  Date.now(),
        //   task: this.state.todoInput,
        //   isCompleted: false
        // }
        this.props.updateList({
          id:  Date.now(),
          task: this.state.todoInput,
           isCompleted: false
        })
        // const newTodoList = this.state.todos.concat(todoInsert);
        // this.setState({
        // // this.updateList(this.state.todos);
        // // this.form.reset();
        // todos: newTodoList
        // })
      }
    render() {
        return (
            <div>
                <form >
                    <input 
                        value={this.state.todoInput}
                        onChange={this.handleChange}
                        placeholder="add new task here"
                        type="text"
                    />
                    <button type="submit" onClick={this.handleSubmit}>Add new task</button>
                </form>
            </div>
        )
    }

   
}