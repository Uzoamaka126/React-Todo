import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        value={this.props.todoInput}
                        onChange={this.props.handleChange}
                        placeholder="add new task here"
                        type="text"
                    />
                    <button >Add new task</button>
                </form>
            </div>
        )
    }

   
}