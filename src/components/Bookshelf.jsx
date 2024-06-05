import React from 'react';
import BookCard from './BookCard';
import "../styles/Bookshelf.css"


const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="bookshelf">
      {bookshelf.map((book, index) => (
        <BookCard key={index} book={book} onRemoveFromBookshelf={onRemoveFromBookshelf} />
      ))}
    </div>
  );
};

export default Bookshelf;
