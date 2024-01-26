// newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import TopNews from "../../interfaces/TopNewsType";

export interface NewsState {
  articles: TopNews[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

const initialState: NewsState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "news/fetchArticles",
  async () => {
    const response = await axios.get<{ results: TopNews[] }>(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response.data.results;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<TopNews[]>) => {
          state.status = "succeeded";
          state.articles = action.payload;
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
