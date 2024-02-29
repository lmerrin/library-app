import { useState } from "react";
import BookList from "./components/BookList/BookList";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import dummyBooks from "./books.js";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(dummyBooks);

  return (
    <>
      <Header  header/>
      <h1>Nā Puke o Hawaiʻi</h1>
      <SearchBar books={dummyBooks} setFilteredBooks={setFilteredBooks} />
      <BookList books={filteredBooks} />
    </>
  );
}

export default App;
