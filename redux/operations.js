import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/photos?albumId=1");
      return response.data.map((item) => ({ ...item, isLiked: false }));
    } catch {
      return rejectWithValue("Something went wrong, try again");
    }
  }
);