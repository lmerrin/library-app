import { useState } from "react";
import "./App.css";
import dummyBooks from "./books.js";
import BookList from "./Components/BookList/BookList.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import BookForm from "./Components/BookForm/BookForm.jsx";
import books from "./books.js";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(dummyBooks);

  return (
    <>
      <h1>Nā Puke o Hawaiʻi</h1>
      
      <SearchBar books={dummyBooks} setFilteredBooks={setFilteredBooks} />
      
      <BookForm
        onFormSubmissionHandler={(newBook) => {
          const isYearInBooks = books.some((book) => {
            return (
              book.year === newBook.year
              );
          });
          if (isYearInBooks) return;
          const updatedBooks = [...books, newBook];
          setFilteredBooks(updatedBooks);
        }}
      />

      <BookList books={filteredBooks} />
    </>
  );
}

export default App;
