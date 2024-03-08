import { useState } from "react";
import MaskedInput from "react-text-mask";
import "./App.css";
import dummyBooks from "./books.js";
import BookList from "./Components/BookList/BookList.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(dummyBooks);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");

  return (
    <>
      <h1>Nā Puke o Hawaiʻi</h1>
      <SearchBar books={dummyBooks} setFilteredBooks={setFilteredBooks} />

      <form>
        <label>
          Title:
          <input
            type="text"
            required
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setTitle(value);
            }}
          />
        </label>

        <label>
          Author First Name:
          <input
            type="text"
            required
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setFirstName(value);
            }}
          />
        </label>

        <label>
          Author Last Name:{" "}
          <input
            type="text"
            required
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setLastName(value);
            }}
          />
        </label>

        <label>
          Year:{" "}
          <MaskedInput
            mask={[/\d/, /\d/, /\d/, /\d/]}
            guide={true}
            required
            pattern="\d{4}"
            className="form-input"
            placeholder="ex. 1997"
            onChange={(event) => {
              const value = event.target.value;
              setYear(value);
            }}
          />
        </label>

        <label>
          Genre:{" "}
          <input
            type="text"
            required
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setGenre(value);
            }}
          />
        </label>

        <label>
          Description:{" "}
          <input
            type="text"
            required
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setDescription(value);
            }}
          />
        </label>
      </form>

      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log("Submit Clicked!");
        }}
      >
        Create Reference
      </button>

      <BookList books={filteredBooks} />
    </>
  );
}

export default App;
