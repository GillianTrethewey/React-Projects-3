import React from "react";

export default function Note(props) {
    return (
        <li className="note">
            <input
                className="note__title"
                type="text"
                placeholder="Title"
                value={props.title}
                onChange={(e) => props.editNote(props.id, "title", e.target.value)}
            />
            <textarea
                className="note__description"
                placeholder="Description..."
                value={props.description}
                onChange={(e) => props.editNote(props.id, "description", e.target.value)}
            />
            <span className="note__delete" onClick={() => props.deleteNote(props.id)}>
        X
      </span>
        </li>
    );
}
