import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./operations";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(...action.payload);
      }),
});

export const photosReducer = photosSlice.reducer;