import "./BookForm.css";
import { useState } from "react";
import BookImage from "../Images/book.jpeg";
import MaskedInput from "react-text-mask";

export default function BookForm({ onFormSubmissionHandler }) {
  const [image, setImage] = useState(BookImage);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();

        const newBook = {
          title,
          image: image.trim() ? image : BookImage,
          firstName,
          lastName,
          year,
          genre,
          description,
        };
        onFormSubmissionHandler(newBook);
      }}
    >
      <h3>Add New Resource </h3>

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
        Author First Name:{" "}
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
            console.log(lastName);
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

      <label>
        Input Image:
        <input
          type="url"
          className="form-input"
          placeholder="Add URL"
          onChange={(event) => {
            const value = event.target.value;
            setImage(value);
          }}
        />
      </label>

      <button type="submit" className="form-button">
        Create Book
      </button>
    </form>
  );
}
