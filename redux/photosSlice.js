import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./operations";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleStatus(state, action) {
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, isLiked: !item.isLiked }
            : item
        ),
      };
    },
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

export const { toggleStatus } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;