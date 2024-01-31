import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import ArticleSearchType from "../../interfaces/ArticleSearchType";
import { RootState } from "../../store";

export interface SearchNewsState {
  searchArticles: ArticleSearchType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
  searchTerm: string;
}

const initialState: SearchNewsState = {
  searchArticles: [],
  status: "idle",
  error: null,
  searchTerm: "elections",
};

export const fetchSearchArticles = createAsyncThunk(
  "searchNews/fetchSearchArticles",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const searchTerm = state.searchNews.searchTerm;

      const response = await axios.get<{
        response: { docs: ArticleSearchType[] };
      }>(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return response.data.response.docs;
    } catch (error) {
      throw new Error("Failed to fetch search articles");
    }
  }
);

const searchNewsSlice = createSlice({
  name: "searchNews",
  initialState,
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
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

export const { updateSearchTerm } = searchNewsSlice.actions;

export default searchNewsSlice.reducer;
