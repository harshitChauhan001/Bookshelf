import React from 'react';
import "../styles/BookCard.css"

const BookCard = ({ book, onAddToBookshelf }) => {
  // console.log(book)
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name && book.author_name.join(', ')}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
