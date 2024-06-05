import React, { useState, useEffect } from 'react';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const isBookInBookshelf = bookshelf.some(b => b.key === book.key);
    if (!isBookInBookshelf) {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    } else {
      alert('This book is already in your bookshelf.');
    }
  };

  return (
    <div>
      <BookSearch onAddToBookshelf={addToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
