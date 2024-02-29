import "./BookCard.css";

export default function BookCard({title, year, author, genre, description, image}) {
  return (
    <div className="book-card">
        <img src={image} alt={""} className="book-cover" />
      <div className="book-details">
        <h3 className="title">{title}</h3>
        <h2 className="author">Author: {author}</h2>
        <p className="year">Year: {year}</p>
        <p className="genre">Genre: {genre}</p>
        <p className="description">Description:{description}</p>
      </div>
    </div>
  );
}
