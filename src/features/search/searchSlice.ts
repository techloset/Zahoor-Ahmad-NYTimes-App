import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import ArticleSearchType from "../../interfaces/ArticleSearchType";

export interface SearchNewsState {
  searchArticles: ArticleSearchType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
  searchTerm?: string;
}

const initialState: SearchNewsState = {
  searchArticles: [],
  status: "idle",
  error: null,
  searchTerm: "",
};

export const fetchSearchArticles = createAsyncThunk(
  "searchNews/fetchSearchArticles",
  async () => {
    try {
      const response = await axios.get<{
        response: { results: { docs: ArticleSearchType[] } };
      }>(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
          initialState.searchTerm
        }&api-key=${import.meta.env.VITE_API_KEY}`
      );
      return response.data.response.results.docs;
    } catch (error) {
      throw new Error("Failed to fetch search articles");
    }
  }
);

const searchNewsSlice = createSlice({
  name: "searchNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchSearchArticles.fulfilled,
        (state, action: PayloadAction<ArticleSearchType[]>) => {
          state.status = "succeeded";
          state.searchArticles = action.payload;
        }
      )
      .addCase(fetchSearchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchNewsSlice.reducer;
