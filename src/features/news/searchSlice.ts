import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import ArticleSearchType from "../../interfaces/ArticleSearchType";

export interface SearchNewsState {
  searchArticles: ArticleSearchType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

const initialState: SearchNewsState = {
  searchArticles: [],
  status: "idle",
  error: null,
};

export const fetchSearchArticles = createAsyncThunk(
  "searchNews/fetchSearchArticles",
  async (searchTerm: string) => {
    try {
      const response = await axios.get<{
        response: { docs: ArticleSearchType[] };
      }>(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return response.data.response.docs;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError;
        if (serverError.response?.status === 404) {
          throw new Error("Failed to fetch search articles");
        }
      }
      throw new Error("not 404 error");
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
