// src/data/books.js
import React from 'react';
import book1 from '../images/book1.jpg';

export const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      rating: 4.7,
      description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      publication_year: 1925,
      image: book1
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      rating: 4.8,
      description: "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the american south.",
      publication_year: 1960
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dysopian",
        rating: 4.6,
        description: "A Dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        publication_year: 1949
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.9,
        description: "A romantic novel that alo serves as a social commentary on the British landed gentry of the early 19th century.",
        publication_year: 1813

    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        rating: 4.3,
        description: "A story about a young boy's journey through the challenges of adolescence.",
        publication_year: 1951
    }
  ];


  const Book = ({ title, author, genre, image }) => {  
    return (  
        <div className="book-card">  
            <img src={image} alt={`${title} cover`} className="book-image" />  
            <h3>{title}</h3>  
            <p className="book-details">Author: {author}</p>  
            <p className="book-details">Genre: {genre}</p>  
        </div>  
    );  
};  

export default Book;  
  