import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormNewBook = (props) => {
  const { addBook } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeT = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeA = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    if (title.trim() && author.trim()) {
      e.preventDefault();
      addBook(title, author, 'Science');
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
        <input type="submit" />
      </Form>
      <span className="submit-warning">{message}</span>
    </div>
  );
};

FormNewBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default FormNewBook;
