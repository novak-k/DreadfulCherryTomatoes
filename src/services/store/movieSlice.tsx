import { createSlice } from "@reduxjs/toolkit";
import { IMovieDataStoreMovies, IAction } from "./store.d";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    initial: {
      entries: [],
      total: 0,
    },
    data: {
      entries: [],
      total: 0,
    },
  },
  reducers: {
    load: (state: IMovieDataStoreMovies, action: IAction) => {
      state.data = action.payload;
      state.initial = state.data;
    },

    search: (state: IMovieDataStoreMovies, action: IAction) => {
      const filtered = state.initial.entries.filter((r) =>
        r.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.data = {
        total: filtered.length,
        entries: filtered,
      };
    },
  },
});

export const { load, search } = moviesSlice.actions;
export default moviesSlice.reducer;
