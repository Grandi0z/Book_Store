import React, { useState } from 'react';
import BookList from './BookList';
import FormNewBook from './FormNewBook';
import BookObj from '../utils/book';

const BooksLogic = () => {
  const [books, setBooks] = useState([
    new BookObj('The Hunger Games', 'Suzanne Collins', 'Action'),
    new BookObj('Dune', 'Frank Herbert', 'Science Fiction'),
    new BookObj(
      'Capital in the Twenty-First Century',
      'Suzanne Collins',
      'Economy',
    ),
  ]);

  const delBook = (id) => {
    setBooks(
      [
        ...books.filter((book) => book.id !== id),
      ],
    );
  };
  const addBook = (title, author, category) => {
    const newBook = new BookObj(
      title,
      author,
      category,
    );
    setBooks([...books, newBook]);
  };
  return (
    <>
      <BookList
        books={books}
        delBook={delBook}
      />
      <FormNewBook
        addBook={addBook}
      />
    </>
  );
};

export default BooksLogic;
