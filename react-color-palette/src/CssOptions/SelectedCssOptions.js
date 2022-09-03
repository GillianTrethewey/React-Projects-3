import React from "react";
import Heart from "./Heart.js";

function SelectedCssOption(props) {
    let selectedClassName = "selected-color";
    if (props.palette.includes(props.selectedColor)) {
        selectedClassName += " already-in-palette";
    }

    return (
        <div
            className={selectedClassName}
            style={{ backgroundColor: props.selectedColor }}
            onClick={() => props.addToPalette(props.selectedColor)}
        >
            <Heart />
        </div>
    )
}

export default SelectedCssOption;
