import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import ToDoList from './components/ToDoList';
import data from './mock-todos.json';

function App() {

    const [todos, setTodos] = useState(data);

    const handleToggle = (id) => {
        let mapped = todos.map((todo) => {
            return todo.id === Number(id) ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo};
        });
        setTodos(mapped);
    }


  return (
    <div className="App">
      <Title />
        <ToDoList todos={todos} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
