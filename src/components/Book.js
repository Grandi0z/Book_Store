import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import styles from '../styles/book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <div>
      <section className={styles.section}>
        <div>
          <header>
            <span>{book.category}</span>
            <h2 className={styles.h2}>{book.title}</h2>
            <span>{book.author}</span>
          </header>
          <div>
            <ul className={styles.actionUl}>
              <li className={styles.actionLi}>
                <button type="button" className={styles.actionButtons}>
                  Comments
                </button>
              </li>
              <span className={styles.lilLine} />
              <li className={styles.actionLi}>
                <button
                  type="button"
                  className={styles.actionButtons}
                  onClick={() => dispatch(removeBook(book.item_id))}
                >
                  Remove
                </button>
              </li>
              <span className={styles.lilLine} />
              <li className={styles.actionLi}>
                <button type="button" className={styles.actionButtons}>
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>completed</div>
        <span className={styles.bigLine} />
        <div>
          <h4>Current chapter</h4>
          <p>Chapter 1</p>
          <button type="button">Update progress</button>
        </div>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    author: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    item_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default Book;
