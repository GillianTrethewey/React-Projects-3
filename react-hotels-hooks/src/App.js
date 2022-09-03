import React, { useState } from "react";
import Hotels from "./Hotels/HotelsList";
import Filters from "./Filters/FilterList";

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (clickedFilterKey) => {
    // is it already in the selected Filters array?
    const alreadySelected = selectedFilters.includes(clickedFilterKey);
    // If so, let's remove it
    if (alreadySelected) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== clickedFilterKey)
      );
    } else {
      // otherwise let's add it
      setSelectedFilters([...selectedFilters, clickedFilterKey]);
    }
  };

  return (
    <div className="App">
      <Filters toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
      <Hotels selectedFilters={selectedFilters} />
    </div>
  );
};

export default App;
