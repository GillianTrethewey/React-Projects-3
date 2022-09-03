import React from 'react';
import './NewNameInput.css';

import Button from '../Button/Button.js';

function NewNameInput(props) {
  return (
    <div className="NewMessage">
      <input value={props.value} onChange={props.onChangeName} placeholder="Type your name" />
      <Button onClick={props.onClickAdd}>Add Name</Button>
    </div>
  );
}

export default NewNameInput;
