// src/pages/MyLibraryPage.js
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const MyLibraryPage = () => {
  const { myLibrary, removeBookFromLibrary } = useContext(LibraryContext);

  return (
    <div className="book-library-container">
      <h1>My Library</h1>
      {myLibrary.length > 0 ? (
        myLibrary.map(book => (
          <div key={book.id}>
            <h3 className="book-title">{book.title}</h3>
            <button className="remove-button " onClick={() => removeBookFromLibrary(book.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p className="no-books-description">No books in your library</p>
      )}
    </div>
  );
};

export default MyLibraryPage;
