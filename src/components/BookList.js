import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../styles/book.module.css';

const BookList = () => {
  const books = useSelector((store) => store.book.books);
  return (
    <div>
      <ul className={styles.bookList}>
        {books.map((book) => (
          <React.Fragment key={book.id}>
            <li className={styles.li}>
              <div>
                <Book
                  book={book}
                />
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
