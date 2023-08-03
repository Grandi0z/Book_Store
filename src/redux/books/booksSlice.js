import { createSlice } from '@reduxjs/toolkit';

const name = 'book';
const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { removeBook, addBook } = bookSlice.actions;
