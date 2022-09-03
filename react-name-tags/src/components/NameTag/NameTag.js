import React from 'react';
import './NameTag.css';


function NameTag(props) {

  return (
      <div className="name-tag">
          <h3 className="title">HELLO</h3>
          <p className="subtitle">my name is</p>
          <h2 className="name">{props.name}</h2>
          <span className="name-tag__delete" onClick={() => props.deleteName(props.name)}>
        X
      </span>
      </div>
  );
};

export default NameTag;
