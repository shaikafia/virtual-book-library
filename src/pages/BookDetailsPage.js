// src/pages/BookDetailsPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import { LibraryContext } from '../context/LibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { addBookToLibrary } = useContext(LibraryContext);
  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="book-details-container">
      <h1 className="book-title">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p className="book-rating">Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={() => addBookToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
