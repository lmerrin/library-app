import "./BookList.css";
import BookCard from "../BookCard/BookCard";

export default function BookList({books}) {
  return (
    <ul className="book-list">
      {books &&
        books.map((book) => {
          return (
            <BookCard
              key={book.year}
              title={`${book.title}`}
              author={`${book.authorFirstName} ${book.authorLastName}`}
              year={book.year}
              description={book.description}
              genre={book.genre}
              image={book.image}
            />
          );
        })}
    </ul>
  );
}
