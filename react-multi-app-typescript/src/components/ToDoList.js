import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
    return (
        <div>
        {
            props.todos.map((todo) => {
                return(
                <ToDo todo={todo} handleToggle={props.handleToggle} />
                )
            })
        }
        </div>
    )
}

export default ToDoList;