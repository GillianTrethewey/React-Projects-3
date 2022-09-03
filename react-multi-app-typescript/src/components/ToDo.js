import React from 'react';

function ToDo(props) {

    const handleClick = (e) => {
        e.preventDefault()
        props.handleToggle(e.currentTarget.id)
    }

    return (
        <div
            id={props.todo.id}
            key={props.todo.id + props.todo.task}
            name={props.todo.name}
            value={props.todo.id}
            style={{ textDecoration: props.todo.isCompleted ? "line-through" : null }}
            onClick={handleClick} >

            { props.todo.name }

        </div>
    )
}

export default ToDo;