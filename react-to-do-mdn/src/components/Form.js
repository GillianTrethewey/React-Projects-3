import React, { useState } from "react";

function Form(props) {
  const [inputValue, setInputValue] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    props.addTask(inputValue);
    setInputValue("");
  }


  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
