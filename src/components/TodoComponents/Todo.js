import React, { Component } from 'react';


export default class Todo extends Component {
    // randomIdNumber = () => {
    //     return Math.floor(Math.random() * 10000);
    // };
    render() {
        const { id, task, isCompleted } = this.props.task;
        const todoItemClass = (isCompleted ? "completed" : "");
        return (
            <div>
                <input 
                    type="checkbox"
                    onChange={this.props.toggleCompletedTask.bind(this, id)}
                    checked={isCompleted ? "checked" : ""}
                />{" "}
                <p className={todoItemClass}>{task}</p>
                <button onClick={this.props.deleteTask.bind(this, id)}>
                    Delete Todo
                </button>
                {/* <button onClick={() => this.props.handleTaskRemoval(item)}>Completed</button> */}
            </div>
        )
    }
}