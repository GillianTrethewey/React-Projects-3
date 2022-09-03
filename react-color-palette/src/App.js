import React, { useState } from 'react';
import './App.css';
import CssOptions from "./CssOptions";
import Palette from "./Palette";

function App() {

  const [selectedColor, setSelectedColor] = useState("blue");
  const [palette, setPalette] = useState([]);

  function selectColor(color) {
    setSelectedColor(color);
  }

  function addToPalette(color) { // use spread operator?
    if (!palette.includes(color)) {
      const newPalette = palette.concat(color);
      setPalette(newPalette);
    }
  }

  function removeFromPalette(color) { // change palette to paletteColors?
    const newPalette = palette.filter(
        (paletteColor) => paletteColor !== color
    );
    setPalette(newPalette);
  }

  return (
      <div className="App">
        <Palette
            palette={palette}
            removeFromPalette={removeFromPalette}
        />

        <CssOptions
            palette={palette}
            addToPalette={addToPalette}
            selectColor={selectColor}
            selectedColor={selectedColor}
        />
      </div>
  );
}

export default App;



