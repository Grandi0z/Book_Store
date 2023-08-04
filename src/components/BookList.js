import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';
import styles from '../styles/book.module.css';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  },
  [dispatch]);
  const books = useSelector((store) => store.book.books);
  return (
    <div>
      <ul className={styles.bookList}>
        {Object.keys(books).map((key) => (
          <React.Fragment key={key}>
            <li className={styles.li}>
              <div>
                <Book
                  book={books[key][0]}
                  itemId={key}
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
