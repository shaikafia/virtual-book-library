// src/pages/HomePage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { books } from '../data/books';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar onSearch={setSearchTerm} />
      <BookList books={filteredBooks} />
      <Link to="/mylibrary" className="go-to-library-link">Go to My Library</Link>
    </div>
  );
};

export default HomePage;
