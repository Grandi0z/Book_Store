import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import styles from '../styles/book.module.css';

const BookList = (props) => {
  const { books, delBook } = props;

  return (
    <div>
      <ul className={styles.bookList}>
        {books.map((book) => (
          <React.Fragment key={book.id}>
            <li className={styles.li}>
              <div>
                <Book
                  book={book}
                  delBook={delBook}
                />
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
