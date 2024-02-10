import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import TopNewsType from "../../../types/TopNewsType";
import newsInstance from "../../../utils/axiosInstances/newsInstance";

export interface NewsState {
  articles: TopNewsType[];
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
  async (selectedTerm: string) => {
    try {
      const response = await newsInstance.get<{ results: TopNewsType[] }>(
        `${selectedTerm}.json?api-key=${import.meta.env.VITE_API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error("Failed to fetch articles");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<TopNewsType[]>) => {
          state.status = "succeeded";
          state.articles = action.payload.filter((article) => !!article.title);
          state.error = null;
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
