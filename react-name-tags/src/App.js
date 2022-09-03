import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import NameTagArea from './components/NameTagArea/NameTagArea.js';
import NewNameInput from './components/NewNameInput/NewNameInput.js';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([
      'Gillian',
      'Lyle',
      'Bella',
      'Natalie'
  ]);

  function onChangeName(ev) {
    setName(ev.target.value); // name = whatever you typed in before you hit send
  }

   function addName() {
       // Set names to be the current names, and the new one
       setNames([
           name,
           ...names,
       ]);
       setName(''); // Clear out the message box
   }

    function deleteName(name) {
        const updatedNames = names.filter((item) => item !== name);
        setNames(updatedNames);
    }
  return (
      <div className="App">
        <Nav />
          <div className="channel-chat">
            <NameTagArea namesList={names} deleteName={deleteName} />
            <NewNameInput
              value={name}
              onChangeName={onChangeName}
              onClickAdd={addName}
          />
          </div>
      </div>
  );
}

export default App;

