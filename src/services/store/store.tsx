import { configureStore } from '@reduxjs/toolkit'
import reducer from './movieSlice';

export const Store = configureStore({
  reducer: {
    movies: reducer,
  },
});
