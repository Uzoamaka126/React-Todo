// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

 export default class TodoList  extends Component {
     randomIdNumber = () => {
         return Math.floor(Math.random() * 10000);
     };

    render () {
        return (
            <div>
                <ul>
                    {this.props.todos.map(item => {
                        return (
                            <Todo 
                                key={item.id}
                                task={item}
                                toggleCompletedTask={this.props.toggleCompletedTask}
                                deleteTask={this.props.deleteTask}
                            />
                            // <li key={item.id + this.randomIdNumber()} id={item.id}>
                            //     <p>{item.task}</p>
                            //     <span>{item.completed}</span>
                            //     <button onClick={() => this.props.handleTaskRemoval(item)}>Completed</button>
                            //     <button onClick={() => this.props.handleTaskRemoval(item)}>Completed</button>
                            // </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

