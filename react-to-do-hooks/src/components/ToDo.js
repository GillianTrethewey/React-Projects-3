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
           onClick={handleClick}
           style={{  textDecoration: props.todo.complete ? "line-through" : null }} >
           { props.todo.task }
       </div>
    )
}

export default ToDo;