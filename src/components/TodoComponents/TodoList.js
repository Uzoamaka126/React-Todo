// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import TodoForm from './TodoForm';

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
                            <li key={item.id + this.randomIdNumber()} id={item.id}>
                                <p>{item.task}</p>
                                <span>{item.completed}</span>
                                <button onClick={() => this.props.completed(item)}>Completed</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

