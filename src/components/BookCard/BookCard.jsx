import "./BookCard.css";

export default function BookCard({title, year, author}) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Author: {author}</p>
    </div>
  );
}
