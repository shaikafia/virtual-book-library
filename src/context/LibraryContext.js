// src/context/LibraryContext.js
import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBookToLibrary = (book) => {
    if (!myLibrary.some(b => b.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  const removeBookFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, selectedBook, setSelectedBook, addBookToLibrary, removeBookFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
