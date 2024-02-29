import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Huli Nohie..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
