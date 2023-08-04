import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'book';
const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gHcOxcoDFuFJJXHqqDm0/books';
export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const addNewBook = createAsyncThunk('book/addNewBook',
  async (bookObj, thunkAPI) => {
    try {
      const resp = await axios.post(url, {
        title: bookObj.title,
        author: bookObj.author,
        item_id: bookObj.item_id,
        category: bookObj.category,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return { message: resp, book: bookObj };
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const deleteBook = createAsyncThunk('book/deleteBook',
  async (id, thunkAPI) => {
    const newUrl = `${url}/${id}`;
    try {
      const resp = await axios.delete(newUrl, {
        item_id: id,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return { message: resp, id };
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const bookSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = Object.keys(state.books)
          .filter((key) => key !== action.payload.id)
          .reduce((acc, key) => ({ ...acc, [key]: state.books[key] }), {});
      })
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        const cle = action.payload.book.item_id;
        const temp = {};
        temp.title = action.payload.book.title;
        temp.author = action.payload.book.author;
        temp.category = action.payload.book.category;
        const arrTemp = [temp];
        state.books = {
          ...state.books,
          [cle]: arrTemp,
        };
      });
  },
});

export default bookSlice.reducer;
export const { removeBook, addBook } = bookSlice.actions;
