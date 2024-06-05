import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';

function BookshelfPage(){
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter((b) => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />
    </div>
  );
};

export default BookshelfPage;
