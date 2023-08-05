import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/book.module.css';
import { deleteBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book, itemId } = props;
  const chapters = ['Chapter 1', 'Chapter 17', 'Chapter 8', 'Introduction', 'Chapter 9'];
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];
  const perc = Math.floor(Math.random() * 101);
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.BooInfo}>
          <header>
            <span className={styles.categoryBook}>{book.category}</span>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <span className={styles.bookAuthor}>{book.author}</span>
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
                  onClick={() => dispatch(deleteBook(itemId))}
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
        <div className={styles.progressStatus}>
          <div className={styles.progressCircleContainer}>
            <span className={styles.progressCircle} />
          </div>
          <div className={styles.completedContainer}>
            <span className={styles.percentage}>{`${perc}%`}</span>
            <span>Completed</span>
          </div>
        </div>
        <span className={styles.bigLine} />
        <div className={styles.readerState}>
          <h4 className={styles.currentChapter}>Current chapter</h4>
          <p className={styles.chapiter}>{chapter}</p>
          <button type="button" className={styles.buttonUpdate}>Update progress</button>
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
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Book;
