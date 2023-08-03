import { createSlice } from '@reduxjs/toolkit';

const name = 'categories';
const initialState = {
  categories: [],
  underConstruction: false,
  message: '',
};

const categoriesSlice = createSlice({
  name,
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (!state.categories.length) {
        state.underConstruction = true;
        state.message = 'Under construction';
      }
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
