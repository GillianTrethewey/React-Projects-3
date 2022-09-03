import React from "react";

export default function Header(props) {
    return (
        <div>
            <h1 className="app-header__title">Super Sticky Notes</h1>

            <aside className="app-header__controls">
                <button className="add-new" onClick={props.addNote}>
                    + New Note
                </button>
                <input
                    type="text"
                    className="search"
                    value={props.searchText}
                    placeholder="Type here to search..."
                    onChange={(e) => props.setSearchText(e.target.value)}
                />
            </aside>
        </div>
    );
}
