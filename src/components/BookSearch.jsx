import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import BookCard from './BookCard';
import "../styles/BookSearch.css"


const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = useCallback(
    debounce(async (q) => {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setResults(response.data.docs);
    }, 300), []); 

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchBooks(e.target.value);
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for books"
      />
      <div className="results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
