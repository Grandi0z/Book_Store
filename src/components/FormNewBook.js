import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { addNewBook } from '../redux/books/booksSlice';
import BookObj from '../utils/book';
import styles from '../styles/form.module.css';

const FormNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeT = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeA = (e) => {
    setAuthor(e.target.value);
  };

  const categories = ['Fiction', 'Science', 'Economy', 'Action'];
  const category = categories[Math.floor(Math.random() * categories.length)];

  const handleSubmit = (e) => {
    if (title.trim() && author.trim()) {
      e.preventDefault();
      dispatch(addNewBook(new BookObj(title, author, category)));
      setMessage('');
      setTitle('');
      setAuthor('');
    } else {
      setMessage('please add a title and author');
    }
  };
  return (
    <div>
      <hr />
      <h2>Add new Book</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className={styles.inputTitle}
          name="title"
          value={title}
          onChange={handleChangeT}
          required
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={handleChangeA}
          required
        />
        <input type="submit" value="ADD BOOK" className={styles.submit} />
      </Form>
      <span className="submit-warning">{message}</span>
    </div>
  );
};

// FormNewBook.propTypes = {
//   addBook: PropTypes.func.isRequired,
// };

export default FormNewBook;
