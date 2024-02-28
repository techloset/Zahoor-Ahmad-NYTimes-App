import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstances/axiosInstance";
import { ArticleSearchType } from "../../types/Types";

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
  async (searchedArticle: string) => {
    try {
      const response = await axiosInstance.get<{
        response: { docs: ArticleSearchType[] };
      }>(
        `search/v2/articlesearch.json?q=${searchedArticle}&api-key=${
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
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchSearchArticles.fulfilled,
        (state, action: PayloadAction<ArticleSearchType[]>) => {
          state.status = "succeeded";
          state.searchArticles = action.payload.filter(
            (article: ArticleSearchType) =>
              !!article._id || !!article.multimedia
          );
          state.error = null;
        }
      )
      .addCase(fetchSearchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.searchArticles = [];
        state.error = action.error.message;
      });
  },
});

export default searchNewsSlice.reducer;
