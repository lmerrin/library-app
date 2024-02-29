import { useState } from "react";
import BookList from "./components/BookList/BookList";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import dummyBooks from "./books.js";

function App() {
  const [books, setBooks] = useState(dummyBooks);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <h1>Nā Puke ʻo Hawaiʻi</h1>
      <SearchBar handleSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </>
  );
}

export default App;
