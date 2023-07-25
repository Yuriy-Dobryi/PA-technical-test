import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { list: [] },
  reducers: {
    addToFavorite(state, action) {
      state.list.push({ ...action.payload });
    },
    removeFromFavorite(state, action) {
      return {
        list: state.list.filter((photoItem) => photoItem.id !== action.payload),
      };
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;