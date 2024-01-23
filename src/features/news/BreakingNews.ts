// newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



export interface BreakingNewsState {
  breakingNews: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

const initialState: BreakingNewsState = {
  breakingNews: "",
  status: "idle",
  error: null,
};

export const breakingNews = createAsyncThunk("news/breakingNews", async () => {
  const response = await axios.get<{ results: string }>(
    `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return response.data.results;
});

const breakingNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(breakingNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        breakingNews.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.breakingNews = action.payload;
        }
      )
      .addCase(breakingNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(breakingNews.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default breakingNewsSlice.reducer;
