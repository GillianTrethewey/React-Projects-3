import React from 'react';
import './NameTagArea.css';

import NameTag from "../NameTag/NameTag.js";

function NameTagArea(props) {

  return (
    <div className="ChatArea">
      {
        props.namesList.map((name) => (
          <NameTag
            key={name+'wow'}
            name={name}
            deleteName={props.deleteName}
          />
        ))
      }
    </div>
  );
}

export default NameTagArea;
