import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ books, setFilteredBooks }) {
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    const filtered = books.filter(
      (book) =>
        Object.values(book).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(query.toLowerCase())
        ) ||
        (typeof book.year === "string" &&
          book.year.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredBooks(filtered);
  };

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
