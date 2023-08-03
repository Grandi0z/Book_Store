import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  dispatch(checkStatus());
  return (
    <div>
      <header>
        <h1>Categories</h1>
      </header>
      {categories.underConstruction && (
        <h3>
          {categories.message}
        </h3>
      )}
    </div>
  );
};

export default Categories;
